import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg section-pattern overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="text-caption text-primary">
                Hello, I'm
              </div>
              <h1 className="text-display gradient-text">
                H. Srinivas
              </h1>
              <h2 className="text-subheading text-muted-foreground">
                AI/ML Engineer & Full-Stack Developer
              </h2>
              <p className="text-body max-w-2xl">
                Passionate about transforming ideas into intelligent solutions through 
                artificial intelligence, machine learning, and modern web development.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="animate-scale-bounce animate-delay-300 bg-primary hover:bg-primary-hover text-primary-foreground"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="animate-scale-bounce animate-delay-450 border-border hover:bg-card"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-slide-in-left animate-delay-600">
              {[
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map(({ Icon, href, label }, index) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className={`hover:bg-card/80 transition-all duration-300 hover:scale-110 animate-scale-bounce`}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                  asChild
                >
                  <a href={href} aria-label={label}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animate-delay-300">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full card-primary p-2">
                <div className="w-full h-full rounded-full overflow-hidden gradient-border">
                  <img
                    src={profilePhoto}
                    alt="H. Srinivas - AI/ML Engineer"
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-success/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;