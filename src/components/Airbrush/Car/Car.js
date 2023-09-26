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
        <h2 className="car-description__title">АЭРОГРАФИЯ НА АВТОМОБИЛЕ</h2>
        <p className="car-description__subtitle">
          Качественная аэрография на машине любой марки даёт возможность
          продемонстрировать окружающим свой оригинальный вкус, но цены в Москве
          на покраску бывают очень высокими. Наша компания предлагает уникальное
          сочетание наилучшего качества, низкой стоимости и ответственного
          подхода к работе.
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
