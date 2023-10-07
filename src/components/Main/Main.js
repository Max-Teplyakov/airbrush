import Information from "../Information/Information";
import Options from "../Options/Options";
import Price from "../Airbrush/Car/PriceCar/PriceCar";
import Slider from "../Slider/Slider";
import Application from "../Application/Application";
import Plan from "../Plan/Plan";
import WhyUs from "../WhyUs/WhyUs";
import UserReviews from "../Reviews/UserReviews/UserReviews";

function Main() {
  return (
    <main className="main">
      <Slider />
      <Information />
      <Options />
      <Plan />
      <WhyUs />
      <UserReviews />
      <Application id={"main"} />
    </main>
  );
}

export default Main;
