import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DestinationPage from "./pages/DestinationPage";
import ItineraryPage from "./pages/ItineraryPage";
import AccomodationPage from "./pages/AccomodationPage";
import TransportationPage from "./pages/TransportationPage";

function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/accomodation" element={<AccomodationPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
