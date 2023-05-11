import { ReactNode } from "react";
import { FormBlockContainer } from "./FormBlockStyle";

interface FormBlocksProps {
  children: ReactNode;
  title: string;
}

const FormBlock = ({ children, title }: FormBlocksProps) => {
  return (
    <FormBlockContainer>
      <div className="dark-form-text">{title}</div>

      {children}
    </FormBlockContainer>
  );
};

export default FormBlock;
