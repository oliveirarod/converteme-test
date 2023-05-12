export type Action =
| { type: "SET_CHARGE_VALUE"; payload: number }
| { type: "SET_CHARGE_DESC"; payload: string }
| { type: "SET_IN_CASH_OR_INSTALLMENT"; payload: InCashOrInstallment }
| { type: "SET_SIGNATURE"; payload: Signature }
| { type: "SET_PAYMENT_METHODS"; payload: PaymentMethod };

export interface InCashOrInstallment {
  installment: number | null;
  chargeDueDate: Date | null;
};

export interface Signature {
  chargeFrequency: string | null;
  firstChargeDueDate: Date | null;
  endOfSignature: string | null;
};

export interface PaymentMethod {
  bankSlip: boolean;
  pix: boolean;
  creditCard: boolean;
};

export interface ChargeForm {
  chargeValue: number;
  setChargeValue: (value: number) => void;
  chargeDesc: string;
  setChargeDesc: (value: string) => void;
  inCashOrInstallment: InCashOrInstallment;
  setInCashOrInstallment: (value: InCashOrInstallment) => void;
  signature: Signature;
  setSignature: (value: Signature) => void;
  paymentMethods: PaymentMethod;
  setPaymentMethods: (value: PaymentMethod) => void;
	dispatch: React.Dispatch<Action>;
};