import React, { useState } from 'react';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';
import { Chat } from 'react-chat-elements';
import { MapPin, Phone, Mail } from 'lucide-react';
import SEO from '@/components/SEO';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    },
    {
      name: "Support Office",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950", 
      email: "support@ziontechgroup.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with our team for AI solutions, IT services, and digital transformation support. We're here to help transform your business."
        keywords="contact, support, AI solutions, IT services, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/contact"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zion-slate-900 mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI solutions and IT services? 
            Our team of experts is here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-zion-slate-100">
            <h2 className="text-3xl font-bold text-zion-slate-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-200 rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zion-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-zion-slate-200 rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-zion-slate-200 rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent transition-all duration-200"
                  placeholder="What can we help you with?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-zion-slate-200 rounded-lg focus:ring-2 focus:ring-zion-purple focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-zion-purple-dark hover:to-zion-purple transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending Message...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information & AI Chat */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-zion-slate-100">
              <h3 className="text-2xl font-bold text-zion-slate-900 mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-l-4 border-zion-purple pl-4">
                    <h4 className="font-semibold text-zion-slate-900 mb-2">{office.name}</h4>
                    <div className="space-y-2 text-zion-slate-600">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-zion-purple" />
                        {office.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-zion-purple" />
                        <a href={`tel:${office.phone}`} className="hover:text-zion-purple transition-colors">
                          {office.phone}
                        </a>
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-zion-purple" />
                        <a href={`mailto:${office.email}`} className="hover:text-zion-purple transition-colors">
                          {office.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Chat Assistant */}
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">AI Chat Assistant</h3>
              <p className="text-zion-slate-100 mb-6">
                Get instant answers to your questions about our services, pricing, and capabilities.
              </p>
              <Chat
                endpoint="https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat"
                placeholder="Ask me anything about Zion Tech Group..."
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-zion-slate-900 mb-8">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-zion-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-900 mb-2">Call Us</h3>
              <p className="text-zion-slate-600 mb-4">Speak directly with our experts</p>
              <a 
                href="tel:+13024640950" 
                className="text-zion-purple hover:text-zion-purple-dark font-semibold transition-colors"
              >
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-zion-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-900 mb-2">Email Us</h3>
              <p className="text-zion-slate-600 mb-4">Send us a detailed message</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-zion-purple hover:text-zion-purple-dark font-semibold transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-zion-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-slate-900 mb-2">Visit Us</h3>
              <p className="text-zion-slate-600 mb-4">Schedule an in-person meeting</p>
              <p className="text-zion-slate-600 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
