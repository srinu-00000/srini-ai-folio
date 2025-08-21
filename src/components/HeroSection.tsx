import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center neural-bg text-white relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-up">
          <div className="text-xl md:text-2xl mb-4 opacity-90">
            Hi, I'm H. Srinivas 👋
          </div>
          
          <h1 className="heading-xl mb-6 text-gradient text-transparent">
            Aspiring AI & ML Engineer
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            AI & ML Enthusiast | Full-Stack Developer | Problem Solver
          </p>
          
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Passionate about leveraging artificial intelligence and machine learning 
            to solve real-world problems and create innovative solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="accent" 
              size="lg"
              className="text-lg px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline-accent" 
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary"
              onClick={scrollToContact}
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LeetCode"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"/>
                <path d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.681-1.809.681-.707 0-1.347-.213-1.81-.681L4.16 16.613c-.538-.542-.556-1.418-.039-1.959.517-.541 1.375-.523 1.884.018l4.676 4.7c.652.658 1.784.652 2.429-.013.645-.665.645-1.781-.009-2.442L7.771 11.638c-1.426-1.437-1.426-3.856-.009-5.293l.009-.009c1.417-1.437 3.789-1.437 5.206 0l4.676 4.7c.652.658 1.784.652 2.429-.013.645-.665.645-1.781-.009-2.442L15.741 4.312c-2.426-2.437-6.424-2.437-8.85 0-2.426 2.437-2.426 6.514-.009 8.951l4.676 4.7c.652.658 1.784.652 2.429-.013.645-.665.645-1.781-.009-2.442z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;