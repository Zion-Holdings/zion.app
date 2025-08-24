import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building, 
  Users, 
  BarChart3, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  CreditCard,
  Clock
} from "lucide-react";

const MICRO_SAAS_SERVICES = [
  {
    id: "business-automation",
    title: "Business Process Automation Suite",
    description: "Complete automation solution for small to medium businesses",
    category: "Business Automation",
    features: [
      "Workflow automation",
      "Document management",
      "Task scheduling",
      "Email automation",
      "Reporting dashboard"
    ],
    benefits: [
      "Save 20+ hours per week",
      "Reduce errors by 80%",
      "Improve team productivity",
      "Scalable as you grow"
    ],
    pricing: {
      starter: { price: 99, period: "month", features: ["5 workflows", "Basic reporting", "Email support"] },
      professional: { price: 299, period: "month", features: ["Unlimited workflows", "Advanced analytics", "Priority support"] },
      enterprise: { price: 599, period: "month", features: ["Custom integrations", "White-label options", "Dedicated support"] }
    },
    delivery: "1-2 weeks",
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: "customer-management",
    title: "Customer Relationship Management",
    description: "All-in-one CRM solution for growing businesses",
    category: "Customer Management",
    features: [
      "Lead management",
      "Sales pipeline",
      "Customer database",
      "Email marketing",
      "Analytics dashboard"
    ],
    benefits: [
      "Increase sales by 30%",
      "Improve customer retention",
      "Better lead conversion",
      "Centralized customer data"
    ],
    pricing: {
      starter: { price: 49, period: "month", features: ["100 contacts", "Basic pipeline", "Email support"] },
      professional: { price: 149, period: "month", features: ["1000 contacts", "Advanced features", "Phone support"] },
      enterprise: { price: 299, period: "month", features: ["Unlimited contacts", "Custom fields", "API access"] }
    },
    delivery: "1 week",
    rating: 4.9,
    reviewCount: 234
  },
  {
    id: "financial-management",
    title: "Financial Management & Accounting",
    description: "Comprehensive financial tools for business management",
    category: "Financial Tools",
    features: [
      "Expense tracking",
      "Invoice management",
      "Financial reporting",
      "Tax preparation",
      "Bank reconciliation"
    ],
    benefits: [
      "Save on accounting costs",
      "Real-time financial insights",
      "Automated tax calculations",
      "Better cash flow management"
    ],
    pricing: {
      starter: { price: 79, period: "month", features: ["Basic accounting", "5 bank accounts", "Email support"] },
      professional: { price: 199, period: "month", features: ["Advanced reporting", "Unlimited accounts", "Priority support"] },
      enterprise: { price: 399, period: "month", features: ["Custom reports", "Multi-entity", "Dedicated accountant"] }
    },
    delivery: "2-3 weeks",
    rating: 4.7,
    reviewCount: 189
  },
  {
    id: "project-management",
    title: "Project Management Platform",
    description: "Collaborative project management for teams",
    category: "Project Management",
    features: [
      "Task management",
      "Team collaboration",
      "Time tracking",
      "File sharing",
      "Progress reporting"
    ],
    benefits: [
      "Improve team efficiency",
      "Better project visibility",
      "Reduce project delays",
      "Enhanced communication"
    ],
    pricing: {
      starter: { price: 39, period: "month", features: ["5 team members", "Basic projects", "Email support"] },
      professional: { price: 129, period: "month", features: ["25 team members", "Advanced features", "Phone support"] },
      enterprise: { price: 249, period: "month", features: ["Unlimited members", "Custom workflows", "API access"] }
    },
    delivery: "1 week",
    rating: 4.8,
    reviewCount: 312
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation Suite",
    description: "Automated marketing tools for business growth",
    category: "Marketing",
    features: [
      "Email marketing",
      "Social media management",
      "Lead nurturing",
      "Campaign analytics",
      "A/B testing"
    ],
    benefits: [
      "Increase conversion rates",
      "Automate repetitive tasks",
      "Better ROI tracking",
      "Personalized customer journeys"
    ],
    pricing: {
      starter: { price: 69, period: "month", features: ["1000 emails/month", "Basic templates", "Email support"] },
      professional: { price: 199, period: "month", features: ["10000 emails/month", "Advanced automation", "Priority support"] },
      enterprise: { price: 399, period: "month", features: ["Unlimited emails", "Custom integrations", "Dedicated manager"] }
    },
    delivery: "1-2 weeks",
    rating: 4.6,
    reviewCount: 178
  },
  {
    id: "inventory-management",
    title: "Inventory & Supply Chain Management",
    description: "Complete inventory control and supply chain optimization",
    category: "Inventory Management",
    features: [
      "Stock tracking",
      "Purchase orders",
      "Supplier management",
      "Demand forecasting",
      "Multi-location support"
    ],
    benefits: [
      "Reduce stockouts by 60%",
      "Lower inventory costs",
      "Better supplier relationships",
      "Improved cash flow"
    ],
    pricing: {
      starter: { price: 89, period: "month", features: ["1000 SKUs", "Basic reporting", "Email support"] },
      professional: { price: 249, period: "month", features: ["10000 SKUs", "Advanced analytics", "Phone support"] },
      enterprise: { price: 499, period: "month", features: ["Unlimited SKUs", "Custom integrations", "Dedicated support"] }
    },
    delivery: "2-3 weeks",
    rating: 4.7,
    reviewCount: 145
  }
];

