import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "SQLI",
      location: "Casablanca",
      roles: [
        {
          type: "Full-time",
          period: "September 2025 - Present"
        },
        {
          type: "Internship PFE", 
          period: "March 2025 - August 2025"
        }
      ],
      tech: ["Java", "SAP Commerce Cloud", "Spring", "GitLab", "Jira", "SonarQube", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "PORTNET",
      location: "Casablanca",
      period: "July - August 2024",
      type: "Internship PFA",
      tech: ["React.js", "Spring Boot", "Material UI", "MySQL", "Docker", "Redux"]
    },
    {
      title: "Full Stack Developer (MERN)",
      company: "YaneCode Digitale",
      location: "Kénitra",
      period: "July - September 2023",
      type: "Internship",
      tech: ["MongoDB", "Express.js", "React.js", "Tailwind CSS"]
    },
    {
      title: "Machine Learning Developer",
      company: "YaneCode Digitale",
      location: "Safi",
      period: "August 2022",
      type: "Internship",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLTK"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Professional <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company + (exp.period || exp.roles?.[0]?.period)}
                className="relative pl-8 border-l-2 border-experience/20 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-experience rounded-full shadow-lg"></div>
                
                <div className="bg-card border border-border rounded-xl p-6 card-shadow hover:glow smooth-transition">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-experience mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {exp.roles ? (
                      <div className="flex flex-col items-end gap-2">
                        {exp.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <Calendar size={16} />
                              <span>{role.period}</span>
                            </div>
                            <span className="px-3 py-1 bg-experience/10 text-experience text-xs rounded-full">
                              {role.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-experience/10 text-experience text-xs rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-tech-stack/10 text-tech-stack text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full">
              <Briefcase size={20} />
              <span className="font-medium">ENSA Safi - Génie Informatique et Intelligence Artificielle (2020-2025)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;