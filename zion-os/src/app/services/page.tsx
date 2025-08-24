import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "AI & Machine Learning Solutions",
      description: "Advanced artificial intelligence and machine learning solutions that transform business operations and decision-making processes.",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Computer Vision & Image Recognition",
        "Autonomous Decision Engines",
        "AI-Powered Process Automation",
        "Machine Learning Model Development"
      ],
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Quantum Computing Services",
      description: "Next-generation quantum computing solutions for complex problem-solving and computational breakthroughs across industries.",
      features: [
        "Quantum Algorithm Development",
        "Quantum Machine Learning",
        "Quantum Cryptography",
        "Quantum Simulation",
        "Quantum Optimization",
        "Quantum Error Correction"
      ],
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Cybersecurity & Threat Intelligence",
      description: "Enterprise-grade security solutions with AI-powered threat detection, prevention, and response capabilities.",
      features: [
        "Advanced Threat Detection",
        "Zero-Day Vulnerability Research",
        "Penetration Testing",
        "Security Architecture Design",
        "Incident Response & Recovery",
        "Compliance & Risk Management"
      ],
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Enterprise Digital Transformation",
      description: "Comprehensive business solutions designed for scalability, efficiency, and growth in the digital age.",
      features: [
        "Digital Strategy Consulting",
        "Cloud Infrastructure Migration",
        "Legacy System Modernization",
        "Data Architecture Design",
        "Business Process Optimization",
        "Change Management & Training"
      ],
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Research & Development",
      description: "Cutting-edge R&D initiatives pushing the boundaries of technology and innovation across multiple domains.",
      features: [
        "Emerging Technology Research",
        "Proof of Concept Development",
        "Prototype Creation",
        "Academic Collaboration",
        "Patent Development",
        "Technology Transfer"
      ],
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "red"
    },
    {
      title: "Strategic Technology Consulting",
      description: "Expert guidance and strategic consulting for digital transformation and technology adoption.",
      features: [
        "Technology Strategy Development",
        "Digital Roadmap Planning",
        "Technology Stack Evaluation",
        "Vendor Selection & Management",
        "Performance Optimization",
        "Scalability Planning"
      ],
      icon: (
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "yellow"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive innovation across your organization.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-400 text-sm">
                Understanding your business needs, challenges, and objectives through comprehensive analysis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-400 text-sm">
                Developing a tailored technology strategy and roadmap aligned with your business goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-400 text-sm">
                Executing the solution with agile methodologies and continuous feedback loops.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-400 text-sm">
                Continuous monitoring, improvement, and support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our services can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="btn-secondary"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}