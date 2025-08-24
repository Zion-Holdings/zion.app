import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
    Server,
  TrendingUp,
  CheckCircle,
  Users,
  Settings,
  Globe,
  Zap,
  Search,
  Shield,
  BarChart3,
  MessageSquare,
  FileText,
  Mail,
  Eye,
  Video,
  Cloud,
  Database,
  Code,
  Smartphone,
  HardDrive,
  Monitor,
  Leaf,
  Lightbulb,
  Building,
  DollarSign,
  Star,
  ShoppingCart,
  Phone
} from 'lucide-react';

const ServiceCategories = [
  {
    title: "AI Services & Solutions",
    description: "Transform your business with cutting-edge artificial intelligence",
    icon: <Brain className="h-16 w-16 text-zion-cyan" />,
    link: "/ai-services",
    badge: "New",
    color: "from-cyan-500 to-blue-600",
    services: [
      "AI Strategy Consulting",
      "Custom AI Model Development", 
      "Computer Vision Solutions",
      "Natural Language Processing",
      "AI Ethics & Compliance",
      "AI Training & Workshops"
    ],
    priceRange: "$500 - $50,000+",
    features: ["Machine Learning", "Deep Learning", "AI Integration", "Model Optimization"]
  },
  {
    title: "IT Services & Infrastructure",
    description: "Build robust, scalable, and secure technology infrastructure",
    icon: <Server className="h-16 w-16 text-zion-blue" />,
    link: "/it-services",
    badge: "Popular",
    color: "from-blue-500 to-purple-600",
    services: [
      "Cloud Infrastructure Management",
      "Cybersecurity Services",
      "DevOps & CI/CD",
      "Network Infrastructure",
      "Data Center Services",
      "24/7 IT Support"
    ],
    priceRange: "$500 - $20,000/month",
    features: ["Cloud Migration", "Security", "Automation", "Monitoring"]
  },
  {
    title: "Digital Marketing Services",
    description: "Drive growth with data-driven marketing strategies",
    icon: <TrendingUp className="h-16 w-16 text-zion-purple" />,
    link: "/digital-marketing",
    badge: "Featured",
    color: "from-purple-500 to-pink-600",
    services: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Management",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "Marketing Analytics"
    ],
    priceRange: "$500 - $15,000/month",
    features: ["SEO", "PPC", "Social Media", "Content", "Analytics"]
  },
  {
    title: "Business Solutions & Consulting",
    description: "Strategic consulting and process optimization for growth",
          icon: <CheckCircle className="h-16 w-16 text-zion-green" />,
    link: "/business-solutions",
    color: "from-green-500 to-emerald-600",
    services: [
      "Business Strategy Consulting",
      "Process Automation",
      "Digital Transformation",
      "Change Management",
      "Financial Planning",
      "Market Research"
    ],
    priceRange: "$150 - $200,000+",
    features: ["Strategy", "Automation", "Transformation", "Consulting"]
  },
  {
    title: "Talent & Recruitment",
    description: "Connect with verified AI and tech specialists worldwide",
    icon: <Users className="h-16 w-16 text-zion-pink" />,
    link: "/talent",
    badge: "Premium",
    color: "from-pink-500 to-rose-600",
    services: [
      "AI Talent Matching",
      "Talent Directory Access",
      "Recruitment Services",
      "Skill Assessment",
      "Background Verification",
      "Contract Management"
    ],
    priceRange: "Free - $5,000+",
    features: ["AI Matching", "Verification", "Assessment", "Management"]
  },
  {
    title: "Equipment & Hardware",
    description: "Access cutting-edge technology and specialized equipment",
    icon: <Settings className="h-16 w-16 text-zion-amber" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600",
    services: [
      "AI Development Hardware",
      "GPU Clusters & Servers",
      "Specialized Equipment",
      "Rental Services",
      "Maintenance Support",
      "Technical Consultation"
    ],
    priceRange: "$100 - $100,000+",
    features: ["Hardware", "Rental", "Support", "Consultation"]
  }
];

const AdditionalServices = [
  {
    title: "Onsite IT Services",
    description: "Professional IT support at your location",
    icon: <Globe className="h-8 w-8 text-zion-cyan" />,
    link: "/it-onsite-services",
    price: "From $150/hour"
  },
  {
    title: "Zion Hire AI",
    description: "AI-powered recruiting assistant",
    icon: <Brain className="h-8 w-8 text-zion-purple" />,
    link: "/zion-hire-ai",
    price: "From $500/month"
  },
  {
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations",
    icon: <Building className="h-8 w-8 text-zion-blue" />,
    link: "/enterprise",
    price: "Custom pricing"
  },
  {
    title: "Green IT Solutions",
    description: "Sustainable technology solutions",
    icon: <Leaf className="h-8 w-8 text-zion-green" />,
    link: "/green-it",
    price: "From $1,000"
  }
];

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-4xl mx-auto mb-8">
            Comprehensive technology services to transform your business. From AI development to IT infrastructure, 
            digital marketing to business consulting - we provide end-to-end solutions for the modern enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore All Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Main Service Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Core Service Categories
          </h2>
          <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
            Choose from our comprehensive range of professional services designed to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {ServiceCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-zion-blue-dark/50 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-4 rounded-xl bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
                    {category.icon}
                  </div>
                  {category.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {category.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors mb-2">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light text-lg">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="mb-6">
                  <p className="text-xl font-bold text-zion-cyan mb-2">{category.priceRange}</p>
                  <p className="text-sm text-zion-slate-light">Price range</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-zion-cyan border-zion-cyan/30">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                  <Link to={category.link}>
                    Explore {category.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Additional Services
          </h3>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            Specialized solutions and add-on services to complement your core needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AdditionalServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-zion-blue/20 hover:border-zion-blue/50 bg-zion-blue-dark/30 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="p-3 rounded-lg bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors mb-3">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-lg font-bold text-zion-cyan mb-4">{service.price}</p>
                <Button className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Our expert team is ready to help you choose the right services and create a customized solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <FileText className="h-5 w-5 mr-2" />
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue/10">
              <Phone className="h-5 w-5 mr-2" />
              Call Us: +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}