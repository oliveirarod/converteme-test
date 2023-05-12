// Models
import { Menu } from "../../models/Menu";

// Styles
import { Container } from "./SidebarStyle";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPen } from "@fortawesome/free-solid-svg-icons";
import menuIcon from "../../assets/icons/menu-icon.svg";
import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import shoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";
import inventoryIcon from "../../assets/icons/inventory-icon.svg";
import chargesIcon from "../../assets/icons/charges-icon.svg";
import virtualBankIcon from "../../assets/icons/virtual-bank-icon.svg";
import clientsIcon from "../../assets/icons/clients-icon.svg";
import settingsIcon from "../../assets/icons/settings-icon.svg";
import personIcon from "../../assets/icons/person-icon.svg";
import helpIcon from "../../assets/icons/help-icon.svg";
import { useState } from "react";

const menus: Menu[] = [
  { name: "Dashboard", icon: dashboardIcon, hasSubItems: false },
  { name: "Minhas Vendas", icon: shoppingCartIcon, hasSubItems: true },
  { name: "Meus Produtos", icon: inventoryIcon, hasSubItems: true },
  { name: "Assinaturas", icon: faPen, hasSubItems: false },
  { name: "Cobrança", icon: chargesIcon, hasSubItems: false },
  { name: "Banco Virtual", icon: virtualBankIcon, hasSubItems: true },
  { name: "Clientes", icon: clientsIcon, hasSubItems: false },
  { name: "Configurações", icon: settingsIcon, hasSubItems: true },
  { name: "Minha Conta", icon: personIcon, hasSubItems: false },
  { name: "Ajuda", icon: helpIcon, hasSubItems: false },
];

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Cobrança");

  const getMenuIcon = (menu: Menu): JSX.Element => {
    if (typeof menu.icon === "string")
      return <img src={menu.icon} alt="Menu-icon" className="menu-icon" />;

    return <FontAwesomeIcon icon={menu.icon} className="menu-icon" />;
  };

  return (
    <Container>
      <div className="menu">
        <img src={menuIcon} alt="Menu" />
      </div>

      {menus.map((menu, index) => {
        const icon = getMenuIcon(menu);

        return (
          <div
            className={`menu ${menu.name === selectedMenu ? "active" : ""}`}
            onClick={() => setSelectedMenu(menu.name)}
            key={index}
          >
            {icon}

            <div className="flex-center">
              <span className="name">{menu.name}</span>

              {menu.hasSubItems && (
                <FontAwesomeIcon icon={faAngleRight} className="sub-items" />
              )}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Sidebar;
