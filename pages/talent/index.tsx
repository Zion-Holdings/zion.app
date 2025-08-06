import type { NextPage } from 'next'
import EnhancedLayout from '../../components/layout/EnhancedLayout'
import EnhancedButton from '../../components/ui/EnhancedButton'
import GlassmorphismCard from '../../components/ui/GlassmorphismCard'
import InteractiveStats from '../../components/ui/InteractiveStats'

const TalentPage: NextPage = () => {
  const stats = [
    { value: 50, label: 'Open Positions', icon: '💼', color: 'blue' as const, suffix: '+' },
    { value: 100, label: 'Team Members', icon: '👥', color: 'green' as const, suffix: '+' },
    { value: 25, label: 'Countries', icon: '🌍', color: 'purple' as const, suffix: '+' },
    { value: 4.9, label: 'Employee Rating', icon: '⭐', color: 'pink' as const }
  ]

  const positions = [
    {
      id: 'senior-developer',
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Lead development of scalable web applications using modern technologies',
      requirements: ['5+ years experience', 'React/Next.js', 'Node.js/Python', 'Cloud platforms', 'Team leadership'],
      icon: '💻',
      color: 'blue' as const
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain cloud infrastructure and CI/CD pipelines',
      requirements: ['3+ years experience', 'AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform', 'Monitoring tools'],
      icon: '⚙️',
      color: 'purple' as const
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Develop machine learning models and data-driven insights',
      requirements: ['4+ years experience', 'Python/R', 'ML frameworks', 'SQL/NoSQL', 'Statistical analysis'],
      icon: '🧠',
      color: 'green' as const
    },
    {
      id: 'ui-ux-designer',
      title: 'Senior UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create exceptional user experiences and beautiful interfaces',
      requirements: ['5+ years experience', 'Figma/Sketch', 'User research', 'Prototyping', 'Design systems'],
      icon: '🎨',
      color: 'pink' as const
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Drive product strategy and execution for enterprise solutions',
      requirements: ['4+ years experience', 'Agile/Scrum', 'Market analysis', 'User research', 'Cross-functional leadership'],
      icon: '📊',
      color: 'blue' as const
    },
    {
      id: 'security-engineer',
      title: 'Security Engineer',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description: 'Protect our systems and ensure compliance with security standards',
      requirements: ['3+ years experience', 'Security frameworks', 'Penetration testing', 'Compliance', 'Incident response'],
      icon: '🔒',
      color: 'purple' as const
    }
  ]

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Competitive salary with equity options and performance bonuses',
      icon: '💰',
      color: 'blue' as const
    },
    {
      title: 'Remote Work',
      description: 'Flexible remote work environment with global team collaboration',
      icon: '🏠',
      color: 'purple' as const
    },
    {
      title: 'Health Insurance',
      description: 'Comprehensive health insurance for you and your family',
      icon: '🏥',
      color: 'green' as const
    },
    {
      title: 'Professional Growth',
      description: 'Professional development budget and career growth opportunities',
      icon: '📈',
      color: 'pink' as const
    },
    {
      title: 'Latest Tools',
      description: 'Latest tools, equipment, and technology to do your best work',
      icon: '🛠️',
      color: 'blue' as const
    },
    {
      title: 'Unlimited PTO',
      description: 'Unlimited paid time off to maintain work-life balance',
      icon: '🌴',
      color: 'purple' as const
    }
  ]

  return (
    <EnhancedLayout
      title="Join Our Team • Zion Technology"
      description="Join Zion's talented team of innovators. Explore exciting career opportunities in technology, engineering, design, and more."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Join Our Team
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              Join Zion's talented team of innovators and help us build the future of AI-powered technology. 
              Explore exciting career opportunities in technology, engineering, design, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Apply Now
              </EnhancedButton>
              <EnhancedButton
                href="/services"
                variant="outline"
                size="lg"
                icon="📋"
              >
                View Services
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
                Team Statistics
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing our growing team and opportunities
            </p>
          </div>
          
          <InteractiveStats stats={stats} />
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Open Positions
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Exciting opportunities to join our innovative team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <GlassmorphismCard key={index} gradient={position.color} glow>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{position.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-neon-blue text-sm">{position.department}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300 text-sm">{position.location}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <div className="space-y-2 mb-4">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center space-x-2">
                          <span className="text-neon-green">✓</span>
                          <span className="text-gray-300 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neon-green font-semibold">{position.type}</span>
                      <a 
                        href={`/talent/${position.id}`}
                        className="text-neon-blue hover:text-neon-purple transition-colors font-semibold text-sm"
                      >
                        Apply Now →
                      </a>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Why Join Zion?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Discover the benefits of being part of our innovative team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <GlassmorphismCard key={index} gradient={benefit.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
                Ready to Join Our Mission?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of the revolution in AI technology. Join thousands of professionals already 
              working with Zion to build the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Apply Now
              </EnhancedButton>
              <EnhancedButton
                href="/about"
                variant="outline"
                size="lg"
                icon="📋"
              >
                Learn More
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}

export default TalentPage
