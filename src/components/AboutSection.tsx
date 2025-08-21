import { User, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding ai-glow-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <User className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg">About Me</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-in">
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                I'm H. Srinivas, an aspiring AI & ML Engineer with a passion for developing 
                intelligent solutions that make a real impact. My journey in technology began 
                with curiosity about how machines can learn and adapt, leading me to dive deep 
                into the fascinating world of artificial intelligence.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                With a strong foundation in full-stack development and a growing expertise in 
                machine learning, I enjoy bridging the gap between complex algorithms and 
                user-friendly applications. I believe in the power of technology to solve 
                real-world problems and am constantly learning new techniques and frameworks.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding or training models, you can find me exploring the latest 
                research papers, contributing to open-source projects, or working on personal 
                projects that push my boundaries.
              </p>
            </div>

            {/* Stats & Highlights */}
            <div className="animate-scale-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="project-card p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                
                <div className="project-card p-6 text-center">
                  <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-accent mb-2">5+</h3>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">What Drives Me</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Building AI solutions that solve real-world problems
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Continuous learning and staying updated with latest tech trends
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Contributing to open-source and tech community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;