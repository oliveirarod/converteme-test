import { NavbarContainer } from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavbarContainer>
      <span className="logo">converte.me</span>

      <div className="icons">
        <span>
          <i className="fa fa-bell"></i>
        </span>
        <span>
          <i className="fa fa-info"></i>
        </span>
        <span>
          <img src="profile.jpg" alt="Profile" />
        </span>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
