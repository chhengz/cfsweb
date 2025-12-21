import { useState, useEffect } from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import SensorCard from "../components/customs/dashboard/SensorCard";
import SensorChart from "../components/customs/dashboard/SensorChart";
import StatusAlert from "../components/customs/dashboard/StatusAlert";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function Dahboard() {
  const [sensorData, setSensorData] = useState([]);
  const [alertStatus, setAlertStatus] = useState(null);

  useEffect(() => {
    const sensorRef = ref(database, 'sensor_data');

    const unsubscribe = onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          timestamp: new Date(parseInt(data[key].timestamp)).toLocaleTimeString(),
          temp22: data[key].temp22,
          hum22: data[key].hum22,
          gas: data[key].gas,
        }));
        setSensorData(formattedData.slice(-10));

        const latest = formattedData[formattedData.length - 1];
        if (latest.gas > 100 || latest.temp22 > 30) {
          setAlertStatus({ severity: 'error', message: 'Critical: High gas or temperature detected!' });
        } else if (latest.gas > 50 || latest.temp22 > 25) {
          setAlertStatus({ severity: 'warning', message: 'Warning: Elevated gas or temperature!' });
        } else {
          setAlertStatus({ severity: 'success', message: 'All parameters normal.' });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const latestData = sensorData[sensorData.length - 1] || {};

  return (
    <div className="w-full py-4 md:py-8  min-h-screen">
      <div className="w-full h-screen fixed top-0 left-0 -z-50 bg-linear-to-b from-blue-50 via-transparent to-transparent">
            <Hero />
          </div>
      
      <div className="mx-auto px-4 md:px-0 sm:w-1/2 md:w-2/3">


        <div className="w-full py-4">
        <Link to={'/'} className="cursor-pointer isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-2xs transition-all duration-150 hover:bg-blue-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <i><Home/></i>
                  Back Home
                
                </Link>
      </div>

      <h1 className="text-2xl text-center font-bold tracking-tight text-blue-600 md:text-4xl md:py-6">
          Environmental Monitoring Dashboard
        </h1>



      </div>
      {/* <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8"> */}
        {/* <Typography variant="h4" className="text-center text-blue-800">
          Environmental Monitoring Dashboard
        </Typography> */}
        
        {/* <ThemeToggle /> */}
      {/* </div> */}

      

    <div className="px-4 md:px-0 w-full sm:w-1/2 md:w-2/3 mx-auto">

      <StatusAlert status={alertStatus} />
    </div>
<div className="mx-auto px-4 md:px-0 sm:w-1/2 md:w-2/3">

      <Grid container spacing={2} className="mt-4 md:mt-6">
        <Grid item xs={12} sm={6} md={4}>
          <SensorCard title="DHT22 Temp" value={latestData.temp22} unit="°C" type="temp" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SensorCard title="DHT22 Humidity" value={latestData.hum22} unit="%" type="hum" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SensorCard title="Gas (MQ135)" value={latestData.gas} unit="PPM" type="gas" />
        </Grid>

        
      </Grid>
      <Grid item xs={12}>
          <Card className="shadow-lg mt-4 md:mt-6">
            <CardContent>
              <Typography variant="h6" className="text-blue-600">
                Sensor Trends
              </Typography>
              <SensorChart data={sensorData} />
            </CardContent>
          </Card>
        </Grid>
</div>

    </div>
  );
}

export default Dahboard;