import { useState } from "react";

export type FilterType = "all" | "income" | "expense";

export function useFilter() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  return {
    selectedFilter,
    setSelectedFilter,
  };
}