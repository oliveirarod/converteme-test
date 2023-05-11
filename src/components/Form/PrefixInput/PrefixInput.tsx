import { Container } from "./PrefixInputStyle";
import { NumericFormat } from "react-number-format";

type PrefixInputProps = {
  setValue: (value: number) => void;
};

const PrefixInput = ({ setValue }: PrefixInputProps) => {
  return (
    <Container>
      <span className="input-label">Valor da cobrança</span>

      <div className="input-with-prefix">
        <span className="input-prefix flex-center">R$</span>

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
        />
      </div>
    </Container>
  );
};

export default PrefixInput;
