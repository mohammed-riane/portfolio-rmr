import {Button} from "@/components/ui/button";
import {Github, ExternalLink, Code} from "lucide-react";
import RecruitmentPlatform from "@/assets/Intern Recruitment Platform.jpeg";
import MelodyStreamApp from "@/assets/melodyStreamApp.jpg";
import Dashboard from "@/assets/Dashboard.png";
import Attendance from "@/assets/attendanceApp.jpeg";

const ProjectsSection = () => {
    const projects = [
        {
            title: "Intern Recruitment Platform",
            description: "Web platform designed to streamline the recruitment process for interns, featuring application management, candidate tracking ...",
            tech: ["React.js", "Spring Boot", "PostgreSQL", "Docker", "Material UI"],
            image: RecruitmentPlatform,
            github: "https://github.com/mohammed-riane/Intern-Recruitment-Platform",
            demo: "#",
        },
        {
            title: "Music Streaming Platform",
            description: "Full-stack music streaming application with complete backend and frontend architecture built autonomously.",
            tech: ["MongoDB", "Express.js", "React.js", "Tailwind CSS"],
            image: MelodyStreamApp,
            github: "https://github.com/mohammed-riane/MelodyStream-App",
            demo: "#",
        },
        {
            title: "Subscriptions Hub System",
            description: "Subscriptions Hub is a microservices-based platform for managing digital subscriptions.",
            tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Spring Security", "JWT", "Spring Cloud Gateway", "Keycloak", "Flyway"],
            image: Dashboard,
            github: "https://github.com/mohammed-riane/Subscriptions-Hub",
            demo: "#",
        },
        {
            title: "AbsTrack - Intelligent Absence Management",
            description: "AI-powered web application for intelligent absence tracking with statistics generation, automatic alerts, and visualizations.",
            tech: ["React.js", "React Native", "Django", "MongoDB", "OpenCV", "Face Recognition"],
            image: Attendance,
            github: "https://github.com/mohammed-riane/Absence-Intelligente",
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
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
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
                                                <Github size={16}/>
                                                Code
                                            </a>
                                        </Button>
                                        <Button variant="project" size="sm" asChild>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={16}/>
                                                Live Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="https://github.com/mohammed-riane?tab=repositories" target="_blank">
                            <Button variant="outline" size="lg">
                                <Code size={20}/>
                                View More Projects on GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;