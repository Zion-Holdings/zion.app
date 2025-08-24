import React from 'react';
import { SEO } from '@/components/SEO';

const Mobile = () => {
  const mobileFeatures = [
    {
      title: "Mobile-First Design",
      description: "We design with mobile users in mind first, ensuring optimal experience across all devices",
      icon: "📱",
      benefits: [
        "Responsive design principles",
        "Touch-friendly interfaces",
        "Mobile performance optimization",
        "Cross-platform compatibility"
      ]
    },
    {
      title: "Zion Mobile App",
      description: "Access our services and manage your projects on the go with our mobile application",
      icon: "🚀",
      benefits: [
        "Project management",
        "Real-time updates",
        "Client communication",
        "Service booking"
      ]
    },
    {
      title: "Progressive Web Apps",
      description: "Web applications that work like native apps with offline functionality",
      icon: "🌐",
      benefits: [
        "No app store required",
        "Offline capabilities",
        "Push notifications",
        "App-like experience"
      ]
    }
  ];

  const mobileServices = [
    {
      title: "iOS Development",
      description: "Native iPhone and iPad applications using Swift and SwiftUI",
      icon: "🍎",
      features: ["Swift & SwiftUI", "App Store optimization", "iOS-specific features", "Performance tuning"]
    },
    {
      title: "Android Development",
      description: "Native Android applications using Kotlin and Jetpack Compose",
      icon: "🤖",
      features: ["Kotlin & Jetpack Compose", "Google Play optimization", "Material Design 3", "Android features"]
    },
    {
      title: "Cross-Platform",
      description: "Single codebase for iOS and Android using React Native or Flutter",
      icon: "📱",
      features: ["React Native", "Flutter", "Shared codebase", "Native performance"]
    },
    {
      title: "Mobile Web",
      description: "Responsive web applications optimized for mobile devices",
      icon: "🌐",
      features: ["Mobile-first design", "Progressive Web Apps", "Responsive layouts", "Touch optimization"]
    }
  ];

  const mobileBenefits = [
    {
      title: "Increased Engagement",
      description: "Mobile users are more engaged and likely to interact with your content",
      icon: "📈"
    },
    {
      title: "Better User Experience",
      description: "Optimized mobile experiences lead to higher satisfaction and retention",
      icon: "⭐"
    },
    {
      title: "Wider Reach",
      description: "Mobile-first approach ensures accessibility across all devices",
      icon: "🌍"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with modern mobile solutions and user expectations",
      icon: "🏆"
    }
  ];

  const mobileStats = [
    {
      stat: "73%",
      label: "Mobile Internet Usage",
      description: "Of all internet traffic comes from mobile devices"
    },
    {
      stat: "85%",
      label: "User Preference",
      description: "Of users prefer mobile-friendly websites"
    },
    {
      stat: "60%",
      label: "Mobile Search",
      description: "Of searches are performed on mobile devices"
    },
    {
      stat: "40%",
      label: "Mobile Conversion",
      description: "Higher conversion rates on mobile-optimized sites"
    }
  ];

  return (
    <>
      <SEO 
        title="Mobile-First Solutions - Zion Tech Group"
        description="Experience mobile-first design and development with Zion Tech Group. From responsive websites to native mobile apps, we ensure optimal mobile experiences."
        canonical="/mobile"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <main className="pt-12">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mobile-First Solutions
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                In today's mobile-first world, we ensure your digital presence is optimized 
                for mobile devices. From responsive websites to native mobile applications, 
                we deliver exceptional mobile experiences that drive engagement and results.
              </p>
            </div>

            {/* Mobile Features */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Our Mobile Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {mobileFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Mobile Development Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {mobileServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-blue-100 mb-4 text-sm text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-blue-200 text-sm flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Why Mobile Matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {mobileStats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {stat.stat}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-semibold text-white text-center mb-12">
                Benefits of Mobile-First Design
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {mobileBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Zion Mobile App */}
            <div className="mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg border border-blue-500/30 p-8 text-center">
                  <h2 className="text-3xl font-semibold text-white mb-4">
                    Zion Mobile App
                  </h2>
                  <p className="text-blue-100 mb-6 text-lg">
                    Access our services and manage your projects on the go with our mobile application. 
                    Available for iOS and Android devices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                    >
                      Download for iOS
                    </a>
                    <a
                      href="#"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                    >
                      Download for Android
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Ready to Go Mobile?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Let's discuss your mobile strategy and create solutions that deliver 
                  exceptional experiences across all devices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/mobile-launch"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Start Mobile Development
                  </a>
                  <a
                    href="/contact"
                    className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
                  >
                    Discuss Mobile Strategy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Mobile;