// Contexts
import { useChargeForm } from "../../../context/ChargeFormContext";

// Styles
import { Container } from "./CustomTextAreaStyle";

interface CostumTextAreaProps {
  placeholder: string;
}

const CostumTextArea = ({ placeholder }: CostumTextAreaProps) => {
  const { dispatch, chargeDesc } = useChargeForm();

  return (
    <Container>
      <label htmlFor="chargeDesc">
        Descrição da cobrança
        <span className="light-text"> (Opcional)</span>
      </label>

      <textarea
        name="chargeDesc"
        placeholder={placeholder}
        className="textarea-field"
        style={{ resize: "none" }}
        value={chargeDesc}
        onChange={(e) =>
          dispatch({
            type: "SET_CHARGE_DESC",
            payload: e.target.value,
          })
        }
        rows={6}
      />
    </Container>
  );
};

export default CostumTextArea;
