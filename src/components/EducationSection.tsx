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
    },
    {
      degree: 'Higher Secondary Certificate (Science)',
      institution: 'St. Xavier\'s Higher Secondary School',
      location: 'Mumbai, India',
      period: '2019 - 2021',
      gpa: '95.2%',
      status: 'Completed',
      highlights: [
        'Mathematics, Physics, Chemistry, Computer Science',
        'School Topper in Computer Science',
        'Captain of the Programming Club',
        'Winner of Inter-school Science Exhibition'
      ],
      projects: [
        'Built a web-based student management system using PHP and MySQL',
        'Developed a basic AI chatbot for school inquiry system'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'Dec 2023',
      credentialId: 'ML-2023-12-HSR',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks']
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI (Coursera)',
      date: 'Jan 2024',
      credentialId: 'DL-2024-01-HSR',
      skills: ['Deep Learning', 'CNN', 'RNN', 'PyTorch']
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
    <section id="education" className="section-padding bg-background">
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