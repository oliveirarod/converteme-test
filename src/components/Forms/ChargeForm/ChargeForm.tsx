// Hooks
import { useState } from "react";

// Styles
import { ChargeFormContainer } from "./ChargeFormStyle";

// Components
import CustomInput from "../PrefixInput/PrefixInput";

const ChargeForm = () => {
  const [changeValue, setChargeValue] = useState(0);
  console.log(changeValue);

  return (
    <ChargeFormContainer>
      <CustomInput value={changeValue} setValue={setChargeValue} />
    </ChargeFormContainer>
  );
};

export default ChargeForm;
