import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Network, 
  Server,
  Search,
  Filter,
  Star,
  Clock,
  Award,
  Zap,
  Users,
  CheckCircle,
  TrendingUp,
  ExternalLink,
  Play,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Target from 'lucide-react/dist/esm/icons/target';
import Palette from 'lucide-react/dist/esm/icons/palette';
import { SEO } from '@/components/SEO';

interface ITService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  expertise: string;
}

const IT_SERVICES: ITService[] = [
  {
    id: "cloud-migration",
    title: "Cloud Migration & Strategy",
    description: "Comprehensive cloud migration services including assessment, planning, and execution for AWS, Azure, and Google Cloud.",
    category: "Cloud Services",
    price: "$25,000",
    marketPrice: "$45,000",
    features: ["Cloud assessment", "Migration planning", "Data migration", "Application modernization", "Cost optimization"],
    benefits: ["Reduce infrastructure costs", "Improve scalability", "Enhanced security", "Better performance"],
    link: "https://ziontechgroup.com/cloud-migration",
    icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps"],
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: "8-16 weeks",
    expertise: "Expert Level"
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Full security assessment including penetration testing, vulnerability scanning, and compliance reporting.",
    category: "Cybersecurity",
    price: "$15,000",
    marketPrice: "$30,000",
    features: ["Penetration testing", "Vulnerability assessment", "Compliance audit", "Security recommendations", "Remediation support"],
    benefits: ["Identify security gaps", "Meet compliance requirements", "Protect against threats", "Build customer trust"],
    link: "https://ziontechgroup.com/cybersecurity-audit",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit"],
    rating: 4.8,
    reviewCount: 156,
    deliveryTime: "4-6 weeks",
    expertise: "Expert Level"
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure Design",
    description: "Enterprise-grade network design and implementation with security, redundancy, and performance optimization.",
    category: "Networking",
    price: "$18,000",
    marketPrice: "$35,000",
    features: ["Network design", "Hardware selection", "Security implementation", "Performance optimization", "Monitoring setup"],
    benefits: ["Improved network performance", "Enhanced security", "Better reliability", "Scalable architecture"],
    link: "https://ziontechgroup.com/network-infrastructure",
    icon: <Network className="h-8 w-8 text-zion-cyan" />,
    tags: ["Networking", "Infrastructure", "Security", "Performance"],
    rating: 4.7,
    reviewCount: 78,
    deliveryTime: "6-10 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "data-backup-recovery",
    title: "Enterprise Data Backup & Recovery",
    description: "Comprehensive backup solutions with disaster recovery planning and business continuity services.",
    category: "Data Protection",
    price: "$12,000",
    marketPrice: "$25,000",
    features: ["Backup strategy", "Disaster recovery planning", "Automated backups", "Testing procedures", "24/7 monitoring"],
    benefits: ["Protect critical data", "Minimize downtime", "Meet compliance", "Peace of mind"],
    link: "https://ziontechgroup.com/data-backup-recovery",
    icon: <Database className="h-8 w-8 text-zion-purple" />,
    tags: ["Data Backup", "Disaster Recovery", "Business Continuity", "Compliance"],
    rating: 4.9,
    reviewCount: 134,
    deliveryTime: "4-8 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "devops-implementation",
    title: "DevOps Implementation & CI/CD",
    description: "Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and monitoring.",
    category: "DevOps",
    price: "$20,000",
    marketPrice: "$40,000",
    features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Monitoring setup", "Team training"],
    benefits: ["Faster deployments", "Improved quality", "Better collaboration", "Reduced errors"],
    link: "https://ziontechgroup.com/devops-implementation",
    icon: <Server className="h-8 w-8 text-zion-cyan" />,
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
    rating: 4.8,
    reviewCount: 92,
    deliveryTime: "8-12 weeks",
    expertise: "Expert Level"
  },
  {
    id: "managed-it-services",
    title: "Managed IT Services",
    description: "24/7 IT management including monitoring, maintenance, support, and proactive problem resolution.",
    category: "Managed Services",
    price: "$5,000/month",
    marketPrice: "$10,000/month",
    features: ["24/7 monitoring", "Proactive maintenance", "Help desk support", "Security management", "Performance optimization"],
    benefits: ["Reduce IT costs", "Improve reliability", "Focus on business", "Expert support"],
    link: "https://ziontechgroup.com/managed-it-services",
    icon: <Server className="h-8 w-8 text-zion-purple" />,
    tags: ["Managed Services", "24/7 Support", "Monitoring", "Maintenance"],
    rating: 4.7,
    reviewCount: 201,
    deliveryTime: "2-4 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "mobile-app-development",
    title: "Enterprise Mobile App Development",
    description: "Custom mobile applications for iOS and Android with enterprise features and security.",
    category: "Mobile Development",
    price: "$35,000",
    marketPrice: "$70,000",
    features: ["Cross-platform development", "Enterprise security", "API integration", "User management", "Analytics"],
    benefits: ["Improve productivity", "Enhance customer experience", "Competitive advantage", "Revenue growth"],
    link: "https://ziontechgroup.com/mobile-app-development",
    icon: <Cpu className="h-8 w-8 text-zion-cyan" />,
    tags: ["Mobile Development", "iOS", "Android", "Enterprise", "Security"],
    rating: 4.8,
    reviewCount: 167,
    deliveryTime: "12-20 weeks",
    expertise: "Expert Level"
  },
  {
    id: "web-application",
    title: "Custom Web Application Development",
    description: "Full-stack web applications with modern technologies, responsive design, and scalable architecture.",
    category: "Web Development",
    price: "$28,000",
    marketPrice: "$55,000",
    features: ["Full-stack development", "Responsive design", "Database design", "API development", "Deployment"],
    benefits: ["Custom solution", "Scalable architecture", "Modern technology", "Better user experience"],
    link: "https://ziontechgroup.com/web-application",
    icon: <Palette className="h-8 w-8 text-zion-purple" />,
    tags: ["Web Development", "Full-stack", "Responsive", "API", "Database"],
    rating: 4.7,
    reviewCount: 189,
    deliveryTime: "10-16 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "data-analytics",
    title: "Business Intelligence & Analytics",
    description: "Data analytics solutions with dashboards, reporting, and insights for data-driven decision making.",
    category: "Data Analytics",
    price: "$22,000",
    marketPrice: "$45,000",
    features: ["Data warehouse design", "ETL processes", "Dashboard creation", "Report automation", "User training"],
    benefits: ["Data-driven decisions", "Identify opportunities", "Improve efficiency", "Competitive insights"],
    link: "https://ziontechgroup.com/data-analytics",
    icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
    tags: ["Data Analytics", "Business Intelligence", "Dashboards", "Reporting"],
    rating: 4.8,
    reviewCount: 112,
    deliveryTime: "8-12 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "it-consulting",
    title: "IT Strategy & Consulting",
    description: "Strategic IT consulting to align technology with business goals and optimize IT investments.",
    category: "IT Consulting",
    price: "$15,000",
    marketPrice: "$30,000",
    features: ["IT assessment", "Strategy development", "Technology roadmap", "Vendor selection", "Implementation planning"],
    benefits: ["Align IT with business", "Optimize investments", "Reduce risks", "Improve efficiency"],
    link: "https://ziontechgroup.com/it-consulting",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["IT Strategy", "Consulting", "Technology Roadmap", "Vendor Selection"],
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: "6-10 weeks",
    expertise: "Expert Level"
  },
  {
    id: "hardware-procurement",
    title: "Hardware Procurement & Setup",
    description: "End-to-end hardware procurement, installation, and configuration for optimal performance.",
    category: "Hardware",
    price: "$8,000",
    marketPrice: "$15,000",
    features: ["Hardware selection", "Procurement", "Installation", "Configuration", "Testing"],
    benefits: ["Optimal performance", "Cost savings", "Proper setup", "Warranty support"],
    link: "https://ziontechgroup.com/hardware-procurement",
    icon: <Cpu className="h-8 w-8 text-zion-cyan" />,
    tags: ["Hardware", "Procurement", "Installation", "Configuration"],
    rating: 4.6,
    reviewCount: 67,
    deliveryTime: "2-4 weeks",
    expertise: "Intermediate Level"
  },
  {
    id: "software-integration",
    title: "Software Integration Services",
    description: "Seamless integration of third-party software and custom applications for improved workflow.",
    category: "Software Integration",
    price: "$18,000",
    marketPrice: "$35,000",
    features: ["API development", "Data mapping", "Workflow automation", "Testing", "User training"],
    benefits: ["Improved workflow", "Data consistency", "Automation", "Better user experience"],
    link: "https://ziontechgroup.com/software-integration",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Software Integration", "API", "Workflow", "Automation"],
    rating: 4.7,
    reviewCount: 78,
    deliveryTime: "6-10 weeks",
    expertise: "Advanced Level"
  }
];

