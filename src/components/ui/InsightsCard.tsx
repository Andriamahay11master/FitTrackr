const InsightsCard = ({ insights }: { insights: string[] }) => {
  return (
    <div className="card space-y-3">
      <h2 className="font-semibold">Insights</h2>

      {insights.length === 0 ? (
        <p className="text-gray-500 text-sm">Add more data to get insights</p>
      ) : (
        insights.map((insight, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm">
            {insight}
          </div>
        ))
      )}
    </div>
  );
};

export default InsightsCard;
