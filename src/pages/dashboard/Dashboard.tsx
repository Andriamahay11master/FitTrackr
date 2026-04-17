import WeightCard from "../../components/ui/WeightCard";
import ProgressCard from "../../components/ui/ProgressCard";
import WeightChart from "../../components/charts/WeightChart";
import { useWeight } from "../../hooks/useWeight";
import AddWeightForm from "../../components/ui/AddWeightForm";

const Dashboard = () => {
  const { weights, addWeight } = useWeight();

  const latestWeight =
    weights.length > 0 ? weights[weights.length - 1].value : "--";
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Track your progress</p>
      </div>

      {/* Add Weight */}
      <AddWeightForm onAdd={addWeight} />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <WeightCard title="Current Weight" value={latestWeight + " kg"} />
        <ProgressCard />
        <WeightCard title="Goal Weight" value="85 kg" />
      </div>

      {/* Chart */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Weight Progress</h2>
        <WeightChart />
      </div>
    </div>
  );
};

export default Dashboard;
