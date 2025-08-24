import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  price: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  complexity: string;
  timeline: string;
  featured: boolean;
  trending: boolean;
}

const INNOVATIVE_SERVICES: InnovativeService[] = [
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Simulation',
    description: 'Revolutionary quantum computing platform for solving complex optimization problems in logistics, finance, and scientific research.',
    category: 'Advanced Computing',
    icon: '⚛️',
    price: '$50,000 - $100,000',
    features: [
      'Quantum algorithm simulation',
      'Hybrid quantum-classical computing',
      'Real-time optimization',
      'Research collaboration tools',
      'Performance benchmarking'
    ],
    benefits: [
      'Solve problems 1000x faster',
      'Unlock new computational possibilities',
      'Future-proof technology investment',
      'Competitive advantage in research'
    ],
    useCases: ['Portfolio optimization', 'Supply chain logistics', 'Drug discovery', 'Climate modeling'],
    complexity: 'Very High',
    timeline: '20-24 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'space-tech',
    title: 'Space Technology & Satellite Solutions',
    description: 'Advanced space technology solutions including satellite communication, space data analytics, and orbital optimization.',
    category: 'Space Technology',
    icon: '🚀',
    price: '$150,000 - $500,000',
    features: [
      'Satellite communication systems',
      'Orbital optimization algorithms',
      'Space data analytics',
      'Ground station integration',
      'Mission planning software'
    ],
    benefits: [
      'Global communication coverage',
      'Advanced space data insights',
      'Optimized satellite operations',
      'Future-ready space infrastructure'
    ],
    useCases: ['Global communications', 'Earth observation', 'Navigation systems', 'Research missions'],
    complexity: 'Very High',
    timeline: '32-40 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'biotech-ai',
    title: 'Biotech AI Drug Discovery',
    description: 'AI-powered drug discovery platform using machine learning for pharmaceutical research and development.',
    category: 'Biotechnology',
    icon: '🧬',
    price: '$100,000 - $300,000',
    features: [
      'AI molecular modeling',
      'Drug target identification',
      'Clinical trial optimization',
      'Regulatory compliance tools',
      'Collaborative research platform'
    ],
    benefits: [
      'Accelerate drug discovery by 10x',
      'Reduce R&D costs significantly',
      'Improve success rates',
      'Faster time to market'
    ],
    useCases: ['Pharmaceutical R&D', 'Clinical trials', 'Drug repurposing', 'Personalized medicine'],
    complexity: 'Very High',
    timeline: '24-32 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'autonomous-vehicles',
    title: 'Autonomous Vehicles Platform',
    description: 'Complete autonomous vehicle solution with AI navigation, safety systems, and fleet management capabilities.',
    category: 'Autonomous Technology',
    icon: '🚗',
    price: '$150,000 - $400,000',
    features: [
      'AI navigation and pathfinding',
      'Advanced safety systems',
      'Fleet management platform',
      'Real-time monitoring',
      'Regulatory compliance'
    ],
    benefits: [
      'Reduce transportation costs by 50%',
      'Improve safety and efficiency',
      '24/7 operation capability',
      'Future-ready transportation'
    ],
    useCases: ['Logistics', 'Public transportation', 'Mining operations', 'Agriculture'],
    complexity: 'Very High',
    timeline: '28-36 weeks',
    featured: true,
    trending: false
  },
  {
    id: 'ai-robotics',
    title: 'AI Robotics & Industrial Automation',
    description: 'Intelligent robotics solutions with AI-powered automation for manufacturing, logistics, and industrial processes.',
    category: 'Industrial AI',
    icon: '🤖',
    price: '$50,000 - $150,000',
    features: [
      'AI-powered robot control systems',
      'Computer vision integration',
      'Predictive maintenance',
      'Safety monitoring and compliance',
      'Integration with existing systems'
    ],
    benefits: [
      'Increase production efficiency by 60%',
      'Reduce operational costs by 40%',
      'Improve workplace safety',
      '24/7 operation capability'
    ],
    useCases: ['Manufacturing', 'Warehouse automation', 'Quality control', 'Assembly lines'],
    complexity: 'High',
    timeline: '20-28 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'metaverse-platform',
    title: 'Enterprise Metaverse Platform',
    description: 'Complete metaverse solution for businesses with virtual offices, training environments, and immersive customer experiences.',
    category: 'Immersive Technology',
    icon: '🥽',
    price: '$5,000 - $15,000/month',
    features: [
      '3D virtual environments',
      'VR/AR integration',
      'Collaborative workspaces',
      'Custom branding',
      'Analytics dashboard'
    ],
    benefits: [
      'Reduce travel costs by 60%',
      'Improve team collaboration',
      'Enhanced customer engagement',
      'Future-ready business platform'
    ],
    useCases: ['Virtual meetings', 'Training simulations', 'Product demos', 'Virtual events'],
    complexity: 'High',
    timeline: '6-8 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'green-tech',
    title: 'Green Technology Sustainability',
    description: 'Comprehensive sustainability management platform for tracking carbon footprint, energy optimization, and environmental compliance.',
    category: 'Sustainability',
    icon: '🌱',
    price: '$4,000 - $10,000/month',
    features: [
      'Carbon footprint tracking',
      'Energy consumption monitoring',
      'Sustainability reporting',
      'Compliance management',
      'Predictive analytics'
    ],
    benefits: [
      'Reduce energy costs by 30%',
      'Achieve sustainability goals',
      'Compliance with regulations',
      'Improve brand reputation'
    ],
    useCases: ['Corporate sustainability', 'Building management', 'Manufacturing', 'Supply chain'],
    complexity: 'Medium',
    timeline: '4-6 weeks',
    featured: true,
    trending: false
  },
  {
    id: 'ai-legal',
    title: 'AI Legal Document Review',
    description: 'Automated legal document analysis and review using natural language processing and machine learning.',
    category: 'Legal Tech',
    icon: '⚖️',
    price: '$15,000 - $40,000',
    features: [
      'Automated contract analysis',
      'Risk assessment scoring',
      'Compliance checking',
      'Document comparison',
      'Legal research assistance'
    ],
    benefits: [
      'Reduce document review time by 80%',
      'Improve accuracy and consistency',
      'Identify potential risks faster',
      'Lower legal costs'
    ],
    useCases: ['Contract review', 'Compliance audits', 'Due diligence', 'Legal research'],
    complexity: 'High',
    timeline: '10-12 weeks',
    featured: true,
    trending: true
  }
];

