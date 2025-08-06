import type { NextPage } from 'next';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import EnhancedButton from '../../components/ui/EnhancedButton';
import GlassmorphismCard from '../../components/ui/GlassmorphismCard';
import InteractiveStats from '../../components/ui/InteractiveStats';

const ServicesPage: NextPage = () => {
  const stats = [
    { value: 500, label: 'Services Available', icon: '🔧', color: 'blue' as const, suffix: '+' },
    { value: 99.9, label: 'Success Rate', icon: '✅', color: 'green' as const, suffix: '%' },
    { value: 24, label: 'Support Hours', icon: '🛡️', color: 'purple' as const, suffix: '/7' },
    { value: 1000, label: 'Happy Clients', icon: '😊', color: 'pink' as const, suffix: '+' }
  ];

  const services = [
    {
      id: 'ai-development',
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs',
      features: ['Machine Learning Models', 'Neural Networks', 'Natural Language Processing', 'Computer Vision'],
      price: '$150-500/hr',
      rating: 4.9,
      icon: '🤖',
      color: 'blue' as const,
      featured: true
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js/Python', 'Cloud Deployment', 'Performance Optimization'],
      price: '$100-300/hr',
      rating: 4.8,
      icon: '💻',
      color: 'purple' as const
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Optimization'],
      price: '$120-350/hr',
      rating: 4.7,
      icon: '📱',
      color: 'green' as const
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup and migration services',
      features: ['AWS/Azure/GCP', 'Infrastructure as Code', 'Security Compliance', 'Cost Optimization'],
      price: '$2000-15000',
      rating: 4.8,
      icon: '☁️',
      color: 'pink' as const
    },
    {
      id: 'security-auditing',
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and penetration testing',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Audits', 'Security Training'],
      price: '$1000-8000',
      rating: 4.9,
      icon: '🔒',
      color: 'blue' as const
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Advanced data analysis and business intelligence solutions',
      features: ['Data Mining', 'Predictive Analytics', 'Dashboard Creation', 'ETL Processes'],
      price: '$120-400/hr',
      rating: 4.7,
      icon: '📊',
      color: 'purple' as const
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and exceptional user experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: '$80-250/hr',
      rating: 4.8,
      icon: '🎨',
      color: 'green' as const
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Complete CI/CD pipelines and infrastructure automation',
      features: ['Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring & Alerting', 'Infrastructure as Code'],
      price: '$150-400/hr',
      rating: 4.8,
      icon: '⚙️',
      color: 'pink' as const
    }
  ];

  const categories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions for modern businesses',
      count: '50+ services',
      icon: '🤖',
      color: 'blue' as const
    },
    {
      name: 'Web Development',
      description: 'Full-stack web applications and platforms',
      count: '100+ services',
      icon: '💻',
      color: 'purple' as const
    },
    {
      name: 'Mobile Development',
      description: 'Cross-platform mobile applications',
      count: '75+ services',
      icon: '📱',
      color: 'green' as const
    },
    {
      name: 'Cloud & DevOps',
      description: 'Cloud infrastructure and automation',
      count: '60+ services',
      icon: '☁️',
      color: 'pink' as const
    },
    {
      name: 'Security',
      description: 'Cybersecurity and compliance solutions',
      count: '40+ services',
      icon: '🔒',
      color: 'blue' as const
    },
    {
      name: 'Design & UX',
      description: 'User experience and interface design',
      count: '80+ services',
      icon: '🎨',
      color: 'purple' as const
    }
  ];

  return (
    <EnhancedLayout
      title="IT Services - Zion"
      description="Professional IT services delivered by certified experts. From AI development to cloud migration, we have the expertise you need."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Professional IT Services
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              Professional IT services delivered by certified experts. From AI development to cloud migration, 
              we have the expertise you need to transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Get Started
              </EnhancedButton>
              <EnhancedButton
                href="/talents"
                variant="outline"
                size="lg"
                icon="👥"
              >
                Find Experts
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
                Service Statistics
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing our service platform's capabilities and success
            </p>
          </div>
          
          <InteractiveStats stats={stats} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Service Categories
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of IT services organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <GlassmorphismCard key={index} gradient={category.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="text-neon-blue font-semibold">{category.count}</div>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Featured Services
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Our most popular and highly-rated IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <GlassmorphismCard key={index} gradient={service.color} glow>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      {service.featured && (
                        <span className="text-xs bg-neon-blue text-black px-2 py-1 rounded-full font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <span className="text-neon-green">✓</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neon-green font-semibold">{service.price}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-white">{service.rating}</span>
                      </div>
                    </div>
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
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our professional IT services to accelerate 
              their digital transformation and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Start Your Project
              </EnhancedButton>
              <EnhancedButton
                href="/talents"
                variant="outline"
                size="lg"
                icon="👥"
              >
                Find Experts
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  );
};

export default ServicesPage;

