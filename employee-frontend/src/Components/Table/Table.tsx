import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Cell,
  TopRow,
  StyledTable,
  StyledH3,
  EmailCell,
  SmallCell,
} from "../Styles";
import { Employee, EmployeeRow, Property } from "../Types";
import { sortEmployees } from "./SortTable";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import Row from "./Row";

const Table = (props: {
  employees: EmployeeRow[];
  setEmployees: (value: EmployeeRow[]) => void;
  updateEmployee: (id: number, data: Employee) => Promise<void>;
  deleteEmployee: (id: number) => Promise<void>;
}) => {
  const [sorting, setSorting] = useState<{
    direction: "asc" | "desc";
    column: Property;
  }>({ direction: "asc", column: Property.firstName });

  const sort = <T extends {}>(
    arr: { id: number; value: T }[],
    column: Property
  ) => {
    let sortBy: "asc" | "desc";
    if (column === sorting.column) {
      sortBy = sorting.direction === "asc" ? "desc" : "asc";
    } else {
      sortBy = "asc";
    }

    setSorting({ direction: sortBy, column });
    const sortedBy = sortEmployees({
      sortBy,
      param: arr,
      setEmployees: props.setEmployees,
    });

    const sorted = [...props.employees].sort(
      (a, b) => sortedBy?.indexOf(a.id) - sortedBy?.indexOf(b.id)
    );
    props.setEmployees(sorted);
  };

  return (
    <StyledTable>
      <TopRow>
        <Cell
          onClick={() => {
            sort(
              props.employees.map((e) => ({ id: e.id, value: e.firstName })),
              Property.firstName
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>First Name</StyledH3>
          {sorting.column === Property.firstName && (
            <Arrow
              style={
                sorting.direction === "asc"
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(180deg)" }
              }
            />
          )}
        </Cell>
        <Cell
          onClick={() => {
            sort(
              props.employees.map((e) => ({ id: e.id, value: e.lastName })),
              Property.lastName
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Last Name</StyledH3>
          {sorting.column === Property.lastName && (
            <Arrow
              style={
                sorting.direction === "asc"
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(180deg)" }
              }
            />
          )}
        </Cell>
        <EmailCell
          onClick={() => {
            sort(
              props.employees.map((e) => ({ id: e.id, value: e.email })),
              Property.email
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Email</StyledH3>
          {sorting.column === Property.email && (
            <Arrow
              style={
                sorting.direction === "asc"
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(180deg)" }
              }
            />
          )}
        </EmailCell>
        <Cell
          onClick={() => {
            sort(
              props.employees.map((e) => ({ id: e.id, value: e.role })),
              Property.role
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Role</StyledH3>
          {sorting.column === Property.role && (
            <Arrow
              style={
                sorting.direction === "asc"
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(180deg)" }
              }
            />
          )}
        </Cell>
        <SmallCell
          onClick={() => {
            sort(
              props.employees.map((e) => ({ id: e.id, value: e.age })),
              Property.age
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Age</StyledH3>
          {sorting.column === Property.age && (
            <Arrow
              style={
                sorting.direction === "asc"
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(180deg)" }
              }
            />
          )}
        </SmallCell>
        <SmallCell style={{ userSelect: "none" }}></SmallCell>
      </TopRow>
      <AnimatePresence initial={false}>
        {props.employees.map((employee) => (
          <Row
            key={employee.id}
            id={employee.id}
            deleteEmployee={props.deleteEmployee}
            employee={employee}
            updateEmployee={props.updateEmployee}
          />
        ))}
      </AnimatePresence>
    </StyledTable>
  );
};

export default Table;
