import { createContext, useContext, useReducer } from "react";

// Models
import {
  Action,
  ChargeForm,
  InCashOrInstallment,
  PaymentMethod,
  Signature,
} from "../models/ChargeForm";

interface ChargeFormContextProps {
  children: React.ReactNode;
}

const defaultChargeFormValues: ChargeForm = {
  chargeValue: 0,
  setChargeValue: (value: number) => undefined,
  chargeDesc: "",
  setChargeDesc: (value: string) => undefined,
  inCashOrInstallment: { installment: null, chargeDueDate: null },
  setInCashOrInstallment: (value: InCashOrInstallment) => undefined,
  signature: {
    chargeFrequency: null,
    firstChargeDueDate: null,
    endOfSignature: null,
  },
  setSignature: (value: Signature) => undefined,
  paymentMethods: { bankSlip: true, pix: true, creditCard: true },
  setPaymentMethods: (value: PaymentMethod) => undefined,
  dispatch: () => undefined,
};

const ChargeFormContext = createContext<ChargeForm>(defaultChargeFormValues);

const chargeFormReducer = (state: ChargeForm, action: Action): ChargeForm => {
  switch (action.type) {
    case "SET_CHARGE_VALUE":
      return { ...state, chargeValue: action.payload };
    case "SET_CHARGE_DESC":
      return { ...state, chargeDesc: action.payload };
    case "SET_IN_CASH_OR_INSTALLMENT":
      return { ...state, inCashOrInstallment: action.payload };
    case "SET_SIGNATURE":
      return { ...state, signature: action.payload };
    case "SET_PAYMENT_METHODS":
      return { ...state, paymentMethods: action.payload };
    default:
      throw new Error("Invalid action type");
  }
};

export const ChargeFormProvider = ({ children }: ChargeFormContextProps) => {
  const [formControls, dispatch] = useReducer(
    chargeFormReducer,
    defaultChargeFormValues
  );

  console.log(formControls.paymentMethods);

  return (
    <ChargeFormContext.Provider value={{ ...formControls, dispatch }}>
      {children}
    </ChargeFormContext.Provider>
  );
};

export const useChargeForm = () => useContext(ChargeFormContext);
