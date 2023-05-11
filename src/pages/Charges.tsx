// Contexts
import { useStepperContext } from "../context/StepperContext";

// Components
import ChargeForm from "../components/Forms/ChargeForm/ChargeForm";
import PageContent from "../components/PageContent/PageContent";
import Stepper from "../components/Stepper/Stepper";

// Models
import { Step } from "../models/Step";

// Styles
import { ChargeContainer, OutOfScopeMessage } from "./ChargesStyle";

const Charges = () => {
  const steps: Step[] = [
    { label: "Dados da cobrança" },
    { label: "Juros e Multa" },
    { label: "Dados do cliente" },
    { label: "Resumo" },
  ];

  const { currentStep } = useStepperContext();

  const handleStepContent = () =>
    currentStep === 0 ? (
      <ChargeForm />
    ) : (
      <OutOfScopeMessage>
        <span>Fora do escopo do teste...</span>
      </OutOfScopeMessage>
    );

  return (
    <ChargeContainer>
      <PageContent pageName="Cobrança">
        <div className="stepper-container">
          <Stepper steps={steps} />
        </div>

        {handleStepContent()}
      </PageContent>
    </ChargeContainer>
  );
};

export default Charges;
