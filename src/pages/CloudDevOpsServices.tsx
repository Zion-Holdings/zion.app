import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Server, Code, GitBranch, Docker, Kubernetes, Aws, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CloudDevOpsServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Cloud & DevOps Services data
  const cloudDevOpsServices = [
    {
      id: 1,
      name: "Multi-Cloud Infrastructure Management",
      category: "Cloud Management",
      pricing: "Enterprise",
      description: "Comprehensive multi-cloud infrastructure management across AWS, Azure, GCP with unified monitoring and cost optimization",
      price: 8500,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Multi-cloud orchestration", "Cost optimization", "Unified monitoring", "Auto-scaling", "Disaster recovery", "Security compliance"],
      benefits: ["Reduced cloud costs", "Improved reliability", "Better performance", "Enhanced security", "Simplified management"],
      targetAudience: ["Large enterprises", "Multi-cloud organizations", "Financial services", "Healthcare systems"],
      tags: ["Multi-Cloud", "AWS", "Azure", "GCP", "Infrastructure", "Cost Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "4-8 weeks",
      support: "24/7 cloud support"
    },
    {
      id: 2,
      name: "Kubernetes Cluster Management",
      category: "Container Orchestration",
      pricing: "Professional",
      description: "Enterprise-grade Kubernetes cluster management with automated scaling, monitoring, and security",
      price: 4200,
      pricingModel: "monthly",
      userLimit: "Up to 50 clusters",
      features: ["Cluster automation", "Auto-scaling", "Security hardening", "Monitoring & alerting", "Backup & recovery", "Multi-region support"],
      benefits: ["Improved scalability", "Enhanced security", "Reduced operational overhead", "Better resource utilization"],
      targetAudience: ["DevOps teams", "Software companies", "Digital agencies", "E-commerce platforms"],
      tags: ["Kubernetes", "Container Orchestration", "DevOps", "Automation", "Scaling"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "2-4 weeks",
      support: "24/7 K8s support"
    },
    {
      id: 3,
      name: "CI/CD Pipeline Automation",
      category: "DevOps Automation",
      pricing: "Professional",
      description: "End-to-end CI/CD pipeline automation with testing, deployment, and rollback capabilities",
      price: 3800,
      pricingModel: "monthly",
      userLimit: "Up to 100 developers",
      features: ["Automated testing", "Deployment automation", "Rollback mechanisms", "Security scanning", "Performance testing", "Multi-environment support"],
      benefits: ["Faster deployments", "Reduced errors", "Improved quality", "Better collaboration", "Cost savings"],
      targetAudience: ["Development teams", "Software companies", "IT departments", "Digital agencies"],
      tags: ["CI/CD", "Automation", "DevOps", "Testing", "Deployment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "3-6 weeks",
      support: "24/7 DevOps support"
    },
    {
      id: 4,
      name: "Serverless Architecture Design",
      category: "Serverless",
      pricing: "Enterprise",
      description: "Design and implementation of scalable serverless architectures using AWS Lambda, Azure Functions, and GCP Cloud Functions",
      price: 6500,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Architecture design", "Function optimization", "Event-driven design", "Cost optimization", "Monitoring setup", "Security implementation"],
      benefits: ["Reduced infrastructure costs", "Automatic scaling", "Pay-per-use pricing", "Reduced operational overhead"],
      targetAudience: ["Startups", "SaaS companies", "E-commerce platforms", "API providers"],
      tags: ["Serverless", "AWS Lambda", "Azure Functions", "Event-Driven", "Scalability"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "6-10 weeks",
      support: "24/7 serverless support"
    },
    {
      id: 5,
      name: "Infrastructure as Code (IaC)",
      category: "Infrastructure",
      pricing: "Professional",
      description: "Infrastructure automation using Terraform, CloudFormation, and Ansible for consistent, repeatable deployments",
      price: 3200,
      pricingModel: "monthly",
      userLimit: "Up to 25 environments",
      features: ["Terraform automation", "CloudFormation templates", "Ansible playbooks", "Version control", "Testing automation", "Documentation"],
      benefits: ["Consistent deployments", "Reduced errors", "Faster provisioning", "Better collaboration", "Cost control"],
      targetAudience: ["DevOps teams", "Infrastructure teams", "Cloud architects", "System administrators"],
      tags: ["Infrastructure as Code", "Terraform", "CloudFormation", "Ansible", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "4-8 weeks",
      support: "24/7 IaC support"
    },
    {
      id: 6,
      name: "Cloud Security & Compliance",
      category: "Security",
      pricing: "Enterprise",
      description: "Comprehensive cloud security implementation with compliance monitoring for SOC2, HIPAA, and PCI-DSS",
      price: 7200,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Security assessment", "Compliance monitoring", "Threat detection", "Access control", "Data encryption", "Audit logging"],
      benefits: ["Enhanced security", "Regulatory compliance", "Risk mitigation", "Customer trust", "Insurance benefits"],
      targetAudience: ["Financial services", "Healthcare organizations", "E-commerce businesses", "Government agencies"],
      tags: ["Cloud Security", "Compliance", "SOC2", "HIPAA", "PCI-DSS", "Threat Detection"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      },
      deliveryTime: "8-12 weeks",
      support: "24/7 security support"
    }
  ];

  const categories = ['all', 'Cloud Management', 'Container Orchestration', 'DevOps Automation', 'Serverless', 'Infrastructure', 'Security'];
  const pricingOptions = ['all', 'Enterprise', 'Professional', 'Standard'];

  const filteredServices = cloudDevOpsServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud Management': return <Cloud className="w-6 h-6" />;
      case 'Container Orchestration': return <Docker className="w-6 h-6" />;
      case 'DevOps Automation': return <GitBranch className="w-6 h-6" />;
      case 'Serverless': return <Zap className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Enterprise': return 'text-purple-400';
      case 'Professional': return 'text-blue-400';
      case 'Standard': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Cloud & DevOps Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable cloud infrastructure, automated DevOps pipelines, and container orchestration solutions that accelerate your development cycle
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search cloud & DevOps services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {pricingOptions.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Tiers' : pricing}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  ${service.price.toLocaleString()}/month
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Delivery: {service.deliveryTime}</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our cloud and DevOps solutions are designed to grow with your business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOpsServices;