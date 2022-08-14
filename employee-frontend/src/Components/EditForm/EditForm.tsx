import { useState } from "react";
import { useForm } from "react-hook-form";
import { Employee, Property } from "../Types";
import {
  ButtonContainer,
  CancelButton,
  EmailInput,
  Form,
  Input,
  InputContainer,
  SubmitButton,
} from "./Styles";

const EditForm = (props: {
  currentEmployee: Employee;
  expanded: boolean;
  toggle: () => void;
  updateEmployee: (id: number, data: Employee) => Promise<void>;
  id: number;
}) => {
  const [employee, setEmployee] = useState<Employee>(props.currentEmployee);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      role: employee.role,
      age: employee.age,
    },
  });

  const isValidEmail = (email: string) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);
    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };

  return (
    <Form expanded={props.expanded}>
      <form
        onSubmit={handleSubmit((data) => {
          props.updateEmployee(props.id, data);
          props.toggle();
        })}
      >
        <InputContainer>
          <Input
            {...register("firstName", { required: "This is required" })}
            style={{
              border: errors.firstName
                ? "2px solid red"
                : "2px solid #00000045",
            }}
          />
          <Input
            {...register("lastName", { required: "This is required" })}
            style={{
              border: errors.lastName ? "2px solid red" : "2px solid #00000045",
            }}
          />
          <EmailInput
            {...register("email", {
              required: true,
              validate: handleEmailValidation,
            })}
            style={{
              border: errors.email ? "2px solid red" : "2px solid #00000045",
            }}
          />
          <Input
            {...register("role", { required: "This is required" })}
            style={{
              border: errors.role ? "2px solid red" : "2px solid #00000045",
            }}
          />
          <Input
            type="number"
            min="0"
            {...register("age", {
              required: "This is required",
              valueAsNumber: true,
            })}
            style={{
              width: "100px",
              border: errors.age ? "2px solid red" : "2px solid #00000045",
            }}
          />
        </InputContainer>
        <ButtonContainer>
          <SubmitButton type="submit" value="Confirm" />
          <CancelButton onClick={props.toggle}>Cancel</CancelButton>
        </ButtonContainer>
      </form>
    </Form>
  );
};

export default EditForm;
