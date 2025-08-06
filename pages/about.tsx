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
                icon="📞"
              >
                Get in Touch
              </EnhancedButton>
              <EnhancedButton
                href="/careers"
                variant="outline"
                size="lg"
                icon="💼"
              >
                Join Our Team
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Our Impact
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Numbers that tell our story of growth and success
            </p>
          </div>
          
          <InteractiveStats stats={teamStats} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>
        
        <div className="container-responsive relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                  Our Mission
                </span>
              </h2>
              <p className="text-responsive-lg text-gray-300 mb-6 leading-relaxed">
                At Zion, we believe that AI technology should be accessible to everyone. Our mission is to 
                democratize AI by creating a comprehensive marketplace that connects businesses with the 
                world's best AI services, talent, and technology solutions.
              </p>
              <p className="text-responsive-lg text-gray-300 mb-8 leading-relaxed">
                We're building the future of commerce, where AI-powered matching algorithms ensure perfect 
                connections between needs and solutions, while maintaining the highest standards of quality 
                and security.
              </p>
              <EnhancedButton
                href="/services"
                size="lg"
                gradient="green"
                glow
                icon="🎯"
              >
                Explore Our Services
              </EnhancedButton>
            </div>
            <div className="relative">
              <GlassmorphismCard gradient="custom" glow className="p-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">🤖</div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Future</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We envision a world where AI technology is seamlessly integrated into every business, 
                    driving innovation and growth across all industries.
                  </p>
                </div>
              </GlassmorphismCard>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
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
                  <p className="text-gray-300 text-sm">{value.description}</p>
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
              The brilliant minds behind Zion's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <GlassmorphismCard key={index} gradient={member.color} glow>
                <div className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-neon-blue text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-white/5 border border-neon-blue/20 rounded-full text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
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
                Ready to Join the Future?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're looking for AI services, want to offer your expertise, or join our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="📞"
              >
                Contact Us
              </EnhancedButton>
              <EnhancedButton
                href="/careers"
                variant="outline"
                size="lg"
                icon="💼"
              >
                View Careers
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}

export default About
