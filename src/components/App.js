import logo from "../images/logo2.jpg";
import aero from "../images/aero-3.jpg";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__contacts">
          <div className="header__contacts_adress">Самара</div>
          <div className="header__contacts_number">+7 (987) 157 83 10</div>
          <div className="header__contacts_social-network">Иконки Сайтов</div>
        </div>
        <img src={logo} className="logo" alt="logo" />
        <div className="line"></div>
      </header>
      <div className="navbar">
        <ul className="menu-bar">
          <li>Аэрография</li>
          <li>Роспись</li>
          <li>Граффити</li>
          <li>Покраска</li>
          <li>Прочее</li>
          <li>Контакты</li>
        </ul>
      </div>

      <section className="slider">
        <div className="slider__image"></div>
        <div className="overlay"></div>
        <h1 className="slider__title">Аэрография</h1>
        <h2 className="slider__subtitle">
          «AERO Grand» – это профессиональная аэрография высокого класса от
          лучших художников Москвы. Мы работаем более 10 лет!
        </h2>
        <button className="slider__btn">УЗНАТЬ ЦЕНЫ</button>
      </section>

      <section className="information">
        <h2 className="information__title">НАШИ УСЛУГИ</h2>
        <p className="information__subtitle">Множество компаний оказывает услуги по нанесению аэрографии на авто в Москве, но не всем под силу справиться со сложными и нестандартными задачами. Наши художники обладают огромным опытом и применяют в работе только современное высокотехнологичное оборудование, которое позволяет добиваться идеальной точности, яркости и долговечности.

Технология аэрографии позволяет создавать по-настоящему реалистичные изображения с помощью последовательного нанесения множества слоёв краски, добиваясь наилучшей детализации и безупречной цветопередачи. Такое мастерство предполагает нанесение рисунка с использованием аэрографа — небольшого пульверизатора с жидкой краской. Сделав заказ аэрографии на машину в нашей мастерской, вы гарантированно получите превосходное качество по доступной цене.</p>

      </section>
      <section className="options">
        
      </section>
    </div>
  );
}

export default App;
