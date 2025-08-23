"use client";

import { useState } from "react";

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
  description: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: "📱",
    title: "Phone",
    value: "+1 302 464 0950",
    link: "tel:+13024640950",
    description: "Call us directly for immediate assistance"
  },
  {
    icon: "✉️",
    title: "Email",
    value: "kleber@ziontechgroup.com",
    link: "mailto:kleber@ziontechgroup.com",
    description: "Send us an email for detailed inquiries"
  },
  {
    icon: "📍",
    title: "Address",
    value: "364 E Main St STE 1008\nMiddletown DE 19709",
    link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
    description: "Visit our office for in-person meetings"
  },
  {
    icon: "🌐",
    title: "Website",
    value: "ziontechgroup.com",
    link: "https://ziontechgroup.com",
    description: "Explore our full website and services"
  }
];

const serviceCategories = [
  "AI Solutions & Services",
  "IT Infrastructure & Consulting",
  "Micro SAAS Platforms",
  "Digital Economy Solutions",
  "Blockchain & Web3",
  "Cloud Migration & DevOps",
  "Cybersecurity & Compliance",
  "Custom Development",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceCategory: "",
    message: "",
    budget: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would send this data to your backend
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Service Category: ${formData.serviceCategory}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=Service%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setSubmitMessage("Thank you! Your inquiry has been sent. We'll get back to you within 24 hours.");
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceCategory: "",
      message: "",
      budget: "",
      timeline: ""
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Ready to transform your business with cutting-edge technology solutions? 
          Get in touch with our team of experts for personalized consultation and support.
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            target={method.link.startsWith('http') ? '_blank' : '_self'}
            rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
            className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{method.icon}</div>
            <h3 className="font-semibold mb-2">{method.title}</h3>
            <div className="text-sm opacity-80 mb-2 whitespace-pre-line">{method.value}</div>
            <p className="text-xs opacity-60">{method.description}</p>
          </a>
        ))}
      </div>

      {/* Contact Form and Company Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <p className="opacity-80">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service Category *</label>
              <select
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select a service category</option>
                {serviceCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $25,000">$5,000 - $25,000</option>
                  <option value="$25,000 - $100,000">$25,000 - $100,000</option>
                  <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                  <option value="Over $500,000">Over $500,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                  <option value="Short-term (1-3 months)">Short-term (1-3 months)</option>
                  <option value="Medium-term (3-6 months)">Medium-term (3-6 months)</option>
                  <option value="Long-term (6+ months)">Long-term (6+ months)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                placeholder="Tell us about your project, requirements, and how we can help..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <div className="p-4 rounded-lg bg-green-600/20 border border-green-500/50 text-green-400">
                {submitMessage}
              </div>
            )}
          </form>
        </div>

        {/* Company Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Zion Tech Group</h2>
            <p className="opacity-80 mb-4">
              We are a leading technology company specializing in innovative solutions that drive digital transformation 
              and business growth. Our expertise spans AI, IT infrastructure, micro SAAS platforms, and digital economy solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Why Choose Us?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-medium">Expert Team</div>
                  <div className="text-sm opacity-80">Experienced professionals with deep industry knowledge</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-medium">Innovation Focus</div>
                  <div className="text-sm opacity-80">Cutting-edge solutions using latest technologies</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-medium">Quality Assurance</div>
                  <div className="text-sm opacity-80">Rigorous testing and quality control processes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <div className="font-medium">24/7 Support</div>
                  <div className="text-sm opacity-80">Round-the-clock technical support and maintenance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-sm font-medium">AI & Machine Learning</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-2xl mb-2">☁️</div>
                <div className="text-sm font-medium">Cloud & DevOps</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-sm font-medium">Cybersecurity</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm font-medium">Digital Platforms</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10">
            <h3 className="font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-sm opacity-80 mb-3">
              Schedule a free consultation to discuss your project requirements and explore how we can help.
            </p>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Free%20Consultation%20Request"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-sm"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Office Hours and Response Times */}
      <div className="text-center space-y-6 py-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-white/10">
        <h2 className="text-2xl font-bold">Office Hours & Response Times</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-sm opacity-80">
              Monday - Friday: 9:00 AM - 6:00 PM EST<br />
              Saturday: 10:00 AM - 2:00 PM EST<br />
              Sunday: Closed
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Response Times</h3>
            <p className="text-sm opacity-80">
              Email: Within 24 hours<br />
              Phone: Immediate during hours<br />
              Emergency: 24/7 support available
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Consultation</h3>
            <p className="text-sm opacity-80">
              Free initial consultation<br />
              Project assessment: 1-2 business days<br />
              Detailed proposal: 3-5 business days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}