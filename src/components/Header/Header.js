import { Link, useLocation } from "react-router-dom";
import icon from "../../images/tellegram.svg";
import logo from "../../images/logo.png";
import phone from "../../images/phoneheader.png";
import Navbar from "./Navbar/Navbar.js";
import { useState } from "react";

function Header() {
  // const location = useLocation();
  const [isBurger, setIsBurger] = useState(false);

  function handleOpenBurger() {
    setIsBurger(!isBurger);
  }
  return (
    <header className="header">
      <div className="header__contain">
        <Link className="header__logo-link" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Navbar isBurger={isBurger} />

        <ul className="header__contacts">
          <li className="header__contacts-link">
            <a
              className="header__contacts-phone"
              href="tel:+79171508171"
              target="_blanck"
            >
              <img src={phone} className="header__contacts-icon" />
            </a>
          </li>
          <li className="header__contacts-link">
            <a
              className="header__contacts-telega"
              href="https://t.me/Igornaumov1985"
              target="_blanck"
            >
              <img src={icon} className="header__contacts-icon" />
            </a>
          </li>
        </ul>
        <button
          className={`header__burger ${isBurger ? "visible" : ""}`}
          type="button"
          onClick={handleOpenBurger}
        >
          <span className="header__burger-span"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
