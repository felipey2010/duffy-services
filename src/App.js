import "./styles/App.css";
import Navbar from "./components/navbar";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <section className="head-section" id="home">
        <div className="nav-section">
          <Navbar />
        </div>
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
    </div>
  );
}

export default App;
