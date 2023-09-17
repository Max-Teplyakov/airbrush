import Advantages from "../../Advantages/Advantages";
import Application from "../../Application/Application";
import { motorcycleData } from "../../../utils/data";
import PriceMotorcycle from "../Motorcycle/PriceMotorcycle/PriceMotorcycle";
import Carousel from "../../Carousel/Carousel";
import { carouselMotorcycle } from "../../../utils/data";

function Motorcycle() {
  return (
    <main className="motorcycle">
      <section className="motorcycle-description">
        <h2 className="motorcycle-description__title">
          АЭРОГРАФИЯ НА МОТОЦИКЛЕ
        </h2>
        <p className="motorcycle-description__subtitle">
          Аэрография на мотоциклах в Москве от профессионалов. Мы работаем с
          мотоциклами всех производителей: Honda, Kawasaki, Yamaha, Ducati и
          многими другими, независимо от модели и года выпуска.
        </p>
      </section>
      <PriceMotorcycle />
      <Carousel carousel={carouselMotorcycle} />
      <Advantages dataText={motorcycleData} />
      <Application />
    </main>
  );
}

export default Motorcycle;
