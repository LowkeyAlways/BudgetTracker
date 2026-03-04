export type Transaction = {
    id: string;
    label: string;
    amount: number;
    type: "income" | "expense";
  };