// Hooks
import { useState } from "react";

// Styles
import { Container } from "./OptionStyle";

interface OptionProps {
  title: string;
  desc: string;
  contextAttr: (value: boolean) => void
}

const Option = ({ title, desc, contextAttr }: OptionProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    contextAttr(!isChecked);
  };

  return (
    <Container>
      <div className="text-block">
        <span className="title">{title}</span>

        <div
          className={`switch ${isChecked ? "checked" : ""}`}
          onClick={toggleSwitch}
        >
          <div className="handle"></div>
        </div>
      </div>

      <span className="desc">{desc}</span>
    </Container>
  );
};

export default Option;
