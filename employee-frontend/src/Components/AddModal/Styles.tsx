import styled from "styled-components";

export const Window = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
`;

export const Header = styled.div`
  background-color: #373049;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const FormContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 10px 8px 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #00000045;
  outline: none;
`;

export const Name = styled.div`
  display: flex;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 3px;
  align-self: flex-start;
  justify-self: flex-start;
`;

export const FadedBackround = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
  z-index: 10;
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 10px;
`;
