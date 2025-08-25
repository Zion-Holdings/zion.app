
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  HardDrive, 
  DollarSign, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Database,
  TrendingUp,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  FileText,
  Calendar,
  Building,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
    teamSize: '',
    description: '',
    requirements: [],
    additionalServices: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        industry: '',
        projectType: '',
        budget: '',
        timeline: '',
        teamSize: '',
        description: '',
        requirements: [],
        additionalServices: []
      });
      setSelectedServices([]);
    }, 5000);
  };

  const serviceCategories = [
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      description: "Custom AI development and ML solutions",
      basePrice: 8000,
      color: "from-purple-500 to-indigo-600",
      services: [
        { name: "Custom AI Development", price: 8000, duration: "8-12 weeks" },
        { name: "ML Model Training", price: 12000, duration: "6-10 weeks" },
        { name: "AI Strategy Consulting", price: 5000, duration: "2-4 weeks" },
        { name: "NLP Solutions", price: 6000, duration: "4-8 weeks" },
        { name: "Computer Vision", price: 10000, duration: "6-10 weeks" }
      ]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      description: "Security audits and compliance frameworks",
      basePrice: 8000,
      color: "from-red-500 to-orange-600",
      services: [
        { name: "Security Audit", price: 8000, duration: "2-4 weeks" },
        { name: "Penetration Testing", price: 12000, duration: "3-5 weeks" },
        { name: "Compliance Framework", price: 15000, duration: "8-12 weeks" },
        { name: "Incident Response", price: 10000, duration: "Ongoing" },
        { name: "Security Training", price: 3000, duration: "1-2 weeks" }
      ]
    },
    {
      id: "cloud-infrastructure",
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6" />,
      description: "Cloud migration and DevOps implementation",
      basePrice: 5000,
      color: "from-cyan-500 to-blue-600",
      services: [
        { name: "Cloud Migration", price: 15000, duration: "8-16 weeks" },
        { name: "DevOps Implementation", price: 12000, duration: "6-12 weeks" },
        { name: "Infrastructure Modernization", price: 20000, duration: "12-20 weeks" },
        { name: "Monitoring & Support", price: 5000, duration: "Ongoing" }
      ]
    },
    {
      id: "data-analytics",
      name: "Data & Analytics",
      icon: <Database className="h-6 w-6" />,
      description: "Big data and business intelligence solutions",
      basePrice: 7000,
      color: "from-emerald-500 to-green-600",
      services: [
        { name: "Big Data Engineering", price: 18000, duration: "12-20 weeks" },
        { name: "Data Pipeline Development", price: 12000, duration: "8-16 weeks" },
        { name: "Business Intelligence", price: 8000, duration: "6-12 weeks" },
        { name: "Data Visualization", price: 5000, duration: "4-8 weeks" }
      ]
    },
    {
      id: "digital-transformation",
      name: "Digital Transformation",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Strategic consulting and implementation",
      basePrice: 10000,
      color: "from-amber-500 to-orange-600",
      services: [
        { name: "Digital Strategy", price: 15000, duration: "4-8 weeks" },
        { name: "Process Reengineering", price: 20000, duration: "12-20 weeks" },
        { name: "Technology Assessment", price: 8000, duration: "2-4 weeks" },
        { name: "Change Management", price: 12000, duration: "8-16 weeks" }
      ]
    },
    {
      id: "micro-saas",
      name: "Micro SAAS Solutions",
      icon: <Zap className="h-6 w-6" />,
      description: "Custom business applications and tools",
      basePrice: 5000,
      color: "from-pink-500 to-rose-600",
      services: [
        { name: "Business Process Automation", price: 8000, duration: "6-12 weeks" },
        { name: "Custom CRM Development", price: 12000, duration: "8-16 weeks" },
        { name: "BI Dashboard Creation", price: 6000, duration: "4-8 weeks" },
        { name: "Workflow Management", price: 5000, duration: "4-8 weeks" }
      ]
    }
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education",
    "Real Estate", "Transportation", "Energy", "Media", "Non-Profit", "Other"
  ];

  const projectTypes = [
    "New Development", "Enhancement", "Migration", "Integration", "Consulting", "Support & Maintenance"
  ];

  const budgetRanges = [
    "Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "Over $100,000"
  ];

  const timelineOptions = [
    "Immediate (1-2 weeks)", "Quick (1-2 months)", "Standard (3-6 months)", "Long-term (6+ months)"
  ];

  const teamSizes = [
    "1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"
  ];

  const additionalServices = [
    "Project Management", "Quality Assurance", "Training & Documentation", "Ongoing Support", "Performance Optimization"
  ];

  const calculateEstimatedCost = () => {
    let total = 0;
    selectedServices.forEach(serviceId => {
      const [categoryId, serviceIndex] = serviceId.split('-');
      const category = serviceCategories.find(cat => cat.id === categoryId);
      if (category && serviceIndex !== undefined) {
        const service = category.services[parseInt(serviceIndex)];
        if (service) {
          total += service.price;
        }
      }
    });
    return total;
  };

  const estimatedCost = calculateEstimatedCost();

  return (
    <>
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get a customized quote for AI, cybersecurity, cloud, and digital transformation services. Professional consultation and transparent pricing."
        keywords="quote, pricing, AI services, cybersecurity, cloud migration, digital transformation, Zion Tech Group"
      />
      <Header />
      
      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Get Your Custom Quote
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Tell us about your project and we'll provide a detailed, transparent quote 
                tailored to your specific needs and budget.
              </p>
              
              {/* Quick Contact */}
              <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/30 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="flex items-center text-zion-cyan">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="font-medium">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center text-zion-cyan">
                    <Mail className="h-5 w-5 mr-2" />
                    <span className="font-medium">kleber@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Selection & Quote Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Service Selection */}
              <div className="lg:col-span-2">
                <Card className="border-zion-blue-light bg-zion-blue-dark/50 mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Select Your Services</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Choose the services you need and see real-time pricing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {serviceCategories.map((category) => (
                        <div key={category.id} className="border border-zion-purple/30 rounded-lg p-4">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                              {category.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                              <p className="text-sm text-zion-slate-light">{category.description}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.services.map((service, index) => {
                              const serviceId = `${category.id}-${index}`;
                              const isSelected = selectedServices.includes(serviceId);
                              
                              return (
                                <div 
                                  key={index}
                                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                    isSelected 
                                      ? 'border-zion-cyan bg-zion-cyan/10' 
                                      : 'border-zion-purple/30 hover:border-zion-purple/50'
                                  }`}
                                  onClick={() => handleServiceToggle(serviceId)}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-white">{service.name}</h4>
                                    <Checkbox 
                                      checked={isSelected}
                                      onChange={() => handleServiceToggle(serviceId)}
                                    />
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-zion-cyan font-medium">
                                      ${service.price.toLocaleString()}
                                    </span>
                                    <span className="text-zion-slate-light">
                                      {service.duration}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Project Details Form */}
                <Card className="border-zion-blue-light bg-zion-blue-dark/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Project Details</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Provide additional information to help us create an accurate quote
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitSuccess ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Quote Request Submitted!</h3>
                        <p className="text-zion-slate-light mb-4">
                          Thank you for your interest. We'll review your requirements and get back to you with a detailed quote within 24 hours.
                        </p>
                        <div className="text-sm text-zion-cyan">
                          <p>Estimated Cost: <span className="font-bold">${estimatedCost.toLocaleString()}</span></p>
                          <p>Selected Services: {selectedServices.length}</p>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              First Name *
                            </label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Last Name *
                            </label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="Doe"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Email *
                            </label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="john@company.com"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Phone
                            </label>
                            <Input
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Company *
                            </label>
                            <Input
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              required
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="Your Company Name"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Website
                            </label>
                            <Input
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                              className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                              placeholder="https://company.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Industry
                            </label>
                            <Select value={formData.industry} onValueChange={(value) => handleSelectChange('industry', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Project Type
                            </label>
                            <Select value={formData.projectType} onValueChange={(value) => handleSelectChange('projectType', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Budget Range
                            </label>
                            <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>{range}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Timeline
                            </label>
                            <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                {timelineOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-zion-cyan mb-2 block">
                              Team Size
                            </label>
                            <Select value={formData.teamSize} onValueChange={(value) => handleSelectChange('teamSize', value)}>
                              <SelectTrigger className="bg-zion-blue-dark border-zion-purple/30 text-white">
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                              <SelectContent>
                                {teamSizes.map((size) => (
                                  <SelectItem key={size} value={size}>{size}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-zion-cyan mb-2 block">
                            Project Description *
                          </label>
                          <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="bg-zion-blue-dark border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                            placeholder="Describe your project goals, requirements, and any specific challenges..."
                          />
                        </div>

                        <Button 
                          type="submit" 
                          disabled={isSubmitting || selectedServices.length === 0}
                          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Processing...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              Request Custom Quote
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Quote Summary & Contact */}
              <div className="space-y-6">
                {/* Quote Summary */}
                <Card className="border-zion-blue-light bg-zion-blue-dark/50 sticky top-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Quote Summary</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Selected services and estimated costs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {selectedServices.length === 0 ? (
                        <div className="text-center py-8 text-zion-slate-light">
                          <HardDrive className="h-12 w-12 mx-auto mb-3 opacity-50" />
                          <p>Select services to see pricing</p>
                        </div>
                      ) : (
                        <>
                          <div className="space-y-3">
                            {selectedServices.map((serviceId) => {
                              const [categoryId, serviceIndex] = serviceId.split('-');
                              const category = serviceCategories.find(cat => cat.id === categoryId);
                              if (category && serviceIndex !== undefined) {
                                const service = category.services[parseInt(serviceIndex)];
                                if (service) {
                                  return (
                                    <div key={serviceId} className="flex items-center justify-between p-3 bg-zion-blue-dark/30 rounded-lg">
                                      <div>
                                        <div className="font-medium text-white">{service.name}</div>
                                        <div className="text-sm text-zion-slate-light">{service.duration}</div>
                                      </div>
                                      <div className="text-right">
                                        <div className="font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                                      </div>
                                    </div>
                                  );
                                }
                              }
                              return null;
                            })}
                          </div>
                          
                          <div className="border-t border-zion-purple/30 pt-4">
                            <div className="flex items-center justify-between text-lg font-bold text-white">
                              <span>Total Estimated Cost:</span>
                              <span className="text-zion-cyan">${estimatedCost.toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-zion-slate-light mt-1">
                              * Final pricing may vary based on project scope and requirements
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="border-zion-blue-light bg-zion-blue-dark/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Need Help?</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Our team is here to assist you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-zion-cyan" />
                        <div>
                          <div className="font-medium text-white">Call Us</div>
                          <div className="text-sm text-zion-cyan">+1 (302) 464-0950</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-zion-cyan" />
                        <div>
                          <div className="font-medium text-white">Email Us</div>
                          <div className="text-sm text-zion-cyan">kleber@ziontechgroup.com</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-zion-cyan" />
                        <div>
                          <div className="font-medium text-white">Visit Us</div>
                          <div className="text-sm text-zion-slate-light">364 E Main St STE 1008, Middletown, DE 19709</div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                      asChild
                    >
                      <Link to="/contact">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Support
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-zion-blue-light bg-zion-blue-dark/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Why Choose Zion Tech Group?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light">10+ years of experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light">500+ successful projects</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light">24/7 support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light">Competitive pricing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-zion-cyan" />
                        <span className="text-sm text-zion-slate-light">Industry expertise</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
