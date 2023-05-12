// Contexts
import { useStepperContext } from "../context/StepperContext";

// Components
import ChargeForm from "../components/Form/ChargeForm/ChargeForm";
import PageContent from "../components/PageContent/PageContent";
import Stepper from "../components/Stepper/Stepper";
import ChargesOptions from "../components/ChargesOptions/ChargesOptions";
import StepperControls from "../components/Stepper/StepperControls";

// Models
import { Step } from "../models/Step";

// Styles
import { Container, OutOfScopeMessage } from "./ChargesStyle";

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

        <div className="form-container">
          {handleStepContent()}

          <div className="aditional-options">
            <ChargesOptions />
          </div>
        </div>

        <StepperControls stepperLength={steps.length} />
      </PageContent>
    </Container>
  );
};

export default Charges;
