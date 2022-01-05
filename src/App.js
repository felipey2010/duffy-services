import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/navbar";
import { FaShoppingCart } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import Typed from "react-typed";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [activeButton, setActiveButton] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const sections = document.querySelectorAll("section");
  const nav = document.querySelectorAll("ul li a");

  if (openNav) {
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes";
  }

  window.addEventListener("scroll", checkActiveLink());

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }

  function goUp() {
    window.scrollTo(0, 0);
  }

  function checkActiveLink() {
    let current = "";
    const navSection = document.querySelector(".nav-section");

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      // const sectionHeight = section.clientHeight;
      if (
        parseInt(document.body.getBoundingClientRect().top) * -1 >=
        sectionTop
      ) {
        current = section.getAttribute("id");
      }

      if (current === "home") {
        navSection.classList.add("border-left-right-primary");
        navSection.classList.remove("border-left-right-transparent");
      } else {
        navSection.classList.remove("border-left-right-primary");
        navSection.classList.add("border-left-right-transparent");
      }
    });

    nav.forEach(li => {
      li.classList.remove("active-link");

      if (li.classList.contains(current)) {
        li.classList.add("active-link");
      }
    });
  }

  return (
    <div className="App">
      <div className="nav-section border-left-right">
        <Navbar setOpenNav={setOpenNav} openNav={openNav} />
      </div>
      <section className="head-section" id="home">
        <div className="header-text-container">
          <h3>Welcome</h3>
          <h1>Domain / Hosting / Websites</h1>
          <div className="separator"></div>
          <div className="header-buttons">
            <button className="header-btn">Contact us</button>
            <button className="header-btn">Learn more</button>
            <button className="header-btn">Our plans</button>
          </div>
        </div>
      </section>
      <section className="second-section" id="services">
        <h2>Our Services</h2>
        <p>Get your own website</p>
        <hr />
        <div className="services-container">
          <div className="services-grid-container">
            <div className="services-grid-item">
              <div className="grid-item-icon">
                <FaShoppingCart />
              </div>
              <h5 className="grid-item-title">Buy domain with 100% security</h5>
              <p className="grid-item-description">
                Buy a domain name for your website
              </p>
              <button className="grid-item-button">Buy domain</button>
            </div>

            <div className="services-grid-item">
              <div className="grid-item-icon">
                <FaShoppingCart />
              </div>
              <h5 className="grid-item-title">Apply for batch</h5>
              <p className="grid-item-description">
                Apply for a verified web development batch
              </p>
              <button className="grid-item-button">Apply for batch</button>
            </div>

            <div className="services-grid-item">
              <div className="grid-item-icon">
                <FaShoppingCart />
              </div>
              <div className="grid-item-title">
                <h5 className="grid-item-title">Reserve your domain</h5>
              </div>
              <p className="grid-item-description">
                Reserve your domain for future purchases
              </p>
              <button className="grid-item-button">Reserve domain</button>
            </div>

            <div className="services-grid-item">
              <div className="grid-item-icon">
                <FaShoppingCart />
              </div>
              <h5 className="grid-item-title">Start a free html css course</h5>
              <p className="grid-item-description">Check our various courses</p>
              <button className="grid-item-button">Start course</button>
            </div>

            <div className="services-grid-item">
              <div className="grid-item-icon">
                <FaShoppingCart />
              </div>
              <h5 className="grid-item-title">Join free class</h5>
              <p className="grid-item-description">Check our free courses</p>
              <button className="grid-item-button">Check courses</button>
            </div>

            <div className="services-grid-item">
              <div className="grid-item-icon">
                <FaShoppingCart />
              </div>
              <h5 className="grid-item-title">Register for free mentoring</h5>
              <p className="grid-item-description">
                Free mentorship registration
              </p>
              <button className="grid-item-button">Register now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about-us">
        <h2>About Us</h2>
        <p>
          Our company is concerned about serving customers with the best quality
          of products.
        </p>
        <div className="about-inner">
          <h4>Our services are</h4>
          <span>
            <Typed
              strings={["reliable", "competitive", "infallible"]}
              className="animated-typing"
              typeSpeed={120}
              backSpeed={120}
              backDelay={1000}
              startDelay={1000}
              loop></Typed>
          </span>
        </div>
      </section>
      {activeButton && (
        <a href="#home" className="go-up-div" id="upBtn" onClick={() => goUp()}>
          <GoArrowUp className="go-up-icon" />
        </a>
      )}

      {openNav && (
        <div className="mobile-container">
          <div className="mobile-container-icon">
            <AiOutlineClose onClick={() => setOpenNav(!openNav)} />
          </div>
          <ul className="mobile-container-links">
            <li
              className="mobile-nav-links"
              onClick={() => {
                setOpenNav(false);
                checkActiveLink();
              }}>
              <a href="#home" className="nav-link-a home active-link">
                Home
              </a>
            </li>
            <li
              className="mobile-nav-links"
              onClick={() => {
                setOpenNav(false);
                checkActiveLink();
              }}>
              <a href="#services" className="nav-link-a services">
                Services
              </a>
            </li>
            <li
              className="mobile-nav-links"
              onClick={() => {
                setOpenNav(false);
                checkActiveLink();
              }}>
              <a href="#about-us" className="nav-link-a about-us">
                About
              </a>
            </li>
            <li
              className="mobile-nav-links"
              onClick={() => {
                setOpenNav(false);
                checkActiveLink();
              }}>
              <a href="#contact" className="nav-link-a contact">
                Contact
              </a>
            </li>
            <li
              className="mobile-nav-links"
              onClick={() => {
                setOpenNav(false);
                checkActiveLink();
              }}>
              <a href="#join-course" className="nav-link-a join-course">
                Join Course
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
