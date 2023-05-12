// Hooks
import { useState } from "react";
import { useChargeForm } from "../../../context/ChargeFormContext";

// Components
import CustomDateInput from "../CustomDateInput/CustomDateInput";
import CustomSelect from "../CustomSelect/CustomSelect";

// Models
import { SelectOption } from "../../../models/SelectOption";

// Styles
import { Container } from "./InCashOptionStyle";

const InCashOption = () => {
  const defaultInstallment = { label: "À vista (R$ 150,00)", value: "1" };

  const [installment, setInstallment] = useState(defaultInstallment);
  const [chargeDate, setChargeDate] = useState(new Date());

  const { inCashOrInstallment } = useChargeForm();

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

      <CustomDateInput
        label="Vencimento da cobrança"
        paymentOptionType="SET_IN_CASH_OR_INSTALLMENT"
        paymentOption={inCashOrInstallment}
        changedValue="chargeDueDate"
      />
    </Container>
  );
};

export default InCashOption;
