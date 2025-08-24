import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

<<<<<<< HEAD
const Home: NextPage = () => {
  const featuredServices = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI models, NLP solutions, and intelligent automation",
      icon: "🤖",
      link: "/services",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Cloud migration, DevOps, and scalable architecture",
      icon: "☁️",
      link: "/services",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Web & Mobile Development",
      description: "Full-stack applications and cross-platform mobile apps",
      icon: "🌐",
      link: "/services",
      color: "from-green-500 to-green-600"
    }
  ];

  const featuredProducts = [
    {
      title: "ZionAI Analytics Platform",
      description: "Enterprise AI-powered analytics and business intelligence",
      icon: "📊",
      link: "/products",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "SmartBot Builder",
      description: "No-code chatbot development with advanced NLP",
      icon: "💬",
      link: "/products",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "CloudCost Optimizer",
      description: "Intelligent cloud cost management and optimization",
      icon: "💰",
      link: "/products",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare & Life Sciences",
      description: "AI-powered medical imaging, telemedicine, and analytics",
      icon: "🏥",
      link: "/solutions"
    },
    {
      title: "Financial Services",
      description: "Risk assessment, blockchain payments, and compliance",
      icon: "🏦",
      link: "/solutions"
    },
    {
      title: "Manufacturing 4.0",
      description: "IoT platforms, AI quality control, and digital twins",
      icon: "🏭",
      link: "/solutions"
    }
  ];

=======
export default function HomePage() {
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with innovative micro SAAS services and IT solutions." />
        <meta name="keywords" content="AI development, cloud services, micro SAAS, IT solutions, technology consulting, digital transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-bold mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-colors text-lg">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Featured Services Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  href={service.link}
                  className={`inline-block bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{product.title}</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">{product.description}</p>
                <Link 
                  href={product.link}
                  className={`inline-block bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Industry Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{solution.title}</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">{solution.description}</p>
                <Link 
                  href={solution.link}
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Innovation First</h3>
              <p className="text-gray-200">Cutting-edge solutions using the latest technologies</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Team</h3>
              <p className="text-gray-200">Experienced professionals with proven track records</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Fast Delivery</h3>
              <p className="text-gray-200">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Ongoing Support</h3>
              <p className="text-gray-200">Continuous support and maintenance after delivery</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can drive innovation, 
            improve efficiency, and create competitive advantages for your organization.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              View All Services
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
=======
        <title>Zion Tech Group — Autonomous Innovation Hub</title>
        <meta name="description" content="Leading-edge technology solutions and autonomous innovation systems that drive digital transformation and innovation across industries." />
        <meta property="og:title" content="Zion Tech Group — Autonomous Innovation Hub" />
        <meta property="og:description" content="Leading-edge technology solutions and autonomous innovation systems that drive digital transformation and innovation across industries." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-slate-950 text-white relative">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Features Section */}
          <FeaturesSection />
          
          {/* Latest Content Section */}
          <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
            </div>
>>>>>>> 3c1dda747d3aa200ea8a4e49d78b84af83a4d328

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Latest Autonomous Content
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Fresh insights and updates generated by our autonomous systems
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0406",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0406",
                    color: "from-cyan-500 to-blue-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0405",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0405",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0404",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0404",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0111",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0111",
                    color: "from-orange-500 to-red-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0403",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0403",
                    color: "from-indigo-500 to-purple-600"
                  },
                  {
                    title: "Autonomous Update — 2025: 08: 15: 0402",
                    description: "Freshly published by autonomous agents with latest insights and analysis.",
                    link: "/reports/updates/update-2025-08-15-0402",
                    color: "from-yellow-500 to-orange-600"
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/75 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-xs text-cyan-300/90 font-medium">
                        Read More <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="w-6 h-6 border border-white/30 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Ready to Innovate?
                </span>
              </h2>
                               <p className="text-xl text-white/80 mb-8 leading-relaxed">
                   Join the future of technology with Zion Tech Group. Let&apos;s build something extraordinary together.
                 </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <Link
                   href="/contact"
                   className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                 >
                   Start Your Journey
                 </Link>
                 <Link
                   href="/case-studies"
                   className="px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-xl"
                 >
                   View Our Work
                 </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
