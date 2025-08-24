import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
    Server,
  Zap,
  Database,
  Globe,
  Code,
  Monitor,
  Smartphone,
  Lock,
  Settings,
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  CheckCircle,
  TrendingUp,
  Eye,
  Mic,
  Video,
  Search,
  Building,
  HardDrive
} from 'lucide-react';

const ITServices = [
  {
    title: "Cloud Infrastructure Management",
    description: "Comprehensive cloud services including AWS, Azure, and Google Cloud",
    price: "$1,500 - $8,000/month",
    features: ["24/7 monitoring", "Cost optimization", "Security compliance", "Auto-scaling"],
    icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
    category: "Cloud",
    badge: "Popular",
    link: "/request-quote?service=cloud-infrastructure"
  },
  {
    title: "Cybersecurity Services",
    description: "Complete security solutions to protect your digital assets",
    price: "$2,000 - $15,000",
    features: ["Security audits", "Penetration testing", "Incident response", "Compliance"],
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    category: "Security",
    badge: "Premium",
    link: "/request-quote?service=cybersecurity"
  },
  {
    title: "DevOps & CI/CD",
    description: "Streamline development and deployment processes",
    price: "$3,000 - $12,000/month",
    features: ["Pipeline automation", "Infrastructure as code", "Monitoring", "Performance optimization"],
    icon: <Zap className="h-8 w-8 text-zion-blue" />,
    category: "DevOps",
    link: "/request-quote?service=devops"
  },
  {
    title: "Database Management",
    description: "Expert database administration and optimization",
    price: "$1,000 - $6,000/month",
    features: ["Performance tuning", "Backup & recovery", "Security hardening", "Migration support"],
    icon: <Database className="h-8 w-8 text-zion-cyan" />,
    category: "Database",
    link: "/request-quote?service=database-management"
  },
  {
    title: "Network Infrastructure",
    description: "Design, implement, and maintain robust network solutions",
    price: "$2,500 - $20,000",
    features: ["Network design", "Security implementation", "Monitoring", "24/7 support"],
          icon: <Globe className="h-8 w-8 text-zion-purple" />,
    category: "Networking",
    link: "/request-quote?service=network-infrastructure"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation guidance",
    price: "$150 - $300/hour",
    features: ["Technology assessment", "Roadmap planning", "Vendor selection", "ROI analysis"],
          icon: <CheckCircle className="h-8 w-8 text-zion-blue" />,
    category: "Consulting",
    link: "/request-quote?service=it-consulting"
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management for small to enterprise businesses",
    price: "$500 - $5,000/month",
    features: ["Help desk support", "System administration", "Security management", "Backup services"],
    icon: <Settings className="h-8 w-8 text-zion-cyan" />,
    category: "Managed Services",
    badge: "New",
    link: "/request-quote?service=managed-it"
  },
  {
    title: "Data Center Services",
    description: "On-premise and colocation data center solutions",
    price: "$1,000 - $10,000/month",
    features: ["Hardware provisioning", "Environmental monitoring", "Power management", "Security"],
    icon: <Server className="h-8 w-8 text-zion-purple" />,
    category: "Data Center",
    link: "/request-quote?service=data-center"
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile applications for iOS and Android",
    price: "$15,000 - $100,000",
    features: ["UI/UX design", "Native development", "Testing", "App store deployment"],
    icon: <Smartphone className="h-8 w-8 text-zion-blue" />,
    category: "Development",
    link: "/request-quote?service=mobile-development"
  },
  {
    title: "Web Development",
    description: "Modern web applications and e-commerce solutions",
    price: "$10,000 - $75,000",
    features: ["Responsive design", "SEO optimization", "Performance tuning", "Maintenance"],
    icon: <Globe className="h-8 w-8 text-zion-cyan" />,
    category: "Development",
    link: "/request-quote?service=web-development"
  },
  {
    title: "IT Training & Workshops",
    description: "Custom training programs for your IT team",
    price: "$500 - $2,500 per person",
    features: ["Hands-on workshops", "Certification prep", "Custom curriculum", "Ongoing support"],
    icon: <Users className="h-8 w-8 text-zion-purple" />,
    category: "Training",
    link: "/request-quote?service=it-training"
  },
  {
    title: "Disaster Recovery",
    description: "Comprehensive backup and recovery solutions",
    price: "$1,500 - $8,000/month",
    features: ["Automated backups", "Off-site storage", "Recovery testing", "24/7 support"],
    icon: <HardDrive className="h-8 w-8 text-zion-blue" />,
    category: "Recovery",
    link: "/request-quote?service=disaster-recovery"
  },
  {
    title: "IT Audit & Compliance",
    description: "Ensure your IT systems meet industry standards",
    price: "$3,000 - $20,000",
    features: ["Compliance assessment", "Risk analysis", "Documentation", "Remediation"],
    icon: <FileText className="h-8 w-8 text-zion-cyan" />,
    category: "Compliance",
    link: "/request-quote?service=it-audit"
  },
  {
    title: "Hardware Procurement",
    description: "Strategic hardware sourcing and deployment",
    price: "15-25% of hardware cost",
    features: ["Vendor management", "Volume discounts", "Installation", "Warranty support"],
          icon: <Server className="h-8 w-8 text-zion-purple" />,
    category: "Hardware",
    link: "/request-quote?service=hardware-procurement"
  },
  {
    title: "IT Project Management",
    description: "Professional project management for IT initiatives",
    price: "$100 - $200/hour",
    features: ["Project planning", "Resource management", "Risk mitigation", "Delivery assurance"],
    icon: <BarChart3 className="h-8 w-8 text-zion-blue" />,
    category: "Project Management",
    link: "/request-quote?service=it-project-management"
  },
  {
    title: "24/7 IT Support",
    description: "Round-the-clock technical support and monitoring",
    price: "$2,000 - $8,000/month",
    features: ["Help desk", "Remote support", "On-site visits", "SLA guarantees"],
    icon: <Monitor className="h-8 w-8 text-zion-cyan" />,
    category: "Support",
    badge: "Featured",
    link: "/request-quote?service=24-7-support"
  }
];

