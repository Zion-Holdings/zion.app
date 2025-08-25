import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sitemapData = [
    {
      section: "Main Pages",
      links: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" },
        { path: "/pricing", label: "Pricing" },
        { path: "/request-quote", label: "Request Quote" }
      ]
    },
    {
      section: "Services",
      links: [
        { path: "/services", label: "All Services" },
        { path: "/micro-saas-services", label: "Micro SAAS Services" },
        { path: "/ai-services", label: "AI & Machine Learning" },
        { path: "/enterprise-solutions", label: "Enterprise Solutions" },
        { path: "/cloud-devops-solutions", label: "Cloud & DevOps" },
        { path: "/digital-transformation", label: "Digital Transformation" },
        { path: "/emerging-tech-services", label: "Emerging Tech Services" },
        { path: "/ai-business-solutions", label: "AI Business Solutions" },
        { path: "/industry-solutions", label: "Industry Solutions" },
        { path: "/it-onsite-services", label: "IT Onsite Services" },
        { path: "/green-it", label: "Green IT" }
      ]
    },
    {
      section: "Marketplace",
      links: [
        { path: "/marketplace", label: "Marketplace" },
        { path: "/categories", label: "Categories" },
        { path: "/equipment", label: "Equipment" },
        { path: "/talent", label: "Talent" }
      ]
    },
    {
      section: "Resources",
      links: [
        { path: "/blog", label: "Blog" },
        { path: "/white-papers", label: "White Papers" },
        { path: "/case-studies", label: "Case Studies" },
        { path: "/events", label: "Events" },
        { path: "/webinars", label: "Webinars" },
        { path: "/help-center", label: "Help Center" }
      ]
    },
    {
      section: "Company",
      links: [
        { path: "/careers", label: "Careers" },
        { path: "/partners", label: "Partners" },
        { path: "/faq", label: "FAQ" }
      ]
    },
    {
      section: "Legal",
      links: [
        { path: "/privacy", label: "Privacy Policy" },
        { path: "/terms", label: "Terms of Service" }
      ]
    },
    {
      section: "Authentication",
      links: [
        { path: "/login", label: "Login" },
        { path: "/signup", label: "Sign Up" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate through all the pages and resources available on Zion Tech Group's website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                {section.section}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-blue-600 hover:text-blue-700 hover:underline transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Contact our team for assistance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
