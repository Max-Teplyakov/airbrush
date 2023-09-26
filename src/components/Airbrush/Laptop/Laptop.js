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
        <h2 className="laptop-description__title">АЭРОГРАФИЯ НА НОУТБУКЕ</h2>
        <p className="laptop-description__subtitle">
          Аэрография на мотоциклах в Москве от профессионалов. Мы работаем с
          мотоциклами всех производителей: Honda, Kawasaki, Yamaha, Ducati и
          многими другими, независимо от модели и года выпуска.
        </p>
      </section>
      <AboutAirbrushing />
      <Carousel carousel={carouselLaptop} />
      <Advantages dataText={laptopData} />
      <PriceLaptop />
      <Application />
    </main>
  );
}

export default Laptop;
