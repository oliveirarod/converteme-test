// Hooks
import { useState } from "react";

// Styles
import { ChargeFormContainer } from "./ChargeFormStyle";

// Components
import CustomInput from "../PrefixInput/PrefixInput";
import CostumTextArea from "../CustomTextArea/CostumTextArea";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import InCashOption from "../PaymentOptions/InCashOption";
import SignatureOption from "../PaymentOptions/SignatureOption";

const ChargeForm = () => {
  const [chargeValue, setChargeValue] = useState(0);
  const [description, setDescription] = useState("");
  const [isSignatureSelected, setIsSignatureSelected] = useState(false);

  console.log(chargeValue);

  return (
    <ChargeFormContainer>
      <div className="dark-form-text">O que cobrar?</div>

      <CustomInput setValue={setChargeValue} />
      <CostumTextArea
        placeholder="A descrição informada será impressa na fatura."
        value={description}
        setValue={setDescription}
      />

      <div className="dark-form-text">Qual será a forma de pagamento?</div>

      <CustomSwitch
        value={isSignatureSelected}
        setValue={setIsSignatureSelected}
      />

      <div className="payment-info-text">
        O valor será cobrado apenas uma vez, podendo ser parcelado conforme
        definido abaixo.
      </div>

      {isSignatureSelected ? <SignatureOption /> : <InCashOption />}
    </ChargeFormContainer>
  );
};

export default ChargeForm;
