import { useState } from "react";
import { Tip, Wrapper } from "./Styles";

const Tooltip = (props: { content: string; children?: React.ReactNode }) => {
  let timeout: number;
  const [active, setActive] = useState(false);

  const showToolTip = () => {
    timeout = window.setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideToolTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <Wrapper onMouseEnter={showToolTip} onMouseLeave={hideToolTip}>
      {props.children}
      {active && <Tip>{props.content}</Tip>}
    </Wrapper>
  );
};

export default Tooltip;
