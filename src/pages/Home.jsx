import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import CommunicationalProjects from "../components/CommunicationalProjects.jsx";
import OurProjects from "../components/OurProjects.jsx";
import ProjectShowcase from "../components/ProjectShowcase.jsx";
import CTA from "../components/CTA.jsx";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await api.getProjects();
      setProjects(data.slice(0, 6)); // Get only 6 projects for home
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Hero />
      <About />
      <CommunicationalProjects />
      <OurProjects projects={projects} loading={loading} />
      <ProjectShowcase />
      <CTA />
    </>
  );
}