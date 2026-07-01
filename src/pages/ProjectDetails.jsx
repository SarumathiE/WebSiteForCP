import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css';

// Dummy project data - All 8 projects with full details
const dummyProjects = {
  "1": {
    id: 1,
    title: "Smart Factory Automation",
    category: "Industrial Automation",
    description: "End-to-end automation solution for a Fortune 500 manufacturing plant.",
    fullDescription: "We implemented a comprehensive automation system for a Fortune 500 manufacturing plant that integrated PLCs, IoT sensors, and edge computing. The solution provided real-time monitoring, predictive maintenance, and automated quality control, resulting in a 45% increase in productivity and 30% reduction in operational costs. Our team worked closely with the client to ensure seamless integration with their existing legacy systems while minimizing production downtime. The system included custom dashboards for real-time visibility and automated reporting for management.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1581092335871-3a8f8b8d3b3a?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["PLC", "IoT", "Edge Computing"],
    results: "45% Productivity Increase",
    client: "Fortune 500 Manufacturing",
    duration: "6 Months",
    technologies: ["PLC", "IoT", "Edge Computing", "React", "Node.js", "MongoDB"],
    challenges: "The client had legacy systems that needed integration with modern automation technologies while maintaining continuous production. The existing infrastructure was outdated and required careful planning to avoid production halts.",
    solutions: "We developed a phased implementation approach with custom middleware for system integration and real-time monitoring dashboards. This allowed for gradual migration without disrupting daily operations."
  },
  "2": {
    id: 2,
    title: "Predictive Maintenance AI",
    category: "AI & Machine Learning",
    description: "AI-powered predictive maintenance system for industrial equipment.",
    fullDescription: "We developed an advanced AI-powered predictive maintenance system that analyzes equipment sensor data in real-time to predict potential failures before they occur. The system uses machine learning algorithms to identify patterns and anomalies, reducing unplanned downtime by 60% and saving millions in maintenance costs. The platform includes automated alerts, maintenance scheduling, and detailed analytics dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["AI", "ML", "Analytics"],
    results: "60% Downtime Reduction",
    client: "Global Logistics Corp",
    duration: "8 Months",
    technologies: ["Python", "TensorFlow", "AWS", "React", "Docker"],
    challenges: "The client had massive amounts of sensor data from multiple locations that needed to be processed in real-time. The data was inconsistent and required significant preprocessing.",
    solutions: "We built a scalable data pipeline using AWS services and trained custom ML models that could handle the volume and variety of data. The system automatically adapts to new patterns over time."
  },
  "3": {
    id: 3,
    title: "Enterprise Cloud Migration",
    category: "Cloud Solutions",
    description: "Seamless migration of legacy systems to cloud infrastructure.",
    fullDescription: "We led a complete cloud migration for a retail giant, moving their entire infrastructure from on-premise to AWS cloud. The migration was executed with zero downtime, enabling seamless scalability and reducing infrastructure costs by 30%. The new architecture improved performance, security, and disaster recovery capabilities. The project included migrating 500+ applications and 10TB of data.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["AWS", "Azure", "DevOps"],
    results: "99.99% Uptime",
    client: "RetailGiant Inc.",
    duration: "12 Months",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins"],
    challenges: "The client's legacy applications were monolithic and not designed for cloud-native architectures. There were strict regulatory requirements for data security and privacy.",
    solutions: "We re-architected the applications using microservices and containerization. We implemented robust security measures and compliance frameworks to meet regulatory requirements."
  },
  "4": {
    id: 4,
    title: "AI Robotics Platform",
    category: "AI & Machine Learning",
    description: "Intelligent robotic systems for manufacturing and logistics.",
    fullDescription: "We developed an AI-powered robotics platform that enables autonomous navigation, object recognition, and decision-making for industrial robots. The system uses computer vision and reinforcement learning to optimize manufacturing and logistics operations, reducing manual intervention by 70%. The platform supports multiple robot types and integrates with existing warehouse management systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1581092335871-3a8f8b8d3b3a?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["AI", "Robotics", "Computer Vision"],
    results: "70% Manual Reduction",
    client: "AutoTech Industries",
    duration: "10 Months",
    technologies: ["Python", "TensorFlow", "ROS", "C++", "React"],
    challenges: "Integrating AI with existing robotic hardware and ensuring real-time decision making in dynamic environments.",
    solutions: "We developed a modular AI stack that interfaces with various robotic systems and optimized the models for real-time inference."
  },
  "5": {
    id: 5,
    title: "Industrial IoT Platform",
    category: "IoT & Edge",
    description: "Connected device management and monitoring for smart industrial operations.",
    fullDescription: "We built a comprehensive IoT platform that connects thousands of industrial devices, sensors, and machines. The platform provides real-time monitoring, predictive analytics, and automated alerts, enabling proactive maintenance and operational efficiency. The system handles data from 10,000+ connected devices and processes millions of data points daily.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["IoT", "MQTT", "Edge Computing"],
    results: "40% Efficiency Gain",
    client: "SmartFactory Solutions",
    duration: "8 Months",
    technologies: ["Node.js", "MQTT", "InfluxDB", "React", "Grafana"],
    challenges: "Handling massive data streams from thousands of devices and ensuring low-latency processing.",
    solutions: "We implemented a scalable edge computing architecture with data aggregation and real-time analytics at the edge."
  },
  "6": {
    id: 6,
    title: "Edge Computing Solution",
    category: "IoT & Edge",
    description: "Low-latency processing for real-time industrial applications.",
    fullDescription: "We designed and deployed an edge computing solution that processes data at the source, reducing latency and bandwidth requirements. The system enables real-time decision making for critical industrial applications, improving response times by 80%. The solution includes edge nodes, centralized management, and automated failover capabilities.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["Edge", "Real-Time", "5G"],
    results: "80% Faster Response",
    client: "IndustrialTech Solutions",
    duration: "7 Months",
    technologies: ["Python", "EdgeX", "5G", "Kafka", "Docker"],
    challenges: "Ensuring reliability and security in distributed edge environments with limited resources.",
    solutions: "We implemented lightweight containerized applications with automated failover and security protocols."
  },
  "7": {
    id: 7,
    title: "Mobile Field Operations",
    category: "Mobile Solutions",
    description: "Cross-platform mobile solutions for field operations and remote asset management.",
    fullDescription: "We developed a cross-platform mobile application for field operations that enables remote asset management, real-time data collection, and offline capabilities. The solution improved field team productivity by 50% and reduced response times. The app includes features like asset tracking, work order management, and real-time collaboration.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["React Native", "Offline", "Field Service"],
    results: "50% Faster Response",
    client: "FieldPro Services",
    duration: "6 Months",
    technologies: ["React Native", "Redux", "GraphQL", "AWS", "SQLite"],
    challenges: "Building a robust offline-first application that syncs data seamlessly when connectivity is available.",
    solutions: "We implemented a sophisticated sync engine with conflict resolution and offline data storage."
  },
  "8": {
    id: 8,
    title: "Industrial Cybersecurity",
    category: "Cybersecurity",
    description: "Enterprise-grade security solutions for industrial control systems.",
    fullDescription: "We developed comprehensive cybersecurity solutions for industrial control systems, including threat detection, vulnerability management, and incident response. The system protects critical infrastructure from cyber threats while maintaining operational integrity. The platform includes real-time monitoring, automated threat response, and compliance reporting.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
    ],
    tags: ["Security", "ICS", "Threat Detection"],
    results: "99% Threat Detection",
    client: "SecureEnergy Corp",
    duration: "12 Months",
    technologies: ["Python", "AI/ML", "SIEM", "IDS/IPS", "Ansible"],
    challenges: "Implementing security measures that protect systems without impacting operational performance.",
    solutions: "We deployed AI-driven threat detection that learns normal behavior patterns and identifies anomalies with minimal false positives."
  }
};

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const projectData = dummyProjects[id];
      setProject(projectData || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="project-details-loading">
        <div className="loading-spinner"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-details-error">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn-back">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      {/* Hero Section */}
      <section className="project-details-hero">
        <div className="project-details-hero-bg">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-details-hero-overlay"></div>
        <div className="project-details-hero-inner">
          <span className="project-details-category">{project.category}</span>
          <h1>{project.title}</h1>
          <div className="project-details-meta">
            <span>📅 {project.duration}</span>
            <span>👤 {project.client}</span>
            <span>📊 {project.results}</span>
          </div>
        </div>
      </section>

      {/* Back Button - Below Hero */}
      <div className="project-details-back-wrapper">
        <div className="section-inner">
          <Link to="/projects" className="project-details-back">
            <svg className="project-details-back-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="project-details-content">
        <div className="section-inner">
          <div className="project-details-grid">
            {/* Main Content */}
            <div className="project-details-main">
              <h2>Project Overview</h2>
              <p>{project.fullDescription}</p>

              <h3>Challenges</h3>
              <p>{project.challenges}</p>

              <h3>Solutions</h3>
              <p>{project.solutions}</p>
            </div>

            {/* Sidebar */}
            <aside className="project-details-sidebar">
              <div className="project-details-card">
                <h4>Project Info</h4>
                <ul>
                  <li>
                    <span>Client</span>
                    <span>{project.client}</span>
                  </li>
                  <li>
                    <span>Duration</span>
                    <span>{project.duration}</span>
                  </li>
                  <li>
                    <span>Category</span>
                    <span>{project.category}</span>
                  </li>
                  <li>
                    <span>Results</span>
                    <span>{project.results}</span>
                  </li>
                </ul>
              </div>

              <div className="project-details-card">
                <h4>Technologies</h4>
                <div className="project-details-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-details-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="project-details-cta-btn">
                Start a Similar Project →
              </Link>
            </aside>
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="project-details-gallery">
              <h2>Project Gallery</h2>
              <div className="project-details-gallery-grid">
                <div className="project-details-gallery-main">
                  <img src={project.images[activeImage]} alt={project.title} />
                </div>
                <div className="project-details-gallery-thumbs">
                  {project.images.map((img, index) => (
                    <button
                      key={index}
                      className={`project-details-thumb ${activeImage === index ? 'active' : ''}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={img} alt={`Project ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}