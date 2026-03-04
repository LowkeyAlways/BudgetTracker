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
  
    console.log("SUBMIT OK:", { cleanLabel, cleanAmount, type });
  
    onAdd(cleanLabel, cleanAmount, type);
  
    setLabel("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une transaction</h2>

      <input
        placeholder="Description"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Dépense</option>
        <option value="income">Revenu</option>
      </select>

      <button type="submit">Ajouter</button>
    </form>
  );
}