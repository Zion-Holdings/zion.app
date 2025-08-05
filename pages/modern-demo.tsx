
import { Home, Search, User }  from 'lucide-react';import React  from 'react';
import ModernLayout  from '../components/layout/ModernLayout';
import { 
  Zap, 
  Globe, 
  Users, 
  Settings, 
  BarChart3, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  Rocket
}  from 'lucide-react';

const ModernDemo: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Services',
      description: 'Advanced artificial intelligence solutions for your business needs',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Marketplace',
      description: 'Connect with professionals and services worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Talent Network',
      description: 'Access to top-tier AI and tech professionals',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: 'Business Tools',
      description: 'Comprehensive suite of business management tools',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and performance metrics',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security and data protection',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const stats = [
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Services Available', value: '1000+', icon: Globe },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Growth Rate', value: '200%', icon: TrendingUp }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion has revolutionized how we approach AI solutions. The platform is intuitive and the results are outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupXYZ',
      content: 'The marketplace connects us with top-tier talent and cutting-edge tools. Game-changer for our business.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'AI Director, InnovateLab',
      content: 'Exceptional platform with powerful analytics and seamless integration. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <ModernLayout>
      {/* Hero Section */}
      <section className="relative py-40 lg py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center neon-glow mr-4">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-responsive-4xl lg text-responsive-5xl font-bold text-white">
                Welcome to the Future of
                <span className="block gradient-text">AI Marketplace</span>
              </h1>
            </div>
            
            <p className="text-responsive-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the next generation of AI-powered marketplace with cutting-edge technology, 
              seamless navigation, and modern design that adapts to your needs.
            </p>
            
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <button className="btn btn-primary text-responsive-base px-8 py-4">
                Explore Marketplace
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn btn-secondary text-responsive-base px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-36 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container-responsive">
          <div className="grid-responsive-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                    <stat.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="text-responsive-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-40">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-responsive-lg text-gray-300 max-w-2xl mx-auto">
              Discover the advanced capabilities that make Zion the leading AI marketplace platform
            </p>
          </div>
          
          <div className="grid-responsive-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-neon group">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-responsive-lg font-semibold text-white mb-2 group-hover text-neon-blue transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-responsive-lg text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their business with Zion
            </p>
          </div>
          
          <div className="grid-responsive-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40">
        <div className="container-responsive">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-neon-blue mr-4" />
              <h2 className="text-responsive-3xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>
            </div>
            <p className="text-responsive-lg text-gray-300 mb-8 leading-relaxed">
              Join the future of AI-powered business solutions. Experience seamless navigation, 
              modern design, and cutting-edge technology all in one platform.
            </p>
            <div className="flex flex-col sm flex-row gap-4 justify-center">
              <button className="btn btn-primary text-responsive-base px-8 py-4">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn btn-ghost text-responsive-base px-8 py-4">
                Schedule Demo
              </button>
            </div>
          </div>
        
        {/* Mobile Navigation */}
        <div className="lg hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <div className="flex justify-around items-center py-2">
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Search className="w-5 h-5" />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
      </section>
    </ModernLayout>
  )
}

export default ModernDemo 