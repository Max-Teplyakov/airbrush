import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Airbrush from "./Airbrush/Airbrush";
import AboutUs from "./AboutUs/AboutUs";
import Reviews from "./Reviews/Reviews";
import Contacts from "./Contacts/Contacts";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/airbrush" element={<Airbrush />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
