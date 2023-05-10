// Components
import Stepper from "../components/Stepper/Stepper";

// Models
import { Step } from "../models/Step";

// Styles
import { ChargeContainer } from "./ChargesStyle";

const Charges = () => {
  const steps: Step[] = [
    { label: "Dados da cobrança" },
    { label: "Juros e Multa" },
    { label: "Dados do cliente" },
    { label: "Resumo" },
  ];

  return (
    <ChargeContainer>
      <Stepper steps={steps} />
    </ChargeContainer>
  );
};

export default Charges;
