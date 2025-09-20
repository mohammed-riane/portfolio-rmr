import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "JobNet - Job Management Platform",
      description: "Web application for recruiters to publish job offers and manage applications, with dedicated personal spaces for candidates.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Material UI"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Music Streaming Platform",
      description: "Full-stack music streaming application with complete backend and frontend architecture built autonomously.",
      tech: ["MongoDB", "Express.js", "React.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "AbsTrack - Intelligent Absence Management",
      description: "AI-powered web application for intelligent absence tracking with statistics generation, automatic alerts, and visualizations.",
      tech: ["React.js", "React Native", "Django", "MongoDB", "OpenCV"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "HotelEase - Hotel Management System",
      description: "Complete web-based hotel management system with reservations, room management, billing, and customer profiles.",
      tech: ["React.js", "Express.js", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=300&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group border border-border rounded-xl overflow-hidden card-shadow hover:glow smooth-transition fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-projects smooth-transition">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-projects/10 text-projects text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button variant="project" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Code size={20} />
              View More Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;