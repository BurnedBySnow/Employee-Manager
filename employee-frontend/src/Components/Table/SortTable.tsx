type Props<T> = {
  sortBy: "asc" | "desc";
  param: { id: number; value: T }[];
};

export const sortEmployees = <T extends {}>({ sortBy, param }: Props<T>) => {
  switch (sortBy) {
    case "asc":
      const tempAsc = [...param].sort(
        (a: { id: number; value: T }, b: { id: number; value: T }) =>
          typeof a.value === "string" && typeof b.value === "string"
            ? a.value.toLowerCase() > b.value.toLowerCase()
              ? 1
              : -1
            : a.value > b.value
            ? 1
            : -1
      );
      return tempAsc.map((e) => e.id);
    case "desc":
      const tempDesc = [...param].sort(
        (a: { id: number; value: T }, b: { id: number; value: T }) =>
          typeof a.value === "string" && typeof b.value === "string"
            ? a.value.toLowerCase() < b.value.toLowerCase()
              ? 1
              : -1
            : a.value < b.value
            ? 1
            : -1
      );
      return tempDesc.map((e) => e.id);
    default:
      const tempDefault = [...param].sort(
        (a: { id: number; value: T }, b: { id: number; value: T }) =>
          typeof a.value === "string" && typeof b.value === "string"
            ? a.value.toLowerCase() > b.value.toLowerCase()
              ? 1
              : -1
            : a.value > b.value
            ? 1
            : -1
      );
      return tempDefault.map((e) => e.id);
  }
};
