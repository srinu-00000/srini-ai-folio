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
    <section id="skills" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg">Skills & Technologies</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="project-card p-6 animate-scale-in">
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          '--width': isVisible ? `${skill.level}%` : '0%',
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;