const INDUSTRY_SOLUTIONS = [
  {
    id: "retail-saas",
    title: "Retail Management Suite",
    description: "Complete retail solution for stores and e-commerce",
    category: "Retail",
    features: ["POS system", "Inventory management", "Customer loyalty", "Multi-channel sales", "Analytics"],
    price: "From $199/month",
    delivery: "2-3 weeks"
  },
  {
    id: "healthcare-saas",
    title: "Healthcare Practice Management",
    description: "HIPAA-compliant practice management solution",
    category: "Healthcare",
    features: ["Patient scheduling", "Electronic records", "Billing management", "Compliance tools", "Reporting"],
    price: "From $299/month",
    delivery: "3-4 weeks"
  },
  {
    id: "real-estate-saas",
    title: "Real Estate CRM",
    description: "Property management and client relationship platform",
    category: "Real Estate",
    features: ["Lead management", "Property listings", "Client database", "Transaction tracking", "Market analysis"],
    price: "From $149/month",
    delivery: "2 weeks"
  },
  {
    id: "restaurant-saas",
    title: "Restaurant Management System",
    description: "Complete restaurant operations platform",
    category: "Restaurant",
    features: ["Order management", "Inventory control", "Staff scheduling", "Customer feedback", "Analytics"],
    price: "From $179/month",
    delivery: "2-3 weeks"
  }
];

export default function MicroSAASPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan max-w-4xl mx-auto">
            Affordable, scalable software solutions designed specifically for small to medium businesses. 
            Transform your operations without breaking the bank.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
              <Phone className="h-5 w-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="saas-services" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="saas-services" className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              SAAS Services
            </TabsTrigger>
            <TabsTrigger value="industry-solutions" className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Industry Solutions
            </TabsTrigger>
          </TabsList>

          {/* SAAS Services Tab */}
          <TabsContent value="saas-services" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Micro SAAS Services</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Affordable, feature-rich software solutions that grow with your business. 
                Start small and scale up as you need more features.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="bg-zion-purple hover:bg-zion-purple-dark"
              >
                All Categories
              </Button>
              {Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category))).map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-zion-purple hover:bg-zion-purple-dark' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                                             <Building className="h-6 w-6 text-zion-purple" />
                      <Badge variant="secondary">{service.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zinc-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {service.rating} ({service.reviewCount} reviews)
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Business Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing Tiers */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Pricing Plans:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {Object.entries(service.pricing).map(([tier, plan]) => (
                          <div key={tier} className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                            <div>
                              <div className="font-semibold capitalize">{tier}</div>
                              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                {plan.features.slice(0, 2).join(', ')}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold text-zion-purple">${plan.price}</div>
                              <div className="text-sm text-zinc-500">/{plan.period}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {service.delivery}
                        </Badge>
                        <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                          Start Free Trial
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Industry Solutions Tab */}
          <TabsContent value="industry-solutions" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Tailored solutions designed for specific industries with built-in compliance and best practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {INDUSTRY_SOLUTIONS.map((solution) => (
                <Card key={solution.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                                         <div className="flex items-center gap-2 mb-2">
                       <Award className="h-6 w-6 text-zion-purple" />
                       <Badge variant="secondary">{solution.category}</Badge>
                     </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-2xl font-bold text-zion-purple">{solution.price}</div>
                          <Badge variant="outline">{solution.delivery}</Badge>
                        </div>
                        <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Why Choose Micro SAAS Section */}
        <div className="mt-20 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Micro SAAS?</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Perfect for growing businesses that need powerful tools without enterprise complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-zion-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Start with what you need, scale as you grow
              </p>
            </div>
            
                         <div className="text-center">
               <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Zap className="h-8 w-8 text-zion-purple" />
               </div>
               <h3 className="font-semibold mb-2">Quick Implementation</h3>
               <p className="text-sm text-zinc-600 dark:text-zinc-400">
                 Get up and running in days, not months
               </p>
             </div>
            
            <div className="text-center">
              <div className="bg-zion-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-zion-blue" />
              </div>
              <h3 className="font-semibold mb-2">Proven Solutions</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Tested and trusted by thousands of businesses
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Dedicated support team to help you succeed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-zion-cyan max-w-2xl mx-auto">
            Start your free trial today and see how our micro SAAS solutions can streamline your operations 
            and drive growth. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
              <Phone className="h-5 w-5 mr-2" />
              Call: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p className="text-lg">
              Visit: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">ziontechgroup.com</a>
            </p>
            <p className="text-sm mt-2">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}