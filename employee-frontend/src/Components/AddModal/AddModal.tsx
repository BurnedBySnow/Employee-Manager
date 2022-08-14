import { useForm } from "react-hook-form";
import { Employee } from "../Types";
import {
  ButtonContainer,
  ErrorMessage,
  FadedBackround,
  FormContainer,
  Header,
  Input,
  InputContainer,
  Label,
  MailInput,
  Name,
  Window,
  SubmitButton,
  CancelButton,
} from "./Styles";

const AddModal = (props: {
  closeModal: () => void;
  addEmployee: (employee: Employee) => Promise<void>;
}) => {
  // const [employee, setEmployee] = useState<Employee>(defaultValue);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      age: 0,
    },
  });

  const isValidEmail = (email: string) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email: string) => {
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };

  return (
    <>
      <Window>
        <Header>New Employee</Header>
        <FormContainer
          onSubmit={handleSubmit((data) => {
            props.addEmployee(data);
            props.closeModal();
          })}
        >
          <Name>
            <InputContainer>
              <Input
                id="firstName"
                {...register("firstName", { required: "This is required" })}
                placeholder="First Name"
                style={{
                  border: errors.firstName
                    ? "2px solid red"
                    : "2px solid #00000045",
                }}
              />
            </InputContainer>
            <InputContainer>
              <Input
                id="lastName"
                {...register("lastName", { required: "This is required" })}
                placeholder="Last Name"
                style={{
                  border: errors.lastName
                    ? "2px solid red"
                    : "2px solid #00000045",
                }}
              />
            </InputContainer>
          </Name>
          <Name>
            <InputContainer>
              <Input
                {...register("role", { required: "Role is required" })}
                placeholder="Role"
                style={{
                  border: errors.role ? "2px solid red" : "2px solid #00000045",
                }}
              />
            </InputContainer>
            <Label>Age:</Label>
            <InputContainer style={{ width: "100px" }}>
              <Input
                type="number"
                min="0"
                {...register("age", {
                  required: "This is required",
                  valueAsNumber: true,
                })}
                style={{
                  border: errors.age ? "2px solid red" : "2px solid #00000045",
                }}
              />
            </InputContainer>
          </Name>
          <InputContainer>
            <MailInput
              id="email"
              {...register("email", {
                required: "This is required",
                validate: handleEmailValidation,
              })}
              placeholder="Email"
              style={{
                border: errors.email ? "2px solid red" : "2px solid #00000045",
              }}
            />
          </InputContainer>
          <ButtonContainer>
            <SubmitButton type="submit" value="Confirm" />
            <CancelButton onClick={props.closeModal}>Cancel</CancelButton>
          </ButtonContainer>
        </FormContainer>
      </Window>
      <FadedBackround />
    </>
  );
};

export default AddModal;
