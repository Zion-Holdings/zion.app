import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      icon: Brain,
      description: "Intelligent solutions powered by artificial intelligence",
      links: [
        { label: "AI Workflow Automation", path: "/services/ai-workflow-automation", description: "Automate business processes with AI" },
        { label: "AI Business Intelligence", path: "/services#ai-bi", description: "Advanced analytics and insights" },
        { label: "AI Marketing Automation", path: "/services#ai-marketing", description: "Smart marketing optimization" },
        { label: "AI HR & Recruitment", path: "/services#ai-hr", description: "Intelligent talent management" },
        { label: "AI Legal Tech", path: "/services#ai-legal", description: "Automated legal processes" },
        { label: "AI Healthcare Analytics", path: "/services#ai-healthcare", description: "Patient care optimization" },
        { label: "AI Financial Analytics", path: "/services#financial", description: "Risk assessment and insights" },
        { label: "AI Supply Chain", path: "/services#supply-chain", description: "Optimization and forecasting" }
      ]
    },
    {
      title: "Solutions",
      icon: Rocket,
      description: "Industry-specific solutions for modern businesses",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise", description: "Large-scale transformation" },
        { label: "Healthcare Technology", path: "/solutions/healthcare", description: "Medical innovation" },
        { label: "Financial Services", path: "/solutions/financial", description: "Fintech solutions" },
        { label: "Manufacturing Intelligence", path: "/solutions/manufacturing", description: "Smart manufacturing" },
        { label: "Retail Technology", path: "/solutions/retail", description: "Digital retail transformation" },
        { label: "Government Solutions", path: "/solutions/government", description: "Public sector innovation" },
        { label: "Education Technology", path: "/solutions/education", description: "Learning innovation" },
        { label: "Energy Management", path: "/solutions/energy", description: "Sustainable energy solutions" }
      ]
    },
    {
      title: "Emerging Tech",
      icon: Zap,
      description: "Cutting-edge technologies for tomorrow's challenges",
      links: [
        { label: "Quantum Computing as a Service", path: "/services/quantum-computing-as-a-service", description: "Access quantum computing power" },
        { label: "Edge Computing Platform", path: "/services/edge-computing-platform", description: "Ultra-low latency edge computing" },
        { label: "AI Cybersecurity Platform", path: "/services/ai-cybersecurity-platform", description: "AI-powered threat detection" },
        { label: "Blockchain & DeFi", path: "/emerging-tech", description: "Decentralized finance" },
        { label: "IoT & Edge Computing", path: "/emerging-tech", description: "Connected device management" },
        { label: "Extended Reality (XR)", path: "/emerging-tech", description: "Immersive experiences" },
        { label: "5G & Networks", path: "/emerging-tech", description: "High-speed connectivity" },
        { label: "Green Technology", path: "/emerging-tech", description: "Sustainable solutions" }
      ]
    },
    {
      title: "Company",
      icon: Star,
      description: "Learn about our mission and team",
      links: [
        { label: "About Us", path: "/about", description: "Our story and values" },
        { label: "Our Mission", path: "/mission", description: "What drives us forward" },
        { label: "Team", path: "/team", description: "Meet our experts" },
        { label: "Pricing", path: "/pricing", description: "Transparent pricing plans" },
        { label: "Careers", path: "/careers", description: "Join our team" },
        { label: "Partners", path: "/partners", description: "Strategic partnerships" },
        { label: "Contact", path: "/contact", description: "Get in touch" },
        { label: "Blog", path: "/blog", description: "Latest insights" }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'Facebook', url: 'https://www.facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', url: 'https://www.instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-slate-light">Revolutionary Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading provider of revolutionary micro SAAS services, AI solutions, cloud infrastructure, 
              and cutting-edge technology services. We transform businesses through innovative technology.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
                <span>{contactInfo.website}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-zion-slate-light transition-all duration-300 hover:bg-zion-cyan hover:text-white hover:border-zion-cyan hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <p className="text-sm text-zion-slate-light mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get insights on AI, emerging technologies, and industry innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-zion-cyan rounded-full animate-ping opacity-60"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-zion-purple rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-zion-cyan rounded-full animate-bounce opacity-60"></div>
    </footer>
  );
}