<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const featuredServices = [
    {
      title: "AI Development & Machine Learning",
      description: "Custom AI models, predictive analytics, and intelligent automation solutions",
      icon: "🤖",
      features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      price: "Starting at $5,000",
      href: "/services"
    },
    {
      title: "Cloud Migration & Infrastructure",
      description: "Seamless cloud migration, optimization, and multi-cloud management",
      icon: "☁️",
      features: ["Cloud Migration", "Cost Optimization", "Performance Tuning", "Security Management"],
      price: "Starting at $10,000",
      href: "/services"
    },
    {
      title: "Web & Mobile Development",
      description: "Full-stack web applications and native mobile apps for all platforms",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "API Development", "UI/UX Design"],
      price: "Starting at $8,000",
      href: "/services"
    }
  ];

  const featuredProducts = [
    {
      name: "SmartDoc AI",
      description: "AI-powered document processing and automation platform",
      price: "$99/month",
      category: "AI Automation",
      href: "/products"
    },
    {
      name: "DataViz Pro",
      description: "Advanced business intelligence and data visualization",
      price: "$149/month",
      category: "Business Intelligence",
      href: "/products"
    },
    {
      name: "CloudSync Manager",
      description: "Multi-cloud management and optimization platform",
      price: "$199/month",
      category: "Cloud Management",
      href: "/products"
    }
  ];

  const whyChooseUs = [
    {
      title: "10+ Years Experience",
      description: "Deep expertise in cutting-edge technologies and industry best practices",
      icon: "🎓"
    },
    {
      title: "500+ Projects Delivered",
      description: "Proven track record of successful implementations across various industries",
      icon: "✅"
    },
    {
      title: "99.9% Client Satisfaction",
      description: "Consistent delivery of high-quality solutions that exceed expectations",
      icon: "⭐"
    },
    {
      title: "24/7 Support Available",
      description: "Round-the-clock technical support and maintenance for enterprise clients",
      icon: "🔄"
    }
  ];
=======
import React from 'react';
import { zionTechServices } from '../data/enhanced-zion-tech-services-2025';
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider | AI, Cloud & Digital Transformation</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence with innovative micro SAAS solutions." />
        <meta name="keywords" content="technology solutions, AI services, cloud migration, web development, mobile apps, cybersecurity, micro SAAS, digital transformation" />
      </Head>
      
      <Navigation />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center text-white mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to Zion Tech Group
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Zion Tech Group
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Cutting-edge technology solutions that are transforming industries and driving the future of innovation
          </p>
<<<<<<< HEAD
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
              Explore Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Featured Services */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Featured Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="text-green-400 mr-2">✓</span>
=======
          <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
            <span>🛡️ Enterprise-grade security</span>
            <span>•</span>
            <span>⚡ AI-powered optimization</span>
            <span>•</span>
            <span>🌐 Global deployment</span>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="mb-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="text-white font-semibold">Contact Zion Tech Group</p>
                <p className="text-white/70 text-sm">Get in touch for consultations and implementations</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span>📍</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zionTechServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <p className="text-white/60 text-sm">{service.tagline}</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  <span className="text-white/60 text-sm">{service.period}</span>
                </div>
                <div className="text-sm text-white/60">
                  <p>Market: {service.marketPosition}</p>
                  <p>ROI: {service.roi}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-white/70 text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
                <p className="text-blue-300 font-semibold mb-4">{service.price}</p>
                <Link href={service.href} className="text-blue-300 hover:text-blue-200 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-colors duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-200 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-blue-300 mb-4">{product.price}</p>
                <Link href={product.href} className="text-blue-300 hover:text-blue-200 font-medium">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how our cutting-edge technology solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
                Start Your Project
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
=======
              </div>

              <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                <span>Rating: {service.rating}/5 ⭐</span>
                <span>{service.reviews} reviews</span>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Learn More
                </a>
                <span className="text-white/60 text-sm">{service.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Our cutting-edge solutions are designed to drive innovation, 
              optimize operations, and deliver measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Visit Our Website
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
