export default function BlockchainServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">⛓️ Blockchain & Web3 Services</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Next-generation blockchain solutions, DeFi platforms, NFT marketplaces, and Web3 infrastructure 
            to power the decentralized future of business and finance.
          </p>
          <div className="mt-8">
            <a href="tel:+13024640950" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors mr-4">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Get Web3 Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <span className="mr-8">📱 +1 302 464 0950</span>
          <span className="mr-8">✉️ kleber@ziontechgroup.com</span>
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
        </div>
      </div>

      {/* Blockchain Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* DeFi Platform Development */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">💰</div>
              <h2 className="text-3xl font-bold mb-4">DeFi Platform Development</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Build next-generation decentralized finance platforms with lending, borrowing, 
                yield farming, and automated market making capabilities.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-orange-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Smart contract development and auditing</li>
                  <li>• Liquidity pools and AMM algorithms</li>
                  <li>• Yield farming and staking mechanisms</li>
                  <li>• Cross-chain interoperability</li>
                  <li>• Advanced risk management systems</li>
                  <li>• Real-time analytics and monitoring</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic DeFi Platform</span>
                    <span className="text-green-400 font-semibold">$25K - $75K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Advanced DeFi Platform</span>
                    <span className="text-green-400 font-semibold">$75K - $200K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise DeFi Solution</span>
                    <span className="text-green-400 font-semibold">$200K+</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Smart contract audit included | Ongoing support available
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/defi-development" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About DeFi Development
              </a>
            </div>

            {/* NFT Marketplace */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🎨</div>
              <h2 className="text-3xl font-bold mb-4">NFT Marketplace Development</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Create cutting-edge NFT marketplaces with advanced features, multi-chain support, 
                and innovative monetization strategies for digital assets.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-orange-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Multi-chain NFT minting and trading</li>
                  <li>• Advanced auction and bidding systems</li>
                  <li>• Royalty distribution mechanisms</li>
                  <li>• Social features and community tools</li>
                  <li>• Analytics and market insights</li>
                  <li>• Mobile-first responsive design</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic NFT Marketplace</span>
                    <span className="text-green-400 font-semibold">$15K - $40K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Advanced NFT Platform</span>
                    <span className="text-green-400 font-semibold">$40K - $100K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise NFT Solution</span>
                    <span className="text-green-400 font-semibold">$100K+</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Multi-chain support included | Custom features available
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/nft-marketplace" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About NFT Marketplace
              </a>
            </div>

            {/* Smart Contract Development */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">📜</div>
              <h2 className="text-3xl font-bold mb-4">Smart Contract Development</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Secure, audited smart contracts for any blockchain use case with comprehensive testing, 
                security analysis, and deployment support.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-orange-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Multi-language smart contract development</li>
                  <li>• Comprehensive security auditing</li>
                  <li>• Gas optimization and efficiency</li>
                  <li>• Multi-chain deployment support</li>
                  <li>• Automated testing and verification</li>
                  <li>• Upgradeable contract architecture</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Simple Smart Contract</span>
                    <span className="text-green-400 font-semibold">$5K - $15K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Complex Smart Contract</span>
                    <span className="text-green-400 font-semibold">$15K - $50K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise Smart Contract</span>
                    <span className="text-green-400 font-semibold">$50K+</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Security audit included | Multi-chain deployment
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/smart-contracts" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Smart Contracts
              </a>
            </div>

            {/* Web3 Infrastructure */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🌐</div>
              <h2 className="text-3xl font-bold mb-4">Web3 Infrastructure</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Build robust Web3 infrastructure with node management, API gateways, 
                indexing services, and decentralized storage solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-orange-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Blockchain node infrastructure</li>
                  <li>• Decentralized storage solutions</li>
                  <li>• Web3 API development</li>
                  <li>• Indexing and data services</li>
                  <li>• Cross-chain bridges and oracles</li>
                  <li>• Infrastructure monitoring and scaling</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic Infrastructure</span>
                    <span className="text-green-400 font-semibold">$10K - $30K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Advanced Infrastructure</span>
                    <span className="text-green-400 font-semibold">$30K - $100K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise Infrastructure</span>
                    <span className="text-green-400 font-semibold">$100K+</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Monitoring included | 24/7 support available
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/web3-infrastructure" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Web3 Infrastructure
              </a>
            </div>

            {/* DAO Development */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">🏛️</div>
              <h2 className="text-3xl font-bold mb-4">DAO Development</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Create sophisticated decentralized autonomous organizations with advanced governance, 
                treasury management, and community engagement tools.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-orange-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Multi-signature governance systems</li>
                  <li>• Proposal creation and voting mechanisms</li>
                  <li>• Treasury management and budgeting</li>
                  <li>• Token-based voting and delegation</li>
                  <li>• Community engagement tools</li>
                  <li>• Analytics and reporting dashboard</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Basic DAO</span>
                    <span className="text-green-400 font-semibold">$20K - $50K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Advanced DAO</span>
                    <span className="text-green-400 font-semibold">$50K - $150K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Enterprise DAO</span>
                    <span className="text-green-400 font-semibold">$150K+</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Governance tools included | Custom features available
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/dao-development" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About DAO Development
              </a>
            </div>

            {/* Blockchain Consulting */}
            <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700">
              <div className="text-4xl mb-6">💡</div>
              <h2 className="text-3xl font-bold mb-4">Blockchain Consulting</h2>
              <p className="text-zinc-300 mb-6 text-lg">
                Strategic blockchain consulting services including technology selection, 
                architecture design, regulatory compliance, and implementation strategy.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-orange-400">Key Features:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• Blockchain strategy and roadmap</li>
                  <li>• Technology stack evaluation</li>
                  <li>• Regulatory compliance guidance</li>
                  <li>• Architecture and design consulting</li>
                  <li>• Implementation planning</li>
                  <li>• Team training and education</li>
                </ul>
              </div>

              <div className="bg-zinc-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Pricing Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Consulting Rate</span>
                    <span className="text-green-400 font-semibold">$250/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Strategy Package</span>
                    <span className="text-green-400 font-semibold">$25K - $75K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Full Implementation</span>
                    <span className="text-green-400 font-semibold">$100K+</span>
                  </div>
                  <div className="text-sm text-zinc-400 mt-2">
                    Free initial consultation | Custom packages available
                  </div>
                </div>
              </div>

              <a href="https://ziontechgroup.com/blockchain-consulting" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Learn More About Blockchain Consulting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Technologies */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🛠️ Supported Blockchain Technologies</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We work with leading blockchain platforms and technologies to deliver robust, scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Ethereum</h3>
              <p className="text-zinc-300 text-sm">Smart contracts, DeFi, NFTs, and Layer 2 solutions</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold mb-2">Polygon</h3>
              <p className="text-zinc-300 text-sm">Scalable Ethereum sidechains and zk-rollups</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">🌊</div>
              <h3 className="text-lg font-semibold mb-2">Solana</h3>
              <p className="text-zinc-300 text-sm">High-performance blockchain with low fees</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">🟡</div>
              <h3 className="text-lg font-semibold mb-2">Polkadot</h3>
              <p className="text-zinc-300 text-sm">Multi-chain interoperability and parachains</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">🔴</div>
              <h3 className="text-lg font-semibold mb-2">Cardano</h3>
              <p className="text-zinc-300 text-sm">Research-driven blockchain with formal verification</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">🟢</div>
              <h3 className="text-lg font-semibold mb-2">Avalanche</h3>
              <p className="text-zinc-300 text-sm">Subnet architecture and custom blockchains</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">🟣</div>
              <h3 className="text-lg font-semibold mb-2">Cosmos</h3>
              <p className="text-zinc-300 text-sm">Interoperable blockchain ecosystem</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 text-center">
              <div className="text-3xl mb-4">🔵</div>
              <h3 className="text-lg font-semibold mb-2">Binance Smart Chain</h3>
              <p className="text-zinc-300 text-sm">Ethereum-compatible blockchain with low fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future of Web3?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our blockchain and Web3 solutions can transform your business 
            and position you at the forefront of decentralized innovation.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-lg">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg">
                ✉️ Schedule Web3 Consultation
              </a>
            </div>
            <p className="text-orange-100 text-sm">
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}