import { useState } from "react";
import { InputContainer } from "./PrefixInputStyle";
import { NumericFormat } from "react-number-format";

type InputProps = {
  value: number;
  setValue: (value: number) => void;
};

const PrefixInput = ({ value, setValue }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer>
      <span className="input-label">Valor da cobrança</span>

      <div className="input-with-prefix">
        <span
          className={`
            input-prefix 
            flex-center
            ${value || isFocused ? "highlight-input-prefix" : ""}
          `}
        >
          R$
        </span>

        <NumericFormat
          placeholder="0,00"
          decimalSeparator=","
          thousandSeparator="."
          allowNegative={false}
          decimalScale={2}
          fixedDecimalScale={false}
          inputMode="numeric"
          required
          className="input-field"
          onValueChange={(values) => {
            setValue(values.floatValue || 0);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </InputContainer>
  );
};

export default PrefixInput;
