import { useState } from "react";
import { saveWeight } from "../../services/weightService";

const AddWeightForm = ({ onAdd }: { onAdd: (weight: number) => void }) => {
  const [weight, setWeight] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!weight) return;

    //save to firebase
    saveWeight(Number(weight));
    onAdd(Number(weight));
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h3 className="font-semibold">Add Weight</h3>

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <button className="bg-black text-white px-4 py-2 rounded-lg">Add</button>
    </form>
  );
};

export default AddWeightForm;
