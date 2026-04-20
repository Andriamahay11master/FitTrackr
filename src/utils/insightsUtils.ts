interface WeightEntry {
  date: string;
  value: number;
}
export const getWeeklyChange = (weights: WeightEntry[]) => {
  if (weights.length < 2) return 0;

  const last = weights[weights.length - 1];
  const prev = weights[weights.length - 2];

  return last.value - prev.value;
};

export const getTrend = (change: number) => {
  if (change < 0) return "down";
  if (change > 0) return "up";
  return "stable";
};

export const estimateWeeksToGoal = (
  current: number,
  goal: number,
  weeklyChange: number,
) => {
  if (weeklyChange === 0) return null;

  const remaining = Math.abs(current - goal);
  const rate = Math.abs(weeklyChange);

  return Math.ceil(remaining / rate);
};
