import type { Transaction } from "../types/Transaction";
import TransactionItem from "./TransactionItem";

type Props = {
  items: Transaction[];
  onDelete: (id: string) => void;
};

export default function TransactionList({ items, onDelete }: Props) {
  if (items.length === 0) {
    return <p className="text-white text-center mt-6">Aucune transaction pour le moment.</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-white">Liste des transactions</h2>

      <table className="w-full border-collapse mt-5">
        <thead>
          <tr>
            <th className="border border-gray-500 px-3 py-3 text-center bg-gray-600 ">Description</th>
            <th className="border border-gray-500 px-3 py-3 text-center bg-gray-600">Montant</th>
            <th className="border border-gray-500 px-3 py-3 text-center bg-gray-600">Type</th>
            <th className="border border-gray-500 px-3 py-3 text-center bg-gray-600">Action</th>
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