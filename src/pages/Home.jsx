import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import CommunicationalProjects from "../components/CommunicationalProjects.jsx";
import OurProjects from "../components/OurProjects.jsx";
import ProjectShowcase from "../components/ProjectShowcase.jsx";
import CTA from "../components/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CommunicationalProjects />
      <OurProjects />
      <ProjectShowcase />
      <CTA />
    </>
  );
}