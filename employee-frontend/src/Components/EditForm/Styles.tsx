import styled from "styled-components";

export const Form = styled.div<{ expanded: boolean }>`
  height: ${(p) => (p.expanded ? "auto" : "0")};
  overflow: hidden;
  padding: ${(p) => (p.expanded ? "10px 20px" : "0")};
`;

export const Input = styled.input`
  padding: 8px;
  border: 2px solid #00000045;
  border-radius: 8px;
  width: 140px;
  margin-right: 10px;
  outline: none;
`;

export const EmailInput = styled.input`
  padding: 5px;
  border: 2px solid #00000045;
  border-radius: 8px;
  width: 240px;
  margin-right: 10px;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const MyButton = styled.div`
  border-radius: 8px;
  box-shadow: -2px 4px 3px 1px #00000070;
  padding: 5px 10px;
  width: fit-content;
  margin-top: 5px;
  user-select: none;
  color: white;
  background-color: #373049;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #49415f;
  }
  :active {
    transform: scale(0.97);
  }
`;
