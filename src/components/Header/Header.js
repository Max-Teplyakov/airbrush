import { Link } from "react-router-dom";
import icon from "../../images/tellegram.svg";
import logo from "../../images/logo.jpg";
import phone from "../../images/phoneheader.png";
import Navbar from "./Navbar/Navbar.js";

function Header() {
  return (
    <header className="header">
      <div className="header__contain">
        <Link className="header__logo-link" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Navbar />
        <ul className="header__contacts">
          <li className="header__contacts-link">
            <a
              className="header__contacts-phone"
              href="tel:+79871578318"
              target="_blanck"
            >
              <img src={phone} className="header__contacts-icon" />
            </a>
          </li>
          <li className="header__contacts-link">
            <a
              className="header__contacts-telega"
              href="https://t.me/max_tepl"
              target="_blanck"
            >
              <img src={icon} className="header__contacts-icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
