import logo from "../images/logo2.jpg";
import options1 from "../images/options1.jpg";
import options2 from "../images/options2.jpg";
import options3 from "../images/options3.jpg";
import options4 from "../images/options4.jpg";
import options5 from "../images/options5.jpg";
import options6 from "../images/options6.jpg";
import options7 from "../images/options7.jpg";
import options8 from "../images/options8.jpg";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header__contacts">
          <img src={logo} className="logo" alt="logo" />
          <div className="header__contacts_adress">Самара</div>
          <div className="header__contacts_number">+7 (987) 157 83 10</div>
          <div className="header__contacts_social-network">Иконки Сайтов</div>
        </div>

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
        <p className="information__subtitle">
          Множество компаний оказывает услуги по нанесению аэрографии на авто в
          Москве, но не всем под силу справиться со сложными и нестандартными
          задачами. Наши художники обладают огромным опытом и применяют в работе
          только современное высокотехнологичное оборудование, которое позволяет
          добиваться идеальной точности, яркости и долговечности. Технология
          аэрографии позволяет создавать по-настоящему реалистичные изображения
          с помощью последовательного нанесения множества слоёв краски,
          добиваясь наилучшей детализации и безупречной цветопередачи. Такое
          мастерство предполагает нанесение рисунка с использованием аэрографа —
          небольшого пульверизатора с жидкой краской. Сделав заказ аэрографии на
          машину в нашей мастерской, вы гарантированно получите превосходное
          качество по доступной цене.
        </p>
      </section>

      <section className="options">
        <div className="options__container">
          <div className="options__container-text">
            <h3 className="options__title">Аэрография на Автомобиле</h3>
            <p className="options__subtitle">
              Аэрография на кузове авто в нашей студии – отличный замысел,
              который придаст вашей машине неповторимый стиль и снизит
              вероятность её угона, сделав её менее привлекательной целью для
              злоумышленников.
            </p>
          </div>
          <div className="options__number">1</div>
          <img src={options1} className="options__logo" alt="" />
        </div>
        <div className="options__container">
          <img src={options2} className="options__logo" alt="" />
          <div className="options__number">2</div>
          <div className="options__container-text">
            <h3 className="options__title">Аэрография на Мотоцикле</h3>
            <p className="options__subtitle">
              Байк отражает внутренний мир своего владельца. Покрыть его
              индивидуальной аэрографией – прекрасный способ выделиться среди
              других байкеров на дорогах.
            </p>
          </div>
        </div>
        <div className="options__container">
          <div className="options__container-text">
            <h3 className="options__title">Аэрография в Квартире </h3>
            <p className="options__subtitle">
              Кто сказал, что изображения рисуют только на улице? Художественная
              раскраска стен в помещениях – новое слово в дизайне интерьеров.
            </p>
          </div>
          <div className="options__number">3</div>
          <img src={options3} className="options__logo" alt="" />
        </div>
        <div className="options__container">
          <img src={options4} className="options__logo" alt="" />
          <div className="options__number">4</div>
          <div className="options__container-text">
            <h3 className="options__title">Аэрография на Ноутбуках</h3>
            <p className="options__subtitle">
              Персональные компьютеры давно уже перестали быть просто рабочим
              инструментом, превратившись в элемент личного образа. Покрытый
              аэрографией ПК вызовет восхищение Ваших коллег в офисе или
              коворкинге.
            </p>
          </div>
        </div>
        <div className="options__container">
          <div className="options__container-text">
            <h3 className="options__title">Аэрография на Шлемах</h3>
            <p className="options__subtitle">
              Классное дополнение к расцветке Вашего байка. Аэрография на
              мотошлеме, выполненная в том же стиле, создаст завершённый и
              неподражаемый образ.
            </p>
          </div>
          <div className="options__number">5</div>
          <img src={options5} className="options__logo" alt="" />
        </div>
        <div className="options__container">
          <img src={options6} className="options__logo" alt="" />
          <div className="options__number">6</div>
          <div className="options__container-text">
            <h3 className="options__title">Аэрография на Велотранспорте</h3>
            <p className="options__subtitle">
              Профессионально разрисованный по индивидуальному заказу велосипед
              – признак хорошего вкуса. Это элегантное решение сотворит из
              обыкновенного транспортного средства настоящее произведение
              искусства.
            </p>
          </div>
        </div>
        <div className="options__container">
          <div className="options__container-text">
            <h3 className="options__title">Оформление Графити</h3>
            <p className="options__subtitle">
              Хотите украсить свою собственность? Создать оригинальный подарок с
              поздравлением? Граффити – ваш выбор!
            </p>
          </div>
          <div className="options__number">7</div>
          <img src={options7} className="options__logo" alt="" />
        </div>
        <div className="options__container">
          <img src={options8} className="options__logo" alt="" />
          <div className="options__number">8</div>
          <div className="options__container-text">
            <h3 className="options__title">Роспись Фасадов Зданий</h3>
            <p className="options__subtitle">
              Профессиональное выполнение задачи в полном соответствии с
              дизайн-проектом. Наши мастера превратят любой дом в местную
              достопримечательность.
            </p>
          </div>
        </div>
      </section>

      <section className="price">
        <h2 className="price__title">ЦЕНЫ НА АЭРОГРАФИЮ АВТОМОБИЛЯ</h2>
        <p className="price__subtitle">
          Точно сказать, сколько стоит воплощение той или иной задумки,
          невозможно без детального обсуждения исходных данных. Стоимость
          процесса нанесения аэрографии зависит от сложности рисунка, его
          детализации, площади обрабатываемой поверхности, типа детали и других
          факторов. Из-за прихотливой формы нанести рисунки на изогнутую
          поверхность сложнее, чем на плоскую, и это отнимает больше времени. Мы
          рекомендуем отправить запрос через сайт или позвонить нам, и мы
          подробнее обсудим все Ваши пожелания. После заключения договора на
          оказание услуг цена фиксируется и не изменяется.
        </p>
        <table className="price__table">
          <tr className="price__table-header">
            <td>Услуга</td>
            <td>Цена</td>
          </tr>
          <tr className="price__table-row">
            <td>Разработка макета</td>
            <td>От 1.000 рублей</td>
          </tr>
          <tr className="price__table-row">
            <td>Аэрография на капоте автомобиля</td>
            <td>От 20.000 рублей</td>
          </tr>
          <tr className="price__table-row">
            <td>Аэрография на багажнике автомобиля</td>
            <td>От 15.000 рублей</td>
          </tr>
          <tr className="price__table-row">
            <td>Аэрография на багажнике автомобиля</td>
            <td>От 15.000 рублей</td>
          </tr>
          <tr className="price__table-row">
            <td>Аэрография на двери авто</td>
            <td>От 20.000 рублей</td>
          </tr>
          <tr className="price__table-row">
            <td>Аэрография на крыле автомобиля</td>
            <td>От 15.000 руб.</td>
          </tr>
          <tr className="price__table-row">
            <td>Аэрография на колпаке запасного колеса</td>
            <td>От 10.000 руб.</td>
          </tr>
          <tr className="price__table-row">
            <td>Аэрография на грузовиках</td>
            <td>От 30.000 руб.</td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default App;
