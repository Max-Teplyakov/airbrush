import whatsap from "../../images/whatsapp.png";
import telegramm from "../../images/telegram.png";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <Link className="header__logo-link" to="/">
          <img className="footer__logo" src={logo} alt="логотип сайта" />
        </Link>
      </div>
      <ul className="footer__contacts">
        <li className="footer__phone">
          <p className="footer__text">8 (917) 150-81-71</p>
        </li>
        <li className="footer__email">
          <p className="footer__text">airbrushingStudio@gmail.com</p>
        </li>
      </ul>
      <ul className="footer__social">
        <li className="footer__tellegram">
          <a
            className="footer__links"
            href="https://t.me/Igornaumov1985"
            target="_blanck"
          >
            <img src={telegramm} className="footer__contacts-icon" />
            <p className="footer__social-text">Telegram</p>
          </a>
        </li>
        <li className="footer__whatsapp">
          <a
            className="footer__links footer__links-whatsapp"
            href="tel:+79171508171"
            target="_blanck"
          >
            <img src={whatsap} className="footer__contacts-icon" />
            <p className="footer__social-text">WhatsApp</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
