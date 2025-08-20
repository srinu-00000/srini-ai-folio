import { Trophy, Star, Medal, Target } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'National Coding Championship',
      description: 'Secured 1st place in the National Programming Contest among 5000+ participants',
      icon: Trophy,
      date: '2024',
      category: 'Competition',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Best AI Project Award',
      description: 'Won the "Best AI Innovation" award at Inter-University Tech Fest for ML project',
      icon: Star,
      date: '2024',
      category: 'Academic',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Google Summer of Code',
      description: 'Selected as GSoC contributor for open-source machine learning project',
      icon: Medal,
      date: '2023',
      category: 'Open Source',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Hackathon Winner',
      description: 'Won 1st place in 48-hour AI Hackathon organized by Microsoft for healthcare solution',
      icon: Target,
      date: '2023',
      category: 'Hackathon',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Research Publication',
      description: 'Published research paper on "Neural Network Optimization" in IEEE conference',
      icon: Star,
      date: '2023',
      category: 'Research',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Dean\'s List Recognition',
      description: 'Consistently maintained top 5% academic performance for 3 consecutive semesters',
      icon: Trophy,
      date: '2022-2024',
      category: 'Academic',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const stats = [
    { number: '15+', label: 'Awards Won', icon: Trophy },
    { number: '5000+', label: 'Lines of Code', icon: Target },
    { number: '98%', label: 'Project Success Rate', icon: Star },
    { number: '10+', label: 'Hackathons Participated', icon: Medal }
  ];

  return (
    <section id="achievements" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg">Achievements & Recognition</h2>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition received throughout my academic and professional journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="project-card p-6 animate-fade-up hover:scale-105 transition-transform duration-300">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${achievement.bgColor}`}>
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                <span className="text-sm text-muted-foreground">{achievement.date}</span>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  achievement.category === 'Competition' ? 'bg-yellow-100 text-yellow-800' :
                  achievement.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                  achievement.category === 'Open Source' ? 'bg-green-100 text-green-800' :
                  achievement.category === 'Hackathon' ? 'bg-purple-100 text-purple-800' :
                  achievement.category === 'Research' ? 'bg-indigo-100 text-indigo-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {achievement.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Create More Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and achieve greater milestones. 
              Let's collaborate and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;