import { ChangeEvent } from "react";
import { useChargeForm } from "../../../context/ChargeFormContext";
import { Container } from "./CustomDateInputStyle";

interface CustomDateInputProps {
  label: string;
  paymentOptionType: any;
  paymentOption: any;
  changedValue: string;
}

const CustomDateInput = ({
  label,
  paymentOptionType,
  paymentOption,
  changedValue,
}: CustomDateInputProps) => {
  const { dispatch } = useChargeForm();

  const handleDate = (
    currentDate: boolean,
    maxYear: number = 0,
    valueDate?: Date
  ) => {
    const today = valueDate ? valueDate : new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    let year = today.getFullYear();

    if (!currentDate) {
      year = year + maxYear;
    }

    return `${year}-${month}-${day}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    date.setUTCHours(12);

    dispatch({
      type: paymentOptionType,
      payload: {
        ...paymentOption,
        [changedValue]: date,
      },
    });
  };

  return (
    <Container>
      <span className="input-label">{label}</span>

      <input
        type="date"
        min={handleDate(true)}
        max={handleDate(false, 10)}
        value={
          paymentOption[changedValue]
            ? handleDate(false, 0, paymentOption[changedValue])
            : ""
        }
        onChange={handleChange}
        className="custom-form-control-field"
      />
    </Container>
  );
};

export default CustomDateInput;
