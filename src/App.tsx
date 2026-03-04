import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { useTransactions } from "./hooks/useTransactions";

function App() {
  const { transactions, addTransaction } = useTransactions();

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <h1 className="text-center mt-15 mb-25 text-white text-2xl font-bold">Budget Tracker</h1>

      <TransactionForm onAdd={addTransaction} />
      <hr className="mt-15 mb-5 border-gray-700" />
      <TransactionList items={transactions} />
    </div>
  );
}

export default App;