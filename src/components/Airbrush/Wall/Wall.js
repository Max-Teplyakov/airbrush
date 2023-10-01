import Application from "../../Application/Application";
import { houseData } from "../../../utils/data";
import Advantages from "../../Advantages/Advantages";
import PriceHouse from "./PriceWall/PriceWall";
import Carousel from "../../Carousel/Carousel";
import { carouselHouse } from "../../../utils/data";
import AboutAirbrushing from "../../AboutAirbrushing/AboutAirbrushing";
import Place from "../../Place/Place";

function Wall() {
  return (
    <main className="wall">
      <section className="wall-description">
        <h1 className="wall-description__title">
          АЭРОГРАФИЯ НА СТЕНАХ В САМАРЕ
        </h1>
        <p className="wall-description__subtitle">
          Абстрактные 3D рисунки - уникальный современный дизайн
        </p>
      </section>
      <AboutAirbrushing />
      <Place />
      <Carousel carousel={carouselHouse} />
      <Advantages dataText={houseData} />
      <PriceHouse />
      <Application id="wall-id" />
    </main>
  );
}

export default Wall;
