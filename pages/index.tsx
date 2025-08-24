import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Code, Cloud, Brain, Shield, Zap, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import AdvancedHero from '../components/AdvancedHero';
import AdvancedServicesShowcase from '../components/AdvancedServicesShowcase';
import AdvancedTestimonials from '../components/AdvancedTestimonials';
import AdvancedContactForm from '../components/AdvancedContactForm';
import AdvancedStats from '../components/AdvancedStats';
import AdvancedFeaturesShowcase from '../components/AdvancedFeaturesShowcase';
import AdvancedPricing from '../components/AdvancedPricing';
import AdvancedTeamShowcase from '../components/AdvancedTeamShowcase';
import AdvancedCaseStudies from '../components/AdvancedCaseStudies';
import AdvancedNewsletter from '../components/AdvancedNewsletter';
import AdvancedFAQ from '../components/AdvancedFAQ';
import AdvancedBlog from '../components/AdvancedBlog';
import AdvancedAnalytics from '../components/AdvancedAnalytics';
import AdvancedCustomerSuccess from '../components/AdvancedCustomerSuccess';
import AdvancedProjectManagement from '../components/AdvancedProjectManagement';
import AdvancedClientPortal from '../components/AdvancedClientPortal';
import AdvancedTimeTracking from '../components/AdvancedTimeTracking';
import AdvancedInvoiceManagement from '../components/AdvancedInvoiceManagement';
import AdvancedTeamScheduling from '../components/AdvancedTeamScheduling';
import AdvancedPerformanceDashboard from '../components/AdvancedPerformanceDashboard';

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/services/ai-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      features: ['AWS/Azure/GCP', 'Microservices', 'Serverless Architecture', 'DevOps Automation'],
      href: '/services/cloud-services'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-Stack Development', 'Progressive Web Apps', 'API Development'],
      href: '/services/web-development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      href: '/services/cybersecurity'
    },
    {
      icon: Globe,
      title: 'IoT Platforms',
      description: 'Connected device solutions for smart environments and automation.',
      features: ['Sensor Networks', 'Edge Computing', 'Real-time Analytics', 'Device Management'],
      href: '/services/iot-platforms'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training'],
      href: '/services/digital-transformation'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our legacy systems into a modern, scalable platform. Their expertise in cloud architecture and AI integration exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Inc',
      content: 'The AI-powered analytics solution they built for us increased our operational efficiency by 40%. Their team is incredibly skilled and professional.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, StartupXYZ',
      content: 'From concept to deployment, Zion Tech Group guided us through every step. Their blockchain solution is now a key differentiator for our business.',
      rating: 5
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology consulting firm specializing in AI development, cloud architecture, and digital transformation solutions.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "serviceType": [
      "AI Development",
      "Cloud Architecture", 
      "Web Development",
      "Cybersecurity",
      "IoT Platforms",
      "Digital Transformation"
    ]
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI & Technology Solutions | Delaware Tech Company</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI development, cloud architecture, and digital transformation services. Delaware-based technology experts delivering innovative solutions worldwide." />
        <meta name="keywords" content="AI development, cloud architecture, web development, cybersecurity, IoT platforms, digital transformation, technology consulting, Delaware tech company" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI development, cloud architecture, and digital transformation services." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.png" />
        <meta property="og:site_name" content="Zion Tech Group" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com" />
        <meta property="twitter:title" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta property="twitter:description" content="Transform your business with cutting-edge AI development, cloud architecture, and digital transformation services." />
        <meta property="twitter:image" content="https://ziontechgroup.com/og-image.png" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </Head>

      <main className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Advanced Hero Section */}
        <AdvancedHero
          title="Pioneering the Future of Technology"
          subtitle="Leading Technology Solutions"
          description="Partner with Zion Tech Group to unlock the power of AI, cloud computing, and digital innovation. We deliver cutting-edge solutions that drive growth, efficiency, and competitive advantage for businesses worldwide."
          ctaText="Start Your Project"
          ctaHref="/contact"
        />

        {/* Stats Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Services Showcase */}
        <AdvancedServicesShowcase />

        {/* Advanced Stats Section */}
        <AdvancedStats />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  We combine deep technical expertise with business acumen to deliver solutions that 
                  not only work flawlessly but also drive real business value.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Proven Track Record</h3>
                      <p className="text-gray-400">500+ successful projects across various industries and technologies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-400">Certified professionals with deep expertise in emerging technologies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
                      <p className="text-gray-400">Bank-level security standards and compliance with industry regulations.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-400 mb-4">15+</div>
                    <div className="text-xl text-white mb-2">Years of Experience</div>
                    <div className="text-gray-400">Delivering innovative technology solutions</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Testimonials Section */}
        <AdvancedTestimonials />

        {/* Advanced Team Showcase */}
        <AdvancedTeamShowcase />

        {/* Advanced Case Studies */}
        <AdvancedCaseStudies />

        {/* Advanced Blog Section */}
        <AdvancedBlog />

        {/* Advanced Analytics Section */}
        <AdvancedAnalytics />

        {/* Advanced Customer Success Section */}
        <AdvancedCustomerSuccess />

        {/* Advanced Project Management Section */}
        <AdvancedProjectManagement />

        {/* Advanced Client Portal Section */}
        <AdvancedClientPortal />

        {/* Advanced Time Tracking Section */}
        <AdvancedTimeTracking />

        {/* Advanced Invoice Management Section */}
        <AdvancedInvoiceManagement />

        {/* Advanced Team Scheduling Section */}
        <AdvancedTeamScheduling />

        {/* Advanced Performance Dashboard Section */}
        <AdvancedPerformanceDashboard />

        {/* Advanced Features Showcase */}
        <AdvancedFeaturesShowcase />

        {/* Advanced Pricing Section */}
        <AdvancedPricing />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&rsquo;s discuss how our technology solutions can drive growth, efficiency, and innovation 
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Advanced FAQ Section */}
        <AdvancedFAQ />

        {/* Advanced Newsletter Section */}
        <AdvancedNewsletter />

        {/* Advanced Contact Form Section */}
        <AdvancedContactForm />
      </main>
    </>
  );
};

export default Home;