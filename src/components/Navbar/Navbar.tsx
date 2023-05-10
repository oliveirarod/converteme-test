// Styles
import { NavbarContainer } from "./NavbarStyle";

// Icons/Images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/mock-profile-image.jpg';

const Navbar = () => {
  return (
    <NavbarContainer>
      <span className="logo">converte.me</span>

      <div className="icons flex-center">
        <span>
					<FontAwesomeIcon icon={faBell} />
        </span>

        <span>
					<FontAwesomeIcon icon={faCircleQuestion} />
        </span>

        <span>
          <img src={profileImage} alt="Profile" />
        </span>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
