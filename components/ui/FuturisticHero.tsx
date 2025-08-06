import Link from 'next/link'
import { useState, useEffect } from 'react'

const FuturisticHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { value: '10K+', label: 'Active Users', icon: '👥' },
    { value: '500+', label: 'AI Services', icon: '🤖' },
    { value: '99.9%', label: 'Uptime', icon: '⚡' },
    { value: '24/7', label: 'Support', icon: '🛡️' }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Interactive Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.01}px, ${(mousePosition.y - window.innerHeight / 2) * -0.01}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl animate-pulse delay-2000"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.015}px, ${(mousePosition.y - window.innerHeight / 2) * 0.015}px)`
          }}
        ></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue/60 rounded-full animate-particle-drift"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container-responsive relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Title with Typewriter Effect */}
          <h1 className="text-responsive-4xl lg:text-responsive-6xl font-extrabold text-high-contrast mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-neon-text-glow">
              Zion
            </span>
            <br />
            <span className="text-high-contrast typewriter-text">
              The First Free AI-Powered Marketplace
            </span>
          </h1>
          
          {/* Enhanced Description with Hover Effects */}
          <p className="text-responsive-lg lg:text-responsive-xl text-high-contrast-secondary mb-12 max-w-3xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
            Experience the future of commerce with our cutting-edge AI-powered marketplace. 
            Connect with top-tier IT services, AI talents, and innovative products in a seamless, secure environment.
          </p>

          {/* Enhanced CTA Buttons with Interactive Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/auth/signup"
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold text-lg neon-glow hover:shadow-neon-blue transition-all duration-300 transform hover:scale-105 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">Start Trading Now</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink transform transition-transform duration-300 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}></div>
            </Link>
            <Link
              href="/marketplace"
              className="group px-8 py-4 glass border border-neon-blue/30 rounded-lg text-white font-semibold text-lg hover:border-neon-blue/60 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Explore Marketplace</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Enhanced Interactive Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-500 transform ${
                  index === currentStat ? 'scale-110' : 'scale-100'
                }`}
              >
                <div className="text-4xl mb-2 animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-responsive-3xl lg:text-responsive-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-2">
                  {stat.value}
                </div>
                <div className="text-high-contrast-secondary text-responsive-sm lg:text-responsive-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass border border-neon-blue/30 rounded-lg p-4 hover:border-neon-blue/60 transition-all duration-300 group">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-neon-blue transition-colors">AI-Powered Matching</h3>
              <p className="text-sm text-gray-300">Advanced algorithms connect you with the perfect services and talents</p>
            </div>
            <div className="glass border border-neon-purple/30 rounded-lg p-4 hover:border-neon-purple/60 transition-all duration-300 group">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-neon-purple transition-colors">Secure Transactions</h3>
              <p className="text-sm text-gray-300">Enterprise-grade security for all your business transactions</p>
            </div>
            <div className="glass border border-neon-green/30 rounded-lg p-4 hover:border-neon-green/60 transition-all duration-300 group">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-neon-green transition-colors">Instant Access</h3>
              <p className="text-sm text-gray-300">Get started in minutes with our streamlined onboarding process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center group cursor-pointer hover:border-neon-blue transition-colors">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse group-hover:bg-neon-purple transition-colors"></div>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">Scroll to explore</div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
          <span className="text-white text-xl">💬</span>
        </button>
      </div>
    </section>
  )
}

export default FuturisticHero
