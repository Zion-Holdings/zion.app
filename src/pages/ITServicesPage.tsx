import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Network, 
  Monitor, 
  Code, 
  Globe,
  Smartphone,
  Laptop,
  Wifi,
  Lock,
  Zap,
  Settings,
  BarChart3,
  Users,
  Building,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const IT_SERVICES = [
  {
    id: 'cloud-services',
    title: 'Cloud Infrastructure & Migration',
    description: 'Comprehensive cloud solutions including migration, optimization, and management',
    icon: <Cloud className="h-8 w-8 text-blue-500" />,
    features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring'],
    pricing: { starting: '$3,000', average: '$12,000', enterprise: '$40,000+' },
    category: 'Infrastructure',
    badge: 'Popular',
    link: '/services/cloud-services',
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    description: 'Advanced security solutions to protect your business from cyber threats',
    icon: <Shield className="h-8 w-8 text-red-500" />,
    features: ['Penetration Testing', 'Security Audits', 'Compliance Management', 'Incident Response'],
    pricing: { starting: '$5,000', average: '$20,000', enterprise: '$60,000+' },
    category: 'Security',
    badge: 'Critical',
    link: '/services/cybersecurity',
    benefits: ['Protection Against Threats', 'Regulatory Compliance', 'Risk Mitigation', 'Business Continuity']
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of enterprise network solutions',
    icon: <Network className="h-8 w-8 text-green-500" />,
    features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Performance Optimization'],
    pricing: { starting: '$4,000', average: '$15,000', enterprise: '$50,000+' },
    category: 'Infrastructure',
    badge: 'Essential',
    link: '/services/network-infrastructure',
    benefits: ['Improved Connectivity', 'Enhanced Security', 'Better Performance', 'Scalable Solutions']
  },
  {
    id: 'data-management',
    title: 'Data Management & Analytics',
    description: 'Comprehensive data solutions including storage, backup, and business intelligence',
    icon: <Database className="h-8 w-8 text-purple-500" />,
    features: ['Data Backup & Recovery', 'Business Intelligence', 'Data Warehousing', 'Analytics Dashboards'],
    pricing: { starting: '$3,500', average: '$14,000', enterprise: '$45,000+' },
    category: 'Data',
    badge: 'Trending',
    link: '/services/data-management',
    benefits: ['Data-Driven Decisions', 'Improved Efficiency', 'Better Customer Insights', 'Competitive Advantage']
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Complete IT management including monitoring, maintenance, and support',
    icon: <Monitor className="h-8 w-8 text-cyan-500" />,
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Performance Optimization'],
    pricing: { starting: '$2,500', average: '$8,000', enterprise: '$25,000+' },
    category: 'Management',
    badge: 'Best Value',
    link: '/services/managed-it',
    benefits: ['Reduced Downtime', 'Lower IT Costs', 'Expert Support', 'Focus on Core Business']
  },
  {
    id: 'software-development',
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your specific business requirements',
    icon: <Code className="h-8 w-8 text-orange-500" />,
    features: ['Custom Applications', 'Web Development', 'Mobile Apps', 'API Integration'],
    pricing: { starting: '$8,000', average: '$25,000', enterprise: '$80,000+' },
    category: 'Development',
    badge: 'Premium',
    link: '/services/software-development',
    benefits: ['Tailored Solutions', 'Competitive Advantage', 'Process Automation', 'Improved Efficiency']
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive backup and recovery solutions to ensure business continuity',
    icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
    features: ['Backup Solutions', 'Recovery Planning', 'Testing & Validation', 'Documentation'],
    pricing: { starting: '$4,500', average: '$18,000', enterprise: '$55,000+' },
    category: 'Recovery',
    badge: 'Critical',
    link: '/services/disaster-recovery',
    benefits: ['Business Continuity', 'Risk Mitigation', 'Compliance', 'Peace of Mind']
  },
  {
    id: 'virtualization',
    title: 'Virtualization & Containerization',
    description: 'Modern virtualization solutions for improved resource utilization and management',
    icon: <Server className="h-8 w-8 text-indigo-500" />,
    features: ['VMware Solutions', 'Docker Containers', 'Resource Optimization', 'Management Tools'],
    pricing: { starting: '$3,500', average: '$14,000', enterprise: '$45,000+' },
    category: 'Infrastructure',
    badge: 'Efficient',
    link: '/services/virtualization',
    benefits: ['Better Resource Utilization', 'Reduced Costs', 'Improved Scalability', 'Easier Management']
  },
  {
    id: 'mobile-device-management',
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device security and management solutions',
    icon: <Smartphone className="h-8 w-8 text-pink-500" />,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe'],
    pricing: { starting: '$2,000', average: '$6,000', enterprise: '$20,000+' },
    category: 'Management',
    badge: 'Modern',
    link: '/services/mobile-management',
    benefits: ['Enhanced Security', 'Better Control', 'Compliance', 'Improved Productivity']
  },
  {
    id: 'it-consulting',
    title: 'IT Strategy & Consulting',
    description: 'Strategic IT consulting to align technology with business objectives',
    icon: <Building className="h-8 w-8 text-gray-500" />,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance'],
    pricing: { starting: '$150/hour', average: '$200/hour', enterprise: '$250/hour+' },
    category: 'Consulting',
    badge: 'Strategic',
    link: '/services/it-consulting',
    benefits: ['Strategic Alignment', 'Cost Optimization', 'Risk Mitigation', 'Technology Roadmap']
  },
  {
    id: 'performance-monitoring',
    title: 'Performance Monitoring & Optimization',
    description: 'Advanced monitoring solutions to optimize system performance and user experience',
    icon: <BarChart3 className="h-8 w-8 text-teal-500" />,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alerting Systems', 'Optimization Reports'],
    pricing: { starting: '$2,500', average: '$10,000', enterprise: '$30,000+' },
    category: 'Monitoring',
    badge: 'Proactive',
    link: '/services/performance-monitoring',
    benefits: ['Improved Performance', 'Proactive Issue Detection', 'Better User Experience', 'Reduced Downtime']
  },
  {
    id: 'compliance-auditing',
    title: 'Compliance & Auditing Services',
    description: 'Comprehensive compliance solutions for various industry standards and regulations',
    icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
    features: ['SOC 2 Compliance', 'GDPR Compliance', 'HIPAA Compliance', 'Regular Auditing'],
    pricing: { starting: '$6,000', average: '$25,000', enterprise: '$70,000+' },
    category: 'Compliance',
    badge: 'Required',
    link: '/services/compliance-auditing',
    benefits: ['Regulatory Compliance', 'Risk Mitigation', 'Customer Trust', 'Business Continuity']
  }
];

