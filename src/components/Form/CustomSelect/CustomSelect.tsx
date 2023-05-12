// Hooks
import { useChargeForm } from "../../../context/ChargeFormContext";

// Models
import { SelectOption } from "../../../models/SelectOption";

// Styles
import { Container } from "./CustomSelectStyle";

import Select from "react-select";

interface LabelType {
  text: string;
  optional?: boolean;
};

interface SelectProps {
  options: SelectOption[];
  label: LabelType;
  paymentOptionType: any;
  paymentOption: any;
  changedValue: string
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

const CustomSelect = ({ options, label, paymentOptionType, paymentOption, changedValue }: SelectProps) => {
  const { dispatch } = useChargeForm();

  const handleChange = (newValue: any) => {
    const selectedOption = newValue as SelectOption;

    dispatch({
      type: paymentOptionType,
      payload: {
        ...paymentOption,
        [changedValue]: selectedOption,
      },
    });
  };

  return (
    <Container>
      <span className="input-label">
        {label.text}
        {label.optional ? <span className="optional"> (Opcional)</span> : ""}
      </span>

      <Select
        options={options}
        value={paymentOption[changedValue] || options[0]}
        styles={CustomSelectStyles}
        onChange={handleChange}
      />
    </Container>
  );
};

export default CustomSelect;
