// Hooks
import { useState } from "react";

// Components
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";

// Models
import { SelectOption } from "../../../models/SelectOption";

// Styles
import { Container } from "./InCashOptionStyle";

const InCashOption = () => {
  const defaultInstallment = { label: "À vista (R$ 150,00)", value: "1" };

  const [installment, setInstallment] = useState(defaultInstallment);
  const [chargeDate, setChargeDate] = useState(new Date());

  const installmentOptions: SelectOption[] = [
    defaultInstallment,
    { label: "2x (R$ 75,00)", value: "2" },
    { label: "3x (R$ 50,00)", value: "3" },
    { label: "5x (R$ 30,00)", value: "5" },
    { label: "10x (R$ 15,00)", value: "10" },
  ];

  return (
    <Container>
      <CustomSelect
        label={{ text: "Parcelamento" }}
        value={installment}
        setValue={setInstallment}
        options={installmentOptions}
      />

      <CustomInput
        label="Vencimento da cobrança"
        value={chargeDate}
        setValue={setChargeDate}
      />
    </Container>
  );
};

export default InCashOption;
