// Hooks
import { useState } from "react";

// Styles
import { CollapsibleBlock } from "./MethodBlockStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface MethodBlockProps {
  name: string;
  value: string;
  details: string[];
};

const MethodBlock = ({ name, value, details }: MethodBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(true);

  const toggleOpen = (event: React.MouseEvent) => {
		event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const toggleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <CollapsibleBlock onClick={toggleSelect}>
      <div className="collapsible-block-header">
        <div className="method-name flex-center">
          <div className={`circle ${isSelected && 'selected'}`}></div>
          <span>{name}</span>
        </div>

        <div className="method-value">
          <span className="text">Valor líquido por parcela: R$ {value}</span>

          {isOpen ? (
            <FontAwesomeIcon icon={faAngleUp} onClick={toggleOpen} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} onClick={toggleOpen} />
          )}
        </div>
      </div>

      {isOpen && (
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
