import { Card, CardContent, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { Thermometer, Droplet, Activity } from "lucide-react";

const iconMap = {
  temp: <Thermometer className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />,
  hum: <Droplet className="text-orange-500 w-6 h-6 md:w-8 md:h-8" />,
  gas: <Activity className="text-emerald-500 w-6 h-6 md:w-8 md:h-8" />,
};

const SensorCard = ({ title, value = 0, unit, type = "temp" }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: value || 0,
    config: { mass: 1, tension: 120, friction: 18 },
  });

  return (
    <Card className="rounded-xl shadow-md p-2 bg-white">
      <CardContent className="flex items-center space-x-4">
        <div>{iconMap[type]}</div>
        <div>
          <Typography variant="subtitle2" className="text-gray-500">
            {title}
          </Typography>
          <Typography variant="h5" className="font-semibold text-gray-800">
            <animated.span>
              {number.to((n) => `${n.toFixed(1)} ${unit}`)}
            </animated.span>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorCard;