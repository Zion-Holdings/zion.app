<<<<<<< HEAD
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const schema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email address"),
      subject: z.string().min(2, "Subject must be at least 2 characters"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    });

    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      }
      setErrors(fieldErrors);
      toast({
        title: "Form Validation Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setErrors({});

    // Simulate form submission
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant");
      }
      
      return Promise.resolve();
    } catch (error) {
      console.error("Error in AI chat:", error);
      toast({
        title: "Chat Error",
        description: "There was an error communicating with our AI assistant. Please try again.",
        variant: "destructive"
      });
      return Promise.resolve();
    }
  };

  const offices = [
    {
      name: "Headquarters",
      address: "123 Tech Avenue, San Francisco, CA 94105",
      phone: "+1 302 464 0950",
      email: "commercial@ziontechgroup.com"
    },
    {
      name: "East Coast Office",
      address: "456 Innovation Street, New York, NY 10001",
      phone: "+1 302 464 0950", 
      email: "commercial@ziontechgroup.com"
    }
  ];

  return (
    <>
      <SEO
        title="Contact Zion - Get in Touch"
        description="Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform."
        keywords="contact Zion, AI marketplace support, tech platform contact"
        canonical="https://ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Whether you have a question about our platform, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 302 464 0950',
      description: 'Available 24/7 for urgent inquiries',
      action: 'tel:+13024640950',
      color: 'from-zion-cyan to-zion-cyan-dark'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Get a response within 2 hours',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-zion-purple to-zion-purple-dark'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit us for in-person consultations',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      description: 'Extended hours available by appointment',
      action: null,
      color: 'from-zion-purple to-zion-cyan'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'DevOps & Automation',
    'Blockchain',
    'IoT Solutions',
    'Digital Marketing',
    'IT Consulting',
    'Software Testing',
    'Other'
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6+ months)',
    'Flexible'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss how our solutions 
            can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              24/7 Support
            </span>
            <span className="px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan">
              Free Consultation
            </span>
            <span className="px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan">
              Global Reach
            </span>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-zion-cyan font-medium mb-2">{method.value}</p>
                  <p className="text-zion-slate-light text-sm mb-4">{method.description}</p>
                  {method.action && (
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      {method.action.startsWith('tel:') ? 'Call Now' : 
                       method.action.startsWith('mailto:') ? 'Send Email' : 'Get Directions'}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-zion-cyan" />
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again or contact us directly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                    >
                      <option value="">Select budget range</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
                  </div>
                </div>

                <div>
<<<<<<< HEAD
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="How can we help you?"
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="Tell us what you'd like to know..."
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
              <div className="grid grid-cols-1 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{office.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                        <span className="text-zion-slate-light">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <span className="text-zion-slate-light">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-zion-cyan hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zion Office Locations"
                ></iframe>
              </div>
              
              <div className="mt-8">
                <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6">
                  <div className="flex items-center">
                    <div className="bg-zion-purple/20 p-3 rounded-full mr-4">
                      <MessageSquare className="h-6 w-6 text-zion-purple" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold">Live AI Support</h3>
                      <p className="text-zion-slate-light">Get instant answers to your questions</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                  >
                    Chat With Our AI Assistant
                  </Button>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need immediate assistance?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Our customer support team is available 24/7 to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat With AI
              </Button>
              <Button 
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                asChild
              >
                <a href="mailto:support@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Assistant Modal */}
      {isChatOpen && (
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{
            id: 'ai-assistant',
            name: 'AI Assistant',
            avatarUrl: 'https://placehold.co/64x64?text=AI',
            role: 'Support Bot'
          }}
          onSendMessage={handleSendMessage}
        />
      )}
    </>
  );
}
=======
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(timeline => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              {/* Office Location */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  Our Office
                </h3>
                <div className="space-y-3 text-zion-slate-light">
                  <p className="text-lg font-medium text-white">Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p>
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                </div>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors mt-4"
                >
                  <Globe className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-zion-cyan" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">By Appointment</span>
                  </div>
                  <div className="pt-3 border-t border-zion-purple/20">
                    <p className="text-zion-cyan text-sm">
                      Emergency support available 24/7 for critical issues
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="space-y-3 text-zion-slate-light">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>10+ years of industry experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>500+ successful projects delivered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Global team of experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>24/7 support and maintenance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                    <span>Competitive pricing and flexible terms</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a customized solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-8cc4
