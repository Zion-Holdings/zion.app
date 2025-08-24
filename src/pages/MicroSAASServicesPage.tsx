import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  FileText, 
  CreditCard, 
  Globe,
  Lock,
  Zap,
  TrendingUp,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Shield,
  Database,
  Search,
  Video,
  Code,
  Server,
  Network,
  Cloud,
  Smartphone,
  Settings,
  BarChart
} from "lucide-react";

export default function MicroSAASServicesPage() {
  const microSAASServices = [
    {
      id: "crm-saas",
      title: "ZionCRM Pro",
      description: "Complete customer relationship management solution with sales automation, lead tracking, and analytics.",
      icon: <Users className="h-8 w-8 text-blue-500" />,
      price: 29,
      currency: "$",
      features: [
        "Contact Management",
        "Sales Pipeline",
        "Lead Scoring",
        "Email Automation",
        "Analytics Dashboard",
        "Mobile App"
      ],
      category: "Business Tools",
      badge: "Popular",
      link: "https://ziontechgroup.com/zion-crm",
      details: "Streamline your sales process with our comprehensive CRM solution. Track leads, manage contacts, and close more deals with intelligent automation and insights.",
      pricing: {
        starter: "$29/month",
        professional: "$79/month",
        enterprise: "$199/month"
      },
      freeTrial: "14 days",
      rating: 4.8,
      reviewCount: 342
    },
    {
      id: "project-management",
      title: "ZionProject Hub",
      description: "Project management platform with task tracking, team collaboration, and resource management.",
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      price: 19,
      currency: "$",
      features: [
        "Task Management",
        "Team Collaboration",
        "Time Tracking",
        "Resource Planning",
        "Gantt Charts",
        "File Sharing"
      ],
      category: "Project Management",
      badge: "Essential",
      link: "https://ziontechgroup.com/zion-project",
      details: "Keep your projects on track with our intuitive project management platform. Collaborate with your team, track progress, and deliver results on time.",
      pricing: {
        starter: "$19/month",
        professional: "$49/month",
        enterprise: "$99/month"
      },
      freeTrial: "30 days",
      rating: 4.7,
      reviewCount: 267
    },
    {
      id: "analytics-platform",
      title: "ZionAnalytics",
      description: "Business intelligence platform with real-time dashboards, reporting, and data visualization.",
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      price: 39,
      currency: "$",
      features: [
        "Real-time Dashboards",
        "Custom Reports",
        "Data Integration",
        "Predictive Analytics",
        "Export Options",
        "API Access"
      ],
      category: "Analytics",
      badge: "Insightful",
      link: "https://ziontechgroup.com/zion-analytics",
      details: "Transform your data into actionable insights with our powerful analytics platform. Create custom dashboards, generate reports, and make data-driven decisions.",
      pricing: {
        starter: "$39/month",
        professional: "$89/month",
        enterprise: "$199/month"
      },
      freeTrial: "21 days",
      rating: 4.9,
      reviewCount: 189
    },
    {
      id: "communication-tool",
      title: "ZionChat",
      description: "Team communication platform with chat, video calls, and file sharing capabilities.",
      icon: <MessageSquare className="h-8 w-8 text-orange-500" />,
      price: 15,
      currency: "$",
      features: [
        "Team Chat",
        "Video Calls",
        "File Sharing",
        "Screen Sharing",
        "Mobile App",
        "Integrations"
      ],
      category: "Communication",
      badge: "Collaborative",
      link: "https://ziontechgroup.com/zion-chat",
      details: "Connect your team with our modern communication platform. Chat, call, and collaborate seamlessly across all devices and platforms.",
      pricing: {
        starter: "$15/month",
        professional: "$39/month",
        enterprise: "$79/month"
      },
      freeTrial: "7 days",
      rating: 4.6,
      reviewCount: 198
    },
    {
      id: "document-management",
      title: "ZionDocs",
      description: "Document management system with version control, collaboration, and secure storage.",
      icon: <FileText className="h-8 w-8 text-cyan-500" />,
      price: 25,
      currency: "$",
      features: [
        "Document Storage",
        "Version Control",
        "Collaborative Editing",
        "Search & Indexing",
        "Access Control",
        "Backup & Recovery"
      ],
      category: "Document Management",
      badge: "Secure",
      link: "https://ziontechgroup.com/zion-docs",
      details: "Organize and secure your documents with our enterprise-grade document management system. Collaborate with your team while maintaining version control and security.",
      pricing: {
        starter: "$25/month",
        professional: "$59/month",
        enterprise: "$129/month"
      },
      freeTrial: "14 days",
      rating: 4.8,
      reviewCount: 156
    },
    {
      id: "payment-processor",
      title: "ZionPay",
      description: "Payment processing solution with multiple payment methods, invoicing, and subscription management.",
      icon: <CreditCard className="h-8 w-8 text-emerald-500" />,
      price: 0,
      currency: "$",
      features: [
        "Multiple Payment Methods",
        "Recurring Billing",
        "Invoice Generation",
        "Fraud Protection",
        "Analytics Dashboard",
        "API Integration"
      ],
      category: "Payments",
      badge: "Free",
      link: "https://ziontechgroup.com/zion-pay",
      details: "Accept payments from customers worldwide with our secure payment processing solution. Support multiple payment methods and automate your billing processes.",
      pricing: {
        starter: "2.9% + $0.30",
        professional: "2.5% + $0.30",
        enterprise: "2.2% + $0.30"
      },
      freeTrial: "No setup fees",
      rating: 4.9,
      reviewCount: 423
    },
    {
      id: "marketing-automation",
      title: "ZionMarketing",
      description: "Marketing automation platform with email campaigns, lead nurturing, and conversion tracking.",
      icon: <BarChart className="h-8 w-8 text-pink-500" />,
      price: 49,
      currency: "$",
      features: [
        "Email Campaigns",
        "Lead Nurturing",
        "A/B Testing",
        "Conversion Tracking",
        "Marketing Analytics",
        "CRM Integration"
      ],
      category: "Marketing",
      badge: "Automated",
      link: "https://ziontechgroup.com/zion-marketing",
      details: "Automate your marketing efforts and nurture leads effectively with our comprehensive marketing automation platform. Track conversions and optimize your campaigns.",
      pricing: {
        starter: "$49/month",
        professional: "$99/month",
        enterprise: "$199/month"
      },
      freeTrial: "14 days",
      rating: 4.7,
      reviewCount: 234
    },
    {
      id: "inventory-management",
      title: "ZionInventory",
      description: "Inventory management system with stock tracking, order management, and supplier management.",
      icon: <Building className="h-8 w-8 text-indigo-500" />,
      price: 35,
      currency: "$",
      features: [
        "Stock Tracking",
        "Order Management",
        "Supplier Management",
        "Barcode Scanning",
        "Low Stock Alerts",
        "Reporting Tools"
      ],
      category: "Inventory",
      badge: "Efficient",
      link: "https://ziontechgroup.com/zion-inventory",
      details: "Keep track of your inventory in real-time with our comprehensive inventory management system. Prevent stockouts and optimize your supply chain.",
      pricing: {
        starter: "$35/month",
        professional: "$79/month",
        enterprise: "$149/month"
      },
      freeTrial: "21 days",
      rating: 4.8,
      reviewCount: 178
    },
    {
      id: "hr-management",
      title: "ZionHR",
      description: "Human resources management platform with employee onboarding, time tracking, and performance management.",
      icon: <Users className="h-8 w-8 text-teal-500" />,
      price: 45,
      currency: "$",
      features: [
        "Employee Onboarding",
        "Time Tracking",
        "Performance Reviews",
        "Leave Management",
        "Payroll Integration",
        "Compliance Tools"
      ],
      category: "HR Management",
      badge: "Comprehensive",
      link: "https://ziontechgroup.com/zion-hr",
      details: "Streamline your HR processes with our comprehensive human resources management platform. Manage employees, track performance, and ensure compliance.",
      pricing: {
        starter: "$45/month",
        professional: "$89/month",
        enterprise: "$179/month"
      },
      freeTrial: "30 days",
      rating: 4.6,
      reviewCount: 145
    },
    {
      id: "accounting-software",
      title: "ZionBooks",
      description: "Cloud-based accounting software with invoicing, expense tracking, and financial reporting.",
      icon: <BarChart3 className="h-8 w-8 text-amber-500" />,
      price: 30,
      currency: "$",
      features: [
        "Invoicing",
        "Expense Tracking",
        "Financial Reports",
        "Bank Reconciliation",
        "Tax Preparation",
        "Multi-currency"
      ],
      category: "Accounting",
      badge: "Financial",
      link: "https://ziontechgroup.com/zion-books",
      details: "Manage your business finances with our cloud-based accounting software. Create invoices, track expenses, and generate comprehensive financial reports.",
      pricing: {
        starter: "$30/month",
        professional: "$69/month",
        enterprise: "$129/month"
      },
      freeTrial: "30 days",
      rating: 4.8,
      reviewCount: 267
    },
    {
      id: "ecommerce-platform",
      title: "ZionShop",
      description: "E-commerce platform with online store creation, payment processing, and inventory management.",
      icon: <Globe className="h-8 w-8 text-red-500" />,
      price: 40,
      currency: "$",
      features: [
        "Online Store Builder",
        "Payment Processing",
        "Inventory Management",
        "Order Fulfillment",
        "Marketing Tools",
        "Analytics Dashboard"
      ],
      category: "E-commerce",
      badge: "Complete",
      link: "https://ziontechgroup.com/zion-shop",
      details: "Create and manage your online store with our comprehensive e-commerce platform. Sell products, process payments, and grow your business online.",
      pricing: {
        starter: "$40/month",
        professional: "$89/month",
        enterprise: "$199/month"
      },
      freeTrial: "14 days",
      rating: 4.7,
      reviewCount: 198
    },
    {
      id: "learning-platform",
      title: "ZionAcademy",
      description: "Online learning management system with course creation, student management, and progress tracking.",
      icon: <FileText className="h-8 w-8 text-violet-500" />,
      price: 55,
      currency: "$",
      features: [
        "Course Creation",
        "Student Management",
        "Progress Tracking",
        "Assessment Tools",
        "Video Streaming",
        "Mobile Learning"
      ],
      category: "Education",
      badge: "Educational",
      link: "https://ziontechgroup.com/zion-academy",
      details: "Create and deliver online courses with our comprehensive learning management system. Engage students and track their progress effectively.",
      pricing: {
        starter: "$55/month",
        professional: "$109/month",
        enterprise: "$249/month"
      },
      freeTrial: "21 days",
      rating: 4.9,
      reviewCount: 167
    }
  ];

  const categories = [
    "All Services",
    "Business Tools",
    "Project Management",
    "Analytics",
    "Communication",
    "Document Management",
    "Payments",
    "Marketing",
    "Inventory",
    "HR Management",
    "Accounting",
    "E-commerce",
    "Education"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");
  const [filteredServices, setFilteredServices] = React.useState(microSAASServices);

  React.useEffect(() => {
    if (selectedCategory === "All Services") {
      setFilteredServices(microSAASServices);
    } else {
      setFilteredServices(microSAASServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Powerful, affordable software solutions designed for modern businesses. From CRM to project management, 
            our micro SAAS services help you grow without breaking the bank.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Explore SAAS Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Start Free Trial
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
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Pricing Plans:</h4>
                      <div className="space-y-1">
                        {Object.entries(service.pricing).map(([plan, price]) => (
                          <div key={plan} className="flex justify-between text-xs">
                            <span className="text-zion-slate-light capitalize">{plan}:</span>
                            <span className="text-zion-cyan font-semibold">{String(price)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                      <span>Free Trial:</span>
                      <span className="text-zion-cyan font-semibold">{service.freeTrial}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} />
                      ))}
                      <span className="text-sm text-zion-slate-light ml-2">({service.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-zion-cyan">
                      {service.price === 0 ? 'Free' : `${service.currency}${service.price}`}
                    </span>
                    <span className="text-zion-slate-light">
                      {service.price === 0 ? '' : '/month'}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Start Free Trial
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
            Ready to Transform Your Business with Micro SAAS?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Start with a free trial and see how our micro SAAS solutions can streamline your operations, 
            improve productivity, and drive growth. No long-term contracts, cancel anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Start Free Trial
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