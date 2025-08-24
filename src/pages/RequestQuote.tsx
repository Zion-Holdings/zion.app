import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Users, CheckCircle, Send, Phone, Mail, MapPin } from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    additionalRequirements: ''
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      services: ['AI Development', 'Machine Learning Models', 'Data Analytics', 'Chatbot Development', 'Computer Vision']
    },
    {
      name: 'Cybersecurity',
      services: ['Security Audits', 'Penetration Testing', 'Security Infrastructure', 'Compliance Consulting', 'Incident Response']
    },
    {
      name: 'IT Services',
      services: ['Network Setup', 'Cloud Migration', 'System Administration', 'IT Consulting', 'Hardware Installation']
    },
    {
      name: 'Green IT',
      services: ['Energy Audits', 'Sustainable Infrastructure', 'Green Computing', 'Carbon Footprint Analysis', 'Eco-friendly Solutions']
    }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Within 1 week)', icon: <Clock className="h-4 w-4" /> },
    { value: '1-2-weeks', label: '1-2 weeks', icon: <Clock className="h-4 w-4" /> },
    { value: '1-month', label: '1 month', icon: <Clock className="h-4 w-4" /> },
    { value: '2-3-months', label: '2-3 months', icon: <Clock className="h-4 w-4" /> },
    { value: '3+months', label: '3+ months', icon: <Clock className="h-4 w-4" /> }
  ];

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000', icon: <DollarSign className="h-4 w-4" /> },
    { value: '5k-15k', label: '$5,000 - $15,000', icon: <DollarSign className="h-4 w-4" /> },
    { value: '15k-50k', label: '$15,000 - $50,000', icon: <DollarSign className="h-4 w-4" /> },
    { value: '50k-100k', label: '$50,000 - $100,000', icon: <DollarSign className="h-4 w-4" /> },
    { value: '100k+', label: '$100,000+', icon: <DollarSign className="h-4 w-4" /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, selectedServices });
    // You would typically send this to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request a Quote
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get personalized quotes from our network of AI and tech professionals. Tell us about your project and we'll connect you with the right experts.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
              <Users className="h-8 w-8 text-zion-cyan" />
              <h3 className="text-white font-semibold text-lg">Expert Network</h3>
              <p className="text-zion-slate-light text-sm text-center">Access to verified professionals across all tech domains</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
              <Clock className="h-8 w-8 text-zion-cyan" />
              <h3 className="text-white font-semibold text-lg">Quick Response</h3>
              <p className="text-zion-slate-light text-sm text-center">Get quotes within 24 hours from qualified providers</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
              <CheckCircle className="h-8 w-8 text-zion-cyan" />
              <h3 className="text-white font-semibold text-lg">Quality Assured</h3>
              <p className="text-zion-slate-light text-sm text-center">All providers are vetted and rated by our community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-zion-blue-light">
              <CardHeader>
                <CardTitle className="text-white text-3xl">Project Details</CardTitle>
                <CardDescription className="text-zion-slate-light text-lg">
                  Fill out the form below and we'll get back to you with personalized quotes from our network of experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-zion-blue-light text-white placeholder-zion-slate-light"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Services Needed</h3>
                    <div className="space-y-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index}>
                          <h4 className="text-zion-cyan font-medium mb-3">{category.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {category.services.map((service, serviceIndex) => (
                              <Badge
                                key={serviceIndex}
                                variant={selectedServices.includes(service) ? "default" : "outline"}
                                className={`cursor-pointer transition-all ${
                                  selectedServices.includes(service)
                                    ? "bg-zion-cyan text-white border-zion-cyan"
                                    : "bg-transparent text-zion-slate-light border-zion-blue-light hover:border-zion-cyan hover:text-zion-cyan"
                                }`}
                                onClick={() => handleServiceToggle(service)}
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <textarea
                        name="projectDescription"
                        placeholder="Describe your project in detail... *"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-3 bg-white/10 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-4">Timeline</h3>
                      <div className="space-y-2">
                        {timelineOptions.map((option) => (
                          <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="timeline"
                              value={option.value}
                              checked={formData.timeline === option.value}
                              onChange={handleInputChange}
                              className="text-zion-cyan focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-light">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg mb-4">Budget Range</h3>
                      <div className="space-y-2">
                        {budgetOptions.map((option) => (
                          <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="budget"
                              value={option.value}
                              checked={formData.budget === option.value}
                              onChange={handleInputChange}
                              className="text-zion-cyan focus:ring-zion-cyan"
                            />
                            <span className="text-zion-slate-light">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-4">Additional Requirements</h3>
                    <textarea
                      name="additionalRequirements"
                      placeholder="Any specific requirements, preferences, or questions..."
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full p-3 bg-white/10 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Quote Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Need to discuss your project?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team is here to help you find the perfect solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <Phone className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Call Us</h3>
                <p className="text-zion-slate-light">+1 (555) 123-4567</p>
                <p className="text-zion-slate-light text-sm">Mon-Fri 9AM-6PM PST</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <Mail className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Email Us</h3>
                <p className="text-zion-slate-light">quotes@ziontechgroup.com</p>
                <p className="text-zion-slate-light text-sm">Response within 24 hours</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <MapPin className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Visit Us</h3>
                <p className="text-zion-slate-light">San Francisco, CA</p>
                <p className="text-zion-slate-light text-sm">Schedule a meeting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}