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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">Contact Us</h1>
        <p className="text-lg text-zion-slate-light mb-8">
          Get in touch with our team for any questions or support.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-zion-blue mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate focus:border-zion-cyan focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate focus:border-zion-cyan focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate focus:border-zion-cyan focus:outline-none"
                  placeholder="What can we help you with?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-zion-slate mb-2 font-medium">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate h-32 focus:border-zion-cyan focus:outline-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-zion-blue hover:bg-zion-blue-dark disabled:opacity-50 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-zion-blue mb-6">Get in touch</h2>
            
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-zion-blue-light p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-3">{office.name}</h3>
                  <div className="space-y-2 text-zion-slate-light">
                    <p className="flex items-start">
                      <span className="mr-2">📍</span>
                      {office.address}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📞</span>
                      {office.phone}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">✉️</span>
                      {office.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-zion-blue-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Business Hours</h3>
              <p className="text-zion-slate-light">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                24/7 emergency support available for enterprise clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
