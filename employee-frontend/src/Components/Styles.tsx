import { motion } from "framer-motion";
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

export const StyledTable = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: black;
  #topdiv:nth-child(even) {
    background-color: #d1d1d1;
  }
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: -4px 5px 5px 5px #00000070;
  max-height: 70vh;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #373049;
  color: white;
  padding: 5px 0;
  width: 100%;
  svg {
    width: 14px;
    fill: white;
    margin-left: 5px;
    transform: rotate(180deg);
  }
`;

export const ListContainer = styled(motion.div)``;

export const StyledRow = styled(motion.li)`
  display: flex;
  flex-direction: row;

  :children {
    user-select: none;
  }
`;

export const Cell = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 150px;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EmailCell = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 250px;
  justify-content: flex-start;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SmallCell = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100px;
  padding: 10px 20px;
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  svg {
    cursor: pointer;
    fill: #373049;
    :hover {
      fill: #a63d40;
    }
    :active {
      transform: scale(0.9);
    }
  }
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

export const StyledH3 = styled.h2`
  font-size: 16px;
  margin: 0;
  cursor: pointer;
`;