const categories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4" /> },
  { name: "Cloud", value: "cloud", icon: <Cloud className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Shield className="h-4 w-4" /> },
  { name: "DevOps", value: "devops", icon: <Zap className="h-4 w-4" /> },
  { name: "Database", value: "database", icon: <Database className="h-4 w-4" /> },
  { name: "Networking", value: "networking", icon: <Globe className="h-4 w-4" /> },
  { name: "Consulting", value: "consulting", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Managed Services", value: "managed services", icon: <Settings className="h-4 w-4" /> },
  { name: "Data Center", value: "data center", icon: <Server className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Training", value: "training", icon: <Users className="h-4 w-4" /> },
  { name: "Recovery", value: "recovery", icon: <HardDrive className="h-4 w-4" /> },
  { name: "Compliance", value: "compliance", icon: <FileText className="h-4 w-4" /> },
  { name: "Hardware", value: "hardware", icon: <Server className="h-4 w-4" /> },
  { name: "Project Management", value: "project management", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Support", value: "support", icon: <Monitor className="h-4 w-4" /> }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredServices = selectedCategory === "all" 
    ? ITServices 
    : ITServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Comprehensive IT services to modernize, secure, and optimize your technology infrastructure. 
            From cloud migration to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center gap-2 ${
                selectedCategory === category.value 
                  ? "bg-zion-blue text-white" 
                  : "border-zion-blue text-zion-blue hover:bg-zion-blue/10"
              }`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-blue/20 hover:border-zion-blue/50 bg-zion-blue-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</p>
                  <p className="text-sm text-zion-slate-light">Starting price</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom IT Solutions?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team can design and implement custom IT solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Code className="h-5 w-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}