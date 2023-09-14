import options1 from "../../images/options1.jpg";
import options2 from "../../images/options2.jpg";
import options4 from "../../images/options4.jpg";
import options5 from "../../images/options5.jpg";
import options6 from "../../images/options6.jpg";
import options7 from "../../images/options7.jpg";
import options8 from "../../images/options8.jpg";

function Options() {
  return (
    <section className="options">
      <div className="options__container">
        <div className="options__container-text">
          <h3 className="options__title">Аэрография на Автомобиле</h3>
          <p className="options__subtitle">
            Превратим ваш автомобиль в настоящий шедевр с помощью
            профессиональной аэрографии. Нанесем любое изображение или рисунок
            на капот, двери, бампер, диски. Стиль, тематика, детали - решать
            вам!
          </p>
        </div>
        <img src={options1} className="options__logo" alt="" />
      </div>
      <div className="options__container">
        <img src={options2} className="options__logo" alt="" />
        <div className="options__container-text">
          <h3 className="options__title">Аэрография на Мотоцикле</h3>
          <p className="options__subtitle">
            Украсим ваш мотоцикл ярким индивидуальным дизайном. Разработаем и
            нанесем логотипы, тематические рисунки, орнаменты на бак, раму,
            шлем. Сделаем ваш мотоцикл запоминающимся!
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
        <img src={options5} className="options__logo" alt="" />
      </div>
      <div className="options__container">
        <img src={options6} className="options__logo" alt="" />
        <div className="options__container-text">
          <h3 className="options__title">Аэрография на Велотранспорте</h3>
          <p className="options__subtitle">
            Профессионально разрисованный по индивидуальному заказу велосипед –
            признак хорошего вкуса. Это элегантное решение сотворит из
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
        <img src={options7} className="options__logo" alt="" />
      </div>
      <div className="options__container">
        <img src={options8} className="options__logo" alt="" />
        <div className="options__container-text">
          <h3 className="options__title">Роспись Фасадов Зданий</h3>
          <p className="options__subtitle">
            Профессиональное выполнение задачи в полном соответствии с
            дизайн-проектом. Наши мастера превратят любой дом в местную
            достопримечательность.
          </p>
        </div>
      </div>
      <div className="options__container">
        <div className="options__container-text">
          <h3 className="options__title">Аэрография на Ноутбуках</h3>
          <p className="options__subtitle">
            Персональные компьютеры давно уже перестали быть просто рабочим
            инструментом, превратившись в элемент личного образа. Покрытый
            аэрографией ПК вызовет восхищение Ваших коллег в офисе или
            коворкинге.
          </p>
        </div>
        <img src={options4} className="options__logo" alt="" />
      </div>
    </section>
  );
}

export default Options;
