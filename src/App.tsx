import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { useTransactions } from "./hooks/useTransactions";

function App() {
  const { transactions, addTransaction } = useTransactions();

  return (
    <div>
      <h1>Budget Tracker</h1>

      <TransactionForm onAdd={addTransaction} />
      <hr />
      <TransactionList items={transactions} />
    </div>
  );
}

export default App;