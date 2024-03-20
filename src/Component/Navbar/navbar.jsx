import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="top-div">
          <li>
            <a href="/" className="logo">
              <img src="https://developer.fedex.com/api/content/dam/fedex-com/irc/leftnav/white.png"></img>
            </a>
          </li>

          <li>
            <p className="portal">Developer Portal</p>
          </li>
          <li className="signUpComponent">
            <a href="/sign-up" className="signup-redirect">
              <FaRegUserCircle className="signup-icon" />
              <span className="signup-text">Sign Up or Log In</span>
            </a>
          </li>
        </div>
        <hr className="top-hr"></hr>
        <div className="middle-navbar">
          <li className="menu">Menu</li>
          <a href="https://developer.fedex.com/api/en-my/get-started.html">
            <li className="started">Getting Started</li>
          </a>
          <a href="/">
            <li className="catalog">API Catalog</li>
          </a>
          <a href="https://developer.fedex.com/api/en-my/guides.html">
            <li className="guides">Guides</li>
          </a>
          <a href="https://developer.fedex.com/api/en-my/announcements.html">
            <li className="announcements">Announcements</li>
          </a>
          <a href="https://developer.fedex.com/api/en-my/certification.html">
            <li className="api-certification">API Certification</li>
          </a>
          <a href="https://developer.fedex.com/api/en-my/support.html">
            <li className="support">Support</li>
          </a>
        </div>
        <hr className="bottom-hr"></hr>
        <div className="bottom-div">
          <li className="products">Other Products</li>
          <a href="https://www.fedex.com/en-us/developer/web-services.html">
            <li className="web-service">FedEx Web Services®</li>
          </a>
          <a href="https://www.fedex.com/en-us/developer/ship-manager-server.html">
            <li className="ship-manager">
              FedEx Ship Manager® <br />
              Server
            </li>
          </a>
        </div>
      </div>
    </nav>
  );
}
