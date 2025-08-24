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
  Zap, 
  Globe,
  Lock,
  BarChart3,
  Users,
  Building,
  Clock,
  CheckCircle,
  ArrowRight,
  Settings,
  PieChart,
  MessageSquare,
  FileText,
  Video,
  Camera,
  Rocket,
  TrendingUp,
  Target,
  Lightbulb,
  Code
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const CLOUD_SERVICES = [
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Strategy',
    description: 'End-to-end cloud migration services with strategic planning and execution',
    icon: <Cloud className="h-8 w-8 text-blue-500" />,
    features: ['Migration Assessment', 'Strategy Planning', 'Data Migration', 'Application Migration'],
    pricing: { starting: '$20,000', average: '$50,000', enterprise: '$120,000+' },
    category: 'Migration',
    badge: 'Foundation',
    link: '/services/cloud-migration',
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance'],
    timeline: '12-24 weeks'
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture Design',
    description: 'Scalable and secure cloud architecture solutions for enterprise applications',
    icon: <Building className="h-8 w-8 text-indigo-500" />,
    features: ['Architecture Design', 'Security Planning', 'Scalability Design', 'Performance Optimization'],
    pricing: { starting: '$15,000', average: '$35,000', enterprise: '$80,000+' },
    category: 'Architecture',
    badge: 'Strategic',
    link: '/services/cloud-architecture',
    benefits: ['Optimized Performance', 'Enhanced Security', 'Cost Efficiency', 'Future Scalability'],
    timeline: '8-16 weeks'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security & Compliance',
    description: 'Comprehensive security solutions for cloud environments',
    icon: <Shield className="h-8 w-8 text-red-500" />,
    features: ['Security Assessment', 'Compliance Framework', 'Identity Management', 'Threat Detection'],
    pricing: { starting: '$12,000', average: '$28,000', enterprise: '$65,000+' },
    category: 'Security',
    badge: 'Critical',
    link: '/services/cloud-security',
    benefits: ['Enhanced Security', 'Regulatory Compliance', 'Risk Mitigation', 'Customer Trust'],
    timeline: '6-12 weeks'
  },
  {
    id: 'cloud-optimization',
    title: 'Cloud Cost Optimization',
    description: 'Optimize cloud costs while maintaining performance and reliability',
    icon: <PieChart className="h-8 w-8 text-green-500" />,
    features: ['Cost Analysis', 'Resource Optimization', 'Reserved Instances', 'Monitoring & Alerts'],
    pricing: { starting: '$8,000', average: '$20,000', enterprise: '$45,000+' },
    category: 'Optimization',
    badge: 'Cost Effective',
    link: '/services/cloud-optimization',
    benefits: ['Reduced Cloud Costs', 'Better Resource Utilization', 'Improved ROI', 'Budget Control'],
    timeline: '4-8 weeks'
  },
  {
    id: 'cloud-monitoring',
    title: 'Cloud Monitoring & Management',
    description: '24/7 cloud infrastructure monitoring and proactive management',
    icon: <Monitor className="h-8 w-8 text-cyan-500" />,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Incident Response'],
    pricing: { starting: '$3,000', average: '$8,000', enterprise: '$20,000+' },
    category: 'Management',
    badge: 'Essential',
    link: '/services/cloud-monitoring',
    benefits: ['Proactive Issue Detection', 'Reduced Downtime', 'Better Performance', 'Peace of Mind'],
    timeline: '2-4 weeks'
  },
  {
    id: 'multi-cloud',
    title: 'Multi-Cloud Strategy',
    description: 'Strategic multi-cloud solutions for vendor diversification and optimization',
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    features: ['Multi-cloud Assessment', 'Vendor Selection', 'Integration Strategy', 'Management Platform'],
    pricing: { starting: '$25,000', average: '$60,000', enterprise: '$150,000+' },
    category: 'Strategy',
    badge: 'Advanced',
    link: '/services/multi-cloud',
    benefits: ['Vendor Diversification', 'Best-in-class Services', 'Risk Mitigation', 'Cost Optimization'],
    timeline: '16-32 weeks'
  },
  {
    id: 'cloud-native',
    title: 'Cloud-Native Development',
    description: 'Modern cloud-native application development and deployment',
    icon: <Code className="h-8 w-8 text-orange-500" />,
    features: ['Microservices Architecture', 'Container Orchestration', 'DevOps Implementation', 'CI/CD Pipelines'],
    pricing: { starting: '$30,000', average: '$75,000', enterprise: '$180,000+' },
    category: 'Development',
    badge: 'Modern',
    link: '/services/cloud-native',
    benefits: ['Improved Scalability', 'Faster Deployment', 'Better Reliability', 'Reduced Costs'],
    timeline: '20-40 weeks'
  },
  {
    id: 'cloud-backup',
    title: 'Cloud Backup & Disaster Recovery',
    description: 'Comprehensive backup and disaster recovery solutions in the cloud',
    icon: <Database className="h-8 w-8 text-teal-500" />,
    features: ['Backup Strategy', 'Automated Backups', 'Disaster Recovery', 'Testing & Validation'],
    pricing: { starting: '$8,000', average: '$18,000', enterprise: '$45,000+' },
    category: 'Recovery',
    badge: 'Critical',
    link: '/services/cloud-backup',
    benefits: ['Business Continuity', 'Data Protection', 'Compliance', 'Peace of Mind'],
    timeline: '6-12 weeks'
  },
  {
    id: 'edge-computing',
    title: 'Edge Computing Solutions',
    description: 'Edge computing solutions for low-latency and distributed applications',
    icon: <Network className="h-8 w-8 text-pink-500" />,
    features: ['Edge Strategy', 'Infrastructure Design', 'Application Deployment', 'Performance Optimization'],
    pricing: { starting: '$35,000', average: '$80,000', enterprise: '$200,000+' },
    category: 'Edge',
    badge: 'Innovative',
    link: '/services/edge-computing',
    benefits: ['Reduced Latency', 'Improved Performance', 'Better User Experience', 'Cost Optimization'],
    timeline: '24-48 weeks'
  },
  {
    id: 'serverless',
    title: 'Serverless Architecture',
    description: 'Serverless solutions for scalable and cost-effective applications',
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    features: ['Serverless Strategy', 'Function Design', 'Integration Services', 'Cost Optimization'],
    pricing: { starting: '$15,000', average: '$35,000', enterprise: '$80,000+' },
    category: 'Serverless',
    badge: 'Efficient',
    link: '/services/serverless',
    benefits: ['Reduced Infrastructure Costs', 'Automatic Scaling', 'Faster Development', 'Better Reliability'],
    timeline: '8-16 weeks'
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud Consulting Services',
    description: 'Expert cloud consulting for strategic planning and implementation',
    icon: <Lightbulb className="h-8 w-8 text-emerald-500" />,
    features: ['Cloud Assessment', 'Strategy Development', 'Implementation Guidance', 'Best Practices'],
    pricing: { starting: '$150/hour', average: '$250/hour', enterprise: '$350/hour+' },
    category: 'Consulting',
    badge: 'Expert',
    link: '/services/cloud-consulting',
    benefits: ['Expert Guidance', 'Proven Methodologies', 'Risk Mitigation', 'Accelerated Results'],
    timeline: 'Ongoing'
  },
  {
    id: 'cloud-training',
    title: 'Cloud Training & Certification',
    description: 'Comprehensive training programs for cloud technologies and best practices',
    icon: <Users className="h-8 w-8 text-violet-500" />,
    features: ['Custom Training Programs', 'Certification Preparation', 'Hands-on Workshops', 'Ongoing Support'],
    pricing: { starting: '$5,000', average: '$12,000', enterprise: '$25,000+' },
    category: 'Training',
    badge: 'Educational',
    link: '/services/cloud-training',
    benefits: ['Improved Skills', 'Better Adoption', 'Reduced Support Needs', 'Increased Productivity'],
    timeline: '2-8 weeks'
  }
];

const CLOUD_PROVIDERS = [
  { name: 'AWS', logo: 'AWS', features: ['EC2', 'S3', 'Lambda', 'RDS'], color: 'bg-orange-500' },
  { name: 'Azure', logo: 'Azure', features: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database'], color: 'bg-blue-500' },
  { name: 'Google Cloud', logo: 'GCP', features: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL'], color: 'bg-green-500' },
  { name: 'IBM Cloud', logo: 'IBM', features: ['Virtual Servers', 'Object Storage', 'Cloud Functions', 'Db2'], color: 'bg-blue-600' }
];

const CLOUD_BENEFITS = [
  {
    icon: <TrendingUp className="h-12 w-12 text-zion-cyan" />,
    title: 'Scalability',
    description: 'Scale resources up or down based on demand automatically'
  },
  {
    icon: <PieChart className="h-12 w-12 text-zion-purple" />,
    title: 'Cost Efficiency',
    description: 'Pay only for resources you use with no upfront infrastructure costs'
  },
  {
    icon: <Shield className="h-12 w-12 text-zion-cyan" />,
    title: 'Security',
    description: 'Enterprise-grade security with built-in compliance and governance'
  },
  {
    icon: <Globe className="h-12 w-12 text-zion-purple" />,
    title: 'Global Reach',
    description: 'Deploy applications globally with low-latency access worldwide'
  }
];

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="Cloud Services & Solutions - Zion Tech Group" 
        description="Comprehensive cloud services including migration, architecture, security, optimization, and management. Expert cloud solutions for businesses."
        keywords="cloud services, cloud migration, cloud architecture, cloud security, cloud optimization, multi-cloud, serverless, edge computing"
        canonical="https://ziontechgroup.com/cloud-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transform your business with comprehensive cloud solutions that drive innovation, 
            efficiency, and growth through modern cloud technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              <Link to="/request-quote">Get Cloud Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Link to="/contact">Cloud Assessment</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Cloud Benefits */}
      <div className="py-16 bg-zion-slate/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Cloud Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CLOUD_BENEFITS.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-cyan/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Providers */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Platform Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLOUD_PROVIDERS.map((provider, index) => (
              <div key={index} className="bg-zion-blue-dark/30 p-6 rounded-lg border border-zion-purple/20 text-center">
                <div className={`w-16 h-16 ${provider.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{provider.logo}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{provider.name}</h3>
                <ul className="space-y-2">
                  {provider.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-zion-cyan/70">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cloud Services Grid */}
      <div className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Solutions</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Choose from our extensive range of cloud services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLOUD_SERVICES.map((service) => (
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our cloud experts are ready to help you migrate, optimize, and manage your cloud infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate">
              <Link to="/request-quote">Start Cloud Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Schedule Consultation</Link>
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