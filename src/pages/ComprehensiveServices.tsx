import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain, Cloud, Database, Shield, Settings, Zap, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart,
  Phone, Mail, MapPin, Globe, Star, DollarSign, Clock, Users
} from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  duration: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const services: ServiceCard[] = [
  {
    id: "ai-development",
    title: "AI Development & Integration",
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",
    category: "Development",
    price: 5000,
    currency: "$",
    duration: "4-8 weeks",
    features: [
      "Custom AI model development",
      "Machine learning integration",
      "API development and documentation",
      "Performance optimization",
      "Scalability planning"
    ],
    benefits: [
      "Automated business processes",
      "Improved decision making",
      "Cost reduction through automation",
      "Competitive advantage",
      "Scalable AI infrastructure"
    ],
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    marketPrice: "$8,000 - $15,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-management",
    title: "Cloud Infrastructure Management",
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",
    category: "Management",
    price: 3000,
    currency: "$",
    duration: "Ongoing",
    features: [
      "24/7 infrastructure monitoring",
      "Cost optimization strategies",
      "Multi-cloud management",
      "Automated scaling",
      "Security compliance"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved system reliability",
      "Enhanced security posture",
      "Scalable infrastructure",
      "Expert support team"
    ],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    marketPrice: "$5,000 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "big-data",
    title: "Big Data Analysis & Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    duration: "6-10 weeks",
    features: [
      "Data pipeline development",
      "Real-time analytics dashboards",
      "Predictive modeling",
      "Data visualization",
      "Business intelligence reports"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Customer behavior insights",
      "Revenue optimization",
      "Competitive intelligence"
    ],
    icon: <Database className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    marketPrice: "$7,000 - $18,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
    category: "Security",
    price: 6000,
    currency: "$",
    duration: "2-4 weeks",
    features: [
      "Security vulnerability assessment",
      "Penetration testing",
      "Compliance audits (SOC2, ISO27001)",
      "Security policy development",
      "24/7 threat monitoring"
    ],
    benefits: [
      "Protection against cyber attacks",
      "Regulatory compliance",
      "Customer trust and confidence",
      "Reduced security risks",
      "Business continuity assurance"
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    marketPrice: "$8,000 - $25,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "blockchain",
    title: "Blockchain Development & Smart Contracts",
    description: "Custom blockchain solutions, smart contract development, and DeFi applications for modern businesses.",
    category: "Development",
    price: 12000,
    currency: "$",
    duration: "8-16 weeks",
    features: [
      "Custom blockchain development",
      "Smart contract creation",
      "DeFi application development",
      "Cryptocurrency payment systems",
      "Blockchain consulting"
    ],
    benefits: [
      "Transparent and secure transactions",
      "Reduced intermediary costs",
      "Innovative business models",
      "Global market access",
      "Future-proof technology"
    ],
    icon: <Zap className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-600",
    marketPrice: "$15,000 - $50,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "iot-solutions",
    title: "IoT Solutions & Edge Computing",
    description: "Internet of Things infrastructure, sensor networks, and edge computing solutions for industrial applications.",
    category: "Development",
    price: 8000,
    currency: "$",
    duration: "6-12 weeks",
    features: [
      "IoT sensor network design",
      "Edge computing implementation",
      "Real-time data processing",
      "Industrial IoT solutions",
      "IoT security implementation"
    ],
    benefits: [
      "Real-time operational insights",
      "Predictive maintenance",
      "Improved efficiency",
      "Cost reduction",
      "Competitive advantage"
    ],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    marketPrice: "$10,000 - $30,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing Consulting",
    description: "Quantum computing strategy and implementation consulting for forward-thinking organizations.",
    category: "Consulting",
    price: 25000,
    currency: "$",
    duration: "12-24 weeks",
    features: [
      "Quantum computing strategy",
      "Quantum algorithm development",
      "Quantum-safe cryptography",
      "Quantum advantage assessment",
      "Future roadmap planning"
    ],
    benefits: [
      "Early adopter advantage",
      "Breakthrough computational power",
      "Future-proof security",
      "Competitive differentiation",
      "Innovation leadership"
    ],
    icon: <Zap className="w-8 h-8" />,
    color: "from-violet-500 to-purple-600",
    marketPrice: "$30,000 - $100,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ar-vr",
    title: "AR/VR Development & Metaverse Solutions",
    description: "Augmented and virtual reality applications, metaverse platform development, and immersive technology solutions.",
    category: "Development",
    price: 15000,
    currency: "$",
    duration: "10-20 weeks",
    features: [
      "AR/VR application development",
      "Metaverse platform creation",
      "3D modeling and animation",
      "Immersive user experiences",
      "Cross-platform compatibility"
    ],
    benefits: [
      "Enhanced user engagement",
      "Innovative marketing opportunities",
      "Virtual collaboration tools",
      "Training and simulation",
      "Competitive differentiation"
    ],
    icon: <Eye className="w-8 h-8" />,
    color: "from-pink-500 to-rose-600",
    marketPrice: "$20,000 - $60,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "green-it",
    title: "Green IT & Sustainable Technology",
    description: "Energy-efficient IT solutions, carbon footprint reduction, and sustainable technology consulting.",
    category: "Consulting",
    price: 7000,
    currency: "$",
    duration: "4-8 weeks",
    features: [
      "Energy efficiency assessment",
      "Carbon footprint analysis",
      "Green data center optimization",
      "Renewable energy integration",
      "Sustainability reporting"
    ],
    benefits: [
      "Reduced operational costs",
      "Environmental compliance",
      "Corporate social responsibility",
      "Brand reputation enhancement",
      "Long-term sustainability"
    ],
    icon: <Leaf className="w-8 h-8" />,
    color: "from-emerald-500 to-green-600",
    marketPrice: "$8,000 - $20,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "fintech",
    title: "FinTech Solutions & Digital Banking",
    description: "Digital banking platforms, payment processing systems, and financial technology solutions with regulatory compliance.",
    category: "Development",
    price: 18000,
    currency: "$",
    duration: "12-24 weeks",
    features: [
      "Digital banking platform development",
      "Payment processing systems",
      "Regulatory compliance (PCI DSS, GDPR)",
      "Security-focused architecture",
      "Multi-currency support"
    ],
    benefits: [
      "Enhanced customer experience",
      "Reduced transaction costs",
      "Improved security",
      "Regulatory compliance",
      "Global market access"
    ],
    icon: <CreditCard className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-600",
    marketPrice: "$25,000 - $80,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "healthcare",
    title: "Healthcare Technology & Telemedicine",
    description: "Healthcare IT solutions, telemedicine platforms, and medical device integration with HIPAA compliance.",
    category: "Development",
    price: 22000,
    currency: "$",
    duration: "16-32 weeks",
    features: [
      "Telemedicine platform development",
      "HIPAA compliance implementation",
      "Medical device integration",
      "Patient data security",
      "Healthcare analytics"
    ],
    benefits: [
      "Improved patient care",
      "Regulatory compliance",
      "Enhanced security",
      "Operational efficiency",
      "Patient satisfaction"
    ],
    icon: <Heart className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    marketPrice: "$30,000 - $100,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics Technology",
    description: "Supply chain optimization, logistics management systems, and inventory tracking solutions with predictive analytics.",
    category: "Analytics",
    price: 9500,
    currency: "$",
    duration: "8-16 weeks",
    features: [
      "Supply chain optimization",
      "Logistics management systems",
      "Inventory tracking solutions",
      "Predictive analytics",
      "Real-time visibility"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved efficiency",
      "Better customer service",
      "Risk mitigation",
      "Competitive advantage"
    ],
    icon: <Truck className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    marketPrice: "$12,000 - $35,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "ecommerce",
    title: "E-commerce & Digital Marketplace Solutions",
    description: "Custom e-commerce platforms, digital marketplace development, and online retail solutions with multi-vendor support.",
    category: "Development",
    price: 16000,
    currency: "$",
    duration: "12-20 weeks",
    features: [
      "Custom e-commerce platform",
      "Multi-vendor marketplace",
      "Payment gateway integration",
      "Inventory management",
      "Analytics and reporting"
    ],
    benefits: [
      "Increased sales channels",
      "Improved customer experience",
      "Reduced operational costs",
      "Scalable business model",
      "Global market reach"
    ],
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-600",
    marketPrice: "$20,000 - $70,000",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default function ComprehensiveServices() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our complete portfolio of innovative technology solutions designed to transform your business. 
            From AI development to quantum computing consulting, we deliver cutting-edge solutions at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                Get Started Today
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-light rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zion-cyan">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Our Service Portfolio</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of technology services, each designed to address specific business challenges 
              and drive innovation in your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-zion-purple">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Premium</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between p-3 bg-zion-blue-light rounded-lg">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm text-zion-slate">Our Price:</span>
                    </div>
                    <span className="text-2xl font-bold text-zion-purple">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Market Comparison */}
                  <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <span className="font-medium">Market Price:</span> {service.marketPrice}
                    </p>
                    <p className="text-xs text-amber-600 mt-1">
                      You save up to 40% with Zion Tech Group
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-zion-slate">
                    <Clock className="w-4 h-4" />
                    <span>Duration: {service.duration}</span>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-zion-blue mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-zion-slate flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-medium text-zion-blue mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-zion-slate flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-4 border-t border-zion-blue-light">
                    <div className="text-center space-y-2">
                      <p className="text-xs text-zion-slate">Contact us for this service:</p>
                      <div className="flex flex-col gap-1 text-xs">
                        <a 
                          href={`tel:${service.contactInfo.phone}`}
                          className="text-zion-cyan hover:text-zion-purple transition-colors"
                        >
                          {service.contactInfo.phone}
                        </a>
                        <a 
                          href={`mailto:${service.contactInfo.email}`}
                          className="text-zion-cyan hover:text-zion-purple transition-colors"
                        >
                          {service.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/request-quote" className="flex-1">
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver exceptional value through our unique combination of expertise, innovation, and customer-centric approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our certified professionals bring years of experience in cutting-edge technologies and industry best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">
                We stay ahead of technology trends to provide you with the most advanced and future-proof solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Customer Success</h3>
              <p className="text-zion-slate-light">
                Your success is our priority. We provide ongoing support and ensure your projects deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already transformed their operations with our innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                Start Your Project
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}