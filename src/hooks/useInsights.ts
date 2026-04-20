import {
  getWeeklyChange,
  getTrend,
  estimateWeeksToGoal,
} from "../utils/insightsUtils";

interface WeightEntry {
  date: string;
  value: number;
}
export const useInsights = (weights: WeightEntry[], goal: number) => {
  if (!weights.length || !goal) return [];

  const current = weights[weights.length - 1].value;
  const weeklyChange = getWeeklyChange(weights);
  const trend = getTrend(weeklyChange);
  const weeks = estimateWeeksToGoal(current, goal, weeklyChange);

  const insights: string[] = [];

  // Trend insight
  if (trend === "down") {
    insights.push(
      `You lost ${Math.abs(weeklyChange).toFixed(1)} kg recently 👍`,
    );
  } else if (trend === "up") {
    insights.push(`Your weight increased by ${weeklyChange.toFixed(1)} kg ⚠️`);
  } else {
    insights.push("Your weight is stable");
  }

  // Goal prediction
  if (weeks) {
    insights.push(`Estimated time to goal: ${weeks} week(s)`);
  }

  // On track check
  if (trend === "down" && current > goal) {
    insights.push("You are on track to reach your goal 🎯");
  }

  if (trend === "up" && current > goal) {
    insights.push("You may need to adjust your diet");
  }

  return insights;
};
