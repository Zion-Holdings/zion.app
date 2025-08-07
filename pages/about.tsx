import type { NextPage } from 'next';
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import EnhancedButton from '../components/ui/EnhancedButton';
import GlassmorphismCard from '../components/ui/GlassmorphismCard';
import InteractiveStats from '../components/ui/InteractiveStats';

const AboutPage: NextPage = () => {
  const stats = [
    { value: 50, label: 'Team Members', icon: '👥', color: 'blue' as const },
    { value: 10, label: 'Years Experience', icon: '⏰', color: 'purple' as const, suffix: '+' },
    { value: 1000, label: 'Projects Completed', icon: '✅', color: 'green' as const, suffix: '+' },
    { value: 99, label: 'Client Satisfaction', icon: '⭐', color: 'pink' as const, suffix: '%' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'AI Research Lead',
      bio: 'Expert in machine learning and neural networks with 8+ years of experience.',
      avatar: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Developer',
      bio: 'Specialized in scalable web applications and cloud architecture.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX/UI Designer',
      bio: 'Creating intuitive and beautiful user experiences for AI applications.',
      avatar: '👩‍🎨'
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>About Us - AI Marketplace</title>
        <meta name="description" content="Learn about our team and mission to democratize AI technology." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Our AI Marketplace</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to democratize AI technology and make cutting-edge solutions accessible to businesses of all sizes.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <InteractiveStats stats={stats} />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The experts behind our AI marketplace</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <GlassmorphismCard key={index} className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </GlassmorphismCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses already using our AI marketplace
            </p>
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
      </div>
    </EnhancedLayout>
  );
};

export default AboutPage;