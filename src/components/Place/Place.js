import { useLocation } from "react-router-dom";
import place from "../../images/place/place.jpg";
import place2 from "../../images/place/place2.jpg";
import place3 from "../../images/place/place3.jpg";
import place4 from "../../images/place/place4.jpg";

function Place() {
  // const loaction = useLocation();
  // const titleClass =
  //   loaction.pathname === "/" ? "" : "user-reviews__title_active";

  return (
    <section className="place">
      <h2 className="place__title">Внешняя аэрография фасадов</h2>
      <p className="place__subtitle">
        Мы выполняем аэрографию на фасадах различных коммерческих и жилых
        объектов:
      </p>
      <div className="place__block">
        <img className="place__img" src={place} alt="" />
        <img className="place__img" src={place2} alt="" />
        <img className="place__img" src={place3} alt="" />
        <img className="place__img" src={place4} alt="" />
      </div>
    </section>
  );
}

export default Place;
