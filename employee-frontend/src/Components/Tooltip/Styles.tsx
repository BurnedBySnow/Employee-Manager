import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Tip = styled.div`
  position: absolute;
  border-radius: 4px;
  padding: 10px;
  color: white;
  background: #181717;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  line-height: 1;
  text-align: left;
  z-index: 100;
  white-space: normal;
  width: 200px;
  top: 50%;
  left: calc(100% + 22px);
  transform: translateX(0) translateY(-50%);
  ::before {
    content: " ";
    left: calc(0% - 10px);
    top: 50%;
    transform: translateY(-50%);
    border-right: solid 10px black;
    border-top: solid 8px transparent;
    border-bottom: solid 8px transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
`;
