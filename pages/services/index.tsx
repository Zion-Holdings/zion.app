import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesPage: NextPage = () => {
  const services = [
    {
      id: 'ai-development',
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs',
      features: ['Machine Learning Models', 'Neural Networks', 'Natural Language Processing', 'Computer Vision'],
      price: '$150-500/hr',
      rating: 4.9,
      icon: '🤖',
      color: 'blue' as const,
      featured: true
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js/Python', 'Cloud Deployment', 'Performance Optimization'],
      price: '$100-300/hr',
      rating: 4.8,
      icon: '💻',
      color: 'purple' as const
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Optimization'],
      price: '$120-350/hr',
      rating: 4.7,
      icon: '📱',
      color: 'green' as const
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup and migration services',
      features: ['AWS/Azure/GCP', 'Infrastructure as Code', 'Security Compliance', 'Cost Optimization'],
      price: '$2000-15000',
      rating: 4.8,
      icon: '☁️',
      color: 'pink' as const
    },
    {
      id: 'security-auditing',
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and penetration testing',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Audits', 'Security Training'],
      price: '$1000-8000',
      rating: 4.9,
      icon: '🔒',
      color: 'blue' as const
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Advanced data analysis and business intelligence solutions',
      features: ['Data Mining', 'Predictive Analytics', 'Dashboard Creation', 'ETL Processes'],
      price: '$120-400/hr',
      rating: 4.7,
      icon: '📊',
      color: 'purple' as const
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and exceptional user experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: '$80-250/hr',
      rating: 4.8,
      icon: '🎨',
      color: 'green' as const
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Complete CI/CD pipelines and infrastructure automation',
      features: ['Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring & Alerting', 'Infrastructure as Code'],
      price: '$150-400/hr',
      rating: 4.8,
      icon: '⚙️',
      color: 'pink' as const
    }
  ];

  const categories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions for modern businesses',
      count: '50+ services',
      icon: '🤖'
    },
    {
      name: 'Web Development',
      description: 'Full-stack web applications and platforms',
      count: '100+ services',
      icon: '💻'
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile solutions',
      count: '75+ services',
      icon: '📱'
    },
    {
      name: 'Cloud & DevOps',
      description: 'Infrastructure and deployment automation',
      count: '60+ services',
      icon: '☁️'
    },
    {
      name: 'Security',
      description: 'Cybersecurity and compliance solutions',
      count: '40+ services',
      icon: '🔒'
    },
    {
      name: 'Design & UX',
      description: 'User experience and interface design',
      count: '45+ services',
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Services - Zion Technology</title>
        <meta name="description" content="Discover comprehensive IT services from AI development to cloud migration. Expert professionals ready to transform your business." />
        <meta property="og:title" content="Services - Zion Technology" />
        <meta property="og:description" content="Discover comprehensive IT services from AI development to cloud migration." />
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
              <Link href="/services" className="text-purple-300">
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
              <Link href="/about" className="hover:text-purple-300 transition-colors">
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
              Professional
            </span>{' '}
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with verified experts offering cutting-edge technology solutions. 
            From AI development to cloud migration, we have the expertise you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#services"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Service Categories</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse our comprehensive range of technology services organized by expertise area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-purple-400 text-sm">{category.count}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Featured Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Top-rated services from our verified professionals and companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* Service Header */}
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400 text-sm">
                        {'★'.repeat(Math.floor(service.rating))}
                      </div>
                      <span className="text-gray-300 text-sm ml-2">{service.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-semibold text-sm">
                    {service.price}
                  </span>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                500+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Verified Services
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                200+
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Expert Providers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                4.8
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                24/7
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our verified professionals and transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Sign Up Free
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

export default ServicesPage;

