// Context
import { useStepperContext } from "../../context/StepperContext";

// Styles
import { Container } from "./StepperControlsStyle";

type StepperControlsProps = {
  stepperLength: number;
};

const StepperControls = ({ stepperLength }: StepperControlsProps) => {
  const { currentStep, setCurrentStep } = useStepperContext();

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <Container>
      {currentStep <= stepperLength - 1 && (
        <button className="primary-button" onClick={() => nextStep()} disabled={currentStep === stepperLength - 1}>
          {currentStep === stepperLength - 1 ? "Concluir" : "Avançar"}
        </button>
      )}
    </Container>
  );
};

export default StepperControls;
