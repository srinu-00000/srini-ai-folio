import { User, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-caption mb-4">Get to Know Me</div>
          <h2 className="text-heading gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <p className="text-body mb-6">
                I'm <span className="font-semibold text-primary">H. Srinivas</span>, an aspiring 
                <span className="gradient-text font-semibold"> AI & ML Engineer</span> with a passion for developing 
                intelligent solutions that make a real impact. My journey in technology began 
                with curiosity about how machines can learn and adapt, leading me to dive deep 
                into the fascinating world of artificial intelligence.
              </p>
              
              <p className="text-body mb-6">
                With a strong foundation in <span className="gradient-text font-semibold">full-stack development</span> and a growing expertise in 
                machine learning, I enjoy bridging the gap between complex algorithms and 
                user-friendly applications. I believe in the power of technology to solve 
                real-world problems and am constantly learning new techniques and frameworks.
              </p>
              
              <p className="text-body">
                When I'm not coding or training models, you can find me exploring the latest 
                research papers, contributing to open-source projects, or working on personal 
                projects that push my boundaries.
              </p>
            </div>

            {/* Stats & Highlights */}
            <div className="animate-scale-bounce">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-glass p-6 text-center hover:scale-105 transition-transform duration-300">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-body">Projects Completed</p>
                </div>
                
                <div className="card-glass p-6 text-center hover:scale-105 transition-transform duration-300">
                  <Heart className="w-12 h-12 text-accent mx-auto mb-4 animate-float" style={{ animationDelay: '0.5s' }} />
                  <h3 className="text-2xl font-bold text-accent mb-2">5+</h3>
                  <p className="text-body">Technologies Mastered</p>
                </div>
              </div>
              
              <div className="mt-8 card-glass p-6">
                <h3 className="text-subheading font-semibold mb-4 gradient-text">What Drives Me</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-body">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                    Building AI solutions that solve real-world problems
                  </li>
                  <li className="flex items-start text-body">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    Continuous learning and staying updated with latest tech trends
                  </li>
                  <li className="flex items-start text-body">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
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