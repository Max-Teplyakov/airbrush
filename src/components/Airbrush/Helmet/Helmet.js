import Application from "../../Application/Application";
import { helmetData } from "../../../utils/data";
import Advantages from "../../Advantages/Advantages";
import PriceHelmet from "./PriceHelmet/PriceHelmet";
import Carousel from "../../Carousel/Carousel";
import { carouselHelmet } from "../../../utils/data";
import AboutAirbrushing from "../../AboutAirbrushing/AboutAirbrushing";

function Helmet() {
  return (
    <main className="helmet">
      <section className="helmet-description">
        <h1 className="helmet-description__title">
          АЭРОГРАФИЯ НА ШЛЕМЕ В САМАРЕ
        </h1>
        <p className="helmet-description__subtitle">
        Создадим уникальный дизайн
        </p>
      </section>
      <AboutAirbrushing />
      <Carousel carousel={carouselHelmet} />
      <Advantages dataText={helmetData} />
      <PriceHelmet />
      <Application id="helmet-id" />
    </main>
  );
}

export default Helmet;
