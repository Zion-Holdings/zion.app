import type { NextPage }  from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';
import { useState, useEffect, useRef }  from 'react';
import Link  from 'next/link';
import { Home, Search, User }  from 'lucide-react';

interface VRProduct {
  id: string
  name: string
  description: string
  price: number
  category: string
  vrModel: string
  dimensions: { x: number; y: number; z: number }
  position: { x: number; y: number; z: number }
  rotation: { x: number; y: number; z: number }
  scale: { x: number; y: number; z: number }
  features: string[]
  rating: number
  reviews: number
}

interface VRExperience {
  id: string
  name: string
  description: string
  environment: string
  lighting: string
  atmosphere: string
  products: VRProduct[]
}

const AIPoweredVirtualRealityMarketplace: NextPage = () => {
  const [isVRMode, setIsVRMode] = useState(false)
  const [currentExperience, setCurrentExperience] = useState<VRExperience | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<VRProduct | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [userPosition, setUserPosition] = useState({ x: 0, y: 0, z: 0 })
  const [userRotation, setUserRotation] = useState({ x: 0, y: 0, z: 0 })
  const [vrDevices, setVrDevices] = useState<string[]>([])
  const [vrSupported, setVrSupported] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const vrContainerRef = useRef<HTMLDivElement>(null)

  // Sample VR experiences
  const vrExperiences: VRExperience[] = [
    {
      id: 'tech-showroom',
      name: 'AI Tech Showroom',
      description: 'Explore cutting-edge AI products in a futuristic showroom',
      environment: 'futuristic-showroom',
      lighting: 'dynamic-led',
      atmosphere: 'high-tech',
      products: [
        {
          id: 'ai-robot-1',
          name: 'AI Assistant Robot',
          description: 'Advanced AI-powered robot with natural language processing',
          price: 2500,
          category: 'AI Hardware',
          vrModel: '/models/ai-robot.glb',
          dimensions: { x: 0.5, y: 1.2, z: 0.3 },
          position: { x: 2, y: 0, z: 3 },
          rotation: { x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
          features: ['Voice Recognition', 'Facial Recognition', 'Autonomous Navigation'],
          rating: 4.8,
          reviews: 127
        },
        {
          id: 'quantum-computer',
          name: 'Quantum Computing System',
          description: 'Next-generation quantum computing hardware',
          price: 50000,
          category: 'Computing',
          vrModel: '/models/quantum-computer.glb',
          dimensions: { x: 1.5, y: 1.8, z: 1.2 },
          position: { x: -2, y: 0, z: 4 },
          rotation: { x: 0, y: 0.3, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
          features: ['Quantum Processing', 'Superposition States', 'Entanglement'],
          rating: 4.9,
          reviews: 89
        }
      ]
    },
    {
      id: 'smart-home',
      name: 'Smart Home Experience',
      description: 'Experience AI-powered smart home devices in a realistic environment',
      environment: 'modern-home',
      lighting: 'natural-daylight',
      atmosphere: 'comfortable',
      products: [
        {
          id: 'smart-speaker',
          name: 'AI Smart Speaker',
          description: 'Intelligent speaker with voice control and home automation',
          price: 299,
          category: 'Smart Home',
          vrModel: '/models/smart-speaker.glb',
          dimensions: { x: 0.15, y: 0.25, z: 0.15 },
          position: { x: 1, y: 0.8, z: 2 },
          rotation: { x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
          features: ['Voice Control', 'Music Streaming', 'Home Automation'],
          rating: 4.6,
          reviews: 234
        }
      ]
    },
    {
      id: 'industrial-ai',
      name: 'Industrial AI Hub',
      description: 'Explore industrial AI solutions and automation systems',
      environment: 'industrial-facility',
      lighting: 'industrial-led',
      atmosphere: 'professional',
      products: [
        {
          id: 'industrial-robot',
          name: 'Industrial AI Robot',
          description: 'Advanced industrial robot with AI-powered automation',
          price: 15000,
          category: 'Industrial AI',
          vrModel: '/models/industrial-robot.glb',
          dimensions: { x: 1.2, y: 2.1, z: 0.8 },
          position: { x: 0, y: 0, z: 5 },
          rotation: { x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
          features: ['Precision Control', 'Safety Systems', 'Adaptive Learning'],
          rating: 4.7,
          reviews: 156
        }
      ]
    }
  ]

  useEffect(() => {
    // Check VR support
    if ('getVRDisplays' in navigator || 'getVRDevices' in navigator) {
      setVrSupported(true)
      // Detect VR devices
      if ('getVRDisplays' in navigator) {
        (navigator as any).getVRDisplays().then((displays: any[]) => {
          setVrDevices(displays.map((d: any) => d.displayName))
        })
      }
    }

    // Initialize VR experience
    if (isVRMode && canvasRef.current) {
      initializeVRExperience()
    }
  }, [isVRMode])

  const initializeVRExperience = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')

    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    // Set up WebGL context
    gl.clearColor(0.1, 0.1, 0.1, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    // Initialize VR scene
    setupVRScene(gl)
  }

  const setupVRScene = (gl: WebGLRenderingContext) => {
    // Create VR scene with products
    if (currentExperience) {
      currentExperience.products.forEach(product => {
        // Render 3D product model
        renderProductModel(gl, product)
      })
    }
  }

  const renderProductModel = (gl: WebGLRenderingContext, product: VRProduct) => {
    // Simplified 3D rendering for product models
    // In a real implementation, this would load GLB/GLTF models
    console.log(`Rendering ${product.name} at position:`, product.position)
  }

  const enterVRMode = async () => {
    setIsLoading(true)
    
    try {
      // Request VR session
      if ('getVRDisplays' in navigator) {
        const displays = await (navigator as any).getVRDisplays()
        if (displays.length > 0) {
          setIsVRMode(true)
          setCurrentExperience(vrExperiences[0])
        }
      }
    } catch (error) {
      console.error('VR not available:', error)
      // Fallback to immersive mode
      setIsVRMode(true)
      setCurrentExperience(vrExperiences[0])
    }
    
    setIsLoading(false)
  }

  const exitVRMode = () => {
    setIsVRMode(false)
    setCurrentExperience(null)
    setSelectedProduct(null)
  }

  const selectProduct = (product: VRProduct) => {
    setSelectedProduct(product)
  }

  const purchaseProduct = (product: VRProduct) => {
    // Handle product purchase
    console.log(`Purchasing ${product.name} for $${product.price}`)
    // Navigate to checkout
    window.location.href = `/checkout?product=${product.id}`
  }

  const changeExperience = (experience: VRExperience) => {
    setCurrentExperience(experience)
    setSelectedProduct(null)
  }

  const handleVRMovement = (direction: string) => {
    const speed = 0.1
    switch (direction) {
      case 'forward':
        setUserPosition(prev => ({ ...prev, z: prev.z - speed }))
        break
      case 'backward':
        setUserPosition(prev => ({ ...prev, z: prev.z + speed }))
        break
      case 'left':
        setUserPosition(prev => ({ ...prev, x: prev.x - speed }))
        break
      case 'right':
        setUserPosition(prev => ({ ...prev, x: prev.x + speed }))
        break
    }
  }

  return (
    <ModernLayout>
      <div className="relative z-10 container-responsive py-8">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
      <Head>
        <title>AI-Powered Virtual Reality Marketplace - Zion</title>
        <meta name="description" content="Experience the future of shopping with AI-powered virtual reality marketplace. Explore products in immersive 3D environments." />
        <meta name="keywords" content="VR marketplace, AI shopping, virtual reality, 3D products, immersive shopping" />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
                </h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsVRMode(!isVRMode)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25"
              >
                {isVRMode ? 'Exit VR' : 'Enter VR'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {!isVRMode ? (
          /* VR Experience Selection */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-32">
            <div className="text-center mb-12">
              <h1 className="text-4xl md text-6xl font-bold text-white mb-6">
                AI-Powered Virtual Reality Marketplace
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the future of shopping with immersive AI-powered virtual reality. 
                Explore products in stunning 3D environments and interact with AI assistants.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={enterVRMode}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled opacity-50"
                >
                  {isLoading ? 'Loading VR...' : 'Enter Virtual Reality'}
                </button>
                <Link
                  href="/marketplace"
                  className="bg-gray-700 hover bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
                >
                  Browse Traditional Marketplace
                </Link>
              </div>
            </div>

            {/* VR Features */}
            <div className="grid grid-cols-1 md grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-white/10">
                <div className="text-4xl mb-4">🥽</div>
                <h3 className="text-xl font-semibold text-white mb-2">Immersive Experience</h3>
                <p className="text-gray-300">Explore products in stunning 3D environments with realistic lighting and physics.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-lg border border-white/10">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Assistant</h3>
                <p className="text-gray-300">Interact with AI-powered virtual assistants for personalized recommendations.</p>
              </div>
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-white/10">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart Navigation</h3>
                <p className="text-gray-300">Intelligent navigation and product discovery powered by AI algorithms.</p>
              </div>
            </div>

            {/* VR Experiences */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Available VR Experiences</h2>
              <div className="grid grid-cols-1 md grid-cols-3 gap-8">
                {vrExperiences.map((experience) => (
                  <div
                    key={experience.id}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border border-white/10 hover border-purple-500/50 transition-all duration-300 cursor-pointer"
                    onClick={() => changeExperience(experience)}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{experience.name}</h3>
                    <p className="text-gray-300 mb-4">{experience.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Environment: {experience.environment}</span>
                      <span>{experience.products.length} products</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VR Requirements */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">VR Requirements</h3>
              <div className="grid grid-cols-1 md grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Hardware</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• VR Headset (Oculus Quest, HTC Vive, etc.)</li>
                    <li>• Motion Controllers</li>
                    <li>• High-performance computer (for PC VR)</li>
                    <li>• Stable internet connection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Software</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• WebVR-compatible browser</li>
                    <li>• VR runtime (SteamVR, Oculus)</li>
                    <li>• WebGL 2.0 support</li>
                    <li>• Latest graphics drivers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* VR Experience Interface */
          <div className="relative h-screen">
            {/* VR Canvas */}
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ display: 'block' }}
            />

            {/* VR UI Overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* VR Controls */}
              <div className="absolute bottom-4 left-4 pointer-events-auto">
                <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleVRMovement('forward')}
                      className="bg-purple-600 hover bg-purple-700 text-white p-2 rounded"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => handleVRMovement('left')}
                      className="bg-purple-600 hover bg-purple-700 text-white p-2 rounded"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => handleVRMovement('right')}
                      className="bg-purple-600 hover bg-purple-700 text-white p-2 rounded"
                    >
                      →
                    </button>
                    <button
                      onClick={() => handleVRMovement('backward')}
                      className="bg-purple-600 hover bg-purple-700 text-white p-2 rounded col-start-2"
                    >
                      ↓
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info Panel */}
              {selectedProduct && (
                <div className="absolute top-4 right-4 pointer-events-auto">
                  <div className="bg-black/80 backdrop-blur-md rounded-lg p-6 border border-white/20 max-w-sm">
                    <h3 className="text-xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                    <p className="text-gray-300 mb-4">{selectedProduct.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-400">${selectedProduct.price}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-600'}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-gray-400 ml-2">({selectedProduct.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="text-sm text-gray-300">• {feature}</div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => purchaseProduct(selectedProduct)}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover to-emerald-700 text-white px-4 py-4 rounded text-sm font-medium transition-all duration-300"
                      >
                        Purchase
                      </button>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="bg-gray-600 hover bg-gray-700 text-white px-4 py-4 rounded text-sm font-medium transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Selector */}
              <div className="absolute top-4 left-4 pointer-events-auto">
                <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <h4 className="text-white font-semibold mb-2">VR Experiences</h4>
                  <div className="space-y-2">
                    {vrExperiences.map((experience) => (
                      <button
                        key={experience.id}
                        onClick={() => changeExperience(experience)}
                        className={`block w-full text-left px-3 py-4 rounded text-sm transition-all duration-300 ${
                          currentExperience?.id === experience.id
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        }`}
                      >
                        {experience.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exit VR Button */}
              <div className="absolute top-4 right-4 pointer-events-auto">
                <button
                  onClick={exitVRMode}
                  className="bg-red-600 hover bg-red-700 text-white px-4 py-4 rounded text-sm font-medium transition-all duration-300"
                >
                  Exit VR
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      {!isVRMode && (
        <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8 py-8">
            <div className="text-center text-gray-400">
              <p>© 2024 Zion. All rights reserved. | The First Free AI-Powered Marketplace</p>
            </div>
          </div>
        </footer>
      )}
    
        {/* Mobile Navigation */}
        <div className="lg hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <div className="flex justify-around items-center py-2">
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <Search className="w-5 h-5" />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover text-white">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </div>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
}

export default AIPoweredVirtualRealityMarketplace 