const IT_SERVICE_CATEGORIES = [
  { name: 'Infrastructure', count: 3, color: 'bg-blue-500' },
  { name: 'Security', count: 2, color: 'bg-red-500' },
  { name: 'Data', count: 1, color: 'bg-purple-500' },
  { name: 'Management', count: 2, color: 'bg-cyan-500' },
  { name: 'Development', count: 1, color: 'bg-orange-500' },
  { name: 'Recovery', count: 1, color: 'bg-yellow-500' },
  { name: 'Consulting', count: 1, color: 'bg-gray-500' },
  { name: 'Monitoring', count: 1, color: 'bg-teal-500' },
  { name: 'Compliance', count: 1, color: 'bg-emerald-500' }
];

const SERVICE_BENEFITS = [
  {
    icon: <Zap className="h-12 w-12 text-zion-cyan" />,
    title: 'Increased Efficiency',
    description: 'Streamline operations and improve productivity with optimized IT solutions'
  },
  {
    icon: <Shield className="h-12 w-12 text-zion-purple" />,
    title: 'Enhanced Security',
    description: 'Protect your business with enterprise-grade security and compliance solutions'
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-zion-cyan" />,
    title: 'Cost Optimization',
    description: 'Reduce IT costs while improving performance and reliability'
  },
  {
    icon: <Users className="h-12 w-12 text-zion-purple" />,
    title: 'Expert Support',
    description: 'Access to certified IT professionals and 24/7 technical support'
  }
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="IT Services & Solutions - Zion Tech Group" 
        description="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure, managed services, and more. Expert IT solutions for businesses."
        keywords="IT services, cloud computing, cybersecurity, network infrastructure, managed IT services, software development, disaster recovery"
        canonical="https://ziontechgroup.com/it-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Comprehensive IT services to modernize your infrastructure, enhance security, 
            and drive business growth through technology innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              <Link to="/request-quote">Get IT Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Benefits */}
      <div className="py-16 bg-zion-slate/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_BENEFITS.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-cyan/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">IT Service Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {IT_SERVICE_CATEGORIES.map((category) => (
              <div key={category.name} className="text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.count}</span>
                </div>
                <p className="text-zion-cyan font-medium text-sm">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IT Services Grid */}
      <div className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive IT Solutions</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Choose from our extensive range of IT services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IT_SERVICES.map((service) => (
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
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                    <div className="text-sm text-zion-cyan/70 space-y-1">
                      <p>Starting: {service.pricing.starting}</p>
                      <p>Average: {service.pricing.average}</p>
                      <p>Enterprise: {service.pricing.enterprise}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      <Link to={service.link}>Learn More</Link>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our IT experts are ready to help you modernize your technology stack and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate">
              <Link to="/request-quote">Request Free Assessment</Link>
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