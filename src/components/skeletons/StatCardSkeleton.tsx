import Skeleton from "../ui/Skeleton";

const StatCardSkeleton = () => {
  return (
    <div className="card space-y-3">
      <Skeleton className="w-20 h-4" />
      <Skeleton className="w-24 h-8" />
    </div>
  );
};

export default StatCardSkeleton;
