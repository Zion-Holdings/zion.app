import React, { Suspense, lazy, memo } from 'react';
import UltraFuturisticBackground2026 from './ui/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';

// Lazy load non-critical components
const LazyServiceSection = lazy(() => import('./sections/EnhancedServiceShowcase'));

// Memoized service data to prevent unnecessary re-renders
const servicesData = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    tagline: 'Advanced artificial intelligence solutions',
    description: 'Advanced artificial intelligence solutions for modern businesses',
    price: '$999',
    period: 'month',
    features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    popular: true,
    category: 'AI',
    icon: '🧠'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    tagline: 'Next-generation computing solutions',
    description: 'Next-generation computing solutions for complex problems',
    price: '$1999',
    period: 'month',
    features: ['Quantum Algorithms', 'Quantum Security', 'Quantum Simulation'],
    popular: false,
    category: 'Quantum',
    icon: '⚛️'
  },
  {
    id: 'process-automation',
    name: 'Process Automation',
    tagline: 'Intelligent automation solutions',
    description: 'Intelligent automation to streamline your operations',
    price: '$799',
    period: 'month',
    features: ['Workflow Automation', 'RPA', 'AI Integration', 'Analytics'],
    popular: true,
    category: 'Automation',
    icon: '⚡'
  }
];

// Enhanced services data for the showcase section
const enhancedServicesData = [
  {
    id: 'ai-autonomous-platform',
    name: 'AI Autonomous Platform',
    tagline: 'Next-generation autonomous AI solutions',
    price: '$2,999',
    period: 'month',
    description: 'Advanced autonomous AI platform for enterprise automation',
    features: ['Autonomous Decision Making', 'Machine Learning', 'Predictive Analytics', 'Natural Language Processing'],
    popular: true,
    icon: '🤖',
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-400',
    link: '/services/ai-autonomous-platform',
    marketPosition: 'Leader in Autonomous AI',
    targetAudience: ['Enterprise', 'Government', 'Healthcare'],
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'AI',
    realService: true,
    technology: ['TensorFlow', 'PyTorch', 'Kubernetes'],
    integrations: ['Salesforce', 'Slack', 'Microsoft Teams'],
    useCases: ['Process Automation', 'Customer Service', 'Data Analysis'],
    roi: '300% within 12 months',
    competitors: ['OpenAI', 'Anthropic', 'Google AI'],
    marketSize: '$50B+',
    growthRate: '35% annually',
    variant: 'ai',
    contactInfo: {
      mobile: '+1-555-0123',
      email: 'ai@ziontechgroup.com',
      address: '123 Tech Street, Innovation City',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Full-stack AI platform with custom training',
    launchDate: '2024-01-15',
    customers: 150,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 'quantum-security-suite',
    name: 'Quantum Security Suite',
    tagline: 'Quantum-resistant cybersecurity',
    price: '$3,999',
    period: 'month',
    description: 'Future-proof quantum-resistant security solutions',
    features: ['Quantum Encryption', 'Post-Quantum Cryptography', 'Threat Detection', 'Zero Trust Architecture'],
    popular: false,
    icon: '🔐',
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400',
    link: '/services/quantum-security-suite',
    marketPosition: 'Pioneer in Quantum Security',
    targetAudience: ['Financial Services', 'Healthcare', 'Government'],
    trialDays: 45,
    setupTime: '4-6 weeks',
    category: 'Quantum',
    realService: true,
    technology: ['Quantum Key Distribution', 'Lattice-based Crypto', 'Blockchain'],
    integrations: ['Active Directory', 'Okta', 'AWS IAM'],
    useCases: ['Data Protection', 'Secure Communications', 'Compliance'],
    roi: '400% within 18 months',
    competitors: ['IBM Quantum', 'Microsoft Quantum', 'Google Quantum'],
    marketSize: '$15B+',
    growthRate: '45% annually',
    variant: 'quantum',
    contactInfo: {
      mobile: '+1-555-0124',
      email: 'quantum@ziontechgroup.com',
      address: '123 Tech Street, Innovation City',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'Quantum-resistant encryption with hybrid approach',
    launchDate: '2024-03-20',
    customers: 75,
    rating: 4.9,
    reviews: 67
  }
];

const Homepage2025: React.FC = memo(() => {
  const handleGetStarted = () => {
    // Smooth scroll to services section
    document.getElementById('services-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleLearnMore = () => {
    // Navigate to about page or expand content
    window.location.href = '/about';
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <UltraFuturisticBackground2026 />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4"
          aria-labelledby="hero-heading"
          role="banner"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Pioneering the future of technology with innovative solutions that drive business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Get started with our services"
              >
                Get Started
              </button>
              <button 
                onClick={handleLearnMore}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Learn more about Zion Tech Group"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section 
          id="services-section"
          className="py-20 px-4"
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2 
              id="services-heading"
              className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <UltraFuturisticServiceCard2026
                  key={service.id}
                  service={service}
                  variant={service.category.toLowerCase() as 'default' | 'quantum' | 'ai' | 'automation' | 'it' | 'emerging' | 'enterprise' | 'premium'}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Lazy loaded enhanced services section */}
        <Suspense fallback={
          <div className="py-20 px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading enhanced services...</p>
          </div>
        }>
          <LazyServiceSection services={enhancedServicesData} />
        </Suspense>
      </main>
    </div>
  );
});

Homepage2025.displayName = 'Homepage2025';

export default Homepage2025;