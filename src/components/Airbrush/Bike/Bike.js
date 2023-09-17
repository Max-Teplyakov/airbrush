import Advantages from "../../Advantages/Advantages";
import Application from "../../Application/Application";
import { bikeData } from "../../../utils/data";
import PriceBike from "./PriceBike/PriceBike";
import Carousel from "../../Carousel/Carousel";
import { carouselBike } from "../../../utils/data";

function Bike() {
  return (
    <main className="bike">
      <section className="bike-description">
        <h2 className="bike-description__title">АЭРОГРАФИЯ НА ВЕЛОСИПЕДЕ</h2>
        <p className="bike-description__subtitle">
          Аэрография на мотоциклах в Москве от профессионалов. Мы работаем с
          мотоциклами всех производителей: Honda, Kawasaki, Yamaha, Ducati и
          многими другими, независимо от модели и года выпуска.
        </p>
      </section>
      <PriceBike />
      <Carousel carousel={carouselBike} />
      <Advantages dataText={bikeData} />
      <Application />
    </main>
  );
}

export default Bike;
