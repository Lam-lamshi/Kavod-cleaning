import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./assets/Components/navbar";
import Footer from "./assets/Components/Footer";

import Hero from "./assets/Components/pages/Hero";
import WhyChooseUs from "./assets/Components/pages/WhyChooseUs";

import About from "./assets/Components/About";
import Services from "./assets/Components/Services";
import Blog from "./assets/Components/Blog";
import Contact from "./assets/Components/Contact";

import "./App.css";

function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Why Choose KAVOD */}
      <WhyChooseUs />

      {/* Services Preview */}
      <Services />

      {/* About Preview */}
      <About />
    </main>
  );
}

/*
  This makes every page transition
  smoothly and returns the user
  to the top of the new page.
*/
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Kavod-cleaning">
      <Navbar />

      <AnimatedRoutes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
