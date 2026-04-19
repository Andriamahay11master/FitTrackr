import WeightCard from "../../components/ui/WeightCard";
import ProgressCard from "../../components/ui/ProgressCard";
import WeightChart from "../../components/charts/WeightChart";
import { useWeight } from "../../hooks/useWeight";
import AddWeightForm from "../../components/ui/AddWeightForm";
import GoalForm from "../../components/ui/GoalForm";
import { calculateProgress, calculateRemaining } from "../../utils/weightUtils";

const Dashboard = () => {
  const { weights, addWeight, updateGoal, goal } = useWeight();

  const latestWeight =
    weights.length > 0 ? weights[weights.length - 1].value : null;

  const startWeight = weights.length > 0 ? weights[0].value : null;

  const progress =
    latestWeight && goal && startWeight
      ? Math.round(calculateProgress(startWeight, latestWeight, goal))
      : 0;

  const remaining =
    latestWeight && goal ? calculateRemaining(latestWeight, goal) : 0;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>
        <p className="text-gray-500">You’re making progress — keep going.</p>
      </div>

      {/* Add Weight */}
      <AddWeightForm onAdd={addWeight} />
      <GoalForm onSetGoal={updateGoal} currentGoal={goal} />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <WeightCard title="Start weight" value={startWeight + " kg"} />
        <WeightCard title="Current Weight" value={latestWeight + " kg"} />
        <WeightCard title="Goal Weight" value={goal + " kg"} />
        <WeightCard title="Remaining" value={remaining.toFixed(1) + " kg"} />
      </div>

      <div className="grid grid-cols-1">
        <ProgressCard progress={progress} />
      </div>

      {/* Chart */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Weight Progress</h2>
        <WeightChart data={weights} />
      </div>
    </div>
  );
};

export default Dashboard;
