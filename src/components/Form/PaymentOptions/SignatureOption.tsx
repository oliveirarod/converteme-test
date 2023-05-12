// Hooks
import { useState } from "react";
import { useChargeForm } from "../../../context/ChargeFormContext";

// Components
import CustomDateInput from "../CustomDateInput/CustomDateInput";
import CustomSelect from "../CustomSelect/CustomSelect";

// Styles
import { Container } from "./SignatureOptionStyle";

// Models
import { SelectOption } from "../../../models/SelectOption";

const SignatureOption = () => {
  const defaultChargeFrequency = { label: "Semanal", value: "weekly" };
  const endOfSubsNotSelected = { label: "Sem data definida", value: "0" };

  const [chargeFrequency, setChargeFrequency] = useState(
    defaultChargeFrequency
  );
  const [endOfSubs, setEndOfSubs] = useState(endOfSubsNotSelected);
  const [firstCharge, setFirstCharge] = useState(new Date());

  const { signature } = useChargeForm();

  const chargeFrequencyOptions: SelectOption[] = [
    defaultChargeFrequency,
    { label: "Mensal", value: "monthly" },
    { label: "Semestral", value: "semester" },
    { label: "Anual", value: "yearly" },
  ];

  const endOfSubsOptions: SelectOption[] = [
    endOfSubsNotSelected,
    { label: "1 ano", value: "1" },
    { label: "2 anos", value: "2" },
    { label: "3 anos", value: "3" },
  ];

  return (
    <Container>
      <CustomSelect
        label={{ text: "Frequência da cobrança" }}
        value={chargeFrequency}
        setValue={setChargeFrequency}
        options={chargeFrequencyOptions}
      />

      <CustomDateInput
        label="Vencimento da 1° cobrança"
        paymentOptionType="SET_SIGNATURE"
        paymentOption={signature}
        changedValue="firstChargeDueDate"
      />

      <CustomSelect
        label={{ text: "Fim da assinatura", optional: true }}
        value={endOfSubs}
        setValue={setEndOfSubs}
        options={endOfSubsOptions}
      />
    </Container>
  );
};

export default SignatureOption;
