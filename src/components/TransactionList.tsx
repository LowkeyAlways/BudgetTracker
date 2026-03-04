import type { Transaction } from "../types/Transaction";

type Props = {
  items: Transaction[];
};

export default function TransactionList({ items }: Props) {
  if (items.length === 0) return <p>Aucune transaction pour le moment.</p>;

  return (
    <ul>
      {items.map((t) => (
        <li key={t.id}>
          {t.label} — {t.amount}€ ({t.type})
        </li>
      ))}
    </ul>
  );
}