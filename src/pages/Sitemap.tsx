import React from 'react';
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Home, 
  Users, 
  Briefcase, 
  Settings, 
  HelpCircle, 
  MessageCircle, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin,
  ExternalLink,
  Sparkles,
  Cpu,
  TrendingUp,
  Building2
} from 'lucide-react';

interface SitemapSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  links: SitemapLink[];
}

interface SitemapLink {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
}

const sitemapSections: SitemapSection[] = [
  {
    id: 'main',
    title: 'Main Pages',
    description: 'Core website pages and navigation',
    icon: <Home className="w-6 h-6" />,
    links: [
      {
        title: 'Home',
        href: '/',
        description: 'Welcome to Zion Tech Group'
      },
      {
        title: 'About Us',
        href: '/about',
        description: 'Learn about our company and mission'
      },
      {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    description: 'Our comprehensive range of technology services',
    icon: <Zap className="w-6 h-6" />,
    links: [
      {
        title: 'Comprehensive Services',
        href: '/comprehensive-services',
        description: 'Full-service technology solutions',
        badge: 'Popular'
      },
      {
        title: 'AI Services',
        href: '/ai-services',
        description: 'Artificial Intelligence solutions',
        badge: 'New'
      },
      {
        title: 'Micro SAAS',
        href: '/micro-saas',
        description: 'Custom software solutions'
      },
      {
        title: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        description: 'Large-scale business solutions'
      },
      {
        title: 'Services Pricing',
        href: '/services-pricing',
        description: 'Transparent pricing plans'
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & Support',
    description: 'Help, documentation, and support resources',
    icon: <BookOpen className="w-6 h-6" />,
    links: [
      {
        title: 'Help Center',
        href: '/help',
        description: 'Find answers and support'
      },
      {
        title: 'Cookie Policy',
        href: '/cookies',
        description: 'Learn about our cookie usage'
      },
      {
        title: 'Privacy Policy',
        href: '/privacy',
        description: 'Data protection and privacy'
      },
      {
        title: 'Terms of Service',
        href: '/terms',
        description: 'Service terms and conditions'
      }
    ]
  },
  {
    id: 'company',
    title: 'Company Information',
    description: 'Corporate information and resources',
    icon: <Globe className="w-6 h-6" />,
    links: [
      {
        title: 'Careers',
        href: '/careers',
        description: 'Join our team',
        isExternal: true
      },
      {
        title: 'News & Updates',
        href: '/news',
        description: 'Latest company news'
      },
      {
        title: 'Partnerships',
        href: '/partners',
        description: 'Strategic partnerships'
      },
      {
        title: 'Sitemap',
        href: '/sitemap',
        description: 'Site structure overview'
      }
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete overview of all pages and sections on the Zion Tech Group website. Find what you're looking for quickly and easily."
        keywords="sitemap, navigation, pages, Zion Tech Group, website structure"
        url="https://ziontechgroup.com/sitemap"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Website Sitemap
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Complete overview of all pages and sections on the Zion Tech Group website. 
            Find what you're looking for quickly and easily.
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sitemapSections.map((section) => (
            <Card key={section.id} className="bg-zion-blue-dark/50 border-zion-purple/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-zion-cyan">
                    {section.icon}
                  </div>
                  <div>
                    <CardTitle className="text-white">{section.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {section.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <div key={link.title} className="flex items-start justify-between p-3 rounded-lg hover:bg-zion-blue-light/10 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <a
                            href={link.href}
                            className="font-medium text-white hover:text-zion-cyan transition-colors"
                            target={link.isExternal ? '_blank' : undefined}
                            rel={link.isExternal ? 'noopener noreferrer' : undefined}
                          >
                            {link.title}
                          </a>
                          {link.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {link.badge}
                            </Badge>
                          )}
                          {link.isExternal && (
                            <ExternalLink className="w-3 h-3 text-zion-slate-light" />
                          )}
                        </div>
                        {link.description && (
                          <p className="text-sm text-zion-slate-light">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <Card className="bg-zion-blue-dark/50 border-zion-purple/20">
          <CardHeader>
            <CardTitle className="text-white">Quick Navigation</CardTitle>
            <CardDescription className="text-zion-slate-light">
              Most commonly accessed pages and resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/comprehensive-services"
                className="p-4 rounded-lg bg-zion-blue-light/10 hover:bg-zion-blue-light/20 transition-colors text-center"
              >
                <Zap className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <div className="font-medium text-white">Services</div>
                <div className="text-sm text-zion-slate-light">View all services</div>
              </a>
              
              <a
                href="/contact"
                className="p-4 rounded-lg bg-zion-blue-light/10 hover:bg-zion-blue-light/20 transition-colors text-center"
              >
                <MessageCircle className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <div className="font-medium text-white">Contact</div>
                <div className="text-sm text-zion-slate-light">Get in touch</div>
              </a>
              
              <a
                href="/help"
                className="p-4 rounded-lg bg-zion-blue-light/10 hover:bg-zion-blue-light/20 transition-colors text-center"
              >
                <HelpCircle className="w-8 h-8 text-zion-cyan mx-auto mb-2" />
                <div className="font-medium text-white">Help</div>
                <div className="text-sm text-zion-slate-light">Find support</div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Need Help Finding Something?</h2>
          <p className="text-zion-slate-light mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Support
            </a>
            <a
              href="/help"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}