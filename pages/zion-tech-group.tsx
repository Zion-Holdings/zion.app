import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Code,
  Database, Users2, Award, Lock, Server, Network, 
  Monitor, Settings, RefreshCw, Play, Pause, 
  AlertTriangle, CheckCircle2, Building, Wifi, 
  HardDrive, Cloud, Smartphone, Blocks, Wallet, 
  CreditCard, PiggyBank, Building2, Activity,
  Waves, BrainCircuit, CpuIcon, MonitorHeart,
  Film, Headphones, Camera, Gamepad2, Tv, Radio,
  Factory, Cog, Gauge, Wrench, Settings2, CpuIcon2,
  Calendar, Clock, FileText2, PieChart, Atom,
  Truck, ChevronRight, Home
} from 'lucide-react';

export default function ZionTechGroupPage() {
  return (
    <>
      <Head>
        <title>About Zion Tech Group | Revolutionary Quantum AI & Autonomous Systems</title>
        <meta name="description" content="Discover Zion Tech Group's mission to revolutionize technology with quantum AI, autonomous systems, and cutting-edge platforms. Learn about our innovative solutions and global impact." />
        <meta name="keywords" content="Zion Tech Group, about us, quantum AI, autonomous systems, technology innovation, company mission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/zion-tech-group" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link href="/" className="text-gray-300 hover:text-white">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <span className="ml-4 text-sm font-medium text-white">About Zion Tech Group</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">About</span>
                <span className="block text-purple-400">Zion Tech Group</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                We are the architects of tomorrow, building revolutionary quantum AI solutions and autonomous systems that will define the next decade of innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To accelerate human progress through revolutionary quantum AI technology, autonomous systems, and cutting-edge platforms that solve humanity's greatest challenges.
                </p>
                <p className="text-gray-300">
                  We believe that technology should serve humanity, not replace it. Our solutions are designed to augment human capabilities, enhance decision-making, and create a more sustainable and prosperous future for all.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the global leader in quantum AI innovation, creating a world where artificial intelligence and human intelligence work in perfect harmony to solve complex problems.
                </p>
                <p className="text-gray-300">
                  We envision a future where our technology platforms enable breakthroughs in healthcare, climate change, space exploration, and countless other fields that will shape the destiny of our species.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape the culture of our organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible, embracing cutting-edge technologies and unconventional thinking.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ethical Responsibility</h3>
                <p className="text-gray-300">
                  We develop technology with a deep commitment to ethical principles, ensuring our solutions benefit humanity and protect our future.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Human-Centric Design</h3>
                <p className="text-gray-300">
                  Every solution we create is designed with human needs at the center, ensuring technology serves people, not the other way around.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
                <p className="text-gray-300">
                  We think globally and act locally, creating solutions that can scale to benefit communities around the world.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of quality in everything we do, from research and development to customer support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Future-Focused</h3>
                <p className="text-gray-300">
                  We don't just adapt to change; we anticipate it and create the technologies that will define tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the most advanced technologies available to create revolutionary solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-300 text-sm">
                  Next-generation quantum processors and algorithms for unprecedented computational power.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Artificial Intelligence</h3>
                <p className="text-gray-300 text-sm">
                  Advanced machine learning, neural networks, and AI systems that learn and adapt.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm">
                  Scalable, secure cloud platforms built for the most demanding applications.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">
                  Quantum-resistant encryption and AI-powered threat detection systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Company Statistics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our impact in numbers - showcasing the scale and reach of our technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts who are driving innovation at Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
                <p className="text-purple-400 mb-2">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Visionary leader with over a decade of experience in quantum computing and AI innovation.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dr. Sarah Chen</h3>
                <p className="text-purple-400 mb-2">Chief Technology Officer</p>
                <p className="text-gray-300 text-sm">
                  Quantum computing expert with PhD from MIT and 15+ years in advanced AI research.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Marcus Rodriguez</h3>
                <p className="text-purple-400 mb-2">Chief Security Officer</p>
                <p className="text-gray-300 text-sm">
                  Cybersecurity specialist with expertise in quantum-resistant encryption and threat detection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to Join the Future?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-100">
              Discover how Zion Tech Group can transform your business with revolutionary technology solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-purple-700">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/40">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-300 text-base">
                  Leading the future with revolutionary quantum AI solutions and autonomous systems.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Quantum AI
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Autonomous Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          Technology Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <Link href="/zion-tech-group" className="text-base text-gray-300 hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2025 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}