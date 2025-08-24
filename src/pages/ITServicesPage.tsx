import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Monitor, 
  Smartphone,
  Globe,
  Lock,
  Zap,
  Users,
  BarChart3,
  Settings,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,

} from "lucide-react";

export default function ITServicesPage() {
  const itServices = [
    {
      id: "cloud-migration",
      title: "Cloud Migration & Strategy",
      description: "Complete cloud migration services with strategy planning, implementation, and optimization for AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      price: 8500,
      currency: "$",
      features: [
        "Cloud Strategy Planning",
        "Multi-cloud Architecture",
        "Data Migration",
        "Security Implementation",
        "Performance Optimization",
        "24/7 Support"
      ],
      category: "Cloud Services",
      badge: "Popular",
      link: "https://ziontechgroup.com/cloud-migration",
      details: "Transform your infrastructure with expert cloud migration services. We handle everything from initial assessment to post-migration optimization, ensuring minimal downtime and maximum performance.",
      averagePrice: "$8,500 - $25,000",
      deliveryTime: "4-8 weeks",
      rating: 4.9,
      reviewCount: 156
    },
    {
      id: "cybersecurity-audit",
      title: "Cybersecurity Assessment & Implementation",
      description: "Comprehensive security audits, penetration testing, and security infrastructure implementation.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      price: 6500,
      currency: "$",
      features: [
        "Security Audit",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Policy Development",
        "Incident Response Planning",
        "Compliance Reporting"
      ],
      category: "Security",
      badge: "Critical",
      link: "https://ziontechgroup.com/cybersecurity",
      details: "Protect your business with comprehensive cybersecurity services. Our certified security experts identify vulnerabilities and implement robust protection measures to safeguard your digital assets.",
      averagePrice: "$6,500 - $18,000",
      deliveryTime: "3-6 weeks",
      rating: 4.8,
      reviewCount: 203
    },
    {
      id: "network-infrastructure",
      title: "Network Infrastructure Design & Implementation",
      description: "Enterprise-grade network design, implementation, and optimization for businesses of all sizes.",
      icon: <Network className="h-8 w-8 text-green-500" />,
      price: 7200,
      currency: "$",
      features: [
        "Network Design",
        "Hardware Installation",
        "Configuration & Testing",
        "Performance Optimization",
        "Monitoring Setup",
        "Documentation"
      ],
      category: "Infrastructure",
      badge: "Essential",
      link: "https://ziontechgroup.com/network-infrastructure",
      details: "Build a robust, scalable network infrastructure that supports your business growth. Our engineers design and implement networks that prioritize security, performance, and reliability.",
      averagePrice: "$7,200 - $22,000",
      deliveryTime: "5-10 weeks",
      rating: 4.7,
      reviewCount: 134
    },
    {
      id: "data-backup-recovery",
      title: "Data Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to protect your critical business data.",
      icon: <Database className="h-8 w-8 text-purple-500" />,
      price: 4200,
      currency: "$",
      features: [
        "Backup Strategy",
        "Automated Backups",
        "Disaster Recovery Plan",
        "Testing & Validation",
        "Cloud Storage",
        "Recovery Procedures"
      ],
      category: "Data Protection",
      badge: "Essential",
      link: "https://ziontechgroup.com/data-backup",
      details: "Ensure business continuity with robust backup and disaster recovery solutions. Our systems automatically protect your data and provide quick recovery options in case of emergencies.",
      averagePrice: "$4,200 - $12,000",
      deliveryTime: "2-4 weeks",
      rating: 4.9,
      reviewCount: 187
    },
    {
      id: "it-consulting",
      title: "IT Strategy & Consulting",
      description: "Strategic IT consulting to align technology with business objectives and drive digital transformation.",
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      price: 3500,
      currency: "$",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "IT Roadmap Planning",
        "Vendor Selection",
        "Cost Optimization",
        "Change Management"
      ],
      category: "Consulting",
      badge: "Strategic",
      link: "https://ziontechgroup.com/it-consulting",
      details: "Align your technology investments with business goals through strategic IT consulting. We help you make informed decisions about technology adoption and optimization.",
      averagePrice: "$3,500 - $15,000",
      deliveryTime: "2-6 weeks",
      rating: 4.8,
      reviewCount: 98
    },
    {
      id: "managed-it-services",
      title: "Managed IT Services",
      description: "Comprehensive IT management including monitoring, maintenance, and support for your technology infrastructure.",
      icon: <Monitor className="h-8 w-8 text-cyan-500" />,
      price: 2800,
      currency: "$",
      features: [
        "24/7 Monitoring",
        "Proactive Maintenance",
        "Help Desk Support",
        "Security Updates",
        "Performance Optimization",
        "Monthly Reporting"
      ],
      category: "Managed Services",
      badge: "Ongoing",
      link: "https://ziontechgroup.com/managed-it",
      details: "Focus on your business while we manage your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to prevent issues before they impact your operations.",
      averagePrice: "$2,800/month",
      deliveryTime: "Immediate",
      rating: 4.9,
      reviewCount: 245
    },
    {
      id: "software-development",
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and workflows.",
      icon: <Code className="h-8 w-8 text-indigo-500" />,
      price: 15000,
      currency: "$",
      features: [
        "Requirements Analysis",
        "Custom Development",
        "Testing & QA",
        "Deployment",
        "Training & Support",
        "Maintenance"
      ],
      category: "Development",
      badge: "Custom",
      link: "https://ziontechgroup.com/software-development",
      details: "Transform your business processes with custom software solutions. Our development team creates applications that streamline operations and provide competitive advantages.",
      averagePrice: "$15,000 - $100,000+",
      deliveryTime: "8-20 weeks",
      rating: 4.8,
      reviewCount: 167
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone className="h-8 w-8 text-pink-500" />,
      price: 12000,
      currency: "$",
      features: [
        "Platform Strategy",
        "UI/UX Design",
        "Native Development",
        "Testing & QA",
        "App Store Deployment",
        "Maintenance & Updates"
      ],
      category: "Mobile",
      badge: "Popular",
      link: "https://ziontechgroup.com/mobile-development",
      details: "Reach your customers on their mobile devices with professional mobile applications. We develop apps that provide excellent user experiences and drive engagement.",
      averagePrice: "$12,000 - $75,000",
      deliveryTime: "6-16 weeks",
      rating: 4.7,
      reviewCount: 143
    },
    {
      id: "web-development",
      title: "Web Development & E-commerce",
      description: "Modern web applications, e-commerce platforms, and responsive websites that drive business growth.",
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      price: 8000,
      currency: "$",
      features: [
        "Responsive Design",
        "E-commerce Integration",
        "SEO Optimization",
        "Performance Optimization",
        "Security Implementation",
        "Analytics Setup"
      ],
      category: "Web",
      badge: "Essential",
      link: "https://ziontechgroup.com/web-development",
      details: "Create powerful web presence with modern, responsive websites and e-commerce platforms. Our solutions are optimized for performance, security, and user experience.",
      averagePrice: "$8,000 - $50,000",
      deliveryTime: "4-12 weeks",
      rating: 4.8,
      reviewCount: 189
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Business Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and reporting solutions.",
      icon: <BarChart3 className="h-8 w-8 text-emerald-500" />,
      price: 6800,
      currency: "$",
      features: [
        "Data Integration",
        "Dashboard Development",
        "Report Automation",
        "Predictive Analytics",
        "Data Visualization",
        "User Training"
      ],
      category: "Analytics",
      badge: "Insightful",
      link: "https://ziontechgroup.com/data-analytics",
      details: "Make data-driven decisions with comprehensive analytics solutions. We help you collect, analyze, and visualize data to uncover business opportunities and optimize performance.",
      averagePrice: "$6,800 - $25,000",
      deliveryTime: "4-8 weeks",
      rating: 4.9,
      reviewCount: 112
    },
    {
      id: "it-support",
      title: "IT Support & Help Desk",
      description: "Professional IT support services to resolve technical issues and keep your systems running smoothly.",
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      price: 1800,
      currency: "$",
      features: [
        "Remote Support",
        "On-site Support",
        "Issue Resolution",
        "System Maintenance",
        "User Training",
        "Documentation"
      ],
      category: "Support",
      badge: "Essential",
      link: "https://ziontechgroup.com/it-support",
      details: "Get reliable IT support when you need it most. Our technicians quickly resolve technical issues and provide ongoing maintenance to prevent future problems.",
      averagePrice: "$1,800/month",
      deliveryTime: "Immediate",
      rating: 4.7,
      reviewCount: 276
    },
    {
      id: "voip-communications",
      title: "VoIP & Unified Communications",
      description: "Modern communication solutions including VoIP phone systems, video conferencing, and collaboration tools.",
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      price: 5500,
      currency: "$",
      features: [
        "VoIP Implementation",
        "Video Conferencing",
        "Collaboration Tools",
        "Mobile Integration",
        "Call Analytics",
        "Training & Support"
      ],
      category: "Communications",
      badge: "Modern",
      link: "https://ziontechgroup.com/voip-communications",
      details: "Upgrade your communication infrastructure with modern VoIP and unified communications solutions. Improve collaboration and reduce communication costs while enhancing productivity.",
      averagePrice: "$5,500 - $18,000",
      deliveryTime: "3-6 weeks",
      rating: 4.8,
      reviewCount: 134
    }
  ];

  const categories = [
    "All Services",
    "Cloud Services",
    "Security",
    "Infrastructure",
    "Data Protection",
    "Consulting",
    "Managed Services",
    "Development",
    "Mobile",
    "Web",
    "Analytics",
    "Support",
    "Communications"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");
  const [filteredServices, setFilteredServices] = React.useState(itServices);

  React.useEffect(() => {
    if (selectedCategory === "All Services") {
      setFilteredServices(itServices);
    } else {
      setFilteredServices(itServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
            From cloud migration to custom development, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <Server className="h-5 w-5 mr-2" />
              Explore IT Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Settings className="h-5 w-5 mr-2" />
              Get IT Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/80 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-zion-purple text-white"
                    : "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:scale-105 border-zion-blue-light/20 bg-zion-blue-dark/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-zion-blue-dark/50 group-hover:bg-zion-purple/20 transition-colors">
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
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <p className="text-sm text-zion-slate-light mb-3">{service.details}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-zion-cyan">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                      <span>Starting at:</span>
                      <span className="text-zion-cyan font-semibold">{service.averagePrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                      <span>Delivery:</span>
                      <span className="text-zion-cyan font-semibold">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} />
                      ))}
                      <span className="text-sm text-zion-slate-light ml-2">({service.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-zion-cyan">{service.currency}{service.price.toLocaleString()}</span>
                    <span className="text-zion-slate-light">/project</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Get Started
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our IT experts are ready to help you modernize your technology, enhance security, and drive business growth. 
            Get a free consultation and discover how our IT services can benefit your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <Settings className="h-5 w-5 mr-2" />
              Free IT Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}