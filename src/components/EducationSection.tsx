import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology (IIT)',
      location: 'Chennai, India',
      period: '2021 - 2025',
      gpa: '8.7/10.0',
      status: 'Currently Pursuing',
      highlights: [
        'Specialized in Artificial Intelligence and Machine Learning',
        'Relevant Coursework: Data Structures, Algorithms, ML, Deep Learning, Computer Vision',
        'Member of AI and Robotics Club',
        'Participated in multiple hackathons and coding competitions'
      ],
      projects: [
        'Final Year Project: Advanced Neural Network Architecture for Image Recognition',
        'Research Paper: "Optimization Techniques in Deep Learning Models"'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Salesforce AI Specialist (Agentforce Workshop)',
      issuer: 'GeeksforGeeks & Salesforce',
      date: '2024',
      credentialId: 'SFAI-2024-HSR',
      skills: ['Salesforce', 'AI Agents', 'Agentforce', 'Business AI Solutions'],
      description: 'Successfully completed an industry-grade workshop on building AI Agents using Agentforce. Gained hands-on experience in designing intelligent agents, integrating AI into Salesforce workflows, and solving real-world business use cases with scalable AI solutions.'
    },
    {
      name: 'IBM Certified in Enterprise-Grade AI',
      issuer: 'IBM',
      date: 'June 2024',
      credentialId: 'IBM-AI-2024-HSR',
      skills: ['Enterprise AI', 'AI Model Deployment', 'Scalable Solutions', 'AI Strategy'],
      description: 'Industry-recognized certification focusing on developing and deploying AI-powered solutions at scale. Gained expertise in applying AI models to enterprise challenges.'
    },
    {
      name: 'EZ Training – Python Programming',
      issuer: 'EZ Training',
      date: '2024',
      credentialId: 'EZ-PY-2024-HSR',
      skills: ['Python', 'Problem Solving', 'Application Development', 'Coding Challenges'],
      description: 'Completed professional training in Python programming, with emphasis on problem-solving, application building, and preparing for coding challenges.'
    },
    {
      name: 'Java Full Stack with React JS & AI',
      issuer: 'Brainovision & AICTE',
      date: 'Dec 2024',
      credentialId: 'JSFS-AI-2024-HSR',
      skills: ['Java', 'React JS', 'Full Stack', 'AI Integration', 'Enterprise Applications'],
      description: 'Hands-on training in Java Full Stack development with React JS integration, combined with practical applications of Artificial Intelligence. Strengthened ability to create enterprise-level applications.'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Mar 2024',
      credentialId: 'AWS-CCP-2024-HSR',
      skills: ['AWS', 'Cloud Computing', 'EC2', 'S3']
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: 'Aug 2023',
      credentialId: 'FCC-FSWD-2023-HSR',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js']
    }
  ];

  return (
    <section id="education" className="section-padding data-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg">Education & Certifications</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="w-6 h-6 text-primary mr-2" />
              <h3 className="heading-md">Academic Background</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="project-card p-6 animate-slide-in">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <span className="font-medium text-primary">{edu.institution}</span>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {edu.status}
                      </span>
                      <div className="flex items-center text-accent font-semibold">
                        <Award className="w-4 h-4 mr-1" />
                        {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-3 text-foreground">Highlights:</h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-3 text-foreground">Notable Projects:</h5>
                      <ul className="space-y-2">
                        {edu.projects.map((project, pIndex) => (
                          <li key={pIndex} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-primary mr-2" />
              <h3 className="heading-md">Professional Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="project-card p-6 animate-scale-in">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  
                  {cert.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;