const categories = [
  { id: 'all', name: 'All Services', icon: '🚀' },
  { id: 'ai', name: 'AI & Machine Learning', icon: '🤖' },
  { id: 'space', name: 'Space Technology', icon: '🚀' },
  { id: 'biotech', name: 'Biotechnology', icon: '🧬' },
  { id: 'autonomous', name: 'Autonomous Systems', icon: '🚗' },
  { id: 'immersive', name: 'Immersive Tech', icon: '🥽' },
  { id: 'sustainability', name: 'Sustainability', icon: '🌱' },
  { id: 'legal', name: 'Legal Technology', icon: '⚖️' }
];

export const InnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<InnovativeService | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_SERVICES 
    : INNOVATIVE_SERVICES.filter(service => 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.title.toLowerCase().includes(selectedCategory)
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple via-zion-blue to-zion-cyan opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our cutting-edge portfolio of innovative services that push the boundaries of what's possible. 
              From quantum computing to space technology, we're building the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Innovation Consultation'}
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-zion-blue-dark'
                    : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card 
                  className="bg-zion-blue-light/20 border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => setSelectedService(service)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      <div className="flex gap-2">
                        {service.featured && (
                          <Badge variant="secondary" className="bg-zion-cyan text-zion-blue-dark">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        {service.trending && (
                          <Badge variant="outline" className="border-zion-purple text-zion-purple">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-zion-slate-light text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan font-semibold">{service.price}</span>
                        <Badge variant="outline" className="text-xs">
                          {service.complexity}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-zion-slate-light text-xs flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-zion-blue-light/30">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">Timeline: {service.timeline}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-zion-cyan hover:text-zion-cyan-dark p-0 h-auto"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-blue-dark border border-zion-blue-light/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{selectedService.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-zion-slate-light">{selectedService.category}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedService(null)}
                  className="text-zion-slate-light hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                  <p className="text-zion-slate-light mb-6">{selectedService.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Key Benefits</h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.useCases.map((useCase, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-zion-blue-light/10 rounded-lg p-6 mb-6">
                    <h4 className="text-white font-medium mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Investment:</span>
                        <span className="text-zion-cyan font-semibold">{selectedService.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Complexity:</span>
                        <span className="text-white">{selectedService.complexity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Timeline:</span>
                        <span className="text-white">{selectedService.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-4">All Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button
                      onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Quote Request: ${selectedService.title}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark"
                    >
                      Get Quote
                    </Button>
                    <Button
                      onClick={() => window.location.href = 'tel:+13024640950'}
                      variant="outline"
                      className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative technology solutions can transform your business 
              and give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Innovation Consultation Request'}
                size="lg"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Innovation Journey
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+13024640950'}
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase;