import { useState } from "react";
import EditForm from "./EditForm/EditForm";
import {
  StyledRow,
  Cell,
  RowContainer,
  EmailCell,
  SmallCell,
  SvgContainer,
} from "./Styles";
import { Employee } from "./Types";
import { ReactComponent as Edit } from "../images/pen-solid.svg";
import { ReactComponent as Delete } from "../images/trash-solid.svg";

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
    <RowContainer>
      <StyledRow expanded={expanded}>
        <Cell>{employee.firstName}</Cell>
        <Cell>{employee.lastName}</Cell>
        <EmailCell>{employee.email}</EmailCell>
        <Cell>{employee.role}</Cell>
        <SmallCell>{employee.age}</SmallCell>
        <SmallCell>
          <SvgContainer>
            <Edit onClick={toggleCheck} width="1rem" />
            <Delete onClick={del} width="1rem" />
          </SvgContainer>
        </SmallCell>
      </StyledRow>
      {toggledEditForm && (
        <EditForm
          currentEmployee={employee}
          expanded={expanded}
          toggle={toggle}
          updateEmployee={props.updateEmployee}
          id={props.id}
        />
      )}
    </RowContainer>
  );
};

export default Row;
