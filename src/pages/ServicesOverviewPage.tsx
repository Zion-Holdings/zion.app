import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe,
  Database,
  Network,
  Monitor,
  Code,
  Target,
  Lightbulb,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const SERVICE_CATEGORIES = [
  {
    id: 'ai-services',
    title: 'AI & Machine Learning Services',
    description: 'Transform your business with cutting-edge artificial intelligence solutions',
    icon: <Brain className="h-12 w-12 text-blue-500" />,
    color: 'from-blue-500 to-cyan-500',
    services: [
      'AI Development & Integration',
      'AI Process Automation',
      'AI-Powered Analytics',
      'Intelligent Chatbots',
      'AI Cybersecurity',
      'AI Content Generation',
      'AI Video Processing',
      'AI Data Processing',
      'AI Recommendation Systems',
      'AI Computer Vision',
      'AI NLP Services',
      'AI IoT Solutions'
    ],
    link: '/ai-services',
    badge: '12 Services',
    pricing: 'Starting from $1,500'
  },
  {
    id: 'it-services',
    title: 'IT Infrastructure & Services',
    description: 'Comprehensive IT solutions to modernize your technology stack',
    icon: <Server className="h-12 w-12 text-green-500" />,
    color: 'from-green-500 to-emerald-500',
    services: [
      'Cloud Infrastructure & Migration',
      'Cybersecurity & Compliance',
      'Network Infrastructure',
      'Data Management & Analytics',
      'Managed IT Services',
      'Custom Software Development',
      'Disaster Recovery',
      'Virtualization',
      'Mobile Device Management',
      'IT Strategy & Consulting',
      'Performance Monitoring',
      'Compliance & Auditing'
    ],
    link: '/it-services',
    badge: '12 Services',
    pricing: 'Starting from $2,000'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services for modern businesses',
    icon: <TrendingUp className="h-12 w-12 text-purple-500" />,
    color: 'from-purple-500 to-pink-500',
    services: [
      'Digital Strategy & Roadmap',
      'Process Automation & Optimization',
      'Customer Experience Transformation',
      'Data Analytics & Business Intelligence',
      'Cloud Transformation & Migration',
      'Mobile-First Transformation',
      'E-commerce & Digital Commerce',
      'Digital Workplace Transformation',
      'Digital Security & Compliance',
      'Change Management & Training',
      'Digital Innovation Lab',
      'Digital Transformation Consulting'
    ],
    link: '/digital-transformation',
    badge: '12 Services',
    pricing: 'Starting from $8,000'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services & Solutions',
    description: 'Expert cloud solutions for scalable and secure infrastructure',
    icon: <Cloud className="h-12 w-12 text-indigo-500" />,
    color: 'from-indigo-500 to-blue-500',
    services: [
      'Cloud Migration & Strategy',
      'Cloud Architecture Design',
      'Cloud Security & Compliance',
      'Cloud Cost Optimization',
      'Cloud Monitoring & Management',
      'Multi-Cloud Strategy',
      'Cloud-Native Development',
      'Cloud Backup & Disaster Recovery',
      'Edge Computing Solutions',
      'Serverless Architecture',
      'Cloud Consulting Services',
      'Cloud Training & Certification'
    ],
    link: '/cloud-services',
    badge: '12 Services',
    pricing: 'Starting from $3,000'
  }
];

const SERVICE_FEATURES = [
  {
    icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,
    title: 'Expert Team',
    description: 'Certified professionals with years of industry experience'
  },
  {
    icon: <Star className="h-8 w-8 text-zion-purple" />,
    title: 'Quality Guaranteed',
    description: 'Proven methodologies and best practices for successful delivery'
  },
  {
    icon: <Clock className="h-8 w-8 text-zion-cyan" />,
    title: 'Fast Delivery',
    description: 'Efficient processes to deliver results within agreed timelines'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-zion-purple" />,
    title: 'Competitive Pricing',
    description: 'Transparent pricing with flexible engagement models'
  }
];

const INDUSTRY_SOLUTIONS = [
  { industry: 'Healthcare', services: ['HIPAA Compliance', 'AI Diagnostics', 'Data Security', 'Cloud Migration'] },
  { industry: 'Finance', services: ['Regulatory Compliance', 'Fraud Detection', 'Risk Management', 'Digital Banking'] },
  { industry: 'Manufacturing', services: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Optimization', 'Quality Control'] },
  { industry: 'Retail', services: ['E-commerce Platforms', 'Customer Analytics', 'Inventory Management', 'Omnichannel Solutions'] },
  { industry: 'Education', services: ['Learning Management Systems', 'Student Analytics', 'Digital Classrooms', 'Remote Learning'] },
  { industry: 'Government', services: ['Digital Services', 'Cybersecurity', 'Data Management', 'Citizen Engagement'] }
];

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="Services Overview - Zion Tech Group" 
        description="Comprehensive overview of all our micro SAAS services including AI, IT, digital transformation, and cloud solutions. Expert services for businesses."
        keywords="services overview, AI services, IT services, digital transformation, cloud services, micro SAAS, business solutions"
        canonical="https://ziontechgroup.com/services-overview"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services Overview
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of micro SAAS services designed to transform your business 
            through technology innovation and expert solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              <Link to="/request-quote">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="py-16 bg-zion-slate/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_FEATURES.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-cyan/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Explore our comprehensive service categories designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.id} className="bg-zion-blue-dark/50 border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    {category.icon}
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {category.badge}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">{category.pricing}</span>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                      <Link to={category.link}>Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-white font-semibold mb-4">Services Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.services.map((service, index) => (
                      <div key={index} className="flex items-center text-sm text-zion-cyan/70">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Tailored solutions designed for your specific industry needs and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_SOLUTIONS.map((solution, index) => (
              <div key={index} className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-purple/20">
                <h3 className="text-xl font-semibold text-white mb-4">{solution.industry}</h3>
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-zion-cyan/70 flex items-center">
                      <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Statistics */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">48+</div>
              <p className="text-white">Services Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">500+</div>
              <p className="text-white">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-cyan mb-2">98%</div>
              <p className="text-white">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-zion-purple mb-2">24/7</div>
              <p className="text-white">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you choose the right services and implement solutions that drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate">
              <Link to="/request-quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}