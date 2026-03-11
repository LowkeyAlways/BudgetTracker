import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import { useTransactions } from "./hooks/useTransactions";

function App() {
  const { transactions, addTransaction, deleteTransaction } = useTransactions();

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <div className="mx-auto max-w-4xl">
      <h1 className="text-center mt-5 mb-10 text-white text-2xl font-bold">Budget Tracker</h1>

        <TransactionForm onAdd={addTransaction} />

        <Balance items={transactions} />

        <TransactionList items={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
}

export default App;