import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Airbrush from "./Airbrush/Airbrush";
import AboutUs from "./AboutUs/AboutUs";
import Reviews from "./Reviews/Reviews";
import Contacts from "./Contacts/Contacts";
import Car from "./Airbrush/Car/Car";
import Motorcycle from "./Airbrush/Motorcycle/Motorcycle";
import Laptop from "./Airbrush/Laptop/Laptop";
import Helmet from "./Airbrush/Helmet/Helmet";
import Bike from "./Airbrush/Bike/Bike";
import House from "./Airbrush/House/House";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/airbrush" element={<Airbrush />} />
        <Route path="/car" element={<Car />} />
        <Route path="/motorcycle" element={<Motorcycle />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/helmet" element={<Helmet />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/house" element={<House />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
