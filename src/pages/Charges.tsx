// Components
import ChargeForm from "../components/Forms/ChargeForm/ChargeForm";
import PageContent from "../components/PageContent/PageContent";
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
      <PageContent pageName="Cobrança">
        <div className="stepper-container">
          <Stepper steps={steps} />
        </div>
        <ChargeForm />
      </PageContent>
    </ChargeContainer>
  );
};

export default Charges;
