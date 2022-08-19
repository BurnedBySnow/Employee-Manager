import { EmployeeRow } from "../Types";

type Props<T> = {
  sortBy: "asc" | "desc";
  param: { id: number; value: T }[];
  setEmployees: (value: EmployeeRow[]) => void;
};

export const sortEmployees = <T extends {}>({
  sortBy,
  param,
  setEmployees,
}: Props<T>) => {
  console.log(param);
  switch (sortBy) {
    case "asc":
      const tempAsc = [...param].sort(
        (a: { id: number; value: T }, b: { id: number; value: T }) =>
          a.value > b.value ? 1 : -1
      );
      return tempAsc.map((e) => e.id);
    case "desc":
      const tempDesc = [...param].sort(
        (a: { id: number; value: T }, b: { id: number; value: T }) =>
          a.value < b.value ? 1 : -1
      );
      return tempDesc.map((e) => e.id);
    default:
      const tempDefault = [...param].sort(
        (a: { id: number; value: T }, b: { id: number; value: T }) =>
          a.value > b.value ? 1 : -1
      );
      return tempDefault.map((e) => e.id);
  }
};
