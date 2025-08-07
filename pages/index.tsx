import type { NextPage } from 'next';
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import FuturisticHero from '../components/ui/FuturisticHero';
import GlassmorphismCard from '../components/ui/GlassmorphismCard';
import InteractiveStats from '../components/ui/InteractiveStats';
import EnhancedButton from '../components/ui/EnhancedButton';

const Home: NextPage = () => {
  const stats = [
    { value: 1000, label: 'Active Users', icon: '👥', color: 'blue' as const },
    { value: 50, label: 'AI Services', icon: '🤖', color: 'purple' as const },
    { value: 99, label: 'Success Rate', icon: '✅', color: 'green' as const, suffix: '%' },
    { value: 24, label: 'Response Time', icon: '⚡', color: 'pink' as const, suffix: 'h' }
  ];

  const features = [
    {
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms connect you with the perfect AI solutions for your business needs.',
      icon: '🎯'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor your AI performance with comprehensive analytics and insights.',
      icon: '📊'
    },
    {
      title: 'Secure Integration',
      description: 'Enterprise-grade security for seamless AI integration into your workflow.',
      icon: '🔒'
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>AI Marketplace - Find Your Perfect AI Solution</title>
        <meta name="description" content="Discover and connect with the best AI services for your business needs." />
        <meta name="keywords" content="AI, artificial intelligence, machine learning, business automation, AI services" />
      </Head>

      <FuturisticHero />

      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Marketplace?</h2>
            <p className="text-xl text-gray-600">Experience the future of AI-powered business solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <GlassmorphismCard key={index} className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </GlassmorphismCard>
            ))}
          </div>

          <InteractiveStats stats={stats} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton href="/services" variant="primary">
              Explore Services
            </EnhancedButton>
            <EnhancedButton href="/contact" variant="secondary">
              Contact Us
            </EnhancedButton>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  );
};

export default Home;