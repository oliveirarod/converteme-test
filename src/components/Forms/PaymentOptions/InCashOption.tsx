import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";

const InCashOption = () => {
  const [chargeDate, setChargeDate] = useState("");

  return (
    <div>
      <CustomInput label="Vencimento da cobrança" value={chargeDate} setValue={setChargeDate} />
    </div>
  );
};

export default InCashOption;
