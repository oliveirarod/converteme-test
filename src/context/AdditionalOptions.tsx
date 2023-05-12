import { createContext, useContext, useState } from "react";

interface AdditionalOptionsProviderProps {
  children: React.ReactNode;
}

interface AdditionalOptionsContextType {
  documents: boolean;
  setDocuments: (value: boolean) => void;
  invoice: boolean;
  setInvoice: (value: boolean) => void;
}

const AdditionalOptions = createContext<AdditionalOptionsContextType>({
  documents: false,
  setDocuments: () => {},
  invoice: false,
  setInvoice: () => {},
});

export const AdditionalOptionsContextProvider = ({
  children,
}: AdditionalOptionsProviderProps) => {
  const [documents, setDocuments] = useState(false);
  const [invoice, setInvoice] = useState(false);

  return (
    <AdditionalOptions.Provider
      value={{ documents, setDocuments, invoice, setInvoice }}
    >
      {children}
    </AdditionalOptions.Provider>
  );
};

export const useAdditionalOptionsContext = () => {
  return useContext(AdditionalOptions);
};
