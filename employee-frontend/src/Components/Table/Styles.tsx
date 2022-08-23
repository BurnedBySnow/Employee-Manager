import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledTable = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: black;
  #topdiv:nth-child(even) {
    background-color: #d1d1d1;
  }
  #topdiv:last-child {
    border-radius: 0 0 8px 8px;
  }
  background-color: white;
  border-radius: 10px;
  box-shadow: -4px 5px 5px 5px #00000070;
  max-height: 70vh;
`;

export const TopRow = styled.div`
  display: flex;
  border-radius: 8px 8px 0 0;
  flex-direction: row;
  align-items: center;
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

export const ArrowContainer = styled.div<{ direction: "asc" | "desc" }>`
  svg {
    transform: ${(p) =>
      p.direction === "asc" ? "rotate(0deg)" : "rotate(180deg)"};
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
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 150px;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SearchCell = styled.input`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  height: 35px;
  width: 140px;
  justify-content: flex-start;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  outline: none;
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

export const StyledH3 = styled.h2`
  font-size: 16px;
  margin: 0;
  cursor: pointer;
`;
