import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Truck, 
  TrendingUp, 
  Building, 
  GraduationCap, 
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

export default function InnovativeNewServices() {
  const categories = [
    {
      name: "AI & Digital Marketing",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Healthcare",
      icon: Heart,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Sustainability",
      icon: Leaf,
      color: "from-emerald-500 to-green-500"
    },
    {
      name: "Legal Tech",
      icon: Scale,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Supply Chain",
      icon: Truck,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "FinTech",
      icon: TrendingUp,
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Smart Cities",
      icon: Building,
      color: "from-gray-500 to-blue-500"
    },
    {
      name: "Education",
      icon: GraduationCap,
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Quantum Computing",
      icon: Atom,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative New Services - Zion Tech Group" 
        description="Discover cutting-edge micro SAAS services, IT solutions, and AI innovations that transform businesses and drive digital transformation."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative New Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Cutting-edge micro SAAS solutions, IT services, and AI innovations that drive business transformation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan">
                <span className="text-zion-cyan font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
                <span className="text-zion-purple font-semibold">Quantum Technology</span>
              </div>
              <div className="bg-zion-green/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-green">
                <span className="text-zion-green font-semibold">Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Services Portfolio
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Explore our comprehensive suite of innovative services designed to give your business a competitive edge in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INNOVATIVE_NEW_SERVICES.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div key={service.id} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-zion-cyan/70">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Target className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan/70">Market Price:</span>
                      <span className="text-white font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-zion-cyan/70">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                  </div>

                  {/* Innovation Level */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zion-cyan/70">Innovation Level:</span>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-xs text-yellow-400 font-semibold">
                          {service.innovationLevel.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Get Started
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-zion-cyan/70">
                      Contact: {service.contactInfo.phone}
                    </div>
                    <div className="text-xs text-zion-cyan/70">
                      {service.contactInfo.email}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver innovative solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance features to protect your business and data
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support and expertise from our global team of technology professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Trends & Innovation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Trends & Innovation
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Stay ahead of the curve with our forward-thinking solutions that address emerging market needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Emerging Technology Trends</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Quantum Computing</h4>
                    <p className="text-zion-cyan/80">Revolutionary computing power for complex problem-solving</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">AI & Machine Learning</h4>
                    <p className="text-zion-cyan/80">Intelligent automation and predictive analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Sustainability Tech</h4>
                    <p className="text-zion-cyan/80">Green technology solutions for environmental impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Cost Reduction</span>
                    <span className="text-green-400 font-bold">25-70%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Efficiency Improvement</span>
                    <span className="text-blue-400 font-bold">30-60%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">ROI Achievement</span>
                    <span className="text-purple-400 font-bold">200-1000%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our innovative services can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-zion-cyan/80 mb-4">
                Get personalized advice from our technology experts
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Expert Consultation Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Schedule Consultation →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Assessment</h3>
              <p className="text-zion-cyan/80 mb-4">
                Understand the potential return on your investment
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=ROI Assessment Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Get Assessment →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-zion-cyan/80 mb-4">
                Begin your transformation journey immediately
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quick Start Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Start Now →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}