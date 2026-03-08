import type { Transaction } from "../types/Transaction";
import TransactionItem from "./TransactionItem";

type Props = {
  items: Transaction[];
  onDelete: (id: string) => void;
};

export default function TransactionList({ items, onDelete }: Props) {
  if (items.length === 0) {
    return <p>Aucune transaction pour le moment.</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-white">Liste des transactions</h2>

      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-3 text-center bg-gray-100 ">Description</th>
            <th className="border border-gray-300 px-3 py-3 text-center bg-gray-100">Montant</th>
            <th className="border border-gray-300 px-3 py-3 text-center bg-gray-100">Type</th>
            <th className="border border-gray-300 px-3 py-3 text-center bg-gray-100">Action</th>
          </tr>
        </thead>

        <tbody className="text-white text-center">
          {items.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              item={transaction}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}