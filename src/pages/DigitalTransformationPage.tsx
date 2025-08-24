import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Globe, 
  Smartphone, 
  Cloud,
  Database,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  PieChart,
  MessageSquare,
  FileText,
  Video,
  Camera,
  Building,
  Rocket
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const DIGITAL_TRANSFORMATION_SERVICES = [
  {
    id: 'digital-strategy',
    title: 'Digital Strategy & Roadmap',
    description: 'Comprehensive digital transformation strategy aligned with business objectives',
    icon: <Target className="h-8 w-8 text-blue-500" />,
    features: ['Digital Maturity Assessment', 'Technology Roadmap', 'Change Management Plan', 'ROI Analysis'],
    pricing: { starting: '$15,000', average: '$35,000', enterprise: '$80,000+' },
    category: 'Strategy',
    badge: 'Foundation',
    link: '/services/digital-strategy',
    benefits: ['Clear Digital Vision', 'Aligned Technology Goals', 'Measurable Outcomes', 'Competitive Advantage'],
    timeline: '4-8 weeks'
  },
  {
    id: 'process-automation',
    title: 'Process Automation & Optimization',
    description: 'Intelligent automation solutions to streamline business operations',
    icon: <Zap className="h-8 w-8 text-green-500" />,
    features: ['Workflow Analysis', 'RPA Implementation', 'Process Optimization', 'Performance Monitoring'],
    pricing: { starting: '$8,000', average: '$25,000', enterprise: '$60,000+' },
    category: 'Automation',
    badge: 'High Impact',
    link: '/services/process-automation',
    benefits: ['Increased Efficiency', 'Reduced Errors', 'Cost Savings', 'Improved Compliance'],
    timeline: '6-12 weeks'
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience Transformation',
    description: 'Omnichannel customer experience solutions for digital engagement',
    icon: <Users className="h-8 w-8 text-purple-500" />,
    features: ['CX Journey Mapping', 'Digital Touchpoints', 'Personalization Engine', 'Feedback Analytics'],
    pricing: { starting: '$12,000', average: '$30,000', enterprise: '$70,000+' },
    category: 'Experience',
    badge: 'Customer Focused',
    link: '/services/customer-experience',
    benefits: ['Enhanced Customer Satisfaction', 'Increased Loyalty', 'Higher Conversion Rates', 'Better Retention'],
    timeline: '8-16 weeks'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    description: 'Advanced analytics solutions to drive data-driven decision making',
    icon: <BarChart3 className="h-8 w-8 text-cyan-500" />,
    features: ['Data Strategy', 'Analytics Platform', 'Dashboard Development', 'Predictive Analytics'],
    pricing: { starting: '$10,000', average: '$28,000', enterprise: '$65,000+' },
    category: 'Analytics',
    badge: 'Insight Driven',
    link: '/services/data-analytics',
    benefits: ['Data-Driven Decisions', 'Improved Performance', 'Better Customer Insights', 'Operational Efficiency'],
    timeline: '6-14 weeks'
  },
  {
    id: 'cloud-transformation',
    title: 'Cloud Transformation & Migration',
    description: 'End-to-end cloud migration and optimization services',
    icon: <Cloud className="h-8 w-8 text-indigo-500" />,
    features: ['Cloud Assessment', 'Migration Planning', 'Implementation', 'Optimization'],
    pricing: { starting: '$20,000', average: '$50,000', enterprise: '$120,000+' },
    category: 'Infrastructure',
    badge: 'Scalable',
    link: '/services/cloud-transformation',
    benefits: ['Improved Scalability', 'Cost Optimization', 'Enhanced Security', 'Better Performance'],
    timeline: '12-24 weeks'
  },
  {
    id: 'mobile-transformation',
    title: 'Mobile-First Transformation',
    description: 'Mobile strategy and application development for digital engagement',
    icon: <Smartphone className="h-8 w-8 text-pink-500" />,
    features: ['Mobile Strategy', 'App Development', 'Responsive Design', 'Mobile Analytics'],
    pricing: { starting: '$15,000', average: '$40,000', enterprise: '$90,000+' },
    category: 'Mobile',
    badge: 'Modern',
    link: '/services/mobile-transformation',
    benefits: ['Enhanced Accessibility', 'Improved Engagement', 'Better User Experience', 'Increased Reach'],
    timeline: '10-20 weeks'
  },
  {
    id: 'ecommerce-transformation',
    title: 'E-commerce & Digital Commerce',
    description: 'Complete digital commerce solutions for online business growth',
    icon: <Globe className="h-8 w-8 text-orange-500" />,
    features: ['Platform Selection', 'Custom Development', 'Payment Integration', 'Analytics & Optimization'],
    pricing: { starting: '$18,000', average: '$45,000', enterprise: '$100,000+' },
    category: 'Commerce',
    badge: 'Revenue Focused',
    link: '/services/ecommerce-transformation',
    benefits: ['Increased Sales', 'Global Reach', '24/7 Availability', 'Better Customer Insights'],
    timeline: '12-20 weeks'
  },
  {
    id: 'workplace-transformation',
    title: 'Digital Workplace Transformation',
    description: 'Modern workplace solutions for remote and hybrid work environments',
    icon: <Building className="h-8 w-8 text-teal-500" />,
    features: ['Collaboration Tools', 'Remote Work Solutions', 'Digital Communication', 'Productivity Analytics'],
    pricing: { starting: '$12,000', average: '$32,000', enterprise: '$75,000+' },
    category: 'Workplace',
    badge: 'Productivity',
    link: '/services/workplace-transformation',
    benefits: ['Improved Collaboration', 'Increased Productivity', 'Better Work-Life Balance', 'Reduced Costs'],
    timeline: '8-16 weeks'
  },
  {
    id: 'security-transformation',
    title: 'Digital Security & Compliance',
    description: 'Comprehensive security solutions for digital transformation initiatives',
    icon: <Shield className="h-8 w-8 text-red-500" />,
    features: ['Security Assessment', 'Compliance Framework', 'Implementation', 'Ongoing Monitoring'],
    pricing: { starting: '$15,000', average: '$35,000', enterprise: '$80,000+' },
    category: 'Security',
    badge: 'Critical',
    link: '/services/security-transformation',
    benefits: ['Enhanced Security', 'Regulatory Compliance', 'Risk Mitigation', 'Customer Trust'],
    timeline: '10-18 weeks'
  },
  {
    id: 'change-management',
    title: 'Change Management & Training',
    description: 'Comprehensive change management and training programs for digital transformation',
    icon: <Users className="h-8 w-8 text-yellow-500" />,
    features: ['Change Strategy', 'Training Programs', 'Communication Plan', 'Success Metrics'],
    pricing: { starting: '$8,000', average: '$20,000', enterprise: '$50,000+' },
    category: 'Management',
    badge: 'People Focused',
    link: '/services/change-management',
    benefits: ['Smooth Transition', 'Increased Adoption', 'Reduced Resistance', 'Better Outcomes'],
    timeline: '6-12 weeks'
  },
  {
    id: 'innovation-lab',
    title: 'Digital Innovation Lab',
    description: 'Innovation hub for exploring emerging technologies and digital solutions',
    icon: <Lightbulb className="h-8 w-8 text-emerald-500" />,
    features: ['Technology Exploration', 'Prototype Development', 'Pilot Programs', 'Innovation Workshops'],
    pricing: { starting: '$25,000', average: '$60,000', enterprise: '$150,000+' },
    category: 'Innovation',
    badge: 'Future Ready',
    link: '/services/innovation-lab',
    benefits: ['Technology Leadership', 'Competitive Advantage', 'Innovation Culture', 'Future Growth'],
    timeline: '16-32 weeks'
  },
  {
    id: 'transformation-consulting',
    title: 'Digital Transformation Consulting',
    description: 'Expert consulting services for comprehensive digital transformation',
    icon: <Rocket className="h-8 w-8 text-violet-500" />,
    features: ['Transformation Assessment', 'Strategic Planning', 'Implementation Support', 'Success Measurement'],
    pricing: { starting: '$200/hour', average: '$300/hour', enterprise: '$400/hour+' },
    category: 'Consulting',
    badge: 'Expert',
    link: '/services/transformation-consulting',
    benefits: ['Expert Guidance', 'Proven Methodologies', 'Risk Mitigation', 'Accelerated Results'],
    timeline: 'Ongoing'
  }
];

const TRANSFORMATION_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Assessment & Strategy',
    description: 'Digital maturity assessment and strategic roadmap development',
    duration: '4-6 weeks',
    deliverables: ['Current State Analysis', 'Digital Strategy', 'Technology Roadmap', 'Change Management Plan']
  },
  {
    phase: 'Phase 2',
    title: 'Design & Planning',
    description: 'Detailed solution design and implementation planning',
    duration: '6-8 weeks',
    deliverables: ['Solution Architecture', 'Implementation Plan', 'Resource Planning', 'Risk Assessment']
  },
  {
    phase: 'Phase 3',
    title: 'Implementation',
    description: 'Solution development and deployment',
    duration: '8-20 weeks',
    deliverables: ['Solution Development', 'Testing & QA', 'Deployment', 'User Training']
  },
  {
    phase: 'Phase 4',
    title: 'Optimization',
    description: 'Performance optimization and continuous improvement',
    duration: '4-8 weeks',
    deliverables: ['Performance Monitoring', 'Optimization', 'Success Metrics', 'Future Roadmap']
  }
];

const SUCCESS_METRICS = [
  { metric: 'Efficiency Improvement', target: '25-40%', icon: <TrendingUp className="h-6 w-6" /> },
  { metric: 'Cost Reduction', target: '20-35%', icon: <PieChart className="h-6 w-6" /> },
  { metric: 'Customer Satisfaction', target: '15-30%', icon: <Users className="h-6 w-6" /> },
  { metric: 'Time to Market', target: '30-50%', icon: <Clock className="h-6 w-6" /> },
  { metric: 'Revenue Growth', target: '20-40%', icon: <BarChart3 className="h-6 w-6" /> },
  { metric: 'Employee Productivity', target: '25-45%', icon: <Zap className="h-6 w-6" /> }
];

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="Digital Transformation Services - Zion Tech Group" 
        description="Comprehensive digital transformation services including strategy, automation, customer experience, and innovation. Transform your business for the digital age."
        keywords="digital transformation, process automation, digital strategy, customer experience, cloud migration, change management, innovation lab"
        canonical="https://ziontechgroup.com/digital-transformation"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Digital Transformation Services
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transform your business for the digital age with comprehensive solutions that drive innovation, 
            efficiency, and growth through technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              <Link to="/request-quote">Start Transformation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Link to="/contact">Free Assessment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Transformation Phases */}
      <div className="py-16 bg-zion-slate/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Transformation Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSFORMATION_PHASES.map((phase, index) => (
              <div key={index} className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-purple/20">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{phase.phase}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                  <p className="text-zion-cyan/80 text-sm mb-3">{phase.description}</p>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                    {phase.duration}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {phase.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="text-sm text-zion-cyan/70 flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Expected Transformation Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SUCCESS_METRICS.map((metric, index) => (
              <div key={index} className="text-center bg-zion-blue-dark/30 p-4 rounded-lg border border-zion-purple/20">
                <div className="text-zion-cyan mb-3">{metric.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-sm">{metric.metric}</h3>
                <p className="text-zion-cyan font-bold">{metric.target}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Transformation Services Grid */}
      <div className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Transformation Services</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Choose from our extensive range of digital transformation services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGITAL_TRANSFORMATION_SERVICES.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    {service.icon}
                    {service.badge && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-cyan/80">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-zion-cyan/70 flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-zion-cyan/70 flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                      <div className="text-sm text-zion-cyan/70 space-y-1">
                        <p>Starting: {service.pricing.starting}</p>
                        <p>Average: {service.pricing.average}</p>
                        <p>Enterprise: {service.pricing.enterprise}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Timeline:</h4>
                      <p className="text-sm text-zion-cyan/70">{service.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      <Link to={service.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our digital transformation experts are ready to help you navigate the digital landscape and achieve sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate">
              <Link to="/request-quote">Start Your Transformation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Schedule Free Consultation</Link>
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