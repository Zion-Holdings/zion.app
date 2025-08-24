import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import {
  Bot,
  Shield,
  Cloud,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Users,
  Zap,
  Code,
  Building
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
  badge?: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  support: string;
  link: string;
}

const SERVICES: Service[] = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    category: 'AI & ML',
    price: '$29/month',
    marketPrice: '$100-500/month',
    features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Plagiarism-free content'],
    benefits: ['Save 80% time on content creation', 'Improve SEO rankings', 'Maintain consistent brand voice', 'Scale content production'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'AI-Powered',
    rating: 4.9,
    reviewCount: 1247,
    deliveryTime: 'Instant',
    support: '24/7 AI Support',
    link: '/ai-content-generator'
  },
  {
    id: 'cybersecurity-assessment',
    title: 'Cybersecurity Assessment',
    description: 'Comprehensive security audits and vulnerability assessments for your digital infrastructure.',
    category: 'Security',
    price: '$199/month',
    marketPrice: '$500-2000/month',
    features: ['Penetration testing', 'Vulnerability scanning', 'Compliance reporting', 'Security recommendations'],
    benefits: ['Identify security gaps', 'Meet compliance requirements', 'Protect customer data', 'Reduce breach risk'],
    icon: <Shield className="h-8 w-8" />,
    badge: 'Security',
    rating: 4.8,
    reviewCount: 892,
    deliveryTime: '3-5 days',
    support: 'Expert Security Team',
    link: '/cybersecurity-assessment'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Service',
    description: 'Seamless migration of your applications and data to cloud platforms with zero downtime.',
    category: 'Cloud',
    price: '$299/month',
    marketPrice: '$1000-5000/month',
    features: ['Zero-downtime migration', 'Multi-cloud support', 'Performance optimization', 'Cost analysis'],
    benefits: ['Reduce infrastructure costs', 'Improve scalability', 'Enhanced security', 'Better performance'],
    icon: <Cloud className="h-8 w-8" />,
    badge: 'Cloud',
    rating: 4.7,
    reviewCount: 654,
    deliveryTime: '2-4 weeks',
    support: 'Migration Specialists',
    link: '/cloud-migration'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Dashboard',
    description: 'Real-time business intelligence dashboards with customizable KPIs and automated reporting.',
    category: 'Analytics',
    price: '$79/month',
    marketPrice: '$300-1500/month',
    features: ['Real-time dashboards', 'Custom KPIs', 'Automated reports', 'Data visualization'],
    benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve efficiency', 'Reduce manual work'],
    icon: <Database className="h-8 w-8" />,
    badge: 'Analytics',
    rating: 4.6,
    reviewCount: 445,
    deliveryTime: '1-2 weeks',
    support: 'Data Analysts',
    link: '/data-analytics'
  },
  {
    id: 'api-development',
    title: 'API Development & Integration',
    description: 'Custom API development and seamless integration with your existing systems and third-party services.',
    category: 'Development',
    price: '$149/month',
    marketPrice: '$500-3000/month',
    features: ['Custom API design', 'Third-party integration', 'Webhook implementation', 'API documentation'],
    benefits: ['Streamline workflows', 'Improve efficiency', 'Reduce manual work', 'Better user experience'],
    icon: <Code className="h-8 w-8" />,
    badge: 'Development',
    rating: 4.8,
    reviewCount: 567,
    deliveryTime: '2-3 weeks',
    support: 'API Developers',
    link: '/api-development'
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
    category: 'Infrastructure',
    price: '$399/month',
    marketPrice: '$1000-5000/month',
    features: ['SD-WAN solutions', 'VPN setup', 'Load balancing', 'Network monitoring'],
    benefits: ['Improved performance', 'Enhanced security', 'Better reliability', 'Scalable growth'],
    icon: <Building className="h-8 w-8" />,
    badge: 'Infrastructure',
    rating: 4.7,
    reviewCount: 334,
    deliveryTime: '3-4 weeks',
    support: 'Network Engineers',
    link: '/network-infrastructure'
  },
  {
    id: 'document-management',
    title: 'Document Management System',
    description: 'Secure, cloud-based document management with advanced search, collaboration, and compliance features.',
    category: 'Productivity',
    price: '$49/month',
    marketPrice: '$200-1000/month',
    features: ['Cloud storage', 'Advanced search', 'Collaboration tools', 'Compliance features'],
    benefits: ['Organize documents', 'Improve collaboration', 'Ensure compliance', 'Secure storage'],
    icon: <Database className="h-8 w-8" />,
    badge: 'Productivity',
    rating: 4.5,
    reviewCount: 789,
    deliveryTime: '1 week',
    support: 'Productivity Experts',
    link: '/document-management'
  },
  {
    id: 'video-production',
    title: 'Video Production Suite',
    description: 'Professional video editing, streaming, and production tools powered by AI and cloud technology.',
    category: 'Creative',
    price: '$89/month',
    marketPrice: '$300-2000/month',
    features: ['AI-powered editing', 'Automated captions', 'Professional templates', 'Cloud rendering'],
    benefits: ['Create professional videos', 'Save editing time', 'Improve engagement', 'Scale production'],
    icon: <Settings className="h-8 w-8" />,
    badge: 'Creative',
    rating: 4.6,
    reviewCount: 456,
    deliveryTime: '1-2 weeks',
    support: 'Video Specialists',
    link: '/video-production'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Service',
    description: 'Professional user interface and experience design for web and mobile applications.',
    category: 'Design',
    price: '$199/month',
    marketPrice: '$500-3000/month',
    features: ['Wireframing', 'Prototyping', 'Usability testing', 'Design systems'],
    benefits: ['Better user experience', 'Higher conversion rates', 'Reduced development time', 'Brand consistency'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'Design',
    rating: 4.8,
    reviewCount: 678,
    deliveryTime: '2-4 weeks',
    support: 'Design Experts',
    link: '/ui-ux-design'
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Optimize your applications and websites for maximum speed, efficiency, and user experience.',
    category: 'Performance',
    price: '$129/month',
    marketPrice: '$400-2000/month',
    features: ['Speed optimization', 'Resource optimization', 'User experience', 'Performance monitoring'],
    benefits: ['Faster load times', 'Better user experience', 'Higher rankings', 'Reduced costs'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'Performance',
    rating: 4.7,
    reviewCount: 445,
    deliveryTime: '1-2 weeks',
    support: 'Performance Engineers',
    link: '/performance-optimization'
  },
  {
    id: 'startup-launch',
    title: 'Startup Launch Package',
    description: 'Complete technology setup and launch support for new startups and businesses.',
    category: 'Startup',
    price: '$999/launch',
    marketPrice: '$3000-15000/launch',
    features: ['Website development', 'Digital marketing', 'Tech setup', 'Launch strategy'],
    benefits: ['Quick market entry', 'Professional presence', 'Cost-effective setup', 'Expert guidance'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'Startup',
    rating: 4.9,
    reviewCount: 234,
    deliveryTime: '4-6 weeks',
    support: 'Startup Specialists',
    link: '/startup-launch'
  },
  {
    id: 'innovation-consulting',
    title: 'Innovation Consulting',
    description: 'Strategic guidance on technology adoption, digital transformation, and innovation strategies.',
    category: 'Strategy',
    price: '$299/month',
    marketPrice: '$1000-5000/month',
    features: ['Technology strategy', 'Digital transformation', 'Innovation roadmap', 'Change management'],
    benefits: ['Stay competitive', 'Reduce risks', 'Improve efficiency', 'Future-proof business'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'Strategy',
    rating: 4.8,
    reviewCount: 345,
    deliveryTime: '2-3 weeks',
    support: 'Innovation Consultants',
    link: '/innovation-consulting'
  },
  {
    id: 'iot-platform',
    title: 'IoT Development Platform',
    description: 'Build, deploy, and manage Internet of Things devices and applications with our comprehensive platform.',
    category: 'IoT',
    price: '$179/month',
    marketPrice: '$500-3000/month',
    features: ['Device management', 'Data analytics', 'Automated workflows', 'Security features'],
    benefits: ['Connect devices', 'Monitor operations', 'Automate processes', 'Improve efficiency'],
    icon: <Globe className="h-8 w-8" />,
    badge: 'IoT',
    rating: 4.6,
    reviewCount: 234,
    deliveryTime: '3-4 weeks',
    support: 'IoT Engineers',
    link: '/iot-platform'
  },
  {
    id: 'server-management',
    title: 'Server Management',
    description: '24/7 server monitoring, maintenance, and optimization for optimal performance and uptime.',
    category: 'Infrastructure',
    price: '$249/month',
    marketPrice: '$800-4000/month',
    features: ['24/7 monitoring', 'Automated maintenance', 'Backup solutions', 'Disaster recovery'],
    benefits: ['High uptime', 'Reduced downtime', 'Better performance', 'Peace of mind'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'Infrastructure',
    rating: 4.7,
    reviewCount: 456,
    deliveryTime: '1 week',
    support: 'Server Engineers',
    link: '/server-management'
  },
  {
    id: 'remote-work-solutions',
    title: 'Remote Work Solutions',
    description: 'Complete remote work infrastructure including VPN, collaboration tools, and security measures.',
    category: 'Remote',
    price: '$99/month',
    marketPrice: '$300-1500/month',
    features: ['VPN setup', 'Collaboration tools', 'Security measures', 'Training support'],
    benefits: ['Enable remote work', 'Improve productivity', 'Ensure security', 'Reduce costs'],
    icon: <Monitor className="h-8 w-8" />,
    badge: 'Remote',
    rating: 4.5,
    reviewCount: 567,
    deliveryTime: '1-2 weeks',
    support: 'Remote Work Specialists',
    link: '/remote-work-solutions'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Custom mobile applications for iOS and Android with modern design and advanced features.',
    category: 'Mobile',
    price: '$399/month',
    marketPrice: '$1500-8000/month',
    features: ['Native development', 'Cross-platform', 'Modern design', 'App store deployment'],
    benefits: ['Mobile presence', 'Better engagement', 'Higher conversions', 'Brand recognition'],
    icon: <Smartphone className="h-8 w-8" />,
    badge: 'Mobile',
    rating: 4.8,
    reviewCount: 678,
    deliveryTime: '6-12 weeks',
    support: 'Mobile Developers',
    link: '/mobile-app-development'
  },
  {
    id: 'marketing-automation',
    title: 'Digital Marketing Automation',
    description: 'Automate your marketing campaigns with AI-powered tools for email, social media, and advertising.',
    category: 'Marketing',
    price: '$149/month',
    marketPrice: '$500-2500/month',
    features: ['Email automation', 'Social media', 'Lead scoring', 'Campaign management'],
    benefits: ['Save time', 'Improve ROI', 'Better targeting', 'Scale campaigns'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'Marketing',
    rating: 4.6,
    reviewCount: 456,
    deliveryTime: '2-3 weeks',
    support: 'Marketing Experts',
    link: '/marketing-automation'
  },
  {
    id: 'blockchain-development',
    title: 'Blockchain Development',
    description: 'Custom blockchain solutions, smart contracts, and decentralized applications for your business.',
    category: 'Blockchain',
    price: '$599/month',
    marketPrice: '$2000-10000/month',
    features: ['Smart contracts', 'DApp development', 'Blockchain integration', 'Security audit'],
    benefits: ['Transparency', 'Security', 'Efficiency', 'Innovation'],
    icon: <Globe className="h-8 w-8" />,
    badge: 'Blockchain',
    rating: 4.7,
    reviewCount: 234,
    deliveryTime: '4-8 weeks',
    support: 'Blockchain Developers',
    link: '/blockchain-development'
  },
  {
    id: 'ml-platform',
    title: 'Machine Learning Platform',
    description: 'End-to-end machine learning platform for building, training, and deploying AI models.',
    category: 'AI/ML',
    price: '$299/month',
    marketPrice: '$1000-5000/month',
    features: ['Model training', 'Data preparation', 'Deployment', 'Model management'],
    benefits: ['Build AI solutions', 'Improve accuracy', 'Scale operations', 'Reduce costs'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'AI/ML',
    rating: 4.8,
    reviewCount: 345,
    deliveryTime: '3-4 weeks',
    support: 'ML Engineers',
    link: '/ml-platform'
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation',
    description: 'Automate your development and deployment processes with CI/CD pipelines and infrastructure as code.',
    category: 'DevOps',
    price: '$199/month',
    marketPrice: '$800-3000/month',
    features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing', 'Monitoring'],
    benefits: ['Faster delivery', 'Better quality', 'Reduced errors', 'Improved collaboration'],
    icon: <Bot className="h-8 w-8" />,
    badge: 'DevOps',
    rating: 4.7,
    reviewCount: 456,
    deliveryTime: '2-3 weeks',
    support: 'DevOps Engineers',
    link: '/devops-automation'
  },
  {
    id: 'compliance-management',
    title: 'Compliance Management',
    description: 'Automated compliance monitoring and reporting for various industry standards and regulations.',
    category: 'Compliance',
    price: '$179/month',
    marketPrice: '$600-3000/month',
    features: ['Automated monitoring', 'Compliance reporting', 'Audit trails', 'Risk assessment'],
    benefits: ['Stay compliant', 'Reduce risks', 'Save time', 'Peace of mind'],
    icon: <Shield className="h-8 w-8" />,
    badge: 'Compliance',
    rating: 4.6,
    reviewCount: 234,
    deliveryTime: '2-3 weeks',
    support: 'Compliance Experts',
    link: '/compliance-management'
  },
  {
    id: 'backup-recovery',
    title: 'Data Backup & Recovery',
    description: 'Automated backup solutions with disaster recovery planning and business continuity services.',
    category: 'Data Protection',
    price: '$89/month',
    marketPrice: '$300-1500/month',
    features: ['Automated backups', 'Disaster recovery', 'Business continuity', 'Security encryption'],
    benefits: ['Protect data', 'Quick recovery', 'Business continuity', 'Peace of mind'],
    icon: <Database className="h-8 w-8" />,
    badge: 'Data Protection',
    rating: 4.7,
    reviewCount: 567,
    deliveryTime: '1 week',
    support: 'Data Protection Specialists',
    link: '/backup-recovery'
  },
  {
    id: 'vr-solutions',
    title: 'Virtual Reality Solutions',
    description: 'Immersive VR experiences for training, marketing, and entertainment applications.',
    category: 'VR/AR',
    price: '$399/month',
    marketPrice: '$1500-8000/month',
    features: ['VR development', 'Content creation', 'Hardware integration', 'Training solutions'],
    benefits: ['Immersive experiences', 'Better training', 'Higher engagement', 'Innovation'],
    icon: <Globe className="h-8 w-8" />,
    badge: 'VR/AR',
    rating: 4.5,
    reviewCount: 123,
    deliveryTime: '6-10 weeks',
    support: 'VR/AR Developers',
    link: '/vr-solutions'
  },
  {
    id: 'quantum-consulting',
    title: 'Quantum Computing Consulting',
    description: 'Strategic guidance on quantum computing applications and implementation for your business.',
    category: 'Quantum',
    price: '$799/month',
    marketPrice: '$3000-15000/month',
    features: ['Quantum strategy', 'Use case analysis', 'Implementation planning', 'Future readiness'],
    benefits: ['Future-proof business', 'Competitive advantage', 'Innovation leadership', 'Strategic planning'],
    icon: <Globe className="h-8 w-8" />,
    badge: 'Quantum',
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: '4-6 weeks',
    support: 'Quantum Experts',
    link: '/quantum-consulting'
  }
];

const CATEGORIES = [
  'All',
  'AI & ML',
  'Security',
  'Cloud',
  'Analytics',
  'Development',
  'Infrastructure',
  'Productivity',
  'Creative',
  'Design',
  'Performance',
  'Startup',
  'Strategy',
  'IoT',
  'Remote',
  'Mobile',
  'Marketing',
  'Blockchain',
  'DevOps',
  'Compliance',
  'Data Protection',
  'VR/AR',
  'Quantum'
];

export default function ServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark">
      {/* Header */}
      <div className="bg-zion-blue-dark/50 border-b border-zion-purple/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="gradient-text">Micro SAAS</span> Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive suite of technology services designed to transform your business. 
            From AI-powered solutions to infrastructure management, we've got you covered.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Bot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark/30 border-zion-purple/30 text-white placeholder:text-zion-slate-light"
              />
            </div>
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark/30 border-zion-purple/30 text-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
              {CATEGORIES.map((category) => (
                <SelectItem key={category} value={category} className="text-white hover:bg-zion-purple/20">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark/30 border-zion-purple/30 text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
              <SelectItem value="popularity" className="text-white hover:bg-zion-purple/20">Most Popular</SelectItem>
              <SelectItem value="rating" className="text-white hover:bg-zion-purple/20">Highest Rated</SelectItem>
              <SelectItem value="price-low" className="text-white hover:bg-zion-purple/20">Price: Low to High</SelectItem>
              <SelectItem value="price-high" className="text-white hover:bg-zion-purple/20">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="text-zion-slate-light mb-6">
          Showing {sortedServices.length} of {SERVICES.length} services
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/30 border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="flex justify-between items-center p-3 bg-zion-purple/10 rounded-lg border border-zion-purple/20">
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                    <div className="text-sm text-zion-slate-light">Market: {service.marketPrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Bot className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                    <div className="text-xs text-zion-slate-light">({service.reviewCount} reviews)</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-xs text-zion-slate-light flex items-center gap-2">
                        <Bot className="h-3 w-3 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-zion-slate-light flex items-center gap-2">
                        <Bot className="h-3 w-3 text-zion-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Bot className="h-3 w-3 text-zion-cyan" />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Users className="h-3 w-3 text-zion-cyan" />
                    <span>{service.support}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white border-0 group-hover:scale-105 transition-all duration-300">
                  <Link to={service.link}>
                    <span>Get Started</span>
                    <Bot className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-t border-zion-purple/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Get started with our services today and experience the future of technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cyber-button text-lg px-8 py-4 h-auto">
              <Link to="/request-quote">
                <span>Get Free Quote</span>
                <Bot className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan/50">
              <Link to="/contact">
                <span>Contact Us</span>
                <Bot className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}