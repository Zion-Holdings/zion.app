import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Link, 
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
  Wallet,
  Smartphone,
  Coins,
  ChartBar
} from 'lucide-react';

export default function BlockchainWeb3Solutions() {
  const services = [
    {
      title: "DeFi Platform Development",
      description: "Complete decentralized finance platforms with lending, borrowing, yield farming, and liquidity pools.",
      icon: Coins,
      features: ["Lending protocols", "Yield farming", "Liquidity pools", "Staking mechanisms"],
      price: "$8,500/month",
      marketPrice: "$15,000/month",
      savings: "43% savings"
    },
    {
      title: "NFT Marketplace",
      description: "Custom NFT marketplaces with minting, trading, and royalty distribution systems.",
      icon: Link,
      features: ["NFT minting", "Marketplace trading", "Royalty distribution", "Metadata management"],
      price: "$6,200/month",
      marketPrice: "$12,000/month",
      savings: "48% savings"
    },
    {
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for any blockchain with comprehensive testing and deployment.",
      icon: Cpu,
      features: ["Contract development", "Security auditing", "Testing & deployment", "Upgrade mechanisms"],
      price: "$4,800/month",
      marketPrice: "$8,500/month",
      savings: "44% savings"
    },
    {
      title: "Web3 Wallet Integration",
      description: "Seamless wallet integration for multiple blockchains with user-friendly interfaces.",
      icon: Wallet,
      features: ["Multi-chain support", "User authentication", "Transaction signing", "Balance management"],
      price: "$3,500/month",
      marketPrice: "$6,800/month",
      savings: "49% savings"
    },
    {
      title: "DAO Governance Platform",
      description: "Decentralized autonomous organization platforms with voting, proposals, and treasury management.",
      icon: Users,
      features: ["Voting systems", "Proposal management", "Treasury control", "Governance tokens"],
      price: "$7,200/month",
      marketPrice: "$13,500/month",
      savings: "47% savings"
    },
    {
      title: "Cross-Chain Bridge",
      description: "Interoperability solutions connecting different blockchains for seamless asset transfers.",
      icon: Network,
      features: ["Multi-chain support", "Asset bridging", "Liquidity pools", "Security validation"],
      price: "$9,500/month",
      marketPrice: "$18,000/month",
      savings: "47% savings"
    }
  ];

  const benefits = [
    {
      title: "Decentralized",
      description: "True ownership and control of digital assets",
      icon: Shield,
      metric: "100%"
    },
    {
      title: "Transparent",
      description: "All transactions visible on the blockchain",
      icon: Target,
      metric: "∞"
    },
    {
      title: "Secure",
      description: "Cryptographic security and immutability",
      icon: Lock,
      metric: "100%"
    },
    {
      title: "Global",
      description: "Accessible from anywhere in the world",
      icon: Globe,
      metric: "24/7"
    }
  ];

  const industries = [
    {
      name: "Gaming",
      description: "Play-to-earn games, NFT collectibles, and virtual economies",
      icon: Building,
      useCases: ["Play-to-earn", "NFT collectibles", "Virtual economies", "Gaming assets"]
    },
    {
      name: "Finance",
      description: "DeFi protocols, lending platforms, and decentralized exchanges",
      icon: Building,
      useCases: ["DeFi protocols", "Lending platforms", "DEX trading", "Yield farming"]
    },
    {
      name: "Art & Media",
      description: "Digital art marketplaces, music NFTs, and content monetization",
      icon: Building,
      useCases: ["Digital art", "Music NFTs", "Content monetization", "Royalty distribution"]
    },
    {
      name: "Real Estate",
      description: "Property tokenization, fractional ownership, and smart contracts",
      icon: Building,
      useCases: ["Property tokenization", "Fractional ownership", "Smart contracts", "Rental agreements"]
    }
  ];

  const features = [
    {
      title: "Multi-Chain Support",
      description: "Support for Ethereum, Polygon, Binance Smart Chain, Solana, and other major blockchains",
      icon: Network
    },
    {
      title: "Smart Contract Auditing",
      description: "Comprehensive security audits by leading blockchain security firms",
      icon: Shield
    },
    {
      title: "Scalability Solutions",
      description: "Layer 2 solutions, sidechains, and sharding for high-performance applications",
      icon: Rocket
    },
    {
      title: "Developer Tools",
      description: "Comprehensive SDKs, APIs, and development frameworks for rapid deployment",
      icon: Cpu
    }
  ];

  const applications = [
    {
      title: "DeFi Protocols",
      description: "Decentralized lending, borrowing, and trading platforms",
      icon: ChartBar,
      impact: "10x higher yields"
    },
    {
      title: "NFT Marketplaces",
      description: "Digital asset trading and creation platforms",
      icon: Link,
      impact: "Global reach"
    },
    {
      title: "Gaming Platforms",
      description: "Play-to-earn games with real economic value",
      icon: Smartphone,
      impact: "True ownership"
    },
    {
      title: "Supply Chain",
      description: "Transparent and immutable supply chain tracking",
      icon: Network,
      impact: "100% transparency"
    }
  ];

  const technologies = [
    {
      name: "Ethereum",
      description: "Smart contracts and DeFi ecosystem",
      icon: "ETH",
      features: ["Smart contracts", "DeFi", "NFTs", "DAOs"]
    },
    {
      name: "Polygon",
      description: "Scalable Ethereum sidechain",
      icon: "MATIC",
      features: ["Low fees", "Fast transactions", "Ethereum compatibility", "DeFi ecosystem"]
    },
    {
      name: "Binance Smart Chain",
      description: "High-performance blockchain for DeFi",
      icon: "BNB",
      features: ["High throughput", "Low fees", "DeFi protocols", "Cross-chain bridges"]
    },
    {
      name: "Solana",
      description: "Ultra-fast blockchain for high-frequency applications",
      icon: "SOL",
      features: ["65k TPS", "Low fees", "NFTs", "DeFi protocols"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-900 to-emerald-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      </div>

      <SEO 
        title="Blockchain & Web3 Solutions - Zion Tech Group" 
        description="Revolutionary blockchain and Web3 solutions for DeFi, NFTs, DAOs, and cross-chain interoperability. Build the future of decentralized applications with our expert team."
        keywords="blockchain, web3, DeFi, NFTs, smart contracts, DAO, cross-chain, cryptocurrency, decentralized applications"
        canonical="https://ziontechgroup.com/services/blockchain-web3-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/80 to-emerald-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm">
              <Link className="w-4 h-4 mr-2" />
              Decentralized Future
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Blockchain &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Web3 Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Build the future of decentralized applications with our comprehensive blockchain and Web3 solutions. 
            Create <span className="text-green-400 font-semibold">DeFi protocols</span>, 
            <span className="text-emerald-400 font-semibold"> NFT marketplaces</span>, and 
            <span className="text-cyan-400 font-semibold"> cross-chain bridges</span> that revolutionize industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="relative z-10">Start Building</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{benefit.metric}</div>
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
              Comprehensive Web3 Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From DeFi platforms to NFT marketplaces, we provide end-to-end blockchain and Web3 solutions 
              that enable you to build the next generation of decentralized applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">{service.savings}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/50 to-emerald-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how blockchain and Web3 technologies are transforming industries and creating new 
              economic models with unprecedented transparency and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{app.description}</p>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                  {app.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supported Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support all major blockchain platforms and provide seamless integration across multiple networks 
              for maximum flexibility and reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-6 border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-lg">{tech.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{tech.name}</h3>
                <p className="text-sm text-gray-300 mb-4 text-center">{tech.description}</p>
                <ul className="space-y-1">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-green-400 flex items-center">
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
      <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-green-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our blockchain and Web3 platform comes with enterprise-grade features designed to provide 
              security, scalability, and seamless development experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-8 border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
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
              Tailored blockchain and Web3 solutions designed for the unique requirements and opportunities 
              of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 rounded-2xl p-6 border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{industry.name}</h3>
                <p className="text-sm text-gray-300 mb-4 text-center">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-xs text-green-400 flex items-center">
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
      <section className="py-20 bg-gradient-to-r from-green-900/50 via-emerald-900/50 to-cyan-900/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the Web3 revolution and create decentralized applications that transform industries and 
            empower users with true ownership and control. Start building today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="relative z-10">Start Building</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>Contact us: <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}