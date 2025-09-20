import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Ready to work together?</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always interested in new opportunities and challenging projects. 
                  Whether you have a question or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:riane.mohammed.reda@gmail.com" className="text-muted-foreground hover:text-primary smooth-transition">
                      riane.mohammed.reda@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-tech-stack/10 text-tech-stack rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+212624454149" className="text-muted-foreground hover:text-tech-stack smooth-transition">
                      +212 624-454149
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-experience/10 text-experience rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Casablanca, Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 border border-border rounded-xl card-shadow bg-card">
                <h4 className="text-xl font-semibold mb-6">Send me a message</h4>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <Button variant="contact" size="lg" className="w-full">
                    <MessageSquare size={20} />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;