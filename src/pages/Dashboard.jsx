import { useState, useEffect } from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import SensorCard from "../components/customs/dashboard/SensorCard";
import SensorChart from "../components/customs/dashboard/SensorChart";
import StatusAlert from "../components/customs/dashboard/StatusAlert";

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
    <Container className="py-4 md:py-8 bg-gray-100 min-h-screen">
      {/* <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8"> */}
        <Typography variant="h4" className="text-center text-blue-800">
          Environmental Monitoring Dashboard
        </Typography>
        {/* <ThemeToggle /> */}
      {/* </div> */}

      <StatusAlert status={alertStatus} />

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
      </Grid>
    </Container>
  );
}

export default Dahboard;