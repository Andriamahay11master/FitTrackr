import { useEffect, useState } from "react";

export interface WeightEntry {
  date: string;
  value: number;
}

const WEIGHT_KEY = "fittrack_weights";
const GOAL_KEY = "fittrack_goal";

export const useWeight = () => {
  const [weights, setWeights] = useState<WeightEntry[]>([]);
  const [goal, setGoal] = useState<number | null>(null);

  // Load data
  useEffect(() => {
    const storedWeights = localStorage.getItem(WEIGHT_KEY);
    const storedGoal = localStorage.getItem(GOAL_KEY);

    if (storedWeights) setWeights(JSON.parse(storedWeights));
    if (storedGoal) setGoal(Number(storedGoal));
  }, []);

  // Save weights
  useEffect(() => {
    localStorage.setItem(WEIGHT_KEY, JSON.stringify(weights));
  }, [weights]);

  // Save goal
  useEffect(() => {
    if (goal !== null) {
      localStorage.setItem(GOAL_KEY, goal.toString());
    }
  }, [goal]);

  const addWeight = (value: number) => {
    const newEntry: WeightEntry = {
      value,
      date: new Date().toISOString(),
    };
    setWeights((prev) => [...prev, newEntry]);
  };

  const updateGoal = (value: number) => {
    setGoal(value);
  };

  return {
    weights,
    addWeight,
    goal,
    updateGoal,
  };
};
