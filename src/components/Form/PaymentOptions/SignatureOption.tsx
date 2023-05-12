// Hooks
import { useChargeForm } from "../../../context/ChargeFormContext";

// Components
import CustomDateInput from "../CustomDateInput/CustomDateInput";
import CustomSelect from "../CustomSelect/CustomSelect";

// Styles
import { Container } from "./SignatureOptionStyle";

// Models
import { SelectOption } from "../../../models/SelectOption";

const SignatureOption = () => {
  const { signature } = useChargeForm();

  const chargeFrequencyOptions: SelectOption[] = [
    { label: "Semanal", value: "weekly" },
    { label: "Mensal", value: "monthly" },
    { label: "Semestral", value: "semester" },
    { label: "Anual", value: "yearly" },
  ];

  const endOfSubsOptions: SelectOption[] = [
    { label: "Sem data definida", value: "0" },
    { label: "1 ano", value: "1" },
    { label: "2 anos", value: "2" },
    { label: "3 anos", value: "3" },
  ];

  return (
    <Container>
      <CustomSelect
        label={{ text: "Frequência da cobrança" }}
        options={chargeFrequencyOptions}
        paymentOptionType="SET_SIGNATURE"
        paymentOption={signature}
        changedValue="chargeFrequency"
      />

      <CustomDateInput
        label="Vencimento da 1° cobrança"
        paymentOptionType="SET_SIGNATURE"
        paymentOption={signature}
        changedValue="firstChargeDueDate"
      />

      <CustomSelect
        label={{ text: "Fim da assinatura", optional: true }}
        options={endOfSubsOptions}
        paymentOptionType="SET_SIGNATURE"
        paymentOption={signature}
        changedValue="endOfSignature"
      />
    </Container>
  );
};

export default SignatureOption;
