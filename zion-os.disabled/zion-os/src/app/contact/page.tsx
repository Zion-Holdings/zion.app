"use client";

import { useState } from "react";

interface ContactMethod {
  title: string;
  description: string;
  icon: string;
  details: string[];
  action: string;
  actionLink: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: "Phone Support",
    description: "Speak directly with our technology experts",
    icon: "📱",
    details: [
      "Main: +1 302 464 0950",
      "Support: +1 302 464 0951",
      "Sales: +1 302 464 0952",
      "Available: Mon-Fri 9AM-6PM EST"
    ],
    action: "Call Now",
    actionLink: "tel:+13024640950"
  },
  {
    title: "Email Communication",
    description: "Send us detailed project requirements and inquiries",
    icon: "✉️",
    details: [
      "General: info@ziontechgroup.com",
      "Sales: kleber@ziontechgroup.com",
      "Support: support@ziontechgroup.com",
      "Response: Within 2 hours"
    ],
    action: "Send Email",
    actionLink: "mailto:kleber@ziontechgroup.com"
  },
  {
    title: "Office Location",
    description: "Visit our headquarters for in-person meetings",
    icon: "📍",
    details: [
      "364 E Main St STE 1008",
      "Middletown, DE 19709",
      "United States",
      "By appointment only"
    ],
    action: "Schedule Visit",
    actionLink: "mailto:kleber@ziontechgroup.com?subject=Office Visit Request"
  },
  {
    title: "Video Conference",
    description: "Virtual meetings with screen sharing capabilities",
    icon: "🎥",
    details: [
      "Zoom, Teams, Google Meet",
      "Screen sharing available",
      "Recording options",
      "Available worldwide"
    ],
    action: "Schedule Meeting",
    actionLink: "mailto:kleber@ziontechgroup.com?subject=Video Conference Request"
  }
];

const serviceCategories = [
  "AI & Machine Learning",
  "Blockchain & Web3",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Data Analytics",
  "DevOps & Automation",
  "Mobile Development",
  "Web Development",
  "Digital Transformation",
  "Custom Solution",
  "Other"
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000+",
  "To be discussed"
];

const timelineOptions = [
  "Immediate (1-2 weeks)",
  "Quick (1-2 months)",
  "Standard (3-6 months)",
  "Extended (6-12 months)",
  "Long-term (1+ years)",
  "To be discussed"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    serviceCategory: "",
    budget: "",
    timeline: "",
    projectDescription: "",
    teamSize: "",
    preferredContact: "email"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error", message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you within 2 hours."
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        serviceCategory: "",
        budget: "",
        timeline: "",
        projectDescription: "",
        teamSize: "",
        preferredContact: "email"
      });
    } catch (error) {
      setSubmitMessage({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or contact us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Ready to transform your business? Get in touch with our team of technology experts. 
          We're here to help you achieve your digital transformation goals.
        </p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center hover:border-zinc-700 transition-colors">
            <span className="text-4xl mb-4 block">{method.icon}</span>
            <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
            <p className="text-sm text-zinc-400 mb-4">{method.description}</p>
            <div className="space-y-2 mb-4">
              {method.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="text-xs text-zinc-500">{detail}</div>
              ))}
            </div>
            <a
              href={method.actionLink}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {method.action}
            </a>
          </div>
        ))}
      </div>

      {/* Contact Form and Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project Inquiry Form</h2>
            <p className="text-zinc-400">Tell us about your project and we'll get back to you within 2 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Service Category *</label>
              <select
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleInputChange}
                required
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select a service category</option>
                {serviceCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((timeline, index) => (
                    <option key={index} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Project Description *</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Team Size</label>
              <input
                type="text"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                placeholder="e.g., 10-50 employees, startup, enterprise..."
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={handleInputChange}
                    className="text-blue-600"
                  />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={handleInputChange}
                    className="text-blue-600"
                  />
                  <span className="text-sm">Phone</span>
                </label>
              </div>
            </div>

            {submitMessage && (
              <div className={`p-4 rounded-lg ${
                submitMessage.type === "success" 
                  ? "bg-green-900 text-green-200 border border-green-700" 
                  : "bg-red-900 text-red-200 border border-red-700"
              }`}>
                {submitMessage.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Project Inquiry"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-zinc-400 mb-6">
              We're here to help you navigate your digital transformation journey. 
              Reach out to us through any of these channels.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">📱</span>
                <div>
                  <div className="font-medium">Call Us</div>
                  <a href="tel:+13024640950" className="text-blue-400 hover:underline">+1 302 464 0950</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <div className="font-medium">Email Us</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-medium">Visit Us</div>
                  <div className="text-zinc-400">364 E Main St STE 1008<br />Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>By appointment only</span>
              </div>
              <div className="pt-2 text-xs text-zinc-500">
                * Emergency support available 24/7 for existing clients
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Response Time</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Email inquiries</span>
                <span className="text-green-400">Within 2 hours</span>
              </div>
              <div className="flex justify-between">
                <span>Phone calls</span>
                <span className="text-green-400">Immediate</span>
              </div>
              <div className="flex justify-between">
                <span>Project quotes</span>
                <span className="text-yellow-400">Within 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span>Detailed proposals</span>
                <span className="text-blue-400">Within 3-5 days</span>
              </div>
            </div>
          </div>

          {/* Emergency Support */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">🚨 Emergency Support</h3>
            <p className="text-sm opacity-90 mb-3">
              For critical issues or urgent support needs, existing clients can reach our emergency support team.
            </p>
            <div className="space-y-2 text-sm">
              <div>Emergency Hotline: +1 302 464 0959</div>
              <div>Available: 24/7</div>
              <div>Response: Within 30 minutes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Ready to Start Your Project?</h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          Don't wait to transform your business. Contact us today and let's discuss how we can help you 
          achieve your digital transformation goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Call Now
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Project Inquiry"
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}