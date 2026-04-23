import { useEffect, useState } from "react";
import {
  saveWeight,
  getWeights,
  saveGoal,
  getGoal,
} from "../services/weightService";

export interface WeightEntry {
  date: string;
  value: number;
}

export const useWeight = () => {
  const [weights, setWeights] = useState<WeightEntry[]>([]);
  const [goal, setGoal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Load data from Firestore on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [weightsData, goalData] = await Promise.all([
          getWeights(),
          getGoal(),
        ]);
        setWeights(weightsData as WeightEntry[]);
        setGoal(goalData);
      } catch (error) {
        console.error("Error loading weight data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const addWeight = async (value: number) => {
    try {
      await saveWeight(value);
      // Refetch weights after adding
      const updatedWeights = await getWeights();
      setWeights(updatedWeights as WeightEntry[]);
    } catch (error) {
      console.error("Error adding weight:", error);
    }
  };

  const updateGoal = async (value: number) => {
    try {
      await saveGoal(value);
      setGoal(value);
    } catch (error) {
      console.error("Error updating goal:", error);
    }
  };

  return {
    weights,
    addWeight,
    goal,
    updateGoal,
    loading,
  };
};
