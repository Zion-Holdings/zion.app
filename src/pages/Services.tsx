import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
import '../styles/futuristic.css';

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden futuristic-bg">
        {/* Matrix Rain Background */}
        <div className="matrix-rain"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse quantum-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse quantum-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse quantum-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Cyber Grid Pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">
                Our Services
              </span>
              <br />
              <span className="text-white">Transform Your Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI-powered services, innovative micro SAAS solutions, 
              and cutting-edge IT services designed to drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="futuristic-btn px-8 py-4 text-lg transform hover:scale-105">
                Explore All Services
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border">
                Get Free Consultation
              </button>
            </div>

            {/* Service Categories Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "🤖", label: "AI Services", count: "15+" },
                { icon: "💻", label: "Micro SAAS", count: "12+" },
                { icon: "🖥️", label: "IT Services", count: "20+" },
                { icon: "🔒", label: "Cybersecurity", count: "8+" }
              ].map((category, index) => (
                <div key={index} className="text-center futuristic-card p-4">
                  <div className="text-3xl mb-2 quantum-float">{category.icon}</div>
                  <div className="text-lg font-bold text-cyan-400 mb-1">{category.count}</div>
                  <div className="text-gray-400 text-sm">{category.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 futuristic-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "Stay ahead with the latest AI and emerging technologies",
                features: ["Quantum computing", "Edge AI", "Blockchain solutions"]
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Rapid deployment and implementation of solutions",
                features: ["2-3 week delivery", "Agile methodology", "Continuous deployment"]
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security and compliance standards",
                features: ["Zero-trust architecture", "Quantum-safe encryption", "SOC 2 compliance"]
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Certified professionals with years of experience",
                features: ["AI specialists", "Cybersecurity experts", "DevOps engineers"]
              },
              {
                icon: "🌐",
                title: "Global Reach",
                description: "Serving clients worldwide with local expertise",
                features: ["24/7 support", "Multi-timezone teams", "Local compliance"]
              },
              {
                icon: "📈",
                title: "Proven Results",
                description: "Track record of successful transformations",
                features: ["99% success rate", "ROI tracking", "Performance metrics"]
              }
            ].map((feature, index) => (
              <div key={index} className="futuristic-card p-6 group hover:transform hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 quantum-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((feat, featIndex) => (
                    <li key={featIndex} className="flex items-center gap-2 text-sm">
                      <span className="text-cyan-400">•</span>
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest technologies and frameworks to ensure scalability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "⚛️", category: "Frontend" },
              { name: "Node.js", icon: "🟢", category: "Backend" },
              { name: "Python", icon: "🐍", category: "AI/ML" },
              { name: "TensorFlow", icon: "🧠", category: "Machine Learning" },
              { name: "AWS", icon: "☁️", category: "Cloud" },
              { name: "Docker", icon: "🐳", category: "DevOps" },
              { name: "Kubernetes", icon: "⚓", category: "Orchestration" },
              { name: "PostgreSQL", icon: "🐘", category: "Database" },
              { name: "Redis", icon: "🔴", category: "Cache" },
              { name: "GraphQL", icon: "🔵", category: "API" },
              { name: "TypeScript", icon: "📘", category: "Language" },
              { name: "Vue.js", icon: "💚", category: "Frontend" }
            ].map((tech, index) => (
              <div key={index} className="futuristic-card p-4 text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 quantum-float">
                  {tech.icon}
                </div>
                <div className="font-medium text-white mb-1">{tech.name}</div>
                <div className="text-xs text-cyan-400">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 futuristic-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="futuristic-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your specific needs and find the perfect solution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn px-10 py-4 text-lg transform hover:scale-105">
                Schedule Free Consultation
              </button>
              <button className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 neon-border">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;