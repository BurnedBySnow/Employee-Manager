import styled from "styled-components";

export const Form = styled.div<{ expanded: boolean }>`
  height: ${(p) => (p.expanded ? "auto" : "0")};
  overflow: hidden;
  padding: ${(p) => (p.expanded ? "10px 20px" : "0")};
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  width: 140px;
  margin-right: 10px;
  outline: none;
`;

export const EmailInput = styled.input`
  padding: 5px;
  border-radius: 8px;
  width: 240px;
  margin-right: 10px;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const SubmitButton = styled.input`
  border: none;
  border-radius: 8px;
  box-shadow: -3px 4px 3px 1px #00000070;
  padding: 5px 10px;
  width: fit-content;
  margin: 10px 15px 0 0;
  user-select: none;
  color: white;
  background: #373049;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: inherit;
  :hover {
    background-color: #645686;
  }
  :active {
    transform: scale(0.97);
  }
`;

export const CancelButton = styled.div`
  border-radius: 8px;
  box-shadow: -2px 4px 3px 1px #00000070;
  padding: 5px 10px;
  font-size: 16px;
  font-family: inherit;
  width: fit-content;
  margin-top: 10px;
  user-select: none;
  color: white;
  background-color: #373049;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #645686;
  }
  :active {
    transform: scale(0.97);
  }
`;
