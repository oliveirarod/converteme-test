import { Container } from "./CustomSwitchStyle";

interface CustomSwitchProps {
  value: boolean;
  setValue: (value: boolean) => void;
};

const CustomSwitch = ({ value, setValue }: CustomSwitchProps) => {
  return (
    <Container>
      <div
        className={`
					flex-center 
					${!value && "active"}
				`}
        onClick={() => setValue(false)}
      >
        <span>À vista ou parcelado</span>
      </div>

      <div
        className={`
					flex-center 
					${value && "active"}
				`}
        onClick={() => setValue(true)}
      >
        <span>Assinatura</span>
      </div>
    </Container>
  );
};

export default CustomSwitch;
