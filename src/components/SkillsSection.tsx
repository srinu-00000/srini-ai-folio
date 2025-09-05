import { useState, useEffect, useRef } from 'react';
import { Code, Brain, Database, Globe, Server, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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
        { name: 'Python', level: 90 },
        { name: 'TensorFlow/Keras', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'OpenCV', level: 75 },
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'TypeScript', level: 82 },
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 83 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'Data & Databases',
      icon: Database,
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Data Analysis', level: 88 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Server,
      skills: [
        { name: 'AWS', level: 78 },
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Linux', level: 82 },
        { name: 'CI/CD', level: 75 },
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: Zap,
      skills: [
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'Firebase', level: 80 },
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

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-body font-medium group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={isVisible ? skill.level : 0} 
                          className="h-2 bg-secondary/50"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out professional-glow"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        />
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                      </div>
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