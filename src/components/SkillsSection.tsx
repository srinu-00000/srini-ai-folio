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
    <section id="skills" className="section-padding particles-bg" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-caption gradient-neon mb-4">
            Technical Expertise
          </div>
          <h2 className="text-heading gradient-text animate-glow-pulse">Skills & Technologies</h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Cutting-edge technologies and frameworks I use to build intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="card-glass glow-effect animate-scale-bounce" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-neon mr-3 animate-float" />
                  <h3 className="text-subheading font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-tech">
                        {skill.name}
                      </span>
                      <div className="w-8 h-8 rounded-full border-2 border-neon/30 flex items-center justify-center neon-glow">
                        <div className="w-4 h-4 rounded-full bg-neon animate-pulse"></div>
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