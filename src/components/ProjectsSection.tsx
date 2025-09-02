import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectAI from '@/assets/project-ai.jpg';
import projectWeb from '@/assets/project-web.jpg';
import projectMobile from '@/assets/project-mobile.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Train Ticket Reservation System (TTRS)',
      description: 'A mini project designed to develop a robust and user-friendly database management system (DBMS) for managing train ticket reservations.',
      image: projectWeb,
      technologies: ['Java', 'MySQL', 'JDBC', 'Swing', 'SQL'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Youth Sports Registration Portal',
      description: 'An app that allows sportspersons to register for events by providing their details and participate in those events.',
      image: projectMobile,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Career Simulator',
      description: 'A platform bridging education and employment. Features include personalized job roadmaps, alumni talks, placement insights, and mentorship to help students secure top job opportunities.',
      image: projectAI,
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Machine Learning'],
      github: '#',
      demo: '#',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 particles-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-caption gradient-neon mb-4">
            Featured Work
          </div>
          <h2 className="text-heading gradient-text animate-glow-pulse">Projects</h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            AI-powered solutions and full-stack applications showcasing innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="card-glass glow-effect group animate-scale-bounce" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-neon text-background px-3 py-1 rounded-full text-sm font-medium neon-glow">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-neon/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="card-glass border-neon/30 hover:border-neon text-neon hover:neon-glow" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="card-glass glow-effect bg-neon text-background hover:bg-neon-green" asChild>
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
                <h3 className="text-subheading font-semibold mb-3 group-hover:text-neon transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-body mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-tech px-3 py-1 bg-neon/10 border border-neon/30 rounded-full text-sm neon-glow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1 border-neon/30 hover:border-neon text-neon" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-neon text-background hover:bg-neon-green neon-glow" asChild>
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
          <Button size="lg" className="card-glass glow-effect border-neon/30 hover:border-neon text-neon" asChild>
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