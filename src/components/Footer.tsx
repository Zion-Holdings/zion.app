import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, ChevronUp, Target, Brain, BarChart3, Factory,
  Server, Cloud, Shield, Network, Eye, MessageSquare, TrendingUp,
  Globe, Wifi, Database, Zap
} from "lucide-react";
import { FooterNewsletter } from "@/components/FooterNewsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "Micro SAAS Solutions",
      services: [
        { name: "Productivity Tools", path: "/micro-saas-services", icon: <Target className="w-4 h-4" /> },
        { name: "AI-Powered Apps", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
        { name: "Business Software", path: "/micro-saas-services", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Industry Solutions", path: "/industry-solutions", icon: <Factory className="w-4 h-4" /> }
      ]
    },
    {
      title: "IT & Infrastructure",
      services: [
        { name: "Onsite IT Services", path: "/it-onsite-services", icon: <Server className="w-4 h-4" /> },
        { name: "Cloud Solutions", path: "/cloud-devops-solutions", icon: <Cloud className="w-4 h-4" /> },
        { name: "Cybersecurity", path: "/cybersecurity", icon: <Shield className="w-4 h-4" /> },
        { name: "Network Infrastructure", path: "/it-services-comprehensive", icon: <Network className="w-4 h-4" /> }
      ]
    },
    {
      title: "AI & Innovation",
      services: [
        { name: "Machine Learning", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
        { name: "Computer Vision", path: "/ai-services", icon: <Eye className="w-4 h-4" /> },
        { name: "Natural Language Processing", path: "/ai-services", icon: <MessageSquare className="w-4 h-4" /> },
        { name: "Predictive Analytics", path: "/ai-services", icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      title: "Advanced Solutions",
      services: [
        { name: "Blockchain Services", path: "/micro-saas-services", icon: <Globe className="w-4 h-4" /> },
        { name: "IoT Platforms", path: "/micro-saas-services", icon: <Wifi className="w-4 h-4" /> },
        { name: "Data Analytics", path: "/micro-saas-services", icon: <Database className="w-4 h-4" /> },
        { name: "DevOps Automation", path: "/micro-saas-services", icon: <Zap className="w-4 h-4" /> }
      ]
    }
  ];


  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Transforming businesses through innovative micro SAAS solutions, 
              cutting-edge IT services, and advanced AI technologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan mt-0.5" />
                <span className="max-w-xs">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Services</Link></li>
              <li><Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link></li>
              <li><Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Pricing</Link></li>
              <li><Link to="/talent" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Talent</Link></li>
              <li><Link to="/equipment" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Equipment</Link></li>
              <li><Link to="/categories" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Categories</Link></li>
              <li><Link to="/green-it" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Green IT</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link></li>
              <li><Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link></li>
              <li><Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to our newsletter</h3>
            <p className="text-zion-slate-light mb-4">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-zion-cyan/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-light transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;