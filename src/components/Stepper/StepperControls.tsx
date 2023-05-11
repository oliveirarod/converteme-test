import { useStepperContext } from "../../context/StepperContext";

const StepperControls = () => {
	const { currentStep, setCurrentStep } = useStepperContext();

  return (
    <div className="stepper-actions">
      <button onClick={() => setCurrentStep(currentStep - 1)}>Voltar</button>
      <button>Avançar</button>
    </div>
  );
};

export default StepperControls;
