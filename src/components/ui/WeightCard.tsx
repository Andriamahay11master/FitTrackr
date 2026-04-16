const WeightCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default WeightCard;
