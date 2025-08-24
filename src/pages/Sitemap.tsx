import React from 'react';
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Home, 
  Users, 
  Briefcase, 
  ShoppingCart, 
  Settings, 
  FileText,
  MessageSquare,
  BarChart3,
  Building,
  Globe,
  Code,
  HelpCircle,
  Shield,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="w-5 h-5" />,
      links: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About Us", path: "/about", description: "Company information and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Job opportunities" },
        { name: "Blog", path: "/blog", description: "Latest news and insights" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" }
      ]
    },
    {
      title: "Marketplace",
      icon: <ShoppingCart className="w-5 h-5" />,
      links: [
        { name: "Marketplace", path: "/marketplace", description: "Browse all products and services" },
        { name: "Categories", path: "/categories", description: "Browse by category" },
        { name: "Services", path: "/services", description: "Professional services" },
        { name: "Equipment", path: "/equipment", description: "Tech equipment and hardware" },
        { name: "Green IT", path: "/green-it", description: "Sustainable technology solutions" }
      ]
    },
    {
      title: "Talent & Community",
      icon: <Users className="w-5 h-5" />,
      links: [
        { name: "Talent Directory", path: "/talent", description: "Find skilled professionals" },
        { name: "Community", path: "/community", description: "Join our community" },
        { name: "AI Matcher", path: "/match", description: "AI-powered talent matching" },
        { name: "Zion Hire AI", path: "/zion-hire-ai", description: "AI recruitment platform" }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: <Building className="w-5 h-5" />,
      links: [
        { name: "Enterprise Plans", path: "/enterprise", description: "Enterprise solutions" },
        { name: "IT Onsite Services", path: "/it-onsite-services", description: "On-site IT support" },
        { name: "Request Quote", path: "/request-quote", description: "Get a custom quote" }
      ]
    },
    {
      title: "Developer Resources",
      icon: <Code className="w-5 h-5" />,
      links: [
        { name: "Developer Portal", path: "/developers", description: "Developer tools and APIs" },
        { name: "API Documentation", path: "/api-docs", description: "API reference and guides" },
        { name: "Sample Code", path: "/api-samples", description: "Code examples and tutorials" }
      ]
    },
    {
      title: "User Dashboard",
      icon: <Settings className="w-5 h-5" />,
      links: [
        { name: "Dashboard", path: "/dashboard", description: "Main user dashboard" },
        { name: "Messages", path: "/messages", description: "Communication center" },
        { name: "Notifications", path: "/notifications", description: "System alerts" },
        { name: "Profile", path: "/profile", description: "User profile management" },
        { name: "Account Settings", path: "/account-settings", description: "Account configuration" }
      ]
    },
    {
      title: "Authentication",
      icon: <Shield className="w-5 h-5" />,
      links: [
        { name: "Login", path: "/login", description: "Sign in to your account" },
        { name: "Sign Up", path: "/signup", description: "Create new account" },
        { name: "Forgot Password", path: "/forgot-password", description: "Reset password" }
      ]
    },
    {
      title: "Legal & Support",
      icon: <FileText className="w-5 h-5" />,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Privacy and data protection" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Help Center", path: "/help", description: "Support and documentation" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Find Talent", path: "/talent", icon: <Users className="w-4 h-4" /> },
    { name: "Browse Services", path: "/services", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Get Support", path: "/contact", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Join Community", path: "/community", icon: <Globe className="w-4 h-4" /> }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: "info@ziontechgroup.com" },
    { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: <MapPin className="w-4 h-4" />, label: "Address", value: "San Francisco, CA" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sitemap - Zion Tech Group" 
        description="Navigate through all pages and sections of Zion Tech Group's website. Find what you're looking for quickly and easily."
        keywords="sitemap, navigation, Zion Tech Group, website structure"
        canonical="https://ziontechgroup.com/sitemap"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site <span className="text-zion-cyan">Map</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Navigate through all pages and sections of our website. 
            Find what you're looking for quickly and easily.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-4 text-center hover:border-zion-purple/40 transition-colors group"
              >
                <div className="text-zion-cyan group-hover:text-zion-cyan/80 transition-colors mb-2">
                  {link.icon}
                </div>
                <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sitemap */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-zion-cyan">
                      {section.icon}
                    </div>
                    <CardTitle className="text-zion-cyan">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-b border-zion-purple/10 pb-2 last:border-b-0">
                        <Link
                          to={link.path}
                          className="text-white hover:text-zion-cyan transition-colors font-medium block mb-1"
                        >
                          {link.name}
                        </Link>
                        <p className="text-zion-slate-light text-sm">
                          {link.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-zion-cyan">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{contact.label}</h3>
                <p className="text-zion-slate-light">{contact.value}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Additional Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Help & Support</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Get help with our platform and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Help Center
                  </Link>
                  <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Contact Support
                  </Link>
                  <Link to="/faq" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Frequently Asked Questions
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Developer Resources</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Tools and documentation for developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/developers" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Developer Portal
                  </Link>
                  <Link to="/api-docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    API Documentation
                  </Link>
                  <Link to="/api-samples" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Code Samples
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Company Information</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Learn more about Zion Tech Group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    About Us
                  </Link>
                  <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Careers
                  </Link>
                  <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    Partnerships
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search & Navigation Tips */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Navigation Tips</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Navigation</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Use the main navigation menu at the top of every page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Utilize the search function to find specific content quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Check the footer for additional links and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Use breadcrumbs to navigate back to previous sections</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Finding What You Need</h3>
              <ul className="space-y-3 text-zion-slate-light">
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Browse categories to explore related services and products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Use filters to narrow down search results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Check the blog for industry insights and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zion-cyan">•</span>
                  <span>Contact our team for personalized assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
