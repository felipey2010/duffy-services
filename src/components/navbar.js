import logo from "../images/duffy.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul className="nav-container">
        <li className="nav-links">
          <a href="#home" className="nav-link-a">
            Home
          </a>
        </li>
        <li className="nav-links">
          <a href="#services" className="nav-link-a">
            Services
          </a>
        </li>
        <li className="nav-links">
          <a href="#" className="nav-link-a">
            Websites
          </a>
        </li>
        <li className="nav-links">
          <a href="#" className="nav-link-a">
            About
          </a>
        </li>
        <li className="nav-links">
          <a href="#" className="nav-link-a">
            Contact
          </a>
        </li>
        <li className="nav-links">
          <a href="#" className="nav-link-a">
            Join Course
          </a>
        </li>
      </ul>
    </div>
  );
}
