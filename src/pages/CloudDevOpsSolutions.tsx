import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Stethoscope, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Calendar, FileText, BarChart3 as BarChart3Icon, Users as UsersIcon2, CreditCard as CreditCardIcon2, MessageSquare as MessageSquareIcon, Camera as CameraIcon, Video as VideoIcon, Music as MusicIcon, BookOpen as BookOpenIcon } from 'lucide-react';

const CloudDevOpsSolutions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');

  // Cloud & DevOps Solutions data
  const cloudDevOpsSolutions = [
    {
      id: 1,
      name: "Multi-Cloud Infrastructure Management",
      category: "Cloud Infrastructure",
      complexity: "Enterprise",
      description: "Comprehensive multi-cloud infrastructure management with automated provisioning and cost optimization",
      price: 95000,
      pricingModel: "project-based",
      expertiseScore: 98,
      features: ["Multi-cloud orchestration", "Automated provisioning", "Cost optimization", "Performance monitoring"],
      benefits: ["Reduced costs", "Better performance", "Risk mitigation", "Scalability"],
      useCases: ["Large enterprises", "Multi-region deployments", "Hybrid cloud", "Disaster recovery"],
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
      tags: ["Multi-Cloud", "Infrastructure", "Automation", "Cost Optimization", "Orchestration"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "Kubernetes & Container Orchestration",
      category: "Containerization",
      complexity: "Advanced",
      description: "Enterprise-grade Kubernetes deployment and management with advanced monitoring and scaling",
      price: 75000,
      pricingModel: "project-based",
      expertiseScore: 97,
      features: ["Kubernetes deployment", "Auto-scaling", "Service mesh", "Monitoring & alerting"],
      benefits: ["Scalability", "Resource efficiency", "Deployment automation", "High availability"],
      useCases: ["Microservices", "Cloud-native apps", "DevOps pipelines", "High-traffic applications"],
      technologies: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus"],
      tags: ["Kubernetes", "Containerization", "Microservices", "DevOps", "Scalability"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "CI/CD Pipeline Automation",
      category: "DevOps",
      complexity: "Mid-Size",
      description: "End-to-end CI/CD pipeline automation for faster, more reliable software delivery",
      price: 55000,
      pricingModel: "project-based",
      expertiseScore: 95,
      features: ["Pipeline automation", "Testing integration", "Deployment automation", "Rollback capabilities"],
      benefits: ["Faster delivery", "Quality improvement", "Reduced errors", "Team productivity"],
      useCases: ["Software development", "Web applications", "Mobile apps", "API services"],
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Ansible"],
      tags: ["CI/CD", "Automation", "DevOps", "Deployment", "Testing"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "Serverless Architecture Solutions",
      category: "Serverless",
      complexity: "Advanced",
      description: "Modern serverless architecture design and implementation for scalable applications",
      price: 65000,
      pricingModel: "project-based",
      expertiseScore: 96,
      features: ["Function design", "Event-driven architecture", "Auto-scaling", "Cost optimization"],
      benefits: ["Reduced costs", "Automatic scaling", "Faster development", "Maintenance-free"],
      useCases: ["Web applications", "API services", "Data processing", "IoT applications"],
      technologies: ["AWS Lambda", "Azure Functions", "Google Cloud Functions", "EventBridge"],
      tags: ["Serverless", "Functions", "Event-Driven", "Auto-scaling", "Cost Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "Infrastructure as Code (IaC)",
      category: "Infrastructure",
      complexity: "Mid-Size",
      description: "Infrastructure automation using code for consistent, repeatable deployments",
      price: 45000,
      pricingModel: "project-based",
      expertiseScore: 94,
      features: ["Terraform modules", "Ansible playbooks", "Version control", "Environment management"],
      benefits: ["Consistency", "Reproducibility", "Version control", "Cost savings"],
      useCases: ["Cloud infrastructure", "On-premises setup", "Hybrid environments", "Disaster recovery"],
      technologies: ["Terraform", "Ansible", "CloudFormation", "ARM Templates", "Puppet"],
      tags: ["Infrastructure as Code", "Automation", "Terraform", "Ansible", "Version Control"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "Cloud Security & Compliance",
      category: "Security",
      complexity: "Enterprise",
      description: "Comprehensive cloud security solutions with compliance monitoring and threat detection",
      price: 85000,
      pricingModel: "project-based",
      expertiseScore: 99,
      features: ["Security monitoring", "Compliance automation", "Threat detection", "Access management"],
      benefits: ["Enhanced security", "Compliance", "Risk reduction", "Audit readiness"],
      useCases: ["Financial services", "Healthcare", "Government", "Enterprise applications"],
      technologies: ["AWS Security Hub", "Azure Security Center", "CloudTrail", "IAM", "WAF"],
      tags: ["Cloud Security", "Compliance", "Threat Detection", "Access Control", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "Database Migration & Optimization",
      category: "Database",
      complexity: "Advanced",
      description: "Cloud database migration services with performance optimization and scaling",
      price: 70000,
      pricingModel: "project-based",
      expertiseScore: 95,
      features: ["Migration planning", "Performance tuning", "Scaling strategies", "Backup & recovery"],
      benefits: ["Better performance", "Cost reduction", "Scalability", "Reliability"],
      useCases: ["Legacy system migration", "Performance improvement", "Cloud adoption", "Database scaling"],
      technologies: ["AWS RDS", "Azure SQL", "Google Cloud SQL", "MongoDB Atlas", "PostgreSQL"],
      tags: ["Database Migration", "Performance Tuning", "Cloud Databases", "Scaling", "Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "Monitoring & Observability Platform",
      category: "Monitoring",
      complexity: "Mid-Size",
      description: "Comprehensive monitoring and observability solutions for cloud-native applications",
      price: 60000,
      pricingModel: "project-based",
      expertiseScore: 93,
      features: ["Application monitoring", "Infrastructure monitoring", "Log aggregation", "Alerting system"],
      benefits: ["Proactive monitoring", "Faster troubleshooting", "Performance insights", "Cost optimization"],
      useCases: ["Web applications", "Microservices", "Cloud infrastructure", "DevOps teams"],
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
      tags: ["Monitoring", "Observability", "Logging", "Alerting", "Performance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "Disaster Recovery & Business Continuity",
      category: "Disaster Recovery",
      complexity: "Enterprise",
      description: "Comprehensive disaster recovery solutions ensuring business continuity and data protection",
      price: 120000,
      pricingModel: "project-based",
      expertiseScore: 98,
      features: ["Backup strategies", "Recovery planning", "Testing procedures", "Documentation"],
      benefits: ["Business continuity", "Data protection", "Risk mitigation", "Compliance"],
      useCases: ["Financial services", "Healthcare", "E-commerce", "Enterprise applications"],
      technologies: ["AWS Backup", "Azure Site Recovery", "Veeam", "Commvault", "Custom solutions"],
      tags: ["Disaster Recovery", "Business Continuity", "Backup", "Recovery", "Risk Mitigation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "Cloud Cost Optimization & Management",
      category: "Cost Management",
      complexity: "Mid-Size",
      description: "Cloud cost optimization strategies and automated cost management solutions",
      price: 50000,
      pricingModel: "project-based",
      expertiseScore: 94,
      features: ["Cost analysis", "Resource optimization", "Automated scaling", "Budget management"],
      benefits: ["Cost reduction", "Resource efficiency", "Budget control", "ROI improvement"],
      useCases: ["Large cloud deployments", "Cost-conscious organizations", "Startups", "Enterprise"],
      technologies: ["AWS Cost Explorer", "Azure Cost Management", "Google Cloud Billing", "Custom tools"],
      tags: ["Cost Optimization", "Resource Management", "Budget Control", "ROI", "Efficiency"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Cloud Infrastructure', 'Containerization', 'DevOps', 'Serverless', 'Infrastructure', 'Security', 'Database', 'Monitoring', 'Disaster Recovery', 'Cost Management'];
  const complexityLevels = ['all', 'Basic', 'Mid-Size', 'Advanced', 'Enterprise'];

  const filteredSolutions = cloudDevOpsSolutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'all' || solution.complexity === selectedComplexity;
    
    return matchesSearch && matchesCategory && matchesComplexity;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  const getExpertiseColor = (score: number) => {
    if (score >= 95) return 'text-purple-500';
    if (score >= 90) return 'text-blue-500';
    if (score >= 85) return 'text-green-500';
    return 'text-yellow-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent mb-4">
            Cloud & DevOps Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade cloud infrastructure, DevOps automation, and containerization solutions for modern applications
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search cloud & DevOps solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedComplexity}
              onChange={(e) => setSelectedComplexity(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {complexityLevels.map(level => (
                <option key={level} value={level} className="bg-gray-800 text-white">
                  {level === 'all' ? 'All Complexity Levels' : level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => (
            <div key={solution.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getExpertiseColor(solution.expertiseScore)} bg-opacity-20 bg-current`}>
                      Expertise Score: {solution.expertiseScore}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full text-cyan-400 bg-cyan-400 bg-opacity-20">
                      {solution.complexity}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{solution.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold">{formatPrice(solution.price, solution.pricingModel)}</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{solution.complexity} Level</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {feature}
                    </span>
                  ))}
                  {solution.features.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded">
                      +{solution.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.benefits.map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.useCases.map((useCase, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Contact Information:</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span>{solution.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span>{solution.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Globe className="w-4 h-4" />
                    <a href={solution.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                      {solution.contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our cloud and DevOps experts are ready to help you build scalable, secure, and efficient cloud solutions that will drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOpsSolutions;