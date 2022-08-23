import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import { StyledRow, Cell, EmailCell, SmallCell, SvgContainer } from "./Styles";
import { Employee } from "../Types";
import { ReactComponent as Edit } from "../../images/pen-solid.svg";
import { ReactComponent as Delete } from "../../images/trash-solid.svg";
import { motion } from "framer-motion";

const Row = (props: {
  employee: Employee;
  deleteEmployee: (id: number) => Promise<void>;
  id: number;
  updateEmployee: (id: number, data: Employee) => Promise<void>;
}) => {
  const { employee } = props;
  const [expanded, toggleExpanded] = useState<boolean>(false);
  const [toggledEditForm, setToggledEditForm] = useState<boolean>(false);

  const del = () => {
    if (expanded) {
      toggleExpanded(false);
    }
    props.deleteEmployee(props.id);
  };

  const toggle = () => {
    setToggledEditForm(false);
  };

  const toggleCheck = () => {
    if (toggledEditForm && expanded) {
      toggleExpanded(false);
    } else if (toggledEditForm && !expanded) {
      toggleExpanded(true);
    } else {
      toggleExpanded(true);
      setToggledEditForm(true);
    }
  };

  return (
    <motion.div id="topdiv" layout>
      <StyledRow
        layout
        initial={{
          opacity: 0,
          height: 0,
          boxShadow: "0 3px 5px 1px rgba(0, 0, 0, 0)",
        }}
        animate={{
          opacity: expanded ? 1 : 1,
          height: expanded ? "auto" : "auto",
          boxShadow: expanded
            ? "0 3px 5px 1px rgba(0, 0, 0, 0.2)"
            : "0 3px 5px 1px rgba(0, 0, 0, 0.0)",
        }}
        exit={{
          opacity: 0,
          height: 0,
          boxShadow: "0 3px 5px 1px rgba(0, 0, 0, 0)",
        }}
        transition={{ opacity: { duration: 0.05 }, height: { duration: 0.4 } }}
      >
        <Cell>{employee.firstName}</Cell>
        <Cell>{employee.lastName}</Cell>
        <EmailCell>{employee.email}</EmailCell>
        <Cell>{employee.role}</Cell>
        <SmallCell>{employee.age}</SmallCell>
        <Cell>
          <SvgContainer>
            <Edit onClick={toggleCheck} width="1rem" />
            <Delete onClick={del} width="1rem" />
          </SvgContainer>
        </Cell>
      </StyledRow>
      <EditForm
        currentEmployee={employee}
        expanded={expanded}
        toggle={toggle}
        updateEmployee={props.updateEmployee}
        id={props.id}
      />
    </motion.div>
  );
};

export default Row;
