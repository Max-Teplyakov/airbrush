import Header from "./Header/Header";
import Information from "./Information/Information";
import Options from "./Options/Options";
import Price from "./Price/Price";
import Slider from "./Slider/Slider";
import Application from "./Application/Application";
import Footer from "./Footer/Footer";
import Plan from "./Plan/Plan";

function App() {
  return (
    <div className="page">
      <Header />
      <Slider />
      <Information />
      <Options />
      <Price />
      <Plan />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
