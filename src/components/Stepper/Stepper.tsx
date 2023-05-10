import { useState } from "react";
import { Circles, Connections, StepperContainer } from "./StepperStyle";
import { Step } from "../../models/Step";

type Props = {
  steps: Step[];
};

function Stepper({ steps }: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  const circles = steps.map((step, index) => {
    const isActive = index === currentStep;
    const isCompleted = index < currentStep;

    return (
      <div className="stepper flex-center" key={index}>
        <div
          className={`
						circle
						flex-center
						${isActive ? "active" : ""} 
						${isCompleted ? "completed" : ""}
					`}
          onClick={() => setCurrentStep(index)}
        >
          <span className="number">{index + 1}</span>
        </div>

        <div className="label flex-center">
          <span>{step.label}</span>
        </div>
      </div>
    );
  });

  const connections = steps.map((step, index) => {
    if (index === 0) {
      return null;
    }

    const isCompleted = index <= currentStep;

    return (
      <div
        key={index}
        className={`
					connection
					${isCompleted ? "completed" : ""}
				`}
      />
    );
  });

  return (
    <StepperContainer>
      <Circles>{circles}</Circles>
      <Connections>{connections}</Connections>
    </StepperContainer>
  );
}

export default Stepper;
