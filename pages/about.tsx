import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We believe in pushing the boundaries of what\'s possible with AI and technology.',
      icon: '🚀'
    },
    {
      title: 'Quality Excellence',
      description: 'Every service and product on our platform meets the highest standards of quality.',
      icon: '⭐'
    },
    {
      title: 'Community Driven',
      description: 'We foster a collaborative ecosystem where businesses and talents thrive together.',
      icon: '🤝'
    },
    {
      title: 'Future Focused',
      description: 'We\'re building the technology solutions that will define tomorrow\'s business landscape.',
      icon: '🔮'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & AI Research Lead',
      description: 'Former Google AI researcher with 15+ years in machine learning and neural networks.',
      image: '👩‍💼'
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO & Platform Architect',
      description: 'Expert in scalable cloud infrastructure and distributed systems.',
      image: '👨‍💻'
    },
    {
      name: 'Maria Johnson',
      role: 'Head of Product',
      description: 'Product strategist with deep experience in AI-powered marketplaces.',
      image: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      description: 'Cybersecurity expert ensuring the highest standards of data protection.',
      image: '👨‍🔒'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Platform Launch',
      description: 'Successfully launched Zion as the first free AI-powered marketplace.'
    },
    {
      year: '2024',
      title: '10K+ Users',
      description: 'Reached our first major milestone with over 10,000 active users.'
    },
    {
      year: '2024',
      title: '500+ Services',
      description: 'Expanded our marketplace to include over 500 verified AI services.'
    },
    {
      year: '2024',
      title: 'Enterprise Partnerships',
      description: 'Established partnerships with leading technology companies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>About Zion - The First Free AI-Powered Marketplace</title>
        <meta name="description" content="Learn about Zion's mission to democratize AI technology and create the world's first free AI-powered marketplace." />
        <meta property="og:title" content="About Zion - The First Free AI-Powered Marketplace" />
        <meta property="og:description" content="Learn about Zion's mission to democratize AI technology." />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >
              Zion
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/services" className="hover:text-purple-300 transition-colors">
                Services
              </Link>
              <Link href="/products" className="hover:text-purple-300 transition-colors">
                Products
              </Link>
              <Link href="/talent" className="hover:text-purple-300 transition-colors">
                Talent
              </Link>
              <Link href="/blog" className="hover:text-purple-300 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-purple-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-purple-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              About Zion
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're on a mission to democratize AI technology and create the world's first truly free AI-powered marketplace, 
            connecting businesses with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 text-lg">
                At Zion, we believe that AI technology should be accessible to every business, regardless of size or budget. 
                Our platform eliminates the barriers that have traditionally prevented small and medium businesses from 
                accessing cutting-edge AI solutions.
              </p>
              <p className="text-gray-300 mb-6">
                We're building more than just a marketplace – we're creating an ecosystem where innovation thrives, 
                where businesses can find the exact AI solutions they need, and where talented professionals can showcase 
                their expertise to a global audience.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Zion?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Free access to premium AI services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Verified professionals and companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Secure and transparent transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Cutting-edge technology solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do at Zion, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders driving Zion's mission to democratize AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Key milestones in Zion's journey to revolutionize the AI marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-300 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a business looking for AI solutions or a professional offering your expertise, 
              Zion is the platform where innovation meets opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Zion. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
