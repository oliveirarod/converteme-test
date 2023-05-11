import { CustomInputContainer } from "./CustomInputStyle";

type CustomInputProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const CustomInput = ({ label, value, setValue }: CustomInputProps) => {
  const handleDate = (currentDate: boolean, maxYear: number = 0) => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    let year = today.getFullYear();

    if (!currentDate) {
      year = year + maxYear;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <CustomInputContainer>
      <span className="input-label">{label}</span>

      <input
        type="date"
        min={handleDate(true)}
        max={handleDate(false, 10)}
        className="custom-form-control-field"
      />
    </CustomInputContainer>
  );
};

export default CustomInput;
