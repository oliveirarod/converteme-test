import { useChargeForm } from "../../../context/ChargeFormContext";
import { Container } from "./PrefixInputStyle";
import { NumericFormat } from "react-number-format";

const PrefixInput = () => {
  const { dispatch } = useChargeForm();

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
            dispatch({
              type: "SET_CHARGE_VALUE",
              payload: values.floatValue || 0,
            });
          }}
        />
      </div>
    </Container>
  );
};

export default PrefixInput;
