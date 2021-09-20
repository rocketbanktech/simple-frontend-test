import { useState, useMemo } from "react";

import items from "../sagas/users.mock";

export type Config = {
  key: string;
  direction: string;
};

type Items = typeof items[0];

type UseSortTableDataParams = {
  items: Items[];
  config?: Config;
};

const useSortableData = ({
  items,
  config = { key: "dataNascimento", direction: "ascending" },
}: UseSortTableDataParams) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const keyA = sortConfig.key as keyof typeof items[0];
        const keyB = sortConfig.key as keyof typeof items[0];
        if (a[keyA] < b[keyB]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[keyA] > b[keyB]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = "ascending";

    if (sortConfig && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const setClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return { items: sortedItems, requestSort, sortConfig, setClassNamesFor };
};

export default useSortableData;
