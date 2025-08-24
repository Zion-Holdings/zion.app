import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Mail, 
  Calendar, 
  CreditCard,
  Globe,
  MessageSquare,
  FileText,
  Database,
  Lock,
  Smartphone,
  Search,
  TrendingUp,
  Phone,
  Star,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function MicroSAASPage() {
  const microSAASServices = [
    {
      id: "email-automation",
      title: "Email Marketing Automation",
      description: "Powerful email automation platform with advanced segmentation, A/B testing, and analytics for growing businesses.",
      features: [
        "Drag & drop email builder",
        "Advanced segmentation",
        "A/B testing tools",
        "Analytics dashboard",
        "API integration"
      ],
      pricing: {
        starter: "$29/month",
        professional: "$79/month",
        enterprise: "$199/month"
      },
      icon: <Mail className="h-8 w-8 text-blue-500" />,
      category: "Marketing",
      badge: "Popular",
      users: "Up to 10,000",
      rating: 4.8,
      reviews: 234
    },
    {
      id: "project-management",
      title: "Project Management Suite",
      description: "Comprehensive project management tool with task tracking, team collaboration, and project analytics.",
      features: [
        "Task & milestone tracking",
        "Team collaboration tools",
        "Gantt charts",
        "Time tracking",
        "Mobile apps"
      ],
      pricing: {
        starter: "$12/month",
        professional: "$25/month",
        enterprise: "$49/month"
      },
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      category: "Productivity",
      badge: "Essential",
      users: "Up to 50 users",
      rating: 4.7,
      reviews: 189
    },
    {
      id: "crm-system",
      title: "Customer Relationship Management",
      description: "Lightweight CRM system designed for small to medium businesses with contact management and sales tracking.",
      features: [
        "Contact management",
        "Sales pipeline tracking",
        "Email integration",
        "Reporting dashboard",
        "Mobile access"
      ],
      pricing: {
        starter: "$19/month",
        professional: "$39/month",
        enterprise: "$79/month"
      },
      icon: <Users className="h-8 w-8 text-purple-500" />,
      category: "Sales",
      badge: "Hot",
      users: "Up to 25 users",
      rating: 4.9,
      reviews: 156
    },
    {
      id: "analytics-platform",
      title: "Business Analytics Platform",
      description: "Simple yet powerful analytics platform for tracking business metrics, user behavior, and performance insights.",
      features: [
        "Real-time dashboards",
        "Custom metrics tracking",
        "Data visualization",
        "Export capabilities",
        "API access"
      ],
      pricing: {
        starter: "$39/month",
        professional: "$89/month",
        enterprise: "$199/month"
      },
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      category: "Analytics",
      badge: "Insightful",
      users: "Unlimited",
      rating: 4.6,
      reviews: 98
    },
    {
      id: "payment-processor",
      title: "Payment Processing Solution",
      description: "Secure payment processing platform with support for multiple payment methods and subscription billing.",
      features: [
        "Multiple payment methods",
        "Subscription billing",
        "Fraud protection",
        "PCI compliance",
        "Developer API"
      ],
      pricing: {
        starter: "2.9% + $0.30",
        professional: "2.5% + $0.30",
        enterprise: "Custom"
      },
      icon: <CreditCard className="h-8 w-8 text-indigo-500" />,
      category: "Payments",
      badge: "Secure",
      users: "Unlimited",
      rating: 4.8,
      reviews: 312
    },
    {
      id: "form-builder",
      title: "Advanced Form Builder",
      description: "Professional form creation tool with conditional logic, file uploads, and advanced validation rules.",
      features: [
        "Drag & drop builder",
        "Conditional logic",
        "File uploads",
        "Multi-step forms",
        "Analytics tracking"
      ],
      pricing: {
        starter: "$15/month",
        professional: "$35/month",
        enterprise: "$75/month"
      },
      icon: <FileText className="h-8 w-8 text-teal-500" />,
      category: "Forms",
      badge: "Flexible",
      users: "Unlimited",
      rating: 4.7,
      reviews: 145
    },
    {
      id: "chat-widget",
      title: "Live Chat Widget",
      description: "Professional live chat solution for websites with visitor tracking, chat history, and team collaboration.",
      features: [
        "Real-time chat",
        "Visitor tracking",
        "Chat history",
        "Team collaboration",
        "Mobile apps"
      ],
      pricing: {
        starter: "$25/month",
        professional: "$59/month",
        enterprise: "$129/month"
      },
      icon: <MessageSquare className="h-8 w-8 text-pink-500" />,
      category: "Communication",
      badge: "Engaging",
      users: "Up to 5 agents",
      rating: 4.8,
      reviews: 203
    },
    {
      id: "seo-toolkit",
      title: "SEO Optimization Toolkit",
      description: "Comprehensive SEO tool for keyword research, site audits, and performance monitoring.",
      features: [
        "Keyword research",
        "Site audit tools",
        "Ranking tracking",
        "Backlink analysis",
        "Performance reports"
      ],
      pricing: {
        starter: "$49/month",
        professional: "$99/month",
        enterprise: "$199/month"
      },
      icon: <Search className="h-8 w-8 text-yellow-500" />,
      category: "SEO",
      badge: "Optimized",
      users: "Up to 3 users",
      rating: 4.7,
      reviews: 167
    },
    {
      id: "design-tool",
      title: "Graphic Design Platform",
      description: "Online design tool with templates, stock photos, and collaboration features for marketing teams.",
      features: [
        "Template library",
        "Stock photo access",
        "Collaboration tools",
        "Brand kit management",
        "Export options"
      ],
      pricing: {
        starter: "$12/month",
        professional: "$25/month",
        enterprise: "$49/month"
      },
      icon: <FileText className="h-8 w-8 text-red-500" />,
      category: "Design",
      badge: "Creative",
      users: "Up to 10 users",
      rating: 4.6,
      reviews: 134
    },
    {
      id: "inventory-management",
      title: "Inventory Management System",
      description: "Simple inventory tracking solution for small businesses with barcode scanning and low stock alerts.",
      features: [
        "Barcode scanning",
        "Low stock alerts",
        "Purchase orders",
        "Vendor management",
        "Mobile app"
      ],
      pricing: {
        starter: "$29/month",
        professional: "$59/month",
        enterprise: "$119/month"
      },
      icon: <Database className="h-8 w-8 text-blue-600" />,
      category: "Inventory",
      badge: "Organized",
      users: "Up to 15 users",
      rating: 4.8,
      reviews: 89
    },
    {
      id: "appointment-scheduler",
      title: "Appointment Scheduling System",
      description: "Online booking platform for service businesses with calendar integration and automated reminders.",
      features: [
        "Online booking",
        "Calendar integration",
        "Automated reminders",
        "Payment processing",
        "Client portal"
      ],
      pricing: {
        starter: "$19/month",
        professional: "$39/month",
        enterprise: "$79/month"
 },
      icon: <Clock className="h-8 w-8 text-emerald-500" />,
      category: "Scheduling",
      badge: "Efficient",
      users: "Up to 20 users",
      rating: 4.9,
      reviews: 178
    },
    {
      id: "survey-platform",
      title: "Survey & Feedback Platform",
      description: "Professional survey creation tool with advanced question types, logic branching, and analytics.",
      features: [
        "Advanced question types",
        "Logic branching",
        "Response analytics",
        "Custom themes",
        "Data export"
      ],
      pricing: {
        starter: "$25/month",
        professional: "$55/month",
        enterprise: "$125/month"
      },
      icon: <Search className="h-8 w-8 text-violet-500" />,
      category: "Feedback",
      badge: "Insightful",
      users: "Unlimited",
      rating: 4.7,
      reviews: 112
    }
  ];

  const categories = [
    "All Services",
    "Marketing",
    "Productivity",
    "Sales",
    "Analytics",
    "Payments",
    "Forms",
    "Communication",
    "SEO",
    "Design",
    "Inventory",
    "Scheduling",
    "Feedback"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");

  const filteredServices = selectedCategory === "All Services" 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Micro SAAS Hub
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover powerful, affordable software solutions designed for growing businesses. 
            From marketing automation to project management, find the perfect tools to scale your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <Zap className="h-5 w-5 mr-2" />
              Explore Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Micro SAAS Solutions?</h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Micro SAAS solutions offer the perfect balance of functionality, affordability, and scalability for growing businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-zion-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Affordable Pricing</h3>
            <p className="text-zion-slate-light">
              Start small and scale up as your business grows with transparent, predictable pricing.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-zion-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quick Implementation</h3>
            <p className="text-zion-slate-light">
              Get up and running in days, not months, with intuitive interfaces and comprehensive onboarding.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-zion-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
            <p className="text-zion-slate-light">
              Bank-level security and compliance standards to protect your business data and customer information.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? 'bg-zion-purple text-white' 
                  : 'border-zion-purple text-zion-purple hover:bg-zion-purple/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="group overflow-hidden border-zion-purple/20 bg-zion-slate/50 backdrop-blur-sm hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-zion-slate/30 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {service.badge && (
                      <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                        {service.badge}
                      </Badge>
                    )}
                    <div className="flex items-center gap-1 text-sm text-zion-slate-light">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{service.rating}</span>
                      <span>({service.reviews})</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-zion-slate-light flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Pricing:</h4>
                    <div className="space-y-1">
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Starter:</span> {service.pricing.starter}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Professional:</span> {service.pricing.professional}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Enterprise:</span> {service.pricing.enterprise}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Users:</h4>
                    <div className="text-sm text-zion-slate-light flex items-center">
                      <Users className="h-4 w-4 mr-2 text-zion-purple" />
                      {service.users}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="p-6 pt-0 space-y-3">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  <Zap className="h-4 w-4 mr-2" />
                  Start Free Trial
                </Button>
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Request Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Micro SAAS vs Enterprise Solutions</h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Understand the differences and choose the right solution for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <h3 className="text-xl font-semibold text-zion-cyan mb-4">Micro SAAS Solutions</h3>
            <ul className="space-y-2 text-zion-slate-light">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Affordable monthly pricing
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Quick implementation (days)
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Focused functionality
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Easy to use interfaces
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Scalable as you grow
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <h3 className="text-xl font-semibold text-zion-purple mb-4">Enterprise Solutions</h3>
            <ul className="space-y-2 text-zion-slate-light">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Comprehensive feature sets
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Custom integrations
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Dedicated support teams
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Advanced security features
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                White-label options
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect SAAS Solution?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts can help you identify the right tools for your business needs and guide you through implementation. 
            Get in touch today for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Recommendations
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: https://ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}