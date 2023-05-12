import { useState } from "react";
import { Container } from "./OptionStyle";

interface OptionProps {
  title: string;
  desc: string;
};

const Option = ({ title, desc }: OptionProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
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
