import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  Clock, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Building,
  Users,
  Calendar,
  FileText,
  DollarSign,
  Target
} from 'lucide-react';

const RequestQuote = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectType, setProjectType] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');

  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      services: [
        'AI Content Generation',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots'
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      services: [
        'Cloud Migration',
        'DevOps Implementation',
        'Database Optimization',
        'Cybersecurity Solutions',
        'Network Infrastructure',
        'System Integration'
      ]
    },
    {
      id: 'business-solutions',
      title: 'Business Solutions',
      services: [
        'Custom Software Development',
        'Web Application Development',
        'Mobile App Development',
        'E-commerce Solutions',
        'Business Process Automation',
        'Data Analytics & BI'
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Services',
      services: [
        'Micro SAAS Development',
        'API Development',
        'Third-party Integrations',
        'Performance Optimization',
        'Scalability Solutions',
        'Technical Consulting'
      ]
    }
  ];

  const projectTypes = [
    'New Development',
    'Enhancement/Upgrade',
    'Migration/Integration',
    'Consulting/Strategy',
    'Support/Maintenance',
    'Training/Implementation'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    'Over $250,000'
  ];

  const timelines = [
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6-12 months',
    'Over 12 months',
    'Ongoing/Subscription'
  ];

  const benefits = [
    {
      icon: <Calculator className="h-8 w-8 text-zion-cyan" />,
      title: "Transparent Pricing",
      description: "Get detailed quotes with no hidden costs or surprises"
    },
    {
      icon: <Clock className="h-8 w-8 text-zion-cyan" />,
      title: "Quick Response",
      description: "Receive your custom quote within 24-48 hours"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,
      title: "Expert Consultation",
      description: "Free consultation with our technical experts"
    },
    {
      icon: <Target className="h-8 w-8 text-zion-cyan" />,
      title: "Custom Solutions",
      description: "Tailored solutions that fit your specific needs and budget"
    }
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Quote</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Get a customized quote for your AI, IT, or business solution needs. 
            Our experts will analyze your requirements and provide transparent pricing.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Project Details</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Tell us about your project and requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Project Type */}
                <div>
                  <label className="block text-white font-medium mb-3">Project Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded-md border transition-all duration-200 text-left ${
                          projectType === type
                            ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                            : 'border-zion-cyan/20 bg-white/5 text-zion-slate-light hover:border-zion-cyan/40'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-white font-medium mb-3">Select Services</label>
                  <div className="space-y-4">
                    {serviceCategories.map((category) => (
                      <div key={category.id} className="border border-zion-cyan/20 rounded-lg p-4 bg-white/5">
                        <h4 className="text-white font-medium mb-3">{category.title}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {category.services.map((service) => (
                            <label key={service} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedServices.includes(service)}
                                onChange={() => handleServiceToggle(service)}
                                className="rounded border-zion-cyan/20 bg-white/10 text-zion-cyan focus:ring-zion-cyan"
                              />
                              <span className="text-zion-slate-light text-sm">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget and Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-3">Budget Range</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-md text-white focus:border-zion-cyan focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-3">Project Timeline</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-md text-white focus:border-zion-cyan focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-white font-medium mb-3">Project Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, goals, and specific requirements..."
                    className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none resize-none"
                  />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-3">Company Name</label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-3">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-3">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-3">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                    />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-3">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Get in Touch</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Prefer to talk directly? Contact our team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-zion-slate-light">+1 302 464 0950</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-zion-slate-light text-sm">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-zion-cyan/20">
                  <h4 className="text-white font-medium mb-3">What to Expect</h4>
                  <div className="space-y-2 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>Response within 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>Detailed project scope</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>Transparent pricing breakdown</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      <span>Free consultation call</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;