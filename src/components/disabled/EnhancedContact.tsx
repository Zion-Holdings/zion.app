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
import { FuturisticAnimatedBackground } from "@/components/ui/FuturisticAnimatedBackground";
import { FuturisticNeonButton, CyberpunkButton } from "@/components/ui/FuturisticNeonButton";
import { motion } from "framer-motion";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Globe,
  Clock,
  Star,
  Users,
  Shield,
  Zap,
  CheckCircle
} from "lucide-react";

export default function EnhancedContact() {
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
        title: "Message Sent Successfully!",
        description: "We've received your message and will get back to you within 24 hours.",
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

  const contactInfo = {
    address: "364 E Main St STE 1008, Middletown DE 19709",
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    responseTime: "24 hours"
  };

  const services = [
    {
      name: "AI & Machine Learning",
      description: "Custom AI solutions and ML model development",
      icon: Zap,
      color: "text-cyan-400"
    },
    {
      name: "Cloud & Infrastructure",
      description: "Cloud migration and infrastructure optimization",
      icon: Globe,
      color: "text-purple-400"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "text-green-400"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business transformation consulting",
      icon: Users,
      color: "text-yellow-400"
    }
  ];

  return (
    <>
      <SEO
        title="Contact Zion Tech Group - Get in Touch"
        description="Contact Zion Tech Group for AI, cloud, cybersecurity, and digital transformation services. Get expert consultation and quotes for your business needs."
        keywords="contact Zion Tech Group, AI services, cloud migration, cybersecurity, digital transformation, business consultation"
        canonical="https://ziontechgroup.com/contact"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20 relative">
        {/* Futuristic Background */}
        <FuturisticAnimatedBackground variant="cyberpunk" intensity="low" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientHeading>Contact Zion Tech Group</GradientHeading>
            <p className="mt-6 text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Our expert team is here to help you navigate the future of AI, cloud, and digital innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Tell us about your project and we'll provide you with a customized solution 
                that drives real business value and competitive advantage.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">Your Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark/80 border-zion-blue-light text-white backdrop-blur-sm ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'focus:border-cyan-400 focus:ring-cyan-400'}`}
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-zion-blue-dark/80 border-zion-blue-light text-white backdrop-blur-sm ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'focus:border-cyan-400 focus:ring-cyan-400'}`}
                      placeholder="john@company.com"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2 font-medium">Subject *</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-zion-blue-dark/80 border-zion-blue-light text-white backdrop-blur-sm ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : 'focus:border-cyan-400 focus:ring-cyan-400'}`}
                    placeholder="How can we help you?"
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-zion-blue-dark/80 border-zion-blue-light text-white min-h-[150px] backdrop-blur-sm ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : 'focus:border-cyan-400 focus:ring-cyan-400'}`}
                    placeholder="Describe your project, challenges, and goals..."
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <CyberpunkButton 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </CyberpunkButton>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              
              {/* Main Office */}
              <Card className="bg-zion-blue-dark/80 border border-zion-blue-light p-6 mb-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-cyan-400" />
                  Zion Tech Group Headquarters
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-zion-slate-light font-medium">Address:</span>
                      <p className="text-zion-slate-light">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zion-slate-light font-medium">Phone:</span>
                      <p className="text-zion-slate-light">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zion-slate-light font-medium">Email:</span>
                      <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:underline">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zion-slate-light font-medium">Website:</span>
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-zion-slate-light font-medium">Business Hours:</span>
                      <p className="text-zion-slate-light">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Services Overview */}
              <Card className="bg-zion-blue-dark/80 border border-zion-blue-light p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Our Core Services</h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-zion-blue-light/10 rounded-lg">
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                      <div>
                        <h4 className="text-white font-medium">{service.name}</h4>
                        <p className="text-zion-slate-light text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
          
          {/* Why Choose Zion Section */}
          <motion.div
            className="bg-gradient-to-r from-zion-blue-dark/80 to-zion-blue-light/80 border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver 
              exceptional results that drive growth and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Star,
                  title: "Proven Expertise",
                  description: "15+ years of experience in AI, cloud, and digital transformation"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade security with SOC 2 compliance and regular audits"
                },
                {
                  icon: Zap,
                  title: "Innovation First",
                  description: "Always at the forefront of emerging technologies and trends"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CyberpunkButton
                size="lg"
                onClick={() => setIsChatOpen(true)}
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Chat With AI Assistant
              </CyberpunkButton>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                onClick={() => window.open('/request-quote', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </div>
          </motion.div>

          {/* Response Time Guarantee */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">
                Guaranteed Response Time: {contactInfo.responseTime}
              </span>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Chat Assistant Modal */}
      {isChatOpen && (
        <ChatAssistant
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipient={{
            id: 'zion-support',
            name: 'Zion AI Assistant',
            avatarUrl: 'https://placehold.co/64x64/00ffff/000000?text=AI',
            role: 'Support Bot'
          }}
          onSendMessage={async (message: string) => {
            // Simulate AI response
            return Promise.resolve();
          }}
        />
      )}
    </>
  );
}