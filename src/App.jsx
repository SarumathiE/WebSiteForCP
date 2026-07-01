import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getStyles } from "./styles/theme.js";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
// ✅ ADD THIS IMPORT
import ProjectDetails from "./pages/ProjectDetails.jsx";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <style>{getStyles(isDark)}</style>
      <div className="app">
        <Navbar scrolled={scrolled} isDark={isDark} toggleTheme={toggleTheme} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}