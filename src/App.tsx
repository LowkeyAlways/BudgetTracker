import TransactionForm from "./components/transactions/TransactionForm";
import { useTransactions } from "./hooks/useTransactions";

function App() {
  const { addTransaction } = useTransactions();

  return (
    <div style={{ padding: 20 }}>
      <h1>Budget Tracker</h1>

      <TransactionForm onAdd={addTransaction} />
    </div>
  );
}

export default App;