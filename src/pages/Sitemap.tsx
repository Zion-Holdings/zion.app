import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Home, 
  Briefcase, 
  Users, 
  ShoppingCart, 
  Building, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Settings,
  Zap,
  Shield,
  Globe,
  Wrench,
  Code,
  MessageSquare,
  Star,
  Play
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership programs' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
        { name: 'IT Solutions', path: '/services/it-solutions', description: 'Infrastructure and IT services' },
        { name: 'AI Services', path: '/services/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and protection services' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'On-Site Support', path: '/it-onsite-services', description: 'Local technical support' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
      ]
    },
    {
      title: 'Talent & Recruitment',
      icon: Users,
      links: [
        { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
        { name: 'Talent Directory', path: '/talent-directory', description: 'Comprehensive talent database' },
        { name: 'AI Matcher', path: '/ai-matcher', description: 'AI-powered talent matching' },
        { name: 'Hire Now', path: '/hire-now', description: 'Quick hiring process' },
        { name: 'Post a Job', path: '/post-job', description: 'Create job listings' },
        { name: 'Zion Hire AI', path: '/zion-hire-ai', description: 'AI recruitment platform' },
      ]
    },
    {
      title: 'Marketplace',
      icon: ShoppingCart,
      links: [
        { name: 'Equipment', path: '/equipment', description: 'Tech equipment and hardware' },
        { name: 'Equipment Details', path: '/equipment-detail', description: 'Detailed product information' },
        { name: 'Categories', path: '/categories', description: 'Browse by category' },
        { name: 'Featured', path: '/featured', description: 'Highlighted products' },
        { name: 'Deals', path: '/deals', description: 'Special offers and discounts' },
      ]
    },
    {
      title: 'Company & Business',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', description: 'Company overview' },
        { name: 'Careers', path: '/careers', description: 'Employment opportunities' },
        { name: 'Partners', path: '/partners', description: 'Business partnerships' },
        { name: 'Press & Media', path: '/press', description: 'News and press releases' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale business solutions' },
      ]
    },
    {
      title: 'Resources & Content',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api', description: 'API documentation' },
        { name: 'Tutorials', path: '/tutorials', description: 'Learning resources' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      ]
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help-center', description: 'Comprehensive help resources' },
        { name: 'FAQ', path: '/faq', description: 'Common questions and answers' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Live Chat', path: '/chat', description: 'Real-time support chat' },
        { name: 'Status Page', path: '/status', description: 'Service status updates' },
        { name: 'Support Ticket', path: '/support-ticket', description: 'Submit support requests' },
      ]
    },
    {
      title: 'Tools & Applications',
      icon: Settings,
      links: [
        { name: 'Analytics Dashboard', path: '/analytics', description: 'Business analytics and insights' },
        { name: 'Mobile App', path: '/mobile-launch', description: 'Mobile application' },
        { name: 'Community Platform', path: '/community', description: 'User community and forums' },
        { name: 'Developer Portal', path: '/developers', description: 'Developer resources and tools' },
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'Data protection compliance' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility standards' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', path: '/get-started', icon: Star, color: 'bg-green-100 text-green-700' },
    { name: 'Request Demo', path: '/demo', icon: Play, color: 'bg-blue-100 text-blue-700' },
    { name: 'Contact Sales', path: '/contact-sales', icon: MessageSquare, color: 'bg-purple-100 text-purple-700' },
    { name: 'Support', path: '/support', icon: HelpCircle, color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation guide for Zion Tech Group. Find all pages, services, and resources organized by category."
        keywords="sitemap, navigation, site structure, pages, services, Zion Tech Group"
      />
      
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Site Navigation Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive website structure. Find all pages, services, and resources organized by category for easy navigation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`${link.color} p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200`}
              >
                <link.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold text-sm">{link.name}</div>
              </Link>
            ))}
          </div>

          {/* Sitemap Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-zion-blue/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-zion-blue" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-l-2 border-gray-200 pl-4">
                        <Link
                          to={link.path}
                          className="block text-zion-blue hover:text-zion-blue-dark font-medium mb-1 transition-colors"
                        >
                          {link.name}
                        </Link>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-zion-blue" />
                  <span>Site Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total Pages:</span>
                    <span className="font-medium">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Updated:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Site Version:</span>
                    <span className="font-medium">2.0.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-zion-blue" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="space-y-2">
                  <Link
                    to="/contact"
                    className="block text-zion-blue hover:text-zion-blue-dark text-sm font-medium"
                  >
                    Contact Support →
                  </Link>
                  <Link
                    to="/help-center"
                    className="block text-zion-blue hover:text-zion-blue-dark text-sm font-medium"
                  >
                    Visit Help Center →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

// Play icon component for demo link
function Play({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );
}
