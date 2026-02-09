import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import "./hero-diagram.css";

import Header from "./components/header";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

// Home sections
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Outcomes from "./components/Outcomes";
import Process from "./components/Process";
import CTA from "./components/CTA";

// Pages
import About from "./pages/about";
import Solutions from "./pages/solutions";
import Contact from "./pages/contact";
import ServiceDetail from "./pages/ServiceDetail";

// ✅ ADD THIS IMPORT (MISSING BEFORE)
import ServicesPage from "./components/Services";

function App() {
  const [openQuote, setOpenQuote] = useState(false);

  // ✅ Modal handlers
  const openQuoteModal = () => setOpenQuote(true);
  const closeQuoteModal = () => setOpenQuote(false);

  return (
    <>
      {/* Header */}
      <Header onQuoteClick={openQuoteModal} />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={openQuote}
        onClose={closeQuoteModal}
      />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero openQuoteModal={openQuoteModal} />
              <Services openQuoteModal={openQuoteModal} />
              <WhyChoose />
              <Outcomes />
              <Process />
              <CTA onQuoteClick={openQuoteModal} />
            </>
          }
        />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services pages */}
        <Route
          path="/services"
          element={<ServicesPage openQuoteModal={openQuoteModal} />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetail onQuoteClick={openQuoteModal} />}
        />
      </Routes>

      {/* ✅ Footer MUST be outside Routes */}
      <Footer />
    </>
  );
}

export default App;
