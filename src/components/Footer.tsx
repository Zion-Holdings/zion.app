import { FooterNewsletter } from "@/components/FooterNewsletter";
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Building,
  Users,
  Zap,
  Code,
  Shield,
  BarChart3,
  Cloud,
  Brain,
  Eye,
  Lightbulb,
  Settings,
  HelpCircle,
  FileText,
  Handshake,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      services: [
        { name: "AI Development", link: "/ai-development" },
        { name: "Machine Learning", link: "/machine-learning" },
        { name: "Natural Language Processing", link: "/nlp" },
        { name: "Computer Vision", link: "/computer-vision" },
        { name: "AI Consulting", link: "/ai-consulting" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      services: [
        { name: "Cloud Migration", link: "/cloud-migration" },
        { name: "DevOps Automation", link: "/devops" },
        { name: "Serverless Computing", link: "/serverless" },
        { name: "Container Orchestration", link: "/kubernetes" },
        { name: "Infrastructure as Code", link: "/iac" }
      ]
    },
    {
      title: "Security & Compliance",
      services: [
        { name: "Cybersecurity Assessment", link: "/cybersecurity" },
        { name: "Penetration Testing", link: "/penetration-testing" },
        { name: "Compliance Management", link: "/compliance" },
        { name: "Identity & Access Management", link: "/iam" },
        { name: "Data Protection", link: "/data-protection" }
      ]
    },
    {
      title: "Data & Analytics",
      services: [
        { name: "Big Data Engineering", link: "/big-data" },
        { name: "Business Intelligence", link: "/business-intelligence" },
        { name: "Data Visualization", link: "/data-visualization" },
        { name: "Predictive Analytics", link: "/predictive-analytics" },
        { name: "Data Governance", link: "/data-governance" }
      ]
    }
  ];

  const industrySolutions = [
    { name: "Healthcare", link: "/healthcare", description: "Digital health solutions" },
    { name: "Fintech", link: "/fintech", description: "Financial technology" },
    { name: "Education", link: "/education", description: "EdTech platforms" },
    { name: "Manufacturing", link: "/manufacturing", description: "Industry 4.0" },
    { name: "Retail", link: "/retail", description: "E-commerce solutions" },
    { name: "Government", link: "/government", description: "Public sector tech" }
  ];

  const companyLinks = [
    { name: "About Us", link: "/about", description: "Our story & mission" },
    { name: "Careers", link: "/careers", description: "Join our team" },
    { name: "Partners", link: "/partners", description: "Strategic alliances" },
    { name: "Press", link: "/press", description: "Media resources" },
    { name: "Investors", link: "/investors", description: "Financial information" }
  ];

  const resources = [
    { name: "Blog", link: "/blog", description: "Latest insights" },
    { name: "Documentation", link: "/docs", description: "Technical guides" },
    { name: "API Reference", link: "/api", description: "Developer resources" },
    { name: "Support Center", link: "/support", description: "Help & resources" },
    { name: "Community", link: "/community", description: "User forums" }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-lg text-lg leading-relaxed">
              The world's leading technology marketplace dedicated to high-tech and artificial intelligence solutions. 
              We connect businesses with cutting-edge technology services and expert talent.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology trends, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-3 bg-zion-purple/10 rounded-lg">
                <div className="text-2xl font-bold text-zion-cyan">500+</div>
                <div className="text-xs text-zion-slate-light">Expert Talents</div>
              </div>
              <div className="text-center p-3 bg-zion-purple/10 rounded-lg">
                <div className="text-2xl font-bold text-zion-cyan">1000+</div>
                <div className="text-xs text-zion-slate-light">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-6 text-xl text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-zion-cyan font-semibold flex items-center">
                  {category.title === "AI & Machine Learning" && <Brain className="h-4 w-4 mr-2" />}
                  {category.title === "Cloud & Infrastructure" && <Cloud className="h-4 w-4 mr-2" />}
                  {category.title === "Security & Compliance" && <Shield className="h-4 w-4 mr-2" />}
                  {category.title === "Data & Analytics" && <BarChart3 className="h-4 w-4 mr-2" />}
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        to={service.link} 
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-6 text-xl text-center">Industry Solutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industrySolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className="group p-4 bg-zion-purple/5 rounded-lg hover:bg-zion-purple/10 transition-colors text-center"
              >
                <div className="text-zion-cyan font-medium group-hover:text-white transition-colors">
                  {solution.name}
                </div>
                <div className="text-xs text-zion-slate-light mt-1">
                  {solution.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Building className="h-4 w-4 mr-2" />
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <HelpCircle className="h-4 w-4 mr-2" />
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal */}
      <div className="border-t border-zion-blue-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses with cutting-edge technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}