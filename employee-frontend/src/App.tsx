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
import { Employee } from "./Components/Types";
import Row from "./Components/Row";
import AddModal from "./Components/AddModal/AddModal";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [add, toggleAdd] = useState<boolean>(false);

  const getEmployees = () => {
    axios.get("http://localhost:8080/employees/").then((response) => {
      console.log(response);
      console.log(response.data);
      const myRepo = response.data;
      setEmployees(myRepo);
    });
  };

  // const addEmployee = () => {
  //   axios.post("http://localhost:8080/employees/", {

  //   })
  // }

  useEffect(() => getEmployees(), []);

  const closeModal = () => {
    toggleAdd(false);
  };

  return (
    <div className="App">
      {add && <AddModal closeModal={closeModal} />}
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
              <Row /* toggled here for boxshadow */ employee={employee} />
            ))}
          </Table>
        </Container>
      </Background>
    </div>
  );
}

export default App;
