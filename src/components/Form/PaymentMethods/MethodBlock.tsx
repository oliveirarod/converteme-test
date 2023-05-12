// Hooks
import { useEffect, useState } from "react";
import { useChargeForm } from "../../../context/ChargeFormContext";

// Styles
import { CollapsibleBlock } from "./MethodBlockStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface MethodBlockProps {
  name: string;
  value: string;
  details: string[];
  paymentMethod: string;
}

const MethodBlock = ({
  name,
  value,
  details,
  paymentMethod,
}: MethodBlockProps) => {
  const [method, setMethod] = useState({
    name: "",
    isOpen: false,
    isSelected: true,
  });

  const { dispatch, paymentMethods } = useChargeForm();

  const toggleOpen = (event: React.MouseEvent) => {
    event.stopPropagation();
    setMethod({ ...method, isOpen: !method.isOpen });
  };

  const toggleSelect = () => {
    setMethod({ ...method, isSelected: !method.isSelected });
  };

  useEffect(() => {
    dispatch({
      type: "SET_PAYMENT_METHODS",
      payload: {
        ...paymentMethods,
        [paymentMethod]: method.isSelected,
      },
    });
  }, [method.isSelected]);

  return (
    <CollapsibleBlock onClick={toggleSelect}>
      <div className="collapsible-block-header">
        <div className="method-name flex-center">
          <div className={`circle ${method.isSelected && "selected"}`}></div>
          <span>{name}</span>
        </div>

        <div className="method-value">
          <span className="text">Valor líquido por parcela: R$ {value}</span>

          {method.isOpen ? (
            <FontAwesomeIcon icon={faAngleUp} onClick={toggleOpen} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} onClick={toggleOpen} />
          )}
        </div>
      </div>

      {method.isOpen && (
        <div className="collapsible-block-content" onClick={toggleOpen}>
          {details.map((detail, index) => {
            return <p key={index}>{detail}</p>;
          })}
        </div>
      )}
    </CollapsibleBlock>
  );
};

export default MethodBlock;
