import type { Transaction } from "../types/Transaction";
import { formatAmount } from "../utils/formatAmount";

type Props = {
  items: Transaction[];
};

export default function Balance({ items }: Props) {
  const income = items.reduce((total, transaction) => {
    return transaction.type === "income" ? total + transaction.amount : total;
  }, 0);

  const expense = items.reduce((total, transaction) => {
    return transaction.type === "expense" ? total + transaction.amount : total;
  }, 0);

  const balance = income - expense;

  return (
    <section className="mt-6 mb-3 rounded-xl bg-gray-600 p-5 shadow">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Résumé</h2>

      <div className="space-y-2">
        <p className="text-white">
          Total revenus : <span className="font-bold text-green-600">{formatAmount(income)}</span>
        </p>

        <p className="text-white">
          Total dépenses : <span className="font-bold text-red-600">{formatAmount(expense)}</span>
        </p>

        <hr className="my-3 border-gray-200" />

        <p className="text-white">
          Solde final : <span className="font-bold">{formatAmount(balance)}</span>
        </p>
      </div>
    </section>
  );
}