import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectAI from '@/assets/project-ai.jpg';
import projectWeb from '@/assets/project-web.jpg';
import projectMobile from '@/assets/project-mobile.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive machine learning dashboard that provides real-time analytics and predictive insights using TensorFlow and React.',
      image: projectAI,
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Smart E-Commerce Platform',
      description: 'Full-stack e-commerce solution with recommendation engine, payment integration, and real-time inventory management.',
      image: projectWeb,
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Cross-platform mobile app with AI-powered workout recommendations and progress tracking using React Native.',
      image: projectMobile,
      technologies: ['React Native', 'Firebase', 'Python', 'Flask'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Natural Language Processing Tool',
      description: 'Advanced NLP application for sentiment analysis and text classification with custom-trained models.',
      image: projectAI,
      technologies: ['Python', 'NLTK', 'Transformers', 'FastAPI', 'Docker'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with real-time messaging, file sharing, and user authentication.',
      image: projectWeb,
      technologies: ['Socket.io', 'Node.js', 'React', 'MongoDB', 'JWT'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Computer Vision Project',
      description: 'Object detection and recognition system using deep learning models for real-world applications.',
      image: projectMobile,
      technologies: ['Python', 'OpenCV', 'PyTorch', 'Flask', 'AWS EC2'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg">Featured Projects</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in AI, web development, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card group animate-scale-in">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="accent" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-accent" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;