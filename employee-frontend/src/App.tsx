import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { TopBar, Container, AddButton, Background } from "./Components/Styles";
import { Employee, EmployeeRow } from "./Components/Types";
import AddModal from "./Components/AddModal/AddModal";
import { useQuery } from "@tanstack/react-query";
import Table from "./Components/Table/Table";

function App() {
  const [employees, setEmployees] = useState<EmployeeRow[]>([]);
  const [add, toggleAdd] = useState<boolean>(false);

  const getEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees/");
    return result.data;
  };

  const { isLoading, error, data, refetch } = useQuery(
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
    setEmployees(data);
  }, [data]);

  return (
    <div className="App">
      <AddModal closeModal={closeModal} addEmployee={addEmployee} add={add} />
      <Background>
        <TopBar>Employee Manager</TopBar>
        <Container>
          <AddButton onClick={() => toggleAdd(true)}>Add Employee</AddButton>
          {employees && (
            <Table
              employees={employees}
              setEmployees={setEmployees}
              updateEmployee={updateEmployee}
              deleteEmployee={deleteEmployee}
            />
          )}
        </Container>
      </Background>
    </div>
  );
}

export default App;
