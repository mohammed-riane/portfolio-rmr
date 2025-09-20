import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="gradient-text">Riane Mohammed</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Software Engineer from Morocco
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download size={20} className="mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/mohammed-riane"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/mohammed-riane/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:riane.mohammed.reda@gmail.com"
              className="text-muted-foreground hover:text-primary smooth-transition hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary smooth-transition"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;