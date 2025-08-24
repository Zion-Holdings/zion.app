import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Shield, 
  Users, 
  Award,
  Send,
  MessageSquare,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const quickActions = [
    { title: "Schedule Demo", icon: Calendar, href: "/contact", variant: "default" },
    { title: "Get Quote", icon: MessageSquare, href: "/request-quote", variant: "outline" },
    { title: "Start Project", icon: ArrowRight, href: "/contact", variant: "outline" }
  ];

  const features = [
    { title: "24/7 Emergency Support", description: "Available for critical issues", icon: Shield },
    { title: "Enterprise Security", description: "SOC 2 Type II Compliant", icon: Award },
    { title: "Global Network", description: "150+ Countries served", icon: Users },
    { title: "99.9% Uptime", description: "Guaranteed reliability", icon: Star }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
            <MessageSquare className="w-5 h-5 text-zion-cyan" />
            <span className="text-white font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
            Get in touch with our experts for a personalized consultation and discover 
            how our technology solutions can drive your success and accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Send us a Message</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Tell us about your project and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-zion-cyan"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-zion-cyan"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-zion-cyan"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                    >
                      <option value="">Select a service</option>
                      <option value="ai">AI Solutions</option>
                      <option value="saas">SAAS Platforms</option>
                      <option value="it">IT Services</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-zion-cyan resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Zion Tech Group</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  We are a leading technology company specializing in AI, SAAS, and IT solutions. 
                  Our mission is to transform businesses through innovative technology that drives 
                  growth, efficiency, and competitive advantage.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-mono">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-zion-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-mono">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-blue/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-zion-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white font-mono text-sm">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zion-green/20 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-zion-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Website</p>
                    <a href={contactInfo.website} className="text-zion-cyan hover:underline">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Clock className="w-6 h-6 text-zion-cyan" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-zion-slate-light">{schedule.day}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg">
                  <p className="text-sm text-zion-cyan flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <strong>24/7 Emergency Support</strong> available for critical issues
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Link key={index} href={action.href}>
                      <Button 
                        variant={action.variant as any} 
                        size="sm" 
                        className="w-full justify-center"
                      >
                        <action.icon className="w-4 h-4 mr-2" />
                        {action.title}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-zion-purple" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{feature.title}</p>
                        <p className="text-sm text-zion-slate-light">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-zion-slate-light text-lg mb-8">
                Our team of experts is ready to help you achieve your technology goals. 
                From initial consultation to final deployment, we're with you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-dark hover:to-zion-cyan-dark text-white">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Start Conversation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Explore Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}