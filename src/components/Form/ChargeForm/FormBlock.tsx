import { ReactNode } from "react";
import { Container } from "./FormBlockStyle";

interface FormBlocksProps {
  children: ReactNode;
  title: string;
}

const FormBlock = ({ children, title }: FormBlocksProps) => {
  return (
    <Container>
      <div className="dark-form-text">{title}</div>

      {children}
    </Container>
  );
};

export default FormBlock;
