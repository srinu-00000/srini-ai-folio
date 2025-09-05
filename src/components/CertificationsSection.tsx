import { useState, useEffect, useRef } from 'react';
import { Award, Calendar, Shield, ExternalLink, Star } from 'lucide-react';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
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

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const certifications = [
    {
      name: 'Salesforce AI Specialist',
      subtitle: 'Agentforce Workshop',
      issuer: 'GeeksforGeeks & Salesforce',
      date: '2024',
      credentialId: 'SFAI-2024-HSR',
      badge: '🏆',
      level: 'Expert',
      skills: ['Salesforce', 'AI Agents', 'Agentforce', 'Business AI Solutions'],
      description: 'Successfully completed an industry-grade workshop on building AI Agents using Agentforce. Gained hands-on experience in designing intelligent agents, integrating AI into Salesforce workflows, and solving real-world business use cases with scalable AI solutions.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'IBM Certified',
      subtitle: 'Enterprise-Grade AI',
      issuer: 'IBM',
      date: 'June 2024',
      credentialId: 'IBM-AI-2024-HSR',
      badge: '🎯',
      level: 'Professional',
      skills: ['Enterprise AI', 'AI Model Deployment', 'Scalable Solutions', 'AI Strategy'],
      description: 'Industry-recognized certification focusing on developing and deploying AI-powered solutions at scale. Gained expertise in applying AI models to enterprise challenges.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'EZ Training',
      subtitle: 'Python Programming',
      issuer: 'EZ Training',
      date: '2024',
      credentialId: 'EZ-PY-2024-HSR',
      badge: '🐍',
      level: 'Advanced',
      skills: ['Python', 'Problem Solving', 'Application Development', 'Coding Challenges'],
      description: 'Completed professional training in Python programming, with emphasis on problem-solving, application building, and preparing for coding challenges.',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Java Full Stack',
      subtitle: 'React JS & AI',
      issuer: 'Brainovision & AICTE',
      date: 'Dec 2024',
      credentialId: 'JSFS-AI-2024-HSR',
      badge: '☕',
      level: 'Expert',
      skills: ['Java', 'React JS', 'Full Stack', 'AI Integration', 'Enterprise Applications'],
      description: 'Hands-on training in Java Full Stack development with React JS integration, combined with practical applications of Artificial Intelligence. Strengthened ability to create enterprise-level applications.',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'AWS Certified',
      subtitle: 'Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Mar 2024',
      credentialId: 'AWS-CCP-2024-HSR',
      badge: '☁️',
      level: 'Professional',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Cloud Architecture'],
      description: 'Foundation-level certification demonstrating understanding of AWS cloud services, security, and architectural best practices.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Full Stack Web Development',
      subtitle: 'Complete Certification',
      issuer: 'freeCodeCamp',
      date: 'Aug 2023',
      credentialId: 'FCC-FSWD-2023-HSR',
      badge: '🌐',
      level: 'Advanced',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'APIs'],
      description: 'Comprehensive certification covering modern web development technologies and best practices for building full-stack applications.',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-red-500 bg-red-500/10 border-red-500/30';
      case 'Professional': return 'text-blue-500 bg-blue-500/10 border-blue-500/30';
      case 'Advanced': return 'text-green-500 bg-green-500/10 border-green-500/30';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-secondary/20 to-background relative overflow-hidden" ref={sectionRef}>
      {/* Floating particles background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-caption mb-4">
            Professional Achievements
          </div>
          <h2 className="text-heading gradient-text">Certifications & Training</h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Industry-recognized certifications validating expertise in cutting-edge technologies
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Total Certifications', value: certifications.length, icon: Award },
            { label: 'Expert Level', value: certifications.filter(c => c.level === 'Expert').length, icon: Star },
            { label: 'This Year', value: certifications.filter(c => c.date.includes('2024')).length, icon: Calendar },
            { label: 'Industry Partners', value: new Set(certifications.map(c => c.issuer.split(' &')[0])).size, icon: Shield }
          ].map((stat, index) => (
            <div key={stat.label} className="card-glass p-4 text-center animate-scale-bounce" style={{ animationDelay: `${index * 100}ms` }}>
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 animate-pulse" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certification Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const isFlipped = flippedCards.includes(index);
            
            return (
              <div 
                key={cert.credentialId} 
                className="h-80 perspective-1000 animate-scale-bounce cursor-pointer" 
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => toggleCard(index)}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className={`card-glass p-6 h-full flex flex-col justify-between glow-hover bg-gradient-to-br ${cert.color} bg-opacity-5 border border-primary/20`}>
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{cert.badge}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                            {cert.level}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {cert.name}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {cert.subtitle}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {cert.issuer}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.date}
                          </div>
                          <ExternalLink className="w-4 h-4 text-primary opacity-70" />
                        </div>
                        
                        <div className="text-center">
                          <div className="text-xs text-muted-foreground mb-2">Click to view details</div>
                          <div className="w-full h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className={`card-glass p-6 h-full flex flex-col bg-gradient-to-br ${cert.color} bg-opacity-10 border border-primary/30`}>
                      <div className="flex items-center justify-between mb-4">
                        <Award className="w-6 h-6 text-primary" />
                        <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 overflow-y-auto">
                        {cert.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Skills Acquired:</h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium border border-primary/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-subheading font-semibold text-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-body mb-6">
              Always expanding my expertise through industry-leading certifications and hands-on training programs.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-primary">
                <Star className="w-5 h-5 mr-2 animate-pulse" />
                <span className="font-medium">Next: Advanced ML Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;