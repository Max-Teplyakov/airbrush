import { useLocation } from "react-router-dom";

function AboutAirbrushing() {
  const location = useLocation();

  if (location.pathname === "/car") {
    return (
      <section className="about-airbrushing">
        <div className="about-airbrushing__line"></div>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Аэрография</span> —
          прекрасная возможность придать вашему автомобилю по-настоящему
          уникальный и стильный внешний вид. Мы используем профессиональные
          аэрографы и краски на водной основе, чтобы создать на кузове или
          деталях вашего авто любое изображение от модных трендовых принтов до
          индивидуального рисунка на заказ.
        </p>
        <p className="about-airbrushing__subtitle">
          А одним из главных преимуществ аэрографии на автомобилях является
          дополнительная защита от угона. Автомобили с уникальным и неповторимым
          дизайном, созданным с помощью метода аэрографии, реже становятся
          объектом криминального внимания. А если вдруг такое все же происходит,
          благодаря уникальному внешнему виду машину гораздо легче найти.
        </p>
        <p className="about-airbrushing__subtitle">
          Наши мастера с огромным опытом и творческим подходом используют
          современные техники и материалы, чтобы создавать яркие, четкие и
          долговечные рисунки на лакокрасочном покрытии вашего автомобиля.
        </p>
        <p className="about-airbrushing__subtitle">
          Не упустите шанс выделиться на дороге и подчеркнуть свою
          индивидуальность! Закажите аэрографию на своем автомобиле и станьте
          хозяином неповторимого и стильного транспортного средства.
        </p>
      </section>
    );
  }

  if (location.pathname === "/motorcycle") {
    return (
      <section className="about-airbrushing">
        <div className="about-airbrushing__line"></div>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Аэрография</span> —
          незаменимый инструмент для создания поистине уникального и стильного
          внешнего облика вашего мотоцикла. Профессиональные мастера нашей
          студии способны нанести на различные элементы вашего байка практически
          любое яркое цветное изображение, рисунок или композицию при помощи
          аэрографической техники.
        </p>
        <p className="about-airbrushing__subtitle">
          Использование аэрографии позволит создать из вашего обычного мотоцикла
          настоящее чудо в мире искусства, привлекающее изумленные взгляды на
          дороге. Мы с радостью украсим бак, раму, обтекатели, диски колес и
          другие части вашего мотоцикла в любом стиле – от классики до
          авангарда.
        </p>
        <p className="about-airbrushing__subtitle">
          Если вам хочется придать вашему байку поистине эксклюзивный внешний
          вид и выделиться среди других мотоциклистов, воспользуйтесь услугами
          нашей профессиональной аэрографической студии!
        </p>
      </section>
    );
  }

  if (location.pathname === "/laptop") {
    return (
      <section className="about-airbrushing">
        <div className="about-airbrushing__line"></div>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">
            Хотите украсить свой ноутбук оригинальным рисунком?
          </span>{" "}
          &nbsp; Это отличная идея для создания эксклюзивного дизайна.
          Существует несколько способов нанесения изображений на ноутбук.
        </p>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Аэрография</span> - роспись
          при помощи аэрографа. Позволяет создавать многоцветные сложные рисунки
          - пейзажи, портреты, абстрактные композиции.
        </p>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Гидрографика</span> подходит
          для однотонных простых изображений, которые переносятся на поверхность
          с помощью специальной пленки.
        </p>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Винил</span> - готовые
          самоклеящиеся пленки с напечатанным рисунком. Используется для
          нанесения надписей, логотипов.
        </p>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Роспись красками</span> -
          позволяет создавать авторские рисунки вручную с помощью кисти.
        </p>
      </section>
    );
  }

  if (location.pathname === "/helmet") {
    return (
      <section className="about-airbrushing">
        <div className="about-airbrushing__line"></div>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Аэрография</span> —
          позволяет создавать эксклюзивные рисунки на спортивных шлемах -
          мотоциклетных, хоккейных, вратарских. Это отличный способ подчеркнуть
          индивидуальность и превратить экипировку в произведение искусства.
        </p>
      </section>
    );
  }

  if (location.pathname === "/bike") {
    return (
      <section className="about-airbrushing">
        <div className="about-airbrushing__line"></div>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Аэрография</span> —
          позволяет создать эксклюзивный дизайн для вашего велосипеда. Благодаря
          airbrush можно нанести любое изображение или рисунок на раму и другие
          детали. Это отличный способ сделать обычный велосипед по-настоящему
          уникальным.
        </p>
      </section>
    );
  }

  if (location.pathname === "/wall") {
    return (
      <section className="about-airbrushing">
        <div className="about-airbrushing__line"></div>
        <p className="about-airbrushing__subtitle">
          <span className="about-airbrushing__span">Аэрография</span> —
          позволяет создавать уникальные рисунки и композиции на стенах - как
          снаружи зданий, так и во внутреннем интерьере. Это отличный способ
          украсить фасад или помещение и придать им неповторимый вид.
        </p>
      </section>
    );
  }
}

export default AboutAirbrushing;
