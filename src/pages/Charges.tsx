// Components
import Stepper from "../components/Stepper/Stepper";

// Models
import { Step } from "../models/Step";

const Charges = () => {
  const steps: Step[] = [
    { label: "Dados da cobrança" },
    { label: "Juros e Multa" },
    { label: "Dados do cliente" },
    { label: "Resumo" },
  ];

  return (
    <div>
      <Stepper steps={steps} />
    </div>
  );
};

export default Charges;
