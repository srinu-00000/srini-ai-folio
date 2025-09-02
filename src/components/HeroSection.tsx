import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import TypingText from './TypingText';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = [
    'AI/ML Engineer',
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Innovator'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg particles-bg floating-shapes overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="text-caption gradient-neon">
                Hello, I'm
              </div>
              <h1 className="text-display gradient-text animate-glow-pulse">
                H. Srinivas
              </h1>
              <div className="text-subheading text-foreground min-h-[1.5em]">
                <TypingText 
                  texts={typingTexts}
                  typeSpeed={120}
                  deleteSpeed={80}
                  delayBetween={2000}
                  className="text-subheading"
                />
              </div>
              <p className="text-body max-w-2xl">
                Passionate about transforming ideas into intelligent solutions through 
                cutting-edge artificial intelligence, machine learning, and modern web development.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="card-glass glow-effect animate-scale-bounce animate-delay-300 text-primary-foreground font-semibold"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="card-glass border-neon/30 hover:border-neon hover:shadow-neon animate-scale-bounce animate-delay-450 text-foreground hover:text-neon"
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
                  className="card-glass hover:neon-glow transition-all duration-500 hover:scale-110 animate-scale-bounce text-muted-foreground hover:text-neon"
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
            <div className="relative animate-float">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full card-glass p-3 glow-effect">
                <div className="w-full h-full rounded-full overflow-hidden gradient-border">
                  <img
                    src={profilePhoto}
                    alt="H. Srinivas - AI/ML Engineer"
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Floating geometric elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-neon/20 rounded-full animate-float neon-glow"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/20 rounded-full animate-float glow-effect" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-accent/30 rounded-full animate-float neon-glow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-12 border-2 border-neon/50 rounded-full flex justify-center relative neon-glow">
          <div className="w-1.5 h-4 bg-neon rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;