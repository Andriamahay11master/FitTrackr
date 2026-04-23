import WeightCard from "../../components/ui/WeightCard";
import ProgressCard from "../../components/ui/ProgressCard";
import WeightChart from "../../components/charts/WeightChart";
import { useWeight } from "../../hooks/useWeight";
import AddWeightForm from "../../components/ui/AddWeightForm";
import GoalForm from "../../components/ui/GoalForm";
import { calculateProgress, calculateRemaining } from "../../utils/weightUtils";
import { useInsights } from "../../hooks/useInsights";
import InsightsCard from "../../components/ui/InsightsCard";
import { getWeights } from "../../services/weightService";
import { useEffect, useState } from "react";

interface WeightEntry {
  date: string;
  value: number;
}
const Dashboard = () => {
  const { weights, addWeight, updateGoal, goal } = useWeight();

  const [dataWeights, setDataWeights] = useState<WeightEntry[]>([]);
  // Get weight from firebase and calculate insights
  useEffect(() => {
    const fetchWeights = async () => {
      const weights = await getWeights();
      setDataWeights(weights as WeightEntry[]);
      // Update weights state (assuming you have a way to update the weights state)
    };
    fetchWeights();
  }, [dataWeights]);

  const latestWeight =
    dataWeights.length > 0 ? dataWeights[dataWeights.length - 1].value : null;

  const startWeight = dataWeights.length > 0 ? dataWeights[0].value : null;

  const progress =
    latestWeight && goal && startWeight
      ? Math.round(calculateProgress(startWeight, latestWeight, goal))
      : 0;

  const remaining =
    latestWeight && goal ? calculateRemaining(latestWeight, goal) : 0;

  const insights = useInsights(dataWeights, goal ?? 0);
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
        <p className="text-sm text-gray-600 mt-2">
          {remaining > 0
            ? `You have ${remaining} kg left to reach your goal`
            : "Goal reached 🎉"}
        </p>
      </div>

      {/* Chart */}
      <div className="card space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Weight Progress</h2>
          <span className="text-sm text-gray-500">Last entries</span>
        </div>
        <WeightChart data={dataWeights} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InsightsCard insights={insights} />
      </div>
    </div>
  );
};

export default Dashboard;
