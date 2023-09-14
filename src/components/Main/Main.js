import Information from "../Information/Information";
import Options from "../Options/Options";
import Price from "../Price/Price";
import Slider from "../Slider/Slider";
import Application from "../Application/Application";
import Plan from "../Plan/Plan";
import WhyUs from "../WhyUs/WhyUs";
import Reviews from "../Reviews/Reviews";

function Main() {
  return (
    <main className="main">
      <Slider />
      <Information />
      <Options />
      {/* <Price /> */}
      <Plan />
      <WhyUs />
      <Reviews />
      <Application />
    </main>
  );
}

export default Main;
