import Application from "../../Application/Application";
import { laptopData } from "../../../utils/data";
import Advantages from "../../Advantages/Advantages";
import PriceLaptop from "../Laptop/PriceLaptop/PriceLaptop";
import Carousel from "../../Carousel/Carousel";
import { carouselLaptop } from "../../../utils/data";
import AboutAirbrushing from "../../AboutAirbrushing/AboutAirbrushing";

function Laptop() {
  return (
    <main className="laptop">
      <section className="laptop-description">
        <h1 className="laptop-description__title">
          РИСУНОК НА НОУТБУКЕ В САМАРЕ
        </h1>
        <p className="laptop-description__subtitle">
          Закажите эксклюзивный дизайн для ноутбука в нашей студии
        </p>
      </section>
      <AboutAirbrushing />
      <Carousel carousel={carouselLaptop} />
      <Advantages dataText={laptopData} />
      <PriceLaptop />
      <Application id="laptop-id" />
    </main>
  );
}

export default Laptop;
