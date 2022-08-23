import { EmployeeRow } from "../Types";

export const searchTable = (searchInput: string, employees: EmployeeRow[]) => {
  let searchResult: EmployeeRow[];

  if (searchInput.startsWith("$") && searchInput.length < 3) return employees;

  searchResult = employees.filter((employee) => {
    if (
      searchInput.toLowerCase().startsWith("$>") &&
      searchInput.length > 2 &&
      employee.age > Number(searchInput.slice(2))
    ) {
      return employee;
    }
    if (
      searchInput.toLowerCase().startsWith("$<") &&
      searchInput.length > 2 &&
      employee.age < Number(searchInput.slice(2))
    ) {
      return employee;
    }

    if (employee.firstName.toLowerCase().includes(searchInput.toLowerCase()))
      return employee;
    if (employee.lastName.toLowerCase().includes(searchInput.toLowerCase()))
      return employee;
    if (employee.email.toLowerCase().includes(searchInput.toLowerCase()))
      return employee;
    if (employee.role.toLowerCase().includes(searchInput.toLowerCase()))
      return employee;
    if (employee.age.toString().indexOf(searchInput) > -1) return employee;
    return null;
  });

  return searchResult;
};
