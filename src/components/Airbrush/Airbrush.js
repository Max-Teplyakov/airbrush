import Price from "./Car/PriceCar/PriceCar";
import Car from "./Car/Car";
import Motorcycle from "./Motorcycle/Motorcycle";

function Airbrush() {
  return (
    <main className="airbrush">
      <Car />
      <Price />
      <Motorcycle />
    </main>
  );
}

export default Airbrush;
