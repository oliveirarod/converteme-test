// Contexts
import { ChargeFormProvider } from "../context/ChargeFormContext";
import { useAdditionalOptionsContext } from "../context/AdditionalOptions";

// Hooks
import { useStepperContext } from "../context/StepperContext";

// Components
import ChargeForm from "../components/Form/ChargeForm/ChargeForm";
import PageContent from "../components/PageContent/PageContent";
import Stepper from "../components/Stepper/Stepper";
import ChargesOptions from "../components/ChargesOptions/ChargesOptions";
import StepperControls from "../components/Stepper/StepperControls";

// Styles
import { Container, OutOfScopeMessage } from "./ChargesStyle";
import { useEffect, useState } from "react";

const defaultSteps = [
  { label: "Dados da cobrança" },
  { label: "Juros e Multa" },
  { label: "Dados do cliente" },
  { label: "Resumo" },
];

const Charges = () => {
  const [steps, setSteps] = useState(defaultSteps);

  const { currentStep } = useStepperContext();
  const { documents } = useAdditionalOptionsContext();

  useEffect(() => {
    const newSteps = [...defaultSteps];

    documents && newSteps.splice(2, 0, { label: "Documentos" });

    setSteps(newSteps);
  }, [documents]);

  const handleStepContent = () =>
    currentStep === 0 ? (
      <>
        <ChargeForm />

        <div className="aditional-options">
          <ChargesOptions />
        </div>
      </>
    ) : (
      <OutOfScopeMessage>
        <span>Fora do escopo do teste...</span>
      </OutOfScopeMessage>
    );

  return (
    <Container>
      <PageContent pageName="Cobrança">
        <ChargeFormProvider>
          <div className="stepper-container">
            <Stepper steps={steps} />
          </div>

          <div className="form-container">{handleStepContent()}</div>

          <StepperControls stepperLength={steps.length} />
        </ChargeFormProvider>
      </PageContent>
    </Container>
  );
};

export default Charges;
