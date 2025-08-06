import Link from 'next/link'

const FuturisticHero = () => {
  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '500+', label: 'AI Services' },
    { value: '99.9%', label: 'Uptime' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="container-responsive relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-responsive-4xl lg:text-responsive-6xl font-extrabold text-high-contrast mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              Zion
            </span>
            <br />
            <span className="text-high-contrast">
              The First Free AI-Powered Marketplace
            </span>
          </h1>
          
          <p className="text-responsive-lg lg:text-responsive-xl text-high-contrast-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of commerce with our cutting-edge AI-powered marketplace. 
            Connect with top-tier IT services, AI talents, and innovative products in a seamless, secure environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/auth/signup"
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold text-lg neon-glow hover:shadow-neon-blue transition-all duration-300 transform hover:scale-105"
            >
              Start Trading Now
            </Link>
            <Link
              href="/marketplace"
              className="px-8 py-4 glass border border-neon-blue/30 rounded-lg text-white font-semibold text-lg hover:border-neon-blue/60 transition-all duration-300 transform hover:scale-105"
            >
              Explore Marketplace
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-responsive-3xl lg:text-responsive-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-2">
                  {stat.value}
                </div>
                <div className="text-high-contrast-secondary text-responsive-sm lg:text-responsive-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default FuturisticHero
