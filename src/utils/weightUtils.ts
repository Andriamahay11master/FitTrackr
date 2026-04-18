export const calculateProgress = (
  start: number,
  current: number,
  goal: number,
) => {
  if (!start || !current || !goal) return 0;

  const isLosing = start > goal;

  let progress;

  if (isLosing) {
    progress = (start - current) / (start - goal);
  } else {
    progress = (current - start) / (goal - start);
  }

  return Math.min(Math.max(progress * 100, 0), 100); // clamp 0-100
};

export const calculateRemaining = (current: number, goal: number) => {
  return Math.abs(current - goal);
};
