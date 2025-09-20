import { Code2, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software Engineer who enjoys building reliable and scalable applications. 
                I'm passionate about problem-solving, learning new technologies, and turning ideas into practical solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I focus on writing clean code, improving every project I work on, and growing 
                both technically and personally while contributing to meaningful work.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Software Engineering
                </span>
                <span className="px-4 py-2 bg-tech-stack/10 text-tech-stack rounded-full text-sm font-medium">
                  Full Stack Development
                </span>
                <span className="px-4 py-2 bg-experience/10 text-experience rounded-full text-sm font-medium">
                  Artificial Intelligence
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Cloud Computing
                </span>
                <span className="px-4 py-2 bg-tech-stack/10 text-tech-stack rounded-full text-sm font-medium">
                  E-Commerce Solutions
                </span>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="p-6 border border-border rounded-lg card-shadow hover:glow smooth-transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Clean Code</h3>
                </div>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable, and well-documented code that stands the test of time.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg card-shadow hover:glow smooth-transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-tech-stack/10 text-tech-stack rounded-lg">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Performance</h3>
                </div>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, SEO, and exceptional user experiences.
                </p>
              </div>

              <div className="p-6 border border-border rounded-lg card-shadow hover:glow smooth-transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-experience/10 text-experience rounded-lg">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Collaboration</h3>
                </div>
                <p className="text-muted-foreground">
                  Working effectively with cross-functional teams to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;