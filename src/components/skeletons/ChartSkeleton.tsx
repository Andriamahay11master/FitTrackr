import Skeleton from "../ui/Skeleton";

const ChartSkeleton = () => {
  return (
    <div className="card space-y-4">
      <Skeleton className="w-40 h-5" />

      <div className="flex items-end gap-2 h-64">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="flex-1 h-full" />
        ))}
      </div>
    </div>
  );
};

export default ChartSkeleton;
