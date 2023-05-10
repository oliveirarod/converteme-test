// Hooks
import { useState } from "react";

// Styles
import { ChargeFormContainer } from "./ChargeFormStyle";

// Components
import CustomInput from "../PrefixInput/PrefixInput";
import CostumTextArea from "../CustomTextArea/CostumTextArea";

const ChargeForm = () => {
  const [chargeValue, setChargeValue] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <ChargeFormContainer>
      <CustomInput value={chargeValue} setValue={setChargeValue} />
      <CostumTextArea
        placeholder="A descrição informada será impressa na fatura."
        value={description}
        setValue={setDescription}
      />
    </ChargeFormContainer>
  );
};

export default ChargeForm;
