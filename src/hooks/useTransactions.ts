import { useState } from "react";
import type { Transaction } from "../types/Transaction";

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function addTransaction(label: string, amount: number, type: string) {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      label,
      amount,
      type: type as "income" | "expense",
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    console.log("ADD:", newTransaction);
  }

  return {
    transactions,
    addTransaction,
  };
}