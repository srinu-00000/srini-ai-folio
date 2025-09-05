import { useState, useEffect, useRef } from 'react';
import { Code, Brain, Database, Globe, Server, Zap } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        'Python',
        'TensorFlow/Keras', 
        'PyTorch',
        'Scikit-learn',
        'OpenCV'
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        'Python',
        'JavaScript',
        'Java', 
        'C++',
        'TypeScript'
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        'React',
        'Node.js',
        'Express.js',
        'HTML/CSS', 
        'MongoDB'
      ]
    },
    {
      title: 'Data & Databases',
      icon: Database,
      skills: [
        'SQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Data Analysis'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Server,
      skills: [
        'AWS',
        'Docker',
        'Git/GitHub',
        'Linux',
        'CI/CD'
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: Zap,
      skills: [
        'Jupyter Notebook',
        'VS Code',
        'Postman',
        'Figma',
        'Firebase'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-secondary/20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-caption mb-4">
            Technical Expertise
          </div>
          <h2 className="text-heading gradient-text">Skills & Technologies</h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Cutting-edge technologies and frameworks I use to build intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="card-glass glow-hover animate-scale-bounce" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-primary mr-3 animate-float" />
                  <h3 className="text-subheading font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group">
                      <span className="text-body font-medium group-hover:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;