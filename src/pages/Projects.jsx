import CommunicationalProjects from "../components/CommunicationalProjects.jsx";
import OurProjects from "../components/OurProjects.jsx";
import ProjectShowcase from "../components/ProjectShowcase.jsx";

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Our <span>Projects</span></h1>
          <p>Discover our portfolio of innovative automation solutions</p>
        </div>
      </section>
      <CommunicationalProjects />
      <OurProjects />
      <ProjectShowcase />
    </>
  );
}