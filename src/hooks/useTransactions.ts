import { useState, useEffect } from "react";
import type { Transaction } from "../types/Transaction";

const STORAGE_KEY = "transactions";

export function useTransactions() {

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return [];

    try {
      return JSON.parse(stored);
    } catch {
      console.error("Erreur parsing localStorage");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(label: string, amount: number, type: string) {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      label,
      amount,
      type: type as "income" | "expense",
    };

    setTransactions((prev) => [newTransaction, ...prev]);
  }

  function deleteTransaction(id: string) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  return {
    transactions,
    addTransaction,
    deleteTransaction,
  };
}