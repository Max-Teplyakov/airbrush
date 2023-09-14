import whyUs1 from "../../images/whyUs/whyUs1.png";
import whyUs2 from "../../images/whyUs/whyUs2.png";
import whyUs3 from "../../images/whyUs/whyUs3.png";
import whyUs4 from "../../images/whyUs/whyUs4.png";
import whyUs5 from "../../images/whyUs/whyUs5.png";
import whyUs6 from "../../images/whyUs/whyUs6.png";
import whyUs7 from "../../images/whyUs/whyUs7.png";
import whyUs8 from "../../images/whyUs/whyUs8.png";
import whyUs9 from "../../images/whyUs/whyUs9.png";

function WhyUs() {
  return (
    <section className="why-us">
      <h2 className="why-us__title">ПОЧЕМУ МЫ?</h2>
      <div className="why-us__container">
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs1} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">Персональный подход - </span>
            обсуждаем детали, чтобы воплотить ваши пожелания в уникальном
            произведении аэрографии.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs2} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">
              Разработка эксклюзивного дизайна
            </span>{" "}
            создаем для вас авторские изображения.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs3} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">
              Премиальные материалы для росписи
            </span>{" "}
            мы используем только профессиональные краски и расходники ведущих
            брендов.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs4} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">Профессиональные консультации</span>{" "}
            помогаем с выбором сюжета и стиля.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs5} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">Гибкая ценовая политика</span>{" "}
            подберем оптимальное решение для вас.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs6} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">Опытные художники-аэрографы</span>{" "}
            даем гарантию качества работы.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs7} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">Внимание к деталям</span> доводим
            каждую работу до совершенства.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs8} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">Креативный подход</span> предлагаем
            нестандартные решения.
          </p>
        </article>
        <article className="why-us__card">
          <img className="why-us__card-img" src={whyUs9} alt="#" />

          <p className="why-us__card-description">
            <span className="why-us__span">Оперативность исполнения</span>{" "}
            выполняем работы в кратчайшие сроки.
          </p>
        </article>
      </div>
    </section>
  );
}

export default WhyUs;