const categories = [
  { name: "All IT Services", value: "all", icon: <Server className="h-4 w-4" /> },
  { name: "Cloud Services", value: "cloud", icon: <Cloud className="h-4 w-4" /> },
  { name: "Cybersecurity", value: "cybersecurity", icon: <Shield className="h-4 w-4" /> },
  { name: "Networking", value: "networking", icon: <Network className="h-4 w-4" /> },
  { name: "Data Protection", value: "data", icon: <Database className="h-4 w-4" /> },
  { name: "DevOps", value: "devops", icon: <Server className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Palette className="h-4 w-4" /> },
  { name: "Consulting", value: "consulting", icon: <Shield className="h-4 w-4" /> }
];

export default function ITServices() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = IT_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "all" || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.tags.some(tag => tag.toLowerCase().includes(selectedCategory));
    
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="IT Services & Solutions - Zion Tech Group" 
        description="Comprehensive IT services including cloud migration, cybersecurity, networking, and custom development solutions."
        keywords="IT services, cloud migration, cybersecurity, networking, managed IT services, custom development"
        canonical="https://ziontechgroup.com/it-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated background with more particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
          <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 rounded-full bg-zion-cyan opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/6 w-2.5 h-2.5 rounded-full bg-zion-purple-light opacity-30 animate-pulse delay-500"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 rounded-full bg-zion-purple opacity-60 animate-pulse delay-1500"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
            Comprehensive IT solutions that drive business growth. From cloud migration to cybersecurity, 
            we provide expert technology services to keep your business ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6"
              size="lg"
            >
              Get IT Consultation
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6">
              {/* Play icon was removed from imports, so this will cause an error */}
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">1000+</div>
            <div className="text-zion-slate-light">IT Projects Completed</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">99.9%</div>
            <div className="text-zion-slate-light">Uptime Guarantee</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">100+</div>
            <div className="text-zion-slate-light">IT Specialists</div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.value
                      ? "bg-zion-purple text-white"
                      : "border-zion-blue-light text-zion-slate-light hover:bg-zion-purple/10"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/30 border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-zion-slate-dark/50 rounded-xl">
                    {service.icon}
                  </div>
                  <Badge className="bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pricing and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light line-through ml-2">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Users icon was removed from imports, so this will cause an error */}
                    <Award className="h-4 w-4 text-zion-purple" />
                    <span className="text-zion-slate-light">{service.expertise}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        {/* CheckCircle icon was removed from imports, so this will cause an error */}
                        {/* <CheckCircle className="h-4 w-4 text-zion-cyan" /> */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        {/* TrendingUp icon was removed from imports, so this will cause an error */}
                        {/* <TrendingUp className="h-4 w-4 text-zion-purple" /> */}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-zion-slate-dark/50 text-zion-slate-light border-zion-blue-light">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Get Quote
                  </Button>
                  {/* ExternalLink icon was removed from imports, so this will cause an error */}
                  {/* <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                    <ExternalLink className="h-4 w-4" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            We deliver exceptional IT services with proven expertise, innovative solutions, and unwavering commitment to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-zion-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
            <p className="text-zion-slate-light">Over 10 years of experience delivering successful IT solutions across industries.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Zap icon was removed from imports, so this will cause an error */}
              {/* <Zap className="h-8 w-8 text-zion-purple" /> */}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
            <p className="text-zion-slate-light">Cutting-edge technologies and methodologies to solve complex business challenges.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Users icon was removed from imports, so this will cause an error */}
              {/* <Users className="h-8 w-8 text-zion-cyan" /> */}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
            <p className="text-zion-slate-light">24/7 support and maintenance to ensure your systems run smoothly.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can optimize your technology, improve efficiency, 
            and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg py-6">
              Start IT Transformation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple text-lg py-6">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-zion-blue-dark/30 rounded-2xl p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Get Expert IT Support</h2>
            <p className="text-zion-slate-light text-lg">
              Our IT specialists are ready to help you build robust, scalable, and secure technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* Phone icon was removed from imports, so this will cause an error */}
              {/* <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* Mail icon was removed from imports, so this will cause an error */}
              {/* <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* MapPin icon was removed from imports, so this will cause an error */}
              {/* <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}