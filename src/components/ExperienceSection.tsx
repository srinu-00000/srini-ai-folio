import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'TechCorp Solutions',
      location: 'Remote',
      period: 'Jun 2024 - Present',
      type: 'Internship',
      achievements: [
        'Developed and deployed ML models for customer behavior prediction with 85% accuracy',
        'Implemented data preprocessing pipelines reducing model training time by 40%',
        'Collaborated with cross-functional teams to integrate ML solutions into production',
        'Created comprehensive documentation and presentations for stakeholders'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Git']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Bangalore, India',
      period: 'Jan 2024 - May 2024',
      type: 'Part-time',
      achievements: [
        'Built responsive web applications using React and Node.js serving 1000+ users',
        'Optimized database queries resulting in 50% faster page load times',
        'Implemented RESTful APIs and integrated third-party services',
        'Participated in code reviews and followed agile development practices'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS']
    },
    {
      title: 'Frontend Developer Intern',
      company: 'WebDev Agency',
      location: 'Mumbai, India',
      period: 'Aug 2023 - Dec 2023',
      type: 'Internship',
      achievements: [
        'Developed pixel-perfect UI components using React and TypeScript',
        'Collaborated with designers to implement responsive designs across devices',
        'Improved application performance through code optimization techniques',
        'Mentored junior interns and conducted technical workshops'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git']
    },
    {
      title: 'Research Assistant',
      company: 'University AI Lab',
      location: 'Chennai, India',
      period: 'Mar 2023 - Jul 2023',
      type: 'Research',
      achievements: [
        'Conducted research on deep learning applications in computer vision',
        'Published findings in university journal with 95% acceptance rate',
        'Assisted in developing novel algorithms for image classification',
        'Presented research at national conferences and symposiums'
      ],
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Jupyter', 'LaTeX']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship': return 'bg-blue-100 text-blue-800';
      case 'Part-time': return 'bg-green-100 text-green-800';
      case 'Research': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg">Work Experience</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions in various roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item animate-slide-in">
                <div className="project-card p-6 ml-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <span className="font-medium text-primary">{exp.company}</span>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default ExperienceSection;