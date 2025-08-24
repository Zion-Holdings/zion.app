import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Users, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Network, 
  Smartphone, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Send,
  Building,
  Award,
  TrendingUp,
  Star,
  MessageSquare,
  Calendar,
  FileText
} from 'lucide-react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/enhancedServices';

export default function ComprehensiveContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Contact Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Ready to Transform Your Business? Let's Discuss Your Technology Needs
          </p>
          <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
            Our team of experts is here to help you navigate the digital transformation journey and implement cutting-edge solutions.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>
                <CardDescription className="text-zion-cyan-light">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-white">Service Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 rounded-md bg-white/10 border border-zion-cyan/30 text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="data-analytics">Data & Analytics</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="emerging-tech">Emerging Technologies</option>
                      <option value="business-intelligence">Business Intelligence</option>
                      <option value="it-onsite">IT Onsite Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white/10 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-zion-cyan mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-zion-cyan-light">+1 302 464 0950</p>
                    <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-zion-cyan mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-zion-cyan-light">24/7 Response</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-zion-cyan mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-zion-cyan-light">364 E Main St STE 1008</p>
                    <p className="text-zion-cyan-light">Middletown DE 19709</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-zion-cyan mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Website</h3>
                    <a 
                      href="https://ziontechgroup.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan-light underline"
                    >
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <FileText className="mr-2 h-4 w-4" />
                  Request a Quote
                </Button>
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Live Chat Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Service Portfolio</h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.id} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-white">{category.name}</CardTitle>
                  <CardDescription className="text-zion-cyan-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.services.slice(0, 3).map((service) => (
                      <div key={service.id} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-zion-cyan-light">{service.title}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    View Services
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Award className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-zion-cyan-light">
                Years of experience delivering successful technology solutions across industries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Shield className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-zion-cyan-light">
                Tailored approaches that address your specific business challenges and goals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <TrendingUp className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-zion-cyan-light">
                Trackable outcomes and ROI that demonstrate the value of our solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Support</h3>
              <p className="text-zion-cyan-light">
                24/7 support and ongoing partnership to ensure your success.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Building className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Ready</h3>
              <p className="text-zion-cyan-light">
                Solutions that scale with your business and meet enterprise standards.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-8">
              <Star className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assured</h3>
              <p className="text-zion-cyan-light">
                Rigorous testing and quality assurance processes for reliable solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can transform your business and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-cyan-light">
                Premier IT services and AI solutions provider helping businesses thrive in the digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>AI & Automation</p>
                <p>Cybersecurity</p>
                <p>Cloud Services</p>
                <p>Data Analytics</p>
                <p>Digital Transformation</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="space-y-2">
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-zion-cyan hover:text-zion-cyan-light"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </a>
                <Button variant="outline" size="sm" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All Services
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center text-zion-cyan-light">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}