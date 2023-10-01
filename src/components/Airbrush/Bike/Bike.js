import Advantages from "../../Advantages/Advantages";
import Application from "../../Application/Application";
import { bikeData } from "../../../utils/data";
import PriceBike from "./PriceBike/PriceBike";
import Carousel from "../../Carousel/Carousel";
import { carouselBike } from "../../../utils/data";
import AboutAirbrushing from "../../AboutAirbrushing/AboutAirbrushing";

function Bike() {
  return (
    <main className="bike">
      <section className="bike-description">
        <h1 className="bike-description__title">
          АЭРОГРАФИЯ НА ВЕЛОСИПЕДЕ В САМАРЕ
        </h1>
        <p className="bike-description__subtitle">
          Сделаем ваш велосипед неповторимым
        </p>
      </section>
      <AboutAirbrushing />
      <Carousel carousel={carouselBike} />
      <Advantages dataText={bikeData} />
      <PriceBike />
      <Application id="bike-id" />
    </main>
  );
}

export default Bike;
