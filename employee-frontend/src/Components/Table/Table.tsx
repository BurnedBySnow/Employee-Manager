import { AnimatePresence } from "framer-motion";
import {
  Cell,
  TopRow,
  StyledTable,
  StyledH3,
  EmailCell,
  SmallCell,
  SearchCell,
  ArrowContainer,
} from "./Styles";
import { Employee, EmployeeRow, Property } from "../Types";
import { sortEmployees } from "./SortTable";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import Row from "./Row";
import { searchTable } from "./Search";
import React, { useEffect, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";

const Table = (props: {
  employees: EmployeeRow[];
  setEmployees: (value: EmployeeRow[]) => void;
  updateEmployee: (id: number, data: Employee) => Promise<void>;
  deleteEmployee: (id: number) => Promise<void>;
}) => {
  const [shownEmployees, setShownEmployees] = useState<EmployeeRow[]>(
    props.employees
  );

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
    });

    const sorted = [...shownEmployees].sort(
      (a, b) => sortedBy?.indexOf(a.id) - sortedBy?.indexOf(b.id)
    );
    setShownEmployees(sorted);
  };

  const onChangeHandler = async (input: string) => {
    const filteredArr = searchTable(input, props.employees);
    const arrParam = filteredArr.map((e) => ({
      id: e.id,
      value: e[sorting.column],
    }));
    const sortedBy = sortEmployees({
      sortBy: sorting.direction,
      param: arrParam,
    });
    const sorted = filteredArr.sort(
      (a, b) => sortedBy?.indexOf(a.id) - sortedBy?.indexOf(b.id)
    );
    setShownEmployees(sorted);
  };

  useEffect(() => {
    setShownEmployees(props.employees);
  }, [props.employees]);

  return (
    <StyledTable>
      <TopRow>
        <Cell
          onClick={() => {
            sort(
              shownEmployees.map((e) => ({ id: e.id, value: e.firstName })),
              Property.firstName
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>First Name</StyledH3>
          {sorting.column === Property.firstName && (
            <ArrowContainer direction={sorting.direction}>
              <Arrow />
            </ArrowContainer>
          )}
        </Cell>
        <Cell
          onClick={() => {
            sort(
              shownEmployees.map((e) => ({ id: e.id, value: e.lastName })),
              Property.lastName
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Last Name</StyledH3>
          {sorting.column === Property.lastName && (
            <ArrowContainer direction={sorting.direction}>
              <Arrow />
            </ArrowContainer>
          )}
        </Cell>
        <EmailCell
          onClick={() => {
            sort(
              shownEmployees.map((e) => ({ id: e.id, value: e.email })),
              Property.email
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Email</StyledH3>
          {sorting.column === Property.email && (
            <ArrowContainer direction={sorting.direction}>
              <Arrow />
            </ArrowContainer>
          )}
        </EmailCell>
        <Cell
          onClick={() => {
            sort(
              shownEmployees.map((e) => ({ id: e.id, value: e.role })),
              Property.role
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Role</StyledH3>
          {sorting.column === Property.role && (
            <ArrowContainer direction={sorting.direction}>
              <Arrow />
            </ArrowContainer>
          )}
        </Cell>
        <SmallCell
          onClick={() => {
            sort(
              shownEmployees.map((e) => ({ id: e.id, value: e.age })),
              Property.age
            );
          }}
          style={{ userSelect: "none" }}
        >
          <StyledH3>Age</StyledH3>
          {sorting.column === Property.age && (
            <ArrowContainer direction={sorting.direction}>
              <Arrow />
            </ArrowContainer>
          )}
        </SmallCell>
        <Tooltip content="Use '$>' or '$<' to search for age above or below, expample $>28 to get employees older than 28 years">
          <SearchCell
            placeholder="Filter"
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </Tooltip>
      </TopRow>
      <AnimatePresence initial={false}>
        {shownEmployees.map((employee) => (
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
