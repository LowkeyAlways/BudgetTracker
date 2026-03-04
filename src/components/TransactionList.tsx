import type { Transaction } from "../types/Transaction";
import { formatAmount } from "../utils/formatAmount";

type Props = {
  items: Transaction[];
};

export default function TransactionList({ items }: Props) {
  if (items.length === 0) {
    return <p>Aucune transaction pour le moment.</p>;
  }

  return (
    <div>
      <h2>Transactions</h2>

      <ul>
        {items.map((t) => (
          <li key={t.id}>
          <strong>{t.label}</strong> — {formatAmount(t.amount)}
          <span>
            ({t.type === "income" ? "revenu" : "dépense"})
          </span>
        </li>
        ))}
      </ul>
    </div>
  );
}