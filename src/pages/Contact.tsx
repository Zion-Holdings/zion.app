import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for any questions, support, or collaboration opportunities
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-zion-cyan text-3xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Email Us</h3>
              <p className="text-zion-slate-light text-sm mb-3">
                Send us a detailed message
              </p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-dark font-medium">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-zion-cyan text-3xl mb-3">📞</div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Call Us</h3>
              <p className="text-zion-slate-light text-sm mb-3">
                Speak with our team directly
              </p>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-dark font-medium">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-zion-cyan text-3xl mb-3">💬</div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Live Chat</h3>
              <p className="text-zion-slate-light text-sm mb-3">
                Get instant support
              </p>
              <button className="text-zion-cyan hover:text-zion-cyan-dark font-medium">
                Start Chat
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-zion-blue mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-zion-slate mb-2 font-medium">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-zion-slate focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-zion-slate mb-2 font-medium">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-zion-slate focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-zion-slate mb-2 font-medium">Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-zion-slate focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all"
                    placeholder="What can we help you with?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-zion-slate mb-2 font-medium">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-zion-slate h-32 focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all resize-none"
                    placeholder="Please describe your inquiry or project requirements..."
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-blue to-zion-purple hover:from-zion-blue-dark hover:to-zion-purple-dark disabled:opacity-50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-zion-blue mb-6">Our Offices</h2>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-zion-cyan pl-4">
                      <h3 className="text-lg font-semibold text-zion-blue mb-3">{office.name}</h3>
                      <div className="space-y-2 text-zion-slate-light">
                        <p className="flex items-start">
                          <span className="mr-3 text-zion-cyan">📍</span>
                          <span className="text-sm">{office.address}</span>
                        </p>
                        <p className="flex items-center">
                          <span className="mr-3 text-zion-cyan">📞</span>
                          <a href={`tel:${office.phone}`} className="text-sm hover:text-zion-cyan transition-colors">
                            {office.phone}
                          </a>
                        </p>
                        <p className="flex items-center">
                          <span className="mr-3 text-zion-cyan">✉️</span>
                          <a href={`mailto:${office.email}`} className="text-sm hover:text-zion-cyan transition-colors">
                            {office.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-zion-blue mb-4">Business Hours</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">24/7 Emergency Support</span> available for enterprise clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
