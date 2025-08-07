import type { NextPage } from 'next';;;''
import Head from 'next/head';;;''
import EnhancedLayout from '../components/layout/EnhancedLayout';;;''
import FuturisticHero from '../components/ui/FuturisticHero';;;''
import GlassmorphismCard from '../components/ui/GlassmorphismCard';;;''
import InteractiveStats from '../components/ui/InteractiveStats';;;''
import EnhancedButton from '../components/ui/EnhancedButton';;;''

const Home: NextPage = () => {
  const stats = [
    { value: 1000, label: 'Active Users', icon: '👥', color: 'blue' as const },''
    { value: 50, label: 'AI Services', icon: '🤖', color: 'purple' as const },''
    { value: 99, label: 'Success Rate', icon: '✅', color: 'green' as const, suffix: '%' },''
    { value: 24, label: 'Response Time', icon: '⚡', color: 'pink' as const, suffix: 'h' }''
  ];

  const features = [
    {
      title: 'AI-Powered Matching',;''
      description: 'Advanced algorithms connect you with the perfect AI solutions for your business needs.',''
      icon: '🎯',;''
      color: 'blue';''
    },;
    {
      title: 'Free Access',;''
      description: 'No hidden fees or subscription costs. Access premium AI services completely free.',''
      icon: '💰',;''
      color: 'purple';''
    },;
    {
      title: 'Real-time Analytics',;''
      description: 'Track performance and optimize your AI implementations with comprehensive insights.',''
      icon: '📊',;''
      color: 'green';''
    },;
    {
      title: 'Expert Support',;''
      description: 'Get help from AI experts and technical specialists whenever you need assistance.',;''
      icon: '🛠️',;''
      color: 'pink';''
    }
  ];

  return ()
    <EnhancedLayout>;
      <Head>;
        <title>Zion - Free AI-Powered Marketplace</title>;
        <meta name="description" content="Access cutting-edge AI solutions for free. Connect with the perfect AI services for your business needs." />""
        <link rel="icon" href="/favicon.ico" />;""
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">""
        {/* Hero Section */}
        <FuturisticHero />;

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <InteractiveStats stats={stats} />;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-12">""
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">""
                Why Choose Zion?;
              </h2>;
              <p className="text-xl text-gray-600">""
                Experience the future of AI-powered business solutions;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">""
              {features.map((feature, index) => ()
                <GlassmorphismCard key={index} className="text-center">""
                  <div className="text-4xl mb-4">{feature.icon}</div>""
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>""
                  <p className="text-gray-600">{feature.description}</p>""
                </GlassmorphismCard>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">""
              Ready to Transform Your Business?
            </h2>;
            <p className="text-xl text-gray-600 mb-8">""
              Join thousands of companies already using Zion to access cutting-edge AI solutions;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <EnhancedButton ;>
                href="/services";""
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"""
              >;
                Explore Services;
              </EnhancedButton>;
              <EnhancedButton ;>
                href="/contact";""
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg"""
              >;
                Get Started;
              </EnhancedButton>;
            </div>;
          </div>;
        </section>;
      </div>;
    </EnhancedLayout>;
  )
}

export default Home;