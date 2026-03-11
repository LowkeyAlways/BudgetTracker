type FilterType = "all" | "income" | "expense";

type Props = {
  selectedFilter: FilterType;
  onChangeFilter: (filter: FilterType) => void;
};

export default function Filter({ selectedFilter, onChangeFilter }: Props) {
  return (
    <section className="mt-6 mb-3 rounded-xl bg-gray-600 p-5 shadow">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Filtrer les transactions</h2>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => onChangeFilter("all")}
          className={`rounded-lg px-4 py-2 font-medium transition ${
            selectedFilter === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Tous
        </button>

        <button
          type="button"
          onClick={() => onChangeFilter("income")}
          className={`rounded-lg px-4 py-2 font-medium transition ${
            selectedFilter === "income"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Revenus
        </button>

        <button
          type="button"
          onClick={() => onChangeFilter("expense")}
          className={`rounded-lg px-4 py-2 font-medium transition ${
            selectedFilter === "expense"
              ? "bg-red-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Dépenses
        </button>
      </div>
    </section>
  );
}