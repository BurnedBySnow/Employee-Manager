import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import {
  TopBar,
  Container,
  Table,
  TopRow,
  Cell,
  EmailCell,
  SmallCell,
  AddButton,
  Background,
} from "./Components/Styles";
import { Employee, EmployeeRow } from "./Components/Types";
import Row from "./Components/Row";
import AddModal from "./Components/AddModal/AddModal";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [employees, setEmployees] = useState<EmployeeRow[]>([]);
  const [add, toggleAdd] = useState<boolean>(false);

  const getEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees/");
    return result.data;
  };

  const { isLoading, error, data, status, refetch } = useQuery(
    ["employees"],
    getEmployees
  );

  const addEmployee = async (data: Employee) => {
    let response;
    try {
      response = await axios.post("http://localhost:8080/employees", data);
      toggleAdd(false);
      refetch();
    } catch {
      console.log(response);
    }
  };

  const updateEmployee = async (id: number, data: Employee) => {
    let response;
    try {
      response = await axios.put("http://localhost:8080/employees/" + id, data);
      refetch();
      console.log(response);
    } catch {
      console.log(response);
    }
  };

  const deleteEmployee = async (id: number) => {
    const response = await axios.delete(
      "http://localhost:8080/employees/" + id
    );
    if (response.status === 200) {
      refetch();
    }
  };

  const closeModal = () => {
    toggleAdd(false);
  };

  useEffect(() => {
    if (data) {
      setEmployees(data);
      console.log("yo");
    }
  }, [data]);

  return (
    <div className="App">
      {add && <AddModal closeModal={closeModal} addEmployee={addEmployee} />}
      <Background>
        <TopBar>Employee Manager</TopBar>
        <Container>
          <AddButton onClick={() => toggleAdd(true)}>Add Employee</AddButton>
          <Table>
            <TopRow>
              <Cell>First Name</Cell>
              <Cell>Last Name</Cell>
              <EmailCell>Email</EmailCell>
              <Cell>Role</Cell>
              <SmallCell>Age</SmallCell>
              <SmallCell></SmallCell>
            </TopRow>
            {employees.map((employee) => (
              <Row
                key={employee.id}
                id={employee.id}
                deleteEmployee={deleteEmployee}
                employee={employee}
                updateEmployee={updateEmployee}
              />
            ))}
          </Table>
        </Container>
      </Background>
    </div>
  );
}

export default App;
