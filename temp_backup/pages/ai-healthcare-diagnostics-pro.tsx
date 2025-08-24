import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Brain, Zap, Target, BarChart3, Users, TrendingUp, 
  MessageSquare, Mail, Phone, MapPin, ArrowRight,
  Star, CheckCircle, Rocket, Globe, Shield, Cpu,
  FileText, Image, Video, Music, Palette, Type,
  User, Search, Eye, Heart, ShoppingCart, Activity,
  Stethoscope, Brain, Zap, Users2, Award, CheckCircle,
  AlertTriangle, Target, BarChart3, TrendingUp, Microscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Healthcare Diagnostics Pro | Zion Tech Group',
  description: 'Advanced AI-powered healthcare diagnostics platform that provides accurate medical diagnosis and treatment recommendations.',
  keywords: 'AI healthcare, medical diagnostics, AI diagnosis, healthcare AI, medical AI, diagnostic platform',
  openGraph: {
    title: 'AI Healthcare Diagnostics Pro | Zion Tech Group',
    description: 'Advanced AI-powered healthcare diagnostics platform that provides accurate medical diagnosis and treatment recommendations.',
    url: 'https://ziontechgroup.com/ai-healthcare-diagnostics-pro',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://ziontechgroup.com/og-image-ai-healthcare-diagnostics-pro.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Healthcare Diagnostics Pro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Healthcare Diagnostics Pro | Zion Tech Group',
    description: 'Advanced AI-powered healthcare diagnostics platform that provides accurate medical diagnosis and treatment recommendations.',
    images: ['https://ziontechgroup.com/og-image-ai-healthcare-diagnostics-pro.jpg'],
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-healthcare-diagnostics-pro',
  },
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function AIHealthcareDiagnosticsPro() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <Stethoscope className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Diagnostics
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Diagnostics Pro
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's most advanced AI healthcare diagnostics platform that provides accurate medical diagnosis, 
              treatment recommendations, and patient care optimization.
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
              Revolutionary AI Healthcare Diagnostics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform handles every aspect of healthcare diagnostics from medical imaging to treatment planning, 
              continuously learning and improving diagnostic accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Intelligence</h3>
              <p className="text-gray-400">
                Advanced AI that analyzes medical data, images, and patient history for accurate diagnosis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medical Imaging</h3>
              <p className="text-gray-400">
                Advanced analysis of X-rays, MRIs, CT scans, and other medical imaging with high accuracy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patient Monitoring</h3>
              <p className="text-gray-400">
                Continuous monitoring of patient vital signs and health indicators for early intervention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Treatment Planning</h3>
              <p className="text-gray-400">
                Personalized treatment recommendations based on diagnosis and patient-specific factors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="text-gray-400">
                Forecasts disease progression and identifies risk factors for preventive care.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clinical Decision Support</h3>
              <p className="text-gray-400">
                Evidence-based recommendations and clinical guidelines for healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Healthcare Diagnostic Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform provides comprehensive diagnostic tools across all medical specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Radiology & Imaging</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• X-ray analysis</li>
                <li>• MRI interpretation</li>
                <li>• CT scan analysis</li>
                <li>• Ultrasound imaging</li>
                <li>• Mammography screening</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Cardiology</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• ECG analysis</li>
                <li>• Heart rhythm monitoring</li>
                <li>• Cardiac imaging</li>
                <li>• Risk assessment</li>
                <li>• Treatment planning</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Neurology</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Brain imaging analysis</li>
                <li>• Neurological assessment</li>
                <li>• Cognitive testing</li>
                <li>• Stroke detection</li>
                <li>• Treatment optimization</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/20">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-400">Oncology</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Cancer detection</li>
                <li>• Tumor analysis</li>
                <li>• Treatment planning</li>
                <li>• Prognosis assessment</li>
                <li>• Clinical trials</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">Primary Care</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Symptom analysis</li>
                <li>• Disease diagnosis</li>
                <li>• Preventive care</li>
                <li>• Chronic disease management</li>
                <li>• Health monitoring</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/20">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Laboratory Medicine</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Blood test analysis</li>
                <li>• Pathology review</li>
                <li>• Genetic testing</li>
                <li>• Biomarker analysis</li>
                <li>• Diagnostic algorithms</li>
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
              How AI Healthcare Diagnostics Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform operates in a continuous cycle of learning, analyzing, and improving diagnostic accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-400">
                AI collects and analyzes medical data, images, and patient information from multiple sources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-400">
                Advanced algorithms analyze medical data and images for patterns and abnormalities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnosis Generation</h3>
              <p className="text-gray-400">
                Generates accurate diagnoses and treatment recommendations based on analysis results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-400">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Learns from outcomes and feedback to continuously improve diagnostic accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Revolutionize Healthcare Diagnostics with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of healthcare where AI provides accurate diagnosis while healthcare providers focus on patient care.
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
                Ready to implement advanced AI healthcare diagnostics? Our team is here to help you get started.
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
                See our AI Healthcare Diagnostics Pro Platform in action. Schedule a personalized demo today.
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