import Advantages from "../../Advantages/Advantages";
import Application from "../../Application/Application";
import { motorcycleData } from "../../../utils/data";
import PriceMotorcycle from "../Motorcycle/PriceMotorcycle/PriceMotorcycle";
import Carousel from "../../Carousel/Carousel";
import { carouselMotorcycle } from "../../../utils/data";
import AboutAirbrushing from "../../AboutAirbrushing/AboutAirbrushing";

function Motorcycle() {
  return (
    <main className="motorcycle">
      <section className="motorcycle-description">
        <h1 className="motorcycle-description__title">
          АЭРОГРАФИЯ НА МОТОЦИКЛАХ В САМАРЕ
        </h1>
        <p className="motorcycle-description__subtitle">
          Придайте своему мотоциклу фирменный эксклюзивный вид и выделяйтесь в
          потоке с качественной аэрографией.
        </p>
      </section>
      <AboutAirbrushing />
      <Carousel carousel={carouselMotorcycle} />
      <Advantages dataText={motorcycleData} />
      <PriceMotorcycle />
      <Application id="motorcycle-id" />
    </main>
  );
}

export default Motorcycle;
