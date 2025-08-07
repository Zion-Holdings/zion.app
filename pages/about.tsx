import type { NextPage } from 'next'
import EnhancedLayout from '../components/layout/EnhancedLayout'
import EnhancedButton from '../components/ui/EnhancedButton'
import GlassmorphismCard from '../components/ui/GlassmorphismCard'
import InteractiveStats from '../components/ui/InteractiveStats'

const AboutPage: NextPage = () => {
  const stats = [
    { value: 50, label: 'Team Members', icon: '👥', color: 'blue' as const },
    { value: 10, label: 'Years Experience', icon: '⏰', color: 'purple' as const, suffix: '+' },
    { value: 1000, label: 'Projects Completed', icon: '✅', color: 'green' as const, suffix: '+' },
    { value: 99, label: 'Client Satisfaction', icon: '⭐', color: 'pink' as const, suffix: '%' }
  ]

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & AI Research Lead',
      description: 'PhD in Machine Learning with 15+ years of experience in AI research and development.',
      image: '👩‍💼',
      expertise: ['Machine Learning', 'AI Research', 'Leadership'],
      color: 'blue'
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO & Platform Architect',
      description: 'Expert in scalable systems and cloud architecture with deep knowledge in distributed systems.',
      image: '👨‍💻',
      expertise: ['Cloud Architecture', 'System Design', 'DevOps'],
      color: 'purple'
    },
    {
      name: 'Dr. Michael Kim',
      role: 'Chief Data Scientist',
      description: 'Specialist in big data analytics and predictive modeling with quantum computing expertise.',
      image: '👨‍🔬',
      expertise: ['Data Science', 'Quantum Computing', 'Analytics'],
      color: 'green'
    },
    {
      name: 'Emma Thompson',
      role: 'VP of Engineering',
      description: 'Full-stack development expert with focus on AI-powered applications and user experience.',
      image: '👩‍🔧',
      expertise: ['Full-Stack', 'AI Applications', 'UX Design'],
      color: 'pink'
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI technology and creative solutions.',
      icon: '🚀',
      color: 'blue'
    },
    {
      title: 'Quality Excellence',
      description: 'Every service and product meets our rigorous standards for performance, security, and reliability.',
      icon: '⭐',
      color: 'purple'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We work tirelessly to ensure you achieve your goals.',
      icon: '🎯',
      color: 'green'
    },
    {
      title: 'Global Impact',
      description: 'We believe in making AI accessible to everyone, everywhere, for a better future.',
      icon: '🌍',
      color: 'pink'
    }
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Platform Launch',
      description: 'Successfully launched Zion as the first free AI-powered marketplace with 10,000+ active users.',
      icon: '🚀',
      color: 'blue'
    },
    {
      year: '2023',
      title: 'AI Research Breakthrough',
      description: 'Developed proprietary AI algorithms that power our intelligent matching system.',
      icon: '🤖',
      color: 'purple'
    },
    {
      year: '2022',
      title: 'Team Formation',
      description: 'Assembled world-class team of AI researchers, engineers, and business experts.',
      icon: '👥',
      color: 'green'
    },
    {
      year: '2021',
      title: 'Vision Conception',
      description: 'Conceived the idea of democratizing AI technology through a free marketplace.',
      icon: '💡',
      color: 'pink'
    }
  ]

  return (
    <EnhancedLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Zion</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We're revolutionizing the way businesses access AI technology through our free, 
                intelligent marketplace that connects companies with the perfect AI solutions.
              </p>
              <EnhancedButton 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              >
                Get Started
              </EnhancedButton>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <InteractiveStats stats={stats} />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                World-class experts in AI, technology, and business innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <GlassmorphismCard key={index} className="text-center">
                  <div className="text-4xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassmorphismCard>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <GlassmorphismCard key={index} className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </GlassmorphismCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Key milestones in our mission to democratize AI
              </p>
            </div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of companies already using Zion to access cutting-edge AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton 
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
              >
                Explore Services
              </EnhancedButton>
              <EnhancedButton 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg"
              >
                Contact Us
              </EnhancedButton>
            </div>
          </div>
        </section>
      </div>
    </EnhancedLayout>
  )
}

export default AboutPage