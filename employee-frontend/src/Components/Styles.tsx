import styled from "styled-components";

export const TopBar = styled.div`
  background-color: #2a2537;
  height: 50px;
  font-size: 28px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px 5px #00000070;
  position: absolute;
  width: 100%;
  top: 0;
  padding-bottom: 5px;
`;

export const Background = styled.div`
  background: linear-gradient(to top right, blue, pink);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 140px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AddButton = styled.div`
  border-radius: 8px;
  box-shadow: -2px 3px 3px 1px #00000070;
  padding: 8px 10px;
  user-select: none;
  color: white;
  background-color: #373049;
  align-self: flex-end;
  margin-bottom: 5px;
  :hover {
    background-color: #645686;
  }
  :active {
    transform: scale(0.97);
  }
`;
