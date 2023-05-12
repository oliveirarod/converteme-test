// Hooks
import { useState } from "react";

// Styles
import { Container } from "./ChargeFormStyle";

// Components
import ChargeValueInput from "../PrefixInput/PrefixInput";
import CostumTextArea from "../CustomTextArea/CostumTextArea";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import InCashOption from "../PaymentOptions/InCashOption";
import SignatureOption from "../PaymentOptions/SignatureOption";
import FormBlock from "./FormBlock";
import PaymentMethods from "../PaymentMethods/PaymentMethods";

const ChargeForm = () => {
  const [isSignatureSelected, setIsSignatureSelected] = useState(false);

  return (
    <Container>
      <FormBlock title="O que cobrar?">
        <ChargeValueInput />

        <CostumTextArea placeholder="A descrição informada será impressa na fatura." />
      </FormBlock>

      <FormBlock title="Qual será a forma de pagamento?">
        <CustomSwitch
          value={isSignatureSelected}
          setValue={setIsSignatureSelected}
        />

        <div className="payment-info-text">
          O valor será cobrado apenas uma vez, podendo ser parcelado conforme
          definido abaixo.
        </div>
      </FormBlock>

      {isSignatureSelected ? <SignatureOption /> : <InCashOption />}

      {/* TODO: Criar context para as opções adicionais */}
      <FormBlock title="Qual será a forma de pagamento?">
        <PaymentMethods />
      </FormBlock>
    </Container>
  );
};

export default ChargeForm;
