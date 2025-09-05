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


  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-caption mb-4">
            Academic Background
          </div>
          <h2 className="text-heading gradient-text">Education</h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            My academic journey and foundational learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="card-glass p-8 glow-hover animate-scale-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-subheading font-bold text-foreground mb-3 gradient-text">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground">
                      <span className="font-semibold text-primary text-lg">{edu.institution}</span>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-accent" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-accent" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-3">
                    <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-primary/10 text-primary border-primary/30' 
                        : 'bg-accent/10 text-accent border-accent/30'
                    }`}>
                      {edu.status}
                    </span>
                    <div className="flex items-center text-accent font-bold text-lg">
                      <Award className="w-5 h-5 mr-2" />
                      {edu.gpa}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg mb-4 flex items-center">
                      <div className="w-2 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3"></div>
                      Academic Highlights
                    </h4>
                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2.5 mr-4 flex-shrink-0 animate-pulse"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg mb-4 flex items-center">
                      <div className="w-2 h-6 bg-gradient-to-b from-accent to-primary rounded-full mr-3"></div>
                      Research & Projects
                    </h4>
                    <ul className="space-y-3">
                      {edu.projects.map((project, pIndex) => (
                        <li key={pIndex} className="flex items-start text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0 animate-pulse"></div>
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
      </div>
    </section>
  );
};

export default EducationSection;