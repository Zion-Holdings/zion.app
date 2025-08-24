import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, GraduationCap,
  BookOpen, Lightbulb, Brain, Zap, Users2, Award,
  Clock, Target, BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Education Platform Pro | Zion Tech Group',
  description: 'Revolutionary AI-powered education platform that provides personalized learning experiences and intelligent educational content.',
  keywords: 'AI education platform, personalized learning, AI tutoring, educational technology, adaptive learning, online education',
  openGraph: {
    title: 'AI Education Platform Pro | Zion Tech Group',
    description: 'Revolutionary AI-powered education platform that provides personalized learning experiences and intelligent educational content.',
    url: 'https://ziontechgroup.com/ai-education-platform-pro',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-ai-education-platform-pro.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Education Platform Pro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Education Platform Pro | Zion Tech Group',
    description: 'Revolutionary AI-powered education platform that provides personalized learning experiences and intelligent educational content.',
    images: ['https://ziontechgroup.com/og-image-ai-education-platform-pro.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-education-platform-pro',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AIEducationPlatformPro() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <GraduationCap className="w-4 h-4 mr-2" />
              AI-Powered Education Platform
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Education Platform Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's most advanced AI education platform that provides personalized learning experiences, 
              intelligent content creation, and adaptive learning paths for students of all ages and levels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Revolutionary AI Education Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform handles every aspect of education from content creation to personalized learning, 
              continuously adapting to each student's unique needs and learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Intelligence</h3>
              <p className="text-gray-400">
                Advanced AI that understands learning patterns, adapts content, and personalizes education for each student.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
              <p className="text-gray-400">
                Tailored educational experiences that adapt to individual learning styles and pace.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-400">
                AI-generated educational content that's engaging, accurate, and tailored to curriculum standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptive Assessment</h3>
              <p className="text-gray-400">
                Intelligent testing that adjusts difficulty based on student performance and understanding.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-gray-400">
                Comprehensive monitoring of student progress, achievements, and areas for improvement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gamification</h3>
              <p className="text-gray-400">
                Engaging learning experiences with rewards, achievements, and interactive elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Educational Platform Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform provides comprehensive educational tools and features for modern learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Course Management</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Curriculum design</li>
                <li>• Lesson planning</li>
                <li>• Resource management</li>
                <li>• Progress tracking</li>
                <li>• Assessment tools</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">AI Tutoring</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Personalized assistance</li>
                <li>• 24/7 availability</li>
                <li>• Adaptive explanations</li>
                <li>• Problem solving</li>
                <li>• Concept clarification</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Content Generation</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Lesson materials</li>
                <li>• Practice exercises</li>
                <li>• Quizzes & tests</li>
                <li>• Study guides</li>
                <li>• Multimedia content</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Learning Analytics</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Performance metrics</li>
                <li>• Learning patterns</li>
                <li>• Engagement tracking</li>
                <li>• Progress reports</li>
                <li>• Predictive insights</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Collaborative Learning</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Group projects</li>
                <li>• Peer learning</li>
                <li>• Discussion forums</li>
                <li>• Team challenges</li>
                <li>• Social learning</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Flexible Scheduling</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Self-paced learning</li>
                <li>• Adaptive timelines</li>
                <li>• Reminder systems</li>
                <li>• Progress milestones</li>
                <li>• Time management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How AI Education Platform Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform operates in a continuous cycle of learning, adapting, and optimizing educational experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Student Assessment</h3>
              <p className="text-gray-400">
                AI evaluates student knowledge, learning style, and preferences through initial assessments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Planning</h3>
              <p className="text-gray-400">
                Creates customized learning paths and content based on individual student needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptive Learning</h3>
              <p className="text-gray-400">
                Continuously adjusts content difficulty and approach based on real-time performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Optimization</h3>
              <p className="text-gray-400">
                Learns from student interactions to improve future learning experiences and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Revolutionize Education with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of education where AI provides personalized learning while educators focus on inspiration and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border border-blue-500/30 rounded-xl font-semibold text-blue-300 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to transform education with AI-powered learning? Our team is here to help you get started.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
              <p className="text-gray-400 mb-6">
                See our AI Education Platform Pro in action. Schedule a personalized demo today.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}