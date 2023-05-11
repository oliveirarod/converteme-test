import { createContext, useContext, useState } from "react";

type StepperProviderProps = {
  children: React.ReactNode;
};

type StepperContextType = {
  currentStep: number;
  setCurrentStep: (value: number) => void;
};

const Stepper = createContext<StepperContextType>({
  currentStep: 0,
  setCurrentStep: () => {},
});

export const StepperContextProvider = ({ children }: StepperProviderProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Stepper.Provider value={{ currentStep, setCurrentStep }}>{children}</Stepper.Provider>
  );
};

export const useStepperContext = () => {
  return useContext(Stepper);
};
