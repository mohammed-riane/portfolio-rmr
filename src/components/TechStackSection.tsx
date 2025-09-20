const TechStackSection = () => {
    const techStack = [
        {category: "Frontend", techs: ["React.js", "Angular", "Next.js", "Material UI", "TypeScript", "JavaScript"]},
        {category: "Backend", techs: ["Java", "Spring Boot", "SAP Commerce Cloud", "Express.js", "Django", "Python"]},
        {category: "Databases", techs: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"]},
        {category: "DevOps & Cloud", techs: ["Docker", "Kubernetes", "Jenkins", "AWS", "Git"]},
    ];


    return (
        <section id="tech-stack" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techStack.map((stack, index) => (
                            <div
                                key={stack.category}
                                className="space-y-4 fade-in-up"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <h3 className="text-xl font-semibold text-tech-stack flex items-center gap-2">
                                    <div className="w-2 h-2 bg-tech-stack rounded-full"></div>
                                    {stack.category}
                                </h3>
                                <div className="space-y-3">
                                    {stack.techs.map((tech) => (
                                        <div
                                            key={tech}
                                            className="p-3 bg-card border border-border rounded-lg hover:border-tech-stack/30 smooth-transition hover:scale-105 cursor-default"
                                        >
                                            <span className="font-medium">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground mb-6">
                            Always learning and exploring new technologies to stay at the forefront of development
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["React Native", "Python ML", "OpenCV", "SonarQube", "Azure"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm hover:bg-secondary/20 smooth-transition"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;