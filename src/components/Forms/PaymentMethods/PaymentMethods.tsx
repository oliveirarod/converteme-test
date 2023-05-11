// Components
import MethodBlock from "./MethodBlock";
import { Container } from "./PaymentMethodsStyle";

const PaymentMethods = () => {
  const mockedDetails: string[] = [
    "Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento.",
    "Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento.",
  ];

  return (
    <Container>
      <MethodBlock
        name="Boleto Bancário"
        value="148,01"
        details={mockedDetails}
      />

      <MethodBlock
        name="Pix"
        value="148,01"
        details={mockedDetails}
      />

      <MethodBlock
        name="Cartão de Crédito"
        value="145,03"
        details={mockedDetails}
      />
    </Container>
  );
};

export default PaymentMethods;
