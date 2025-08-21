import React from 'react';
import UltraFuturisticBackground2029 from '@/components/ui/UltraFuturisticBackground2029';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Ultra-futuristic background */}
      <UltraFuturisticBackground2029 />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0">
                <Rocket className="w-4 h-4 mr-2" />
                Welcome to 2029
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of technology with cutting-edge solutions, 
              quantum computing, and AI-driven innovation for tomorrow's challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Explore Our Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge innovations that are reshaping industries and transforming the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black/20 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-cyan-400">Quantum Computing</CardTitle>
                  <CardDescription className="text-gray-300">
                    Next-generation quantum processors solving complex problems in seconds.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Our quantum computing platform delivers unprecedented computational power for scientific research, cryptography, and AI training.
                  </p>
                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-400">AI & Machine Learning</CardTitle>
                  <CardDescription className="text-gray-300">
                    Advanced neural networks and deep learning algorithms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    State-of-the-art AI models that understand, learn, and adapt to provide intelligent solutions across all industries.
                  </p>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-sm border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-pink-400">Cybersecurity</CardTitle>
                  <CardDescription className="text-gray-300">
                    Quantum-resistant encryption and advanced threat detection.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Next-level security solutions protecting data and systems from emerging cyber threats and quantum attacks.
                  </p>
                  <Button variant="ghost" className="text-pink-400 hover:text-pink-300 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-cyan-400">Global Infrastructure</CardTitle>
                  <CardDescription className="text-gray-300">
                    Worldwide network of data centers and edge computing nodes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Distributed computing infrastructure ensuring low-latency, high-availability services across the globe.
                  </p>
                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-400">Digital Transformation</CardTitle>
                  <CardDescription className="text-gray-300">
                    Complete business modernization and digital strategy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    End-to-end digital transformation services helping organizations thrive in the digital age.
                  </p>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/20 backdrop-blur-sm border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-pink-400">Innovation Lab</CardTitle>
                  <CardDescription className="text-gray-300">
                    Research and development for future technologies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Our innovation lab explores emerging technologies and creates breakthrough solutions for tomorrow's challenges.
                  </p>
                  <Button variant="ghost" className="text-pink-400 hover:text-pink-300 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400">500+</div>
                <div className="text-gray-400">Global Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-purple-400">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-pink-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution and discover how Zion Tech Group can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg">
                <Lightbulb className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-cyan-400">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future of technology since 2019
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Contact</span>
              <span>Careers</span>
            </div>
            <div className="mt-6 text-gray-500 text-sm">
              © 2029 Zion Tech Group. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}