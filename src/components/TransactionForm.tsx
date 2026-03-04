import { useState } from "react";

type Props = {
  onAdd: (label: string, amount: number, type: string) => void;
};

export default function TransactionForm({ onAdd }: Props) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cleanLabel = label.trim();
    const cleanAmount = Number(amount);

    if (!cleanLabel || Number.isNaN(cleanAmount) || cleanAmount <= 0) {
      alert("Mets un libellé + un montant > 0");
      return;
    }

    onAdd(cleanLabel, cleanAmount, type);

    setLabel("");
    setAmount("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-600 shadow-lg rounded-xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-white">
        Ajouter une transaction
      </h2>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Description</label>
        <input
          className="border text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Courses, salaire..."
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Montant</label>
        <input
          type="number"
          className="border text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="20"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Type</label>
        <select
          className="border text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Dépense</option>
          <option value="income">Revenu</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Ajouter
      </button>
    </form>
  );
}