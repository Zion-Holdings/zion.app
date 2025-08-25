import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Wifi, 
  Zap, 
  Brain, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Clock,
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Lock,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Activity,
  Gauge,
  Satellite
} from 'lucide-react';

export default function EdgeComputingIoTSolutions() {
  const services = [
    {
      title: "Edge AI Processing",
      description: "Real-time AI inference at the edge for instant decision-making and reduced latency.",
      icon: Brain,
      features: ["Local AI processing", "Real-time inference", "Low latency", "Offline operation"],
      price: "$3,200/month",
      marketPrice: "$5,800/month",
      savings: "45% savings"
    },
    {
      title: "IoT Device Management",
      description: "Comprehensive IoT device lifecycle management with remote monitoring and updates.",
      icon: Wifi,
      features: ["Device provisioning", "Remote monitoring", "OTA updates", "Fleet management"],
      price: "$2,800/month",
      marketPrice: "$4,900/month",
      savings: "43% savings"
    },
    {
      title: "Edge Analytics Platform",
      description: "Real-time data analytics and insights processing at the edge for immediate action.",
      icon: BarChart3,
      features: ["Real-time analytics", "Predictive insights", "Data visualization", "Alert systems"],
      price: "$3,500/month",
      marketPrice: "$6,200/month",
      savings: "44% savings"
    },
    {
      title: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions optimized for 5G networks.",
      icon: Network,
      features: ["5G optimization", "Ultra-low latency", "High bandwidth", "Network slicing"],
      price: "$4,200/month",
      marketPrice: "$7,500/month",
      savings: "44% savings"
    },
    {
      title: "Industrial IoT Solutions",
      description: "Smart manufacturing and industrial automation with edge computing capabilities.",
      icon: Building,
      features: ["Predictive maintenance", "Quality control", "Energy optimization", "Safety monitoring"],
      price: "$5,500/month",
      marketPrice: "$9,800/month",
      savings: "44% savings"
    },
    {
      title: "Edge Security & Compliance",
      description: "Comprehensive security solutions for edge devices and IoT networks.",
      icon: Shield,
      features: ["Device authentication", "Data encryption", "Threat detection", "Compliance monitoring"],
      price: "$3,800/month",
      marketPrice: "$6,800/month",
      savings: "44% savings"
    }
  ];

  const benefits = [
    {
      title: "10x Faster",
      description: "Dramatically reduced latency with edge processing",
      icon: Zap,
      metric: "10x"
    },
    {
      title: "99.9% Uptime",
      description: "Reliable edge infrastructure with redundancy",
      icon: Clock,
      metric: "99.9%"
    },
    {
      title: "Real-time",
      description: "Instant processing and decision-making",
      icon: Activity,
      metric: "Real-time"
    },
    {
      title: "Global Reach",
      description: "Edge nodes deployed worldwide",
      icon: Globe,
      metric: "Global"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Smart factories, predictive maintenance, and quality control",
      icon: Building,
      useCases: ["Predictive maintenance", "Quality control", "Energy optimization", "Safety monitoring"]
    },
    {
      name: "Healthcare",
      description: "Remote patient monitoring, medical devices, and telemedicine",
      icon: Building,
      useCases: ["Patient monitoring", "Medical devices", "Telemedicine", "Health analytics"]
    },
    {
      name: "Transportation",
      description: "Connected vehicles, traffic management, and logistics",
      icon: Building,
      useCases: ["Connected vehicles", "Traffic management", "Logistics", "Fleet tracking"]
    },
    {
      name: "Energy",
      description: "Smart grids, renewable energy, and consumption optimization",
      icon: Building,
      useCases: ["Smart grids", "Renewable energy", "Consumption optimization", "Grid monitoring"]
    }
  ];

  const features = [
    {
      title: "Distributed Edge Nodes",
      description: "Global network of edge computing nodes for optimal performance and reliability",
      icon: Server
    },
    {
      title: "AI at the Edge",
      description: "Local AI processing for instant decision-making without cloud dependency",
      icon: Brain
    },
    {
      title: "5G Integration",
      description: "Optimized for 5G networks with ultra-low latency and high bandwidth",
      icon: Network
    },
    {
      title: "Security First",
      description: "Enterprise-grade security with encryption, authentication, and threat detection",
      icon: Shield
    }
  ];

  const applications = [
    {
      title: "Smart Cities",
      description: "Intelligent urban infrastructure with real-time monitoring and optimization",
      icon: Building,
      impact: "30% efficiency improvement"
    },
    {
      title: "Autonomous Vehicles",
      description: "Real-time processing for safe and efficient autonomous driving",
      icon: Monitor,
      impact: "100ms response time"
    },
    {
      title: "Industrial Automation",
      description: "Smart manufacturing with predictive maintenance and quality control",
      icon: Gauge,
      impact: "50% cost reduction"
    },
    {
      title: "Healthcare Monitoring",
      description: "Real-time health monitoring with instant alerts and insights",
      icon: Activity,
      impact: "24/7 monitoring"
    }
  ];

  const edgeNodes = [
    {
      location: "North America",
      nodes: "500+",
      coverage: "99.5%",
      latency: "<10ms",
      features: ["AI processing", "5G optimization", "Security"]
    },
    {
      location: "Europe",
      nodes: "400+",
      coverage: "99.2%",
      latency: "<15ms",
      features: ["Edge analytics", "IoT management", "Compliance"]
    },
    {
      location: "Asia Pacific",
      nodes: "600+",
      coverage: "99.8%",
      latency: "<20ms",
      features: ["Industrial IoT", "Smart cities", "5G edge"]
    },
    {
      location: "Global",
      nodes: "1500+",
      coverage: "99.9%",
      latency: "<25ms",
      features: ["Multi-region", "Load balancing", "Disaster recovery"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      </div>

      <SEO 
        title="Edge Computing & IoT Solutions - Zion Tech Group" 
        description="Revolutionary edge computing and IoT solutions for real-time processing, AI at the edge, and global connectivity. Achieve 10x faster performance with our distributed edge infrastructure."
        keywords="edge computing, IoT, edge AI, 5G edge, industrial IoT, smart cities, edge analytics, edge security"
        canonical="https://ziontechgroup.com/services/edge-computing-iot-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
              <Wifi className="w-4 h-4 mr-2" />
              Next-Generation Computing
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Edge Computing &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              IoT Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with edge computing and IoT solutions that bring processing closer to data sources. 
            Achieve <span className="text-blue-400 font-semibold">10x faster performance</span> and 
            <span className="text-indigo-400 font-semibold"> real-time insights</span> with our global edge infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Start Edge Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <div className="text-sm text-gray-400">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Edge & IoT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From edge AI processing to industrial IoT solutions, we provide end-to-end edge computing 
              and IoT services that revolutionize how you process data and make decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how edge computing and IoT are transforming industries and enabling new capabilities 
              with real-time processing and instant decision-making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{app.description}</p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                  {app.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Network Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Edge Network
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our distributed edge computing infrastructure spans the globe, providing optimal performance 
              and reliability for your applications and IoT devices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edgeNodes.map((node, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-6 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{node.location}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Nodes:</span>
                    <span className="text-blue-400 font-semibold">{node.nodes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Coverage:</span>
                    <span className="text-blue-400 font-semibold">{node.coverage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-blue-400 font-semibold">{node.latency}</span>
                  </div>
                </div>
                <ul className="space-y-1">
                  {node.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-blue-400 flex items-center">
                      <Lightbulb className="w-3 h-3 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our edge computing and IoT platform comes with enterprise-grade features designed to provide 
              optimal performance, security, and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored edge computing and IoT solutions designed for the unique requirements and challenges 
              of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-6 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{industry.name}</h3>
                <p className="text-sm text-gray-300 mb-4 text-center">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-blue-400 flex items-center">
                      <Lightbulb className="w-3 h-3 mr-2" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-cyan-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Edge Computing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the edge computing revolution and achieve unprecedented performance with real-time processing 
            and instant decision-making. Start your edge computing journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Start Edge Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}