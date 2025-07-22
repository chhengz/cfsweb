import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const SensorChart = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <LineChart
        width={window.innerWidth < 600 ? 300 : window.innerWidth < 900 ? 500 : 700}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp22" stroke="#8884d8" name="DHT22 Temp (°C)" />
        <Line type="monotone" dataKey="hum22" stroke="#ff7300" name="DHT22 Humidity (%)" />
        <Line type="monotone" dataKey="gas" stroke="#00C49F" name="Gas (PPM)" />
      </LineChart>
    </div>
  );
};

export default SensorChart;