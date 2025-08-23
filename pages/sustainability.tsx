import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Globe, 
  Zap, 
  Recycle, 
  Sun, 
  Wind, 
  Droplets, 
  Trees,
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Award,
  Lightbulb,
  Cloud,
  Brain,
  Atom,
  Rocket,
  Code
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const SustainabilityPage: React.FC = () => {
  const initiatives = [
    {
      title: 'Green Cloud Infrastructure',
      description: 'Our cloud platforms are powered by renewable energy sources and optimized for energy efficiency.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      impact: '40% reduction in carbon footprint',
      features: ['Renewable Energy Powered', 'Energy-Efficient Data Centers', 'Carbon-Neutral Operations', 'Green Computing Practices']
    },
    {
      title: 'AI for Environmental Solutions',
      description: 'Leveraging artificial intelligence to develop sustainable solutions for environmental challenges.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      impact: '60% improvement in resource efficiency',
      features: ['Environmental Monitoring', 'Resource Optimization', 'Climate Prediction Models', 'Sustainable AI Training']
    },
    {
      title: 'Quantum Energy Optimization',
      description: 'Using quantum computing to optimize energy consumption and develop sustainable energy solutions.',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      impact: '35% energy savings',
      features: ['Energy Grid Optimization', 'Quantum Energy Algorithms', 'Sustainable Computing', 'Green Quantum Systems']
    },
    {
      title: 'Space-Based Environmental Monitoring',
      description: 'Satellite technology for monitoring environmental changes and promoting sustainable practices.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      impact: 'Real-time environmental tracking',
      features: ['Climate Monitoring', 'Resource Management', 'Environmental Protection', 'Sustainable Space Operations']
    },
    {
      title: 'Circular Economy Solutions',
      description: 'Technology platforms that promote circular economy principles and reduce waste.',
      icon: <Recycle className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      impact: '50% reduction in waste',
      features: ['Waste Reduction', 'Resource Recovery', 'Sustainable Supply Chains', 'Circular Business Models']
    },
    {
      title: 'Green Software Development',
      description: 'Sustainable software development practices that minimize environmental impact.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      impact: '30% lower energy consumption',
      features: ['Efficient Algorithms', 'Green Coding Practices', 'Sustainable Architecture', 'Energy-Aware Development']
    }
  ];

  const commitments = [
    'Carbon-neutral operations by 2026',
    '100% renewable energy usage',
    'Zero-waste office operations',
    'Sustainable supply chain management',
    'Green technology partnerships',
    'Environmental education programs'
  ];

  const achievements = [
    { metric: '40%', label: 'Carbon Footprint Reduction', icon: <Leaf className="w-8 h-8" /> },
    { metric: '100%', label: 'Renewable Energy Usage', icon: <Sun className="w-8 h-8" /> },
    { metric: '60%', label: 'Resource Efficiency Improvement', icon: <TrendingUp className="w-8 h-8" /> },
    { metric: '50%', label: 'Waste Reduction', icon: <Recycle className="w-8 h-8" /> }
  ];

  return (
    <UltraFuturisticBackground variant="holographic" intensity="high">
      <div className="container mx-auto px-4 pt-28 pb-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Sustainability</h1>
        <p className="text-gray-300 max-w-3xl">We apply energy-efficient infra, optimize workloads, and promote remote-first collaboration to reduce carbon footprint.</p>
      </div>
    </Layout>
  );
};

export default SustainabilityPage;