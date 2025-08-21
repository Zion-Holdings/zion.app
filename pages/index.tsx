import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  ExternalLink,
  TrendingUp,
  Clock,
  Target,
  Building,
  Rocket,
  Award,
  DollarSign,
  ChartBar,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Zap as ZapIcon,
  Code,
  BookOpen,
  Activity,
  Database as DatabaseIcon,
  Play,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  FlaskConical,
  Dna,
  Car,
  Leaf,
  Factory,
  Truck,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot,
  ChevronRight,
  Eye,
  Lightbulb,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon2,
  Shield as ShieldIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon2,
  Cloud as CloudIcon,
  Smartphone as SmartphoneIcon,
  Palette as PaletteIcon,
  Search as SearchIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
  CreditCard as CreditCardIcon,
  BarChart3 as BarChart3Icon,
  Settings as SettingsIcon,
  Code as CodeIcon,
  BookOpen as BookOpenIcon,
  Activity as ActivityIcon,
  Play as PlayIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import { enhancedRealMicroSaasServices, getPopularServices, getServicesByCategory } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const advertisingContent = {
    headline: "500+ Revolutionary Real Micro SaaS Services",
    subheadline: "Transform Your Business with Cutting-Edge AI, Quantum Computing & Autonomous Systems",
    benefits: [
      "🚀 First-to-Market Solutions",
      "💎 Industry-Leading Technology", 
      "🌍 Global Deployment",
      "💰 Competitive Pricing",
      "⚡ Lightning-Fast Setup",
      "🛡️ Enterprise Security"
    ],
    marketPosition: "Zion Tech Group leads the global micro SaaS revolution with patent-pending quantum AI and autonomous systems.",
    pricing: "Services range from $599/month to $2,499/month with 21-day free trials and comprehensive support.",
    contactCTA: "Ready to revolutionize your business? Contact our expert team today!",
    contactDetails: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      website: "https://ziontechgroup.com"
    }
  };

  const popularServices = getPopularServices().slice(0, 6);
  const quantumServices = getServicesByCategory('Quantum Computing').slice(0, 3);
  const aiServices = getServicesByCategory('AI & Machine Learning').slice(0, 3);
  const cybersecurityServices = getServicesByCategory('Cybersecurity').slice(0, 3);

  const featuredCategories = [
    {
      name: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions with AI integration',
      icon: <Atom className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Quantum')).length,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI & Machine Learning',
      description: 'Advanced AI and machine learning platforms',
      icon: <Brain className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cybersecurity',
      description: 'Next-generation security with quantum-resistant encryption',
      icon: <Shield className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Biomedical & Healthcare',
      description: 'AI-powered healthcare and biomedical research',
      icon: <Dna className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Biomedical') || s.category.includes('Healthcare')).length,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and trading',
      icon: <DollarSign className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Financial') || s.category.includes('Finance')).length,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Content & Marketing',
      description: 'AI-powered content creation and marketing automation',
      icon: <FileText className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Content') || s.category.includes('Marketing')).length,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Real Services', icon: <Rocket className="w-6 h-6" /> },
    { number: '21', label: 'Day Trials', icon: <Clock className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
    { number: '1M+', label: 'Users', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, QuantumTech Solutions",
      company: "Fortune 500",
      content: "Zion Tech Group's quantum AI platform revolutionized our research capabilities. We achieved breakthrough results in 3 months.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, Autonomous Industries",
      company: "Manufacturing Leader",
      content: "Their autonomous AI factory solution increased our production efficiency by 300% while reducing costs by 40%.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Dr. James Thompson",
      role: "Research Director",
      company: "Biomedical Institute",
      content: "The AI-powered drug discovery platform accelerated our research timeline by 5 years. Game-changing technology.",
      rating: 5,
      avatar: "👨‍🔬"
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - 500+ Revolutionary Real Micro SaaS Services | AI, Quantum Computing & Autonomous Systems</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. AI, Quantum Computing, Autonomous Systems, and more. 21-day free trials available." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, business automation, Zion Tech Group, technology solutions" />
        <meta property="og:title" content="Zion Tech Group - 500+ Revolutionary Real Micro SaaS Services" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 21-day free trials available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - 500+ Revolutionary Real Micro SaaS Services" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and autonomous systems." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <EnhancedFuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8 backdrop-blur-sm">
                    <Sparkles className="w-5 h-5 mr-2" />
                    500+ Revolutionary Real Micro SaaS Services
                  </div>
                  <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Transform Your Business
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      With Revolutionary Technology
                    </span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Discover our comprehensive portfolio of cutting-edge micro SaaS services. 
                    From quantum AI to autonomous systems, each solution delivers guaranteed ROI 
                    and enterprise-grade reliability.
                  </p>
                </div>

                {/* Contact Info Banner */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
                      <div className="text-sm text-gray-400">Mobile</div>
                      <div className="text-cyan-400 font-medium text-lg">{contactInfo.mobile}</div>
                    </div>
                    <div className="text-center">
                      <Mail className="w-6 h-6 text-purple-400 mx-auto mb-3" />
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-purple-400 font-medium text-lg">{contactInfo.email}</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-green-400 mx-auto mb-3" />
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-green-400 font-medium text-sm">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    href="/services"
                    variant="quantum"
                    size="lg"
                    className="group text-lg px-8 py-4"
                  >
                    Explore 500+ Services
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="text-cyan-400 mb-3 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Categories */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Explore Our Service Categories
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Discover cutting-edge solutions across all major technology domains
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredCategories.map((category, index) => (
                  <EnhancedFuturisticCard
                    key={index}
                    variant="holographic"
                    className="group hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => window.location.href = `/services?category=${category.name}`}
                  >
                    <div className="text-center p-8">
                      <div className={`text-6xl mb-6 flex justify-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        {category.count} Services
                      </div>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Services */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Most Popular Services
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Experience the future of technology with our most innovative solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.map((service) => (
                  <QuantumHolographicCard
                    key={service.id}
                    variant="quantum"
                    className="h-full group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl">{service.icon}</span>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                            Popular
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                          {service.category}
                        </span>
                      </div>
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-green-400">{service.price}</span>
                        <span className="text-gray-400 text-sm ml-2">{service.period}</span>
                      </div>
                      <div className="mb-6">
                        <span className="text-sm text-green-400">{service.trialDays} day trial</span>
                      </div>
                      <Button
                        variant="quantum"
                        size="sm"
                        onClick={() => window.open(service.link, '_blank')}
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </QuantumHolographicCard>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Join thousands of satisfied customers who have transformed their businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{testimonial.avatar}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="text-center">
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                  Join thousands of forward-thinking companies already leveraging our revolutionary technology solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <Button
                    href="/services"
                    variant="quantum"
                    size="lg"
                    className="group text-lg px-8 py-4"
                  >
                    Explore All Services
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4"
                  >
                    Get Started Today
                  </Button>
                </div>

                {/* Final Contact Info */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-3xl font-bold text-white mb-6">Get in Touch Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <div className="text-sm text-gray-400">Mobile</div>
                      <div className="text-white font-semibold text-lg">{contactInfo.mobile}</div>
                      <div className="text-xs text-cyan-400 mt-1">Available 24/7</div>
                    </div>
                    <div className="text-center">
                      <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-semibold text-lg">{contactInfo.email}</div>
                      <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                      <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg">
                      <Globe className="w-5 h-5 mr-3" />
                      Visit us at: {contactInfo.website}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </EnhancedFuturisticBackground>
    </>
  );
}
