import { Container } from "./CustomTextAreaStyle";

type CostumTextAreaProps = {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
};

const CostumTextArea = ({
  value,
  placeholder,
  setValue,
}: CostumTextAreaProps) => {
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={6}
      />
    </Container>
  );
};

export default CostumTextArea;
