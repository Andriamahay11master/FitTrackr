const ProgressCard = () => {
  const progress = 60; // example %

  return (
    <div className="card">
      <h3 className="text-gray-500">Progress</h3>

      <p className="text-2xl font-bold mt-2">{progress}%</p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
