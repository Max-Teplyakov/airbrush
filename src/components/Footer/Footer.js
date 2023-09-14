import whatsap from "../../images/whatsapp.png";
import telegramm from "../../images/telegram.png";
import phone from "../../images/phone.png";
import logo from "../../images/logo.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <img className="footer__logo" src={logo} alt="логотип сайта" />
        <p className="footer__year">&#169;2023 Все права защищены.</p>
      </div>
      <div className="footer__block">
        <ul className="footer__contacts">
          <li className="footer__whatsapp">
            <a
              className="footer__links footer__links-whatsapp"
              href="tel:+79871578318"
              target="_blanck"
            >
              <img src={phone} className="header__contacts-icon" />
            </a>
          </li>
          <li className="footer__phone">
            <a
              className="footer__links"
              href="tel:+79871578318"
              target="_blanck"
            >
              <img src={whatsap} className="header__contacts-icon" />
            </a>
          </li>
          <li className="footer__tellegram">
            <a
              className="footer__links"
              href="https://t.me/max_tepl"
              target="_blanck"
            >
              <img src={telegramm} className="header__contacts-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
