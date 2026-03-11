import type { Transaction } from "../types/Transaction";
import type { FilterType } from "./useFilter";

type Props = {
  transactions: Transaction[];
  selectedFilter: FilterType;
};

export function useFilteredTransactions({
  transactions,
  selectedFilter,
}: Props) {
  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedFilter === "income") {
      return transaction.type === "income";
    }

    if (selectedFilter === "expense") {
      return transaction.type === "expense";
    }

    return true;
  });

  return {
    filteredTransactions,
  };
}