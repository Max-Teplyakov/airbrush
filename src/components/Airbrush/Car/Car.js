import Application from "../../Application/Application";
import Price from "./PriceCar/PriceCar";
import Advantages from "../../Advantages/Advantages";
import { carText } from "../../../utils/data";
import Carousel from "../../Carousel/Carousel";
import { carouselCar } from "../../../utils/data";
import AboutAirbrushing from "../../AboutAirbrushing/AboutAirbrushing";

function Car() {
  return (
    <main className="car">
      <section className="car-description">
        <h1 className="car-description__title">
          АЭРОГРАФИЯ НА АВТОМОБИЛЕ В САМАРЕ
        </h1>
        <p className="car-description__subtitle">
          Сделайте ваш автомобиль по-настоящему стильным и запоминающимся на
          дороге с помощью яркой аэрографии от наших мастеров.
        </p>
      </section>
      <AboutAirbrushing />
      <Carousel carousel={carouselCar} />
      <Advantages dataText={carText} />
      <Price />
      <Application id="car-id" />
    </main>
  );
}

export default Car;
