import { useState } from "react";
import { Employee } from "../Types";
import { EmailInput, Form, Input, InputContainer, MyButton } from "./Styles";

enum Property {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  role = "role",
  age = "age",
}

const EditForm = (props: {
  currentEmployee: Employee;
  expanded: boolean;
  toggle: () => void;
}) => {
  const [employee, setEmployee] = useState<Employee>(props.currentEmployee);

  const handleChange = (value: string, property: Property) => {
    switch (property) {
      case Property.firstName:
        setEmployee({ ...employee, firstName: value });
        break;
      case Property.lastName:
        setEmployee({ ...employee, lastName: value });
        break;
      case Property.email:
        setEmployee({ ...employee, email: value });
        break;
      case Property.role:
        setEmployee({ ...employee, role: value });
        break;
      case Property.age:
        setEmployee({ ...employee, age: Number(value) });
        break;
    }
  };

  return (
    <Form expanded={props.expanded}>
      <InputContainer>
        <Input
          onChange={(e) => handleChange(e.target.value, Property.firstName)}
          type="text"
          id="fname"
          name="fname"
          value={employee?.firstName}
        ></Input>
        <Input
          onChange={(e) => handleChange(e.target.value, Property.lastName)}
          type="text"
          id="lname"
          name="lname"
          value={employee?.lastName}
        ></Input>
        <EmailInput
          onChange={(e) => handleChange(e.target.value, Property.email)}
          type="text"
          id="email"
          name="email"
          value={employee?.email}
        ></EmailInput>
        <Input
          onChange={(e) => handleChange(e.target.value, Property.role)}
          type="text"
          id="role"
          name="role"
          value={employee?.role}
        ></Input>
        <Input
          style={{ width: "100px" }}
          onChange={(e) => handleChange(e.target.value, Property.age)}
          type="number"
          min="0"
          id="age"
          name="age"
          value={employee?.age}
        ></Input>
      </InputContainer>
      <div style={{ display: "flex" }}>
        <MyButton
          style={{ marginRight: "10px", marginTop: "10px" }}
          onClick={props.toggle}
        >
          Confirm
        </MyButton>
        <MyButton style={{ marginTop: "10px" }} onClick={props.toggle}>
          Cancel
        </MyButton>
      </div>
    </Form>
  );
};

export default EditForm;
