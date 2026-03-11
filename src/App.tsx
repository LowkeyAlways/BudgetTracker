import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import Filter from "./components/Filter";
import { useTransactions } from "./hooks/useTransactions";
import { useFilter } from "./hooks/useFilter";
import { useFilteredTransactions } from "./hooks/useFilteredTransactions";

function App() {
  const { transactions, addTransaction, deleteTransaction } = useTransactions();
  const { selectedFilter, setSelectedFilter } = useFilter();

  const { filteredTransactions } = useFilteredTransactions({
    transactions,
    selectedFilter,
  });

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <div className="mx-auto max-w-4xl">
      <h1 className="text-center mt-5 mb-10 text-white text-2xl font-bold">Budget Tracker</h1>

        <TransactionForm onAdd={addTransaction} />

        <Balance items={transactions} />

        <Filter
          selectedFilter={selectedFilter}
          onChangeFilter={setSelectedFilter}
        />

        <TransactionList
          items={filteredTransactions}
          onDelete={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;