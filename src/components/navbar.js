import logo from "../images/duffy.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ openNav, setOpenNav }) {
  return (
    <div className="navbar">
      <a href="#home" className="nav-link-a">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <ul className="nav-container">
        <li className="nav-links">
          <a href="#home" className="nav-link-a home active-link">
            Home
          </a>
        </li>
        <li className="nav-links">
          <a href="#services" className="nav-link-a services">
            Services
          </a>
        </li>
        <li className="nav-links">
          <a href="#about-us" className="nav-link-a about-us">
            About
          </a>
        </li>
        <li className="nav-links">
          <a href="#contact" className="nav-link-a contact">
            Contact
          </a>
        </li>
        <li className="nav-links">
          <a href="#join-course" className="nav-link-a join-course">
            Join Course
          </a>
        </li>
      </ul>
      <div className="mobile-nav-container">
        <GiHamburgerMenu
          className="mobile-nav-icon"
          onClick={() => setOpenNav(!openNav)}
        />
      </div>
    </div>
  );
}
