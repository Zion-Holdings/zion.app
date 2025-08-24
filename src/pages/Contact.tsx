import React, { useState } from "react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    const newErrors: Record<string, string> = {};
    if (formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email address";
    if (formData.subject.length < 2) newErrors.subject = "Subject must be at least 2 characters";
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Simulate form submission
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gradient mb-8">Contact Methods</h2>
            
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg flex items-center space-x-4">
                <div className="p-3 bg-zion-cyan rounded-full animate-float">
                  <Mail className="w-6 h-6 text-zion-blue-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zion-cyan">Email</h3>
                  <p className="text-muted-foreground">info@ziontechgroup.com</p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg flex items-center space-x-4">
                <div className="p-3 bg-zion-purple rounded-full animate-float" style={{animationDelay: '0.5s'}}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zion-purple">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg flex items-center space-x-4">
                <div className="p-3 bg-zion-blue rounded-full animate-float" style={{animationDelay: '1s'}}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zion-blue">Location</h3>
                  <p className="text-muted-foreground">123 Tech Street, Innovation City, IC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gradient mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-border'
                  } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-zion-cyan`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-border'
                  } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-zion-cyan`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.subject ? 'border-red-500' : 'border-border'
                  } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-zion-cyan`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.message ? 'border-red-500' : 'border-border'
                  } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-zion-cyan resize-none`}
                  placeholder="Tell us more about your project or inquiry..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Info Panel */}
        <div className="mt-16 glass-effect p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gradient mb-4">Why Choose Zion Tech Group?</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering exceptional results through innovative technology solutions, 
            expert consultation, and dedicated support. Our team of professionals is ready to help 
            you navigate the digital landscape and achieve your business objectives.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gradient mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-zion-cyan mb-3">What services do you offer?</h4>
              <p className="text-muted-foreground">
                We provide comprehensive technology solutions including web development, mobile apps, 
                AI integration, cloud services, and IT consulting.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-zion-purple mb-3">How quickly can you start?</h4>
              <p className="text-muted-foreground">
                We can typically begin projects within 1-2 weeks of initial consultation, depending 
                on project scope and current capacity.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-zion-blue mb-3">Do you provide ongoing support?</h4>
              <p className="text-muted-foreground">
                Yes, we offer various support packages including maintenance, updates, and 24/7 
                technical assistance for critical systems.
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-zion-emerald mb-3">What industries do you serve?</h4>
              <p className="text-muted-foreground">
                We work with businesses across all industries including healthcare, finance, 
                education, retail, and manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
