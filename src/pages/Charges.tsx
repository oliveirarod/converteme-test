// Contexts
import { useStepperContext } from "../context/StepperContext";

// Components
import ChargeForm from "../components/Form/ChargeForm/ChargeForm";
import PageContent from "../components/PageContent/PageContent";
import Stepper from "../components/Stepper/Stepper";

// Models
import { Step } from "../models/Step";

// Styles
import { Container, OutOfScopeMessage } from "./ChargesStyle";
import StepperControls from "../components/Stepper/StepperControls";

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
    <Container>
      <PageContent pageName="Cobrança">
        <div className="stepper-container">
          <Stepper steps={steps} />
        </div>

        {handleStepContent()}

        <StepperControls />
      </PageContent>
    </Container>
  );
};

export default Charges;
