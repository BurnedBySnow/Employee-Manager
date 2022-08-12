import { MyButton } from "../EditForm/Styles";
import {
  ButtonContainer,
  FadedBackround,
  FormContainer,
  Header,
  Input,
  InputContainer,
  Label,
  Name,
  Window,
} from "./Styles";

const AddModal = (props: { closeModal: () => void }) => {
  return (
    <>
      <Window>
        <Header>New Employee</Header>
        <FormContainer>
          <Name>
            <InputContainer>
              <Label>First Name</Label>
              <Input id="firstName" name="firstName" />
            </InputContainer>
            <InputContainer>
              <Label>Last Name</Label>
              <Input id="lastName" name="lastName" />
            </InputContainer>
          </Name>
          <Name>
            <InputContainer>
              <Label>Role</Label>
              <Input />
            </InputContainer>
            <InputContainer style={{ width: "100px" }}>
              <Label>Age</Label>
              <Input type="number" min="0" />
            </InputContainer>
          </Name>
          <InputContainer>
            <Label>Email</Label>
            <Input />
          </InputContainer>
          <ButtonContainer>
            <MyButton
              onClick={props.closeModal}
              style={{ marginRight: "10px" }}
            >
              Confirm
            </MyButton>
            <MyButton onClick={props.closeModal}>Cancel</MyButton>
          </ButtonContainer>
        </FormContainer>
      </Window>
      <FadedBackround />
    </>
  );
};

export default AddModal;
