// Hooks
import { useAdditionalOptionsContext } from "../../../context/AdditionalOptions";

// Components
import MethodBlock from "./MethodBlock";

// Styles
import { Container } from "./PaymentMethodsStyle";

const mockedDetails: string[] = [
  "Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento.",
  "Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento.",
];

const PaymentMethods = () => {
  const { documents } = useAdditionalOptionsContext();

  return (
    <Container>
      <MethodBlock
        name="Boleto Bancário"
        value="148,01"
        details={mockedDetails}
        paymentMethod={"bankSlip"}
      />

      {!documents && (
        <MethodBlock
          name="Pix"
          value="148,01"
          details={mockedDetails}
          paymentMethod={"pix"}
        />
      )}

      <MethodBlock
        name="Cartão de Crédito"
        value="145,03"
        details={mockedDetails}
        paymentMethod={"creditCard"}
      />
    </Container>
  );
};

export default PaymentMethods;
