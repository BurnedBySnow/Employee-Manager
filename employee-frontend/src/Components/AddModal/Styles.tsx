import { motion } from "framer-motion";
import styled from "styled-components";

export const Window = styled(motion.div)`
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: transparent;
  background-color: white;
  border-radius: 12px;
  box-shadow: -4px 5px 5px 5px #00000070;
`;

export const Header = styled(motion.div)`
  background-color: #2a2537;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 8px 8px 0 0;
  user-select: none;
`;

export const FormContainer = styled.form`
  background-color: #2a2537;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 0 0 8px 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px 10px;
`;

export const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  outline: none;
`;

export const MailInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  outline: none;
`;

export const Name = styled.div`
  display: flex;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 3px;
  align-self: center;
  justify-self: flex-start;
  padding-left: 12px;
  color: white;
  font-weight: bold;
`;

export const FadedBackround = styled(motion.div)`
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

export const ErrorMessage = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: start;
  padding: 0 0 4px 12px;
  color: red;
`;

export const SubmitButton = styled.input`
  border: none;
  border-radius: 8px;
  box-shadow: -3px 4px 3px 1px #00000070;
  padding: 5px 10px;
  width: fit-content;
  margin: 5px 15px 0 0;
  user-select: none;
  color: white;
  background: #a63d40;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: inherit;
  :hover {
    background-color: #bd5457;
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
  margin-top: 5px;
  user-select: none;
  color: white;
  background-color: #a63d40;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #bd5457;
  }
  :active {
    transform: scale(0.97);
  }
`;
