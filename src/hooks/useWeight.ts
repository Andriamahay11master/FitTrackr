import { useEffect, useState } from "react";

export interface WeightEntry {
  date: string;
  value: number;
}

const STORAGE_KEY = "fittrack_weights";

export const useWeight = () => {
  const [weights, setWeights] = useState<WeightEntry[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setWeights(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(weights));
  }, [weights]);

  // Add new weight
  const addWeight = (value: number) => {
    const newEntry: WeightEntry = {
      value,
      date: new Date().toISOString(),
    };

    setWeights((prev) => [...prev, newEntry]);
  };

  return {
    weights,
    addWeight,
  };
};
