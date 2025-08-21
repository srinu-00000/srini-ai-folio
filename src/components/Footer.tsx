import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 scale-150"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-4 left-1/4 w-16 h-16 border border-white/10 rotate-45"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">H. Srinivas</h3>
            <p className="text-primary-foreground/80 mb-4">
              Aspiring AI & ML Engineer passionate about creating innovative solutions 
              that make a difference in the world.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-sm text-primary-foreground/60">Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span className="text-sm text-primary-foreground/60">and</span>
              <Code className="w-4 h-4 mx-1 text-accent" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block mx-auto text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>h.srinivas@email.com</p>
              <p>+91 98765 43210</p>
              <p>Chennai, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} H. Srinivas. All rights reserved. | Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;