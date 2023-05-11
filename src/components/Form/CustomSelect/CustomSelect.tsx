// Models
import { SelectOption } from "../../../models/SelectOption";

// Styles
import { Container } from "./CustomSelectStyle";

import Select from "react-select";

type LabelType = {
  text: string;
  optional?: boolean;
};

type SelectProps = {
  options: SelectOption[];
  value: SelectOption;
  label: LabelType;
  setValue: (value: SelectOption) => void;
};

const CustomSelectStyles = {
  control: (provided: any, { isFocused }: any) => ({
    ...provided,
    border: "1px solid var(--light-grey-color)",
    borderRadius: "0.5rem",
    fontSize: "0.75rem",
    boxShadow: isFocused ? "none" : "var(--primary-color)",
    cursor: "pointer",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "var(--grey-color)",
  }),
  option: (provided: any, { isFocused }: any) => ({
    ...provided,
    backgroundColor: isFocused ? "var(--primary-color)" : "var(--white)",
    color: isFocused ? "var(--white)" : "var(--grey-color)",
    fontSize: "0.75rem",
    cursor: "pointer",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
};

const CustomSelect = ({ options, value, label, setValue }: SelectProps) => {
  const handleChange = (newValue: any, actionMeta: any) => {
    const selectedOption = newValue as SelectOption;
    setValue(selectedOption);
  };

  return (
    <Container>
      <span className="input-label">
        {label.text}
        {label.optional ? <span className="optional"> (Opcional)</span> : ""}
      </span>

      <Select
        options={options}
        value={value}
        styles={CustomSelectStyles}
        onChange={handleChange}
      />
    </Container>
  );
};

export default CustomSelect;
