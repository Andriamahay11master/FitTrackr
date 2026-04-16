import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mon", weight: 102 },
  { date: "Tue", weight: 101.5 },
  { date: "Wed", weight: 101 },
  { date: "Thu", weight: 100.5 },
  { date: "Fri", weight: 100 },
];

const WeightChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="weight" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeightChart;
