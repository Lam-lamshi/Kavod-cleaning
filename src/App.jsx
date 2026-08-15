import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./assets/Components/navbar";
import Footer from "./assets/Components/Footer";
import Support from "./assets/Components/Support";

import Hero from "./assets/Components/pages/Hero";
import WhyChooseUs from "./assets/Components/pages/WhyChooseUs";

import About from "./assets/Components/About";
import Services from "./assets/Components/Services";
import Blog from "./assets/Components/Blog";
import Contact from "./assets/Components/Contact";
import Quotes from "./assets/Components/Quotes";

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

      <Quotes />
    </main>
  );
}

function AOSInitializer() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return null;
}
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

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

        <Route path="/quote" element={<Quotes />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Kavod-cleaning">
      <ScrollToTop />
      <AOSInitializer />
      <Navbar />
      <Support />

      <AnimatedRoutes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
