import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface WeightEntry {
  date: string;
  value: number;
}
const WeightChart = ({ data }: { data: WeightEntry[] }) => {
  const formattedData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString(),
    weight: item.value,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={formattedData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="weight" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeightChart;
