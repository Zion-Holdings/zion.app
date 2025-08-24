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
import { comprehensiveServices, serviceCategories } from '@/data/comprehensiveServices';

export default function ComprehensiveContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <MessageSquare className="h-16 w-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Ready to transform your business? Let's discuss how our innovative solutions can drive your success.
          </p>
        </div>
      </div>

      {/* Contact Form and Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Send us a Message</CardTitle>
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
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
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
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
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
                        onChange={handleInputChange}
                        className="bg-white/20 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/20 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-white">Service of Interest</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                      className="w-full p-3 bg-white/20 border border-zion-cyan/30 rounded-md text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">AI Services & Automation</option>
                      <option value="cybersecurity">Cybersecurity & Compliance</option>
                      <option value="cloud-services">Cloud Infrastructure</option>
                      <option value="data-analytics">Data Analytics & BI</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="it-consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/20 border-zion-cyan/30 text-white placeholder:text-zion-cyan-light"
                      placeholder="Tell us about your project or how we can help..."
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

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zion-cyan/20 rounded-full">
                        <Phone className="h-6 w-6 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-zion-cyan-light">+1 302 464 0950</p>
                        <p className="text-zion-cyan-light text-sm">Available Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zion-cyan/20 rounded-full">
                        <Mail className="h-6 w-6 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
                        <p className="text-zion-cyan-light text-sm">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zion-cyan/20 rounded-full">
                        <MapPin className="h-6 w-6 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Office</h3>
                        <p className="text-zion-cyan-light">364 E Main St STE 1008</p>
                        <p className="text-zion-cyan-light">Middletown DE 19709</p>
                        <p className="text-zion-cyan-light text-sm">United States</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-zion-cyan/20 rounded-full">
                        <Globe className="h-6 w-6 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Website</h3>
                        <a 
                          href="https://ziontechgroup.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                        >
                          ziontechgroup.com
                        </a>
                        <p className="text-zion-cyan-light text-sm">Visit our website for more information</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

      {/* Service Categories Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Service Categories</h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Explore our comprehensive range of IT services and solutions designed to meet your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <Card key={category.name} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                <CardDescription className="text-zion-cyan-light">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan-light">Services Count:</span>
                    <span className="text-white font-semibold">{category.count}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan-light">Category ID:</span>
                    <span className="text-white font-semibold">{category.id}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan-light">Icon:</span>
                    <span className="text-white font-semibold text-2xl">{category.icon}</span>
                  </div>
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-full">
                  <Award className="h-8 w-8 text-zion-cyan" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
              <p className="text-zion-cyan-light">
                Years of experience delivering successful technology solutions across industries
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-full">
                  <TrendingUp className="h-8 w-8 text-zion-cyan" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-zion-cyan-light">
                Cutting-edge technologies and innovative approaches to solve complex challenges
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-full">
                  <Users className="h-8 w-8 text-zion-cyan" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
              <p className="text-zion-cyan-light">
                Personalized attention and ongoing support throughout your project journey
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-full">
                  <Star className="h-8 w-8 text-zion-cyan" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
              <p className="text-zion-cyan-light">
                Rigorous testing and quality control to ensure exceptional results
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
            Don't wait to transform your business. Contact us today and let's discuss your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
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