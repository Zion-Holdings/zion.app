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
  Sparkles,
  Zap,
  Brain,
  Shield,
  Users,
  Building,
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "Innovative New Services", path: "/services/innovative-new-services" },
        { label: "Comprehensive Showcase", path: "/services/comprehensive-showcase" }
      ]
    },
    {
      title: "Solutions",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Cloud & DevOps", path: "/cloud-devops" }
      ]
    },
    {
      title: "Emerging Tech",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain & DeFi", path: "/emerging-tech" },
        { label: "IoT & Edge Computing", path: "/emerging-tech" },
        { label: "Extended Reality (XR)", path: "/emerging-tech" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/emerging-tech" },
        { label: "Digital Twins", path: "/emerging-tech" },
        { label: "Metaverse Platform", path: "/services#metaverse" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      color: "from-orange-500 to-red-500",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'Facebook', url: 'https://www.facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', url: 'https://www.instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const quickStats = [
    { label: "Innovative Services", value: "20+", icon: Sparkles },
    { label: "Technology Categories", value: "15+", icon: Brain },
    { label: "Global Support", value: "24/7", icon: Shield },
    { label: "Average ROI", value: "500%+", icon: Zap }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zion-blue-dark/50 to-transparent"></div>
      </div>

      {/* Quick Stats Section */}
      <section className="relative z-10 py-16 border-b border-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zion Tech Group by the Numbers
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Delivering innovative technology solutions with measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl opacity-75 blur-xl"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-cyan font-medium">Revolutionary Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading provider of revolutionary micro SAAS services, AI solutions, cloud infrastructure, 
              and cutting-edge technology services designed to accelerate your digital transformation.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href={`tel:${contactInfo.phone}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href={contactInfo.website} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  {contactInfo.website}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                </div>
                <span className="text-zion-slate-light">
                  {contactInfo.address}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
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
                <div className={`w-6 h-6 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                  <section.icon className="w-3 h-3 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="relative z-10 border-t border-zion-cyan/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with Innovation
            </h3>
            <p className="text-zion-cyan mb-6 max-w-2xl mx-auto">
              Get the latest insights on emerging technologies, AI trends, and digital transformation strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-zion-cyan/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-zion-slate-light text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
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
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-zion-green rounded-full animate-bounce opacity-60"></div>
    </footer>
  );
}