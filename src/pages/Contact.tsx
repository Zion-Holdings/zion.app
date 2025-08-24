import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Building, Globe, Shield, Brain } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-zion-cyan" />,
      title: "Phone",
      details: "+1 302 464 0950",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-zion-purple" />,
      title: "Email",
      details: "kleber@ziontechgroup.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-zion-blue" />,
      title: "Address",
      details: "364 E Main St STE 1008, Middletown DE 19709",
      description: "Visit our headquarters for in-person meetings"
    },
    {
      icon: <Clock className="h-6 w-6 text-zion-green" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      description: "We're available during standard business hours"
    }
  ];

  const serviceCategories = [
    {
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      title: "AI & Machine Learning",
      description: "AI content generation, code assistance, and analytics solutions",
      contact: "ai@ziontechgroup.com"
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      title: "Cybersecurity",
      description: "Threat detection, zero-trust security, and penetration testing",
      contact: "security@ziontechgroup.com"
    },
    {
      icon: <Globe className="h-8 w-8 text-zion-blue" />,
      title: "Cloud & Infrastructure",
      description: "Multi-cloud management, DevOps automation, and edge computing",
      contact: "cloud@ziontechgroup.com"
    },
    {
      icon: <Building className="h-8 w-8 text-zion-green" />,
      title: "Business Solutions",
      description: "CRM systems, process automation, and market research",
      contact: "business@ziontechgroup.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple-dark">
      <SEO 
        title="Contact Zion Tech Group - Get in Touch" 
        description="Contact Zion Tech Group for AI solutions, cybersecurity services, cloud infrastructure, and business automation. Get expert support and consultation."
        keywords="contact, Zion Tech Group, AI services, cybersecurity, cloud solutions, business automation"
        canonical="https://ziontechgroup.com/contact"
      />

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Ready to transform your business with AI-powered solutions? Our team of experts is here to help you 
            navigate the future of technology and drive innovation in your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white shadow-lg shadow-zion-purple/25"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +1 302 464 0950
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            >
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/20 rounded-full w-fit">
                    {method.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-cyan font-semibold mb-2">{method.details}</p>
                  <p className="text-zion-slate-light text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories Contact */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Specialized Support for Every Service
            </h2>
            <p className="text-lg text-zion-cyan/80 max-w-3xl mx-auto">
              Our expert teams are ready to assist you with specific technical requirements and business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-zion-cyan/80">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Contact:</span>
                    <a 
                      href={`mailto:${category.contact}`}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 font-medium"
                    >
                      {category.contact}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-purple/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white mb-2">Send Us a Message</CardTitle>
              <CardDescription className="text-lg text-zion-cyan/80">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-zion-cyan">First Name *</Label>
                    <Input 
                      id="firstName" 
                      required 
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-zion-cyan">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      required 
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zion-cyan">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zion-cyan">Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-zion-cyan">Company</Label>
                  <Input 
                    id="company" 
                    className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-zion-cyan">Service Interest</Label>
                  <select 
                    id="service" 
                    className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-blue-light/30 text-white rounded-md focus:border-zion-purple focus:outline-none"
                  >
                    <option value="">Select a service category</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-infrastructure">Cloud & Infrastructure</option>
                    <option value="business-solutions">Business Solutions</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zion-cyan">Message *</Label>
                  <Textarea 
                    id="message" 
                    required 
                    rows={5}
                    className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light focus:border-zion-purple resize-none"
                    placeholder="Tell us about your project, requirements, or questions..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white shadow-lg shadow-zion-purple/25 px-8"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 backdrop-blur-sm border-zion-purple/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-white mb-4">
                Ready to Start Your AI Transformation Journey?
              </CardTitle>
              <CardDescription className="text-lg text-zion-cyan/80">
                Join thousands of businesses already leveraging Zion's AI-powered solutions to accelerate growth 
                and stay ahead of the competition.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-cyan/70">Expert Support</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">99.9%</div>
                  <div className="text-zion-cyan/70">Uptime SLA</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">14 Days</div>
                  <div className="text-zion-cyan/70">Free Trial</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white border-0 shadow-lg shadow-zion-purple/25"
              >
                <a href="tel:+13024640950">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: +1 302 464 0950
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
