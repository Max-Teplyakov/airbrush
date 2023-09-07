import icon from "../../images/tellegram.svg";
import logo from "../../images/logo.jpg";
import Navbar from "./Navbar/Navbar.js";
function Header() {
  return (
    <header className="header">
      <div className="header__contain">
        <img src={logo} className="logo" alt="logo" />
        <Navbar />
        <ul className="header__contacts">
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
