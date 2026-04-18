import { useState } from "react";

interface GoalFormProps {
  onSetGoal: (goal: number) => void;
  currentGoal: number | null;
}

const GoalForm = ({ onSetGoal, currentGoal }: GoalFormProps) => {
  const [goal, setGoal] = useState(currentGoal || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!goal) return;

    onSetGoal(Number(goal));
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h3 className="font-semibold">Set Weight Goal</h3>

      <input
        type="number"
        placeholder="Enter goal weight (kg)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Save Goal
      </button>
    </form>
  );
};

export default GoalForm;
