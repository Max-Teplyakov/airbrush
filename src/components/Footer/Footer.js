import whatsap from "../../images/whatsapp.png";
import telegramm from "../../images/telegram.png";
import logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <img className="footer__logo" src={logo} alt="логотип сайта" />
      </div>
      <ul className="footer__contacts">
        <li className="footer__phone">
          <p className="footer__text">+7 (987) 100-11-22</p>
        </li>
        <li className="footer__email">
          <p className="footer__text">airbrushingStudio@gmail.com</p>
        </li>
      </ul>
      <ul className="footer__social">
        <li className="footer__whatsapp">
          <a
            className="footer__links footer__links-whatsapp"
            href="tel:+79871578318"
            target="_blanck"
          >
            <img src={whatsap} className="footer__contacts-icon" />
            <p className="footer__social-text">WhatsApp</p>
          </a>
        </li>
        <li className="footer__tellegram">
          <a
            className="footer__links"
            href="https://t.me/max_tepl"
            target="_blanck"
          >
            <img src={telegramm} className="footer__contacts-icon" />
            <p className="footer__social-text">Telegram</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;