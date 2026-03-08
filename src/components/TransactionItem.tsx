import type { Transaction } from "../types/Transaction";
import { formatAmount } from "../utils/formatAmount";

type Props = {
  item: Transaction;
  onDelete: (id: string) => void;
};

export default function TransactionItem({ item, onDelete }: Props) {
  return (
    <tr>
      <td className="px-3 py-3">{item.label}</td>
      <td>{formatAmount(item.amount)}</td>
      <td>{item.type === "income" ? "Revenu" : "Dépense"}</td>
      <td>
        <button onClick={() => onDelete(item.id)}>Supprimer</button>
      </td>
    </tr>
  );
}