import Application from "../../Application/Application";
import { houseData } from "../../../utils/data";
import Advantages from "../../Advantages/Advantages";
import PriceHouse from "./PriceHouse/PriceHouse";
import Carousel from "../../Carousel/Carousel";
import { carouselHouse } from "../../../utils/data";

function House() {
  return (
    <main className="house">
      <section className="house-description">
        <h2 className="house-description__title">АЭРОГРАФИЯ НА ЗДАНИИ</h2>
        <p className="house-description__subtitle">
          Аэрография на мотоциклах в Москве от профессионалов. Мы работаем с
          мотоциклами всех производителей: Honda, Kawasaki, Yamaha, Ducati и
          многими другими, независимо от модели и года выпуска.
        </p>
      </section>
      <PriceHouse />
      <Carousel carousel={carouselHouse} />
      <Advantages dataText={houseData} />
      <Application />
    </main>
  );
}

export default House;
