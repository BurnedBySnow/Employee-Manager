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

const Row = (props: { employee: Employee }) => {
  const { employee } = props;

  const [expanded, toggleExpanded] = useState<boolean>(false);

  const toggleEdit = () => {
    toggleExpanded(false);
  };

  return (
    <RowContainer>
      <StyledRow>
        <Cell>{employee.firstName}</Cell>
        <Cell>{employee.lastName}</Cell>
        <EmailCell>{employee.email}</EmailCell>
        <Cell>{employee.role}</Cell>
        <SmallCell>{employee.age}</SmallCell>
        <SmallCell>
          <SvgContainer>
            <Edit onClick={() => toggleExpanded(!expanded)} width="1rem" />
            <Delete width="1rem" />
          </SvgContainer>
        </SmallCell>
      </StyledRow>
      <EditForm
        currentEmployee={employee}
        expanded={expanded}
        toggle={toggleEdit}
      />
    </RowContainer>
  );
};

export default Row;
