import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Cloud, Globe, Server, Cpu } from 'lucide-react';

const TechnologiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % technologies.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const technologies = [
    {
      name: 'Frontend',
      icon: Globe,
      techs: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Backend',
      icon: Server,
      techs: ['Node.js', 'Python', 'Java', 'Express.js', 'FastAPI', 'Spring Boot'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Database',
      icon: Database,
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Neo4j'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      techs: ['AWS', 'Docker', 'Kubernetes', 'Azure', 'GCP', 'Terraform'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AI/ML',
      icon: Cpu,
      techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Keras', 'Pandas'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Languages',
      icon: Code2,
      techs: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden" ref={sectionRef}>
      {/* Floating particles background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-caption mb-4">
            Tech Stack
          </div>
          <h2 className="text-heading gradient-text">Technologies & Tools</h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Advanced technologies and frameworks I leverage to build scalable solutions
          </p>
        </div>

        {/* 3D Rotating Hexagon Display */}
        <div className="flex justify-center mb-16">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 perspective-1000">
              <div 
                className="relative w-full h-full transform-style-preserve-3d animate-slow-spin"
                style={{ 
                  transform: `rotateY(${activeIndex * 60}deg)`,
                  transition: 'transform 1s ease-in-out'
                }}
              >
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="absolute inset-0 backface-hidden"
                    style={{
                      transform: `rotateY(${index * 60}deg) translateZ(200px)`
                    }}
                  >
                    <div className={`card-glass p-8 h-full flex flex-col items-center justify-center text-center glow-hover bg-gradient-to-br ${tech.color} bg-opacity-10`}>
                      <tech.icon className="w-12 h-12 text-primary mb-4 animate-float" />
                      <h3 className="text-subheading font-bold text-foreground mb-4">
                        {tech.name}
                      </h3>
                      <div className="space-y-2">
                        {tech.techs.slice(0, 3).map((t) => (
                          <div
                            key={t}
                            className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary font-medium"
                          >
                            {t}
                          </div>
                        ))}
                        {tech.techs.length > 3 && (
                          <div className="text-sm text-muted-foreground">
                            +{tech.techs.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, index) => (
            <div 
              key={category.name} 
              className={`card-glass p-6 glow-hover group cursor-pointer transition-all duration-500 animate-scale-bounce ${
                activeIndex === index ? 'ring-2 ring-primary shadow-2xl shadow-primary/25' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-subheading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={tech}
                    className="px-3 py-2 bg-primary/10 border border-primary/30 rounded-lg text-center text-sm text-primary font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${techIndex * 50}ms` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/60'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;