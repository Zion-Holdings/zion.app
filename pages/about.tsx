import type { NextPage } from 'next'
import EnhancedLayout from '../components/layout/EnhancedLayout'
import EnhancedButton from '../components/ui/EnhancedButton'
import GlassmorphismCard from '../components/ui/GlassmorphismCard'
import InteractiveStats from '../components/ui/InteractiveStats'

const About: NextPage = () => {
  const teamStats = [
    { value: 50, label: 'Team Members', icon: '👥', color: 'blue' as const },
    { value: 10, label: 'Years Experience', icon: '⏰', color: 'purple' as const, suffix: '+' },
    { value: 1000, label: 'Projects Completed', icon: '✅', color: 'green' as const, suffix: '+' },
    { value: 99, label: 'Client Satisfaction', icon: '⭐', color: 'pink' as const, suffix: '%' }
  ]

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & AI Research Lead',
      description: 'PhD in Machine Learning with 15+ years of experience in AI research and development.',
      image: '👩‍💼',
      expertise: ['Machine Learning', 'AI Research', 'Leadership'],
      color: 'blue' as const
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO & Platform Architect',
      description: 'Expert in scalable systems and cloud architecture with deep knowledge in distributed systems.',
      image: '👨‍💻',
      expertise: ['Cloud Architecture', 'System Design', 'DevOps'],
      color: 'purple' as const
    },
    {
      name: 'Dr. Michael Kim',
      role: 'Chief Data Scientist',
      description: 'Specialist in big data analytics and predictive modeling with quantum computing expertise.',
      image: '👨‍🔬',
      expertise: ['Data Science', 'Quantum Computing', 'Analytics'],
      color: 'green' as const
    },
    {
      name: 'Emma Thompson',
      role: 'VP of Engineering',
      description: 'Full-stack development expert with focus on AI-powered applications and user experience.',
      image: '👩‍🔧',
      expertise: ['Full-Stack', 'AI Applications', 'UX Design'],
      color: 'pink' as const
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI technology and creative solutions.',
      icon: '🚀',
      color: 'blue' as const
    },
    {
      title: 'Quality Excellence',
      description: 'Every service and product meets our rigorous standards for performance, security, and reliability.',
      icon: '⭐',
      color: 'purple' as const
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We work tirelessly to ensure you achieve your goals.',
      icon: '🎯',
      color: 'green' as const
    },
    {
      title: 'Global Impact',
      description: 'We believe in making AI accessible to everyone, everywhere, for a better future.',
      icon: '🌍',
      color: 'pink' as const
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Platform Launch',
      description: 'Successfully launched Zion as the first free AI-powered marketplace with 10,000+ active users.',
      icon: '🚀',
      color: 'blue' as const
    },
    {
      year: '2023',
      title: 'AI Research Breakthrough',
      description: 'Developed proprietary AI algorithms that power our intelligent matching system.',
      icon: '🤖',
      color: 'purple' as const
    },
    {
      year: '2022',
      title: 'Team Formation',
      description: 'Assembled world-class team of AI researchers, engineers, and business experts.',
      icon: '👥',
      color: 'green' as const
    },
    {
      year: '2021',
      title: 'Vision Conception',
      description: 'Conceived the idea of democratizing AI technology through a free marketplace.',
      icon: '💡',
      color: 'pink' as const
    }
  ]

  return (
    <EnhancedLayout
      title="About Zion - The First Free AI-Powered Marketplace"
      description="Learn about Zion's mission to democratize AI technology and connect businesses with top-tier AI services and talent."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                About Zion
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              We're on a mission to democratize AI technology and create the world's most comprehensive 
              AI-powered marketplace. Our platform connects businesses with top-tier AI services, 
              expert talent, and cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Get in Touch
              </EnhancedButton>
              <EnhancedButton
                href="/services"
                variant="outline"
                size="lg"
                icon="📋"
              >
                Our Services
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                Our Impact
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing our team's achievements and platform success
            </p>
          </div>
          
          <InteractiveStats stats={teamStats} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Our Mission
              </span>
            </h2>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              We believe that AI technology should be accessible to everyone, not just large corporations. 
              Our mission is to democratize AI by creating the world's first free AI-powered marketplace 
              that connects businesses with top-tier AI services, expert talent, and cutting-edge solutions.
            </p>
            <p className="text-responsive-lg text-gray-300 leading-relaxed">
              Through our innovative platform, we're breaking down barriers and making advanced AI 
              technology available to startups, small businesses, and individuals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Our Values
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GlassmorphismCard key={index} gradient={value.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark-blue via-cyber-darker to-cyber-dark opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
                Meet Our Team
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              World-class experts dedicated to democratizing AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <GlassmorphismCard key={index} gradient={member.color} glow>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{member.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-neon-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Our Journey
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Key milestones in our mission to democratize AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <GlassmorphismCard key={index} gradient={milestone.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{milestone.icon}</div>
                  <div className="text-neon-blue font-bold text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="glass-dark border border-neon-blue/30 rounded-2xl p-12 text-center">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Join Our Mission
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of the revolution in AI technology. Whether you're a business looking for AI solutions 
              or a professional offering AI services, Zion is the platform for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/auth/signup"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Get Started Free
              </EnhancedButton>
              <EnhancedButton
                href="/contact"
                variant="outline"
                size="lg"
                icon="📧"
              >
                Contact Us
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}

export default About
