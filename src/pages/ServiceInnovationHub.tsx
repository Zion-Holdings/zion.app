import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Rocket, 
  Brain, 
  TrendingUp, 
  Award, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Globe,
  Atom,
  Satellite,
  Dna,
  Leaf,
  Cpu,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';
import { AdvancedServiceInnovationHub } from '../components/AdvancedServiceInnovationHub';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const ServiceInnovationHub: React.FC = () => {
  const innovationAreas = [
    {
      icon: <Atom className="w-8 h-8 text-zion-cyan" />,
      title: 'Quantum Technology',
      description: 'Revolutionary quantum computing, cryptography, and quantum internet solutions',
      trends: ['Quantum Supremacy', 'Quantum Internet', 'Quantum Materials'],
      investment: '$150B+'
    },
    {
      icon: <Brain className="w-8 h-8 text-zion-purple" />,
      title: 'Artificial Intelligence',
      description: 'Advanced AI consciousness, governance, and neural network optimization',
      trends: ['AI Consciousness', 'AI Governance', 'Neural Optimization'],
      investment: '$300B+'
    },
    {
      icon: <Satellite className="w-8 h-8 text-zion-blue" />,
      title: 'Space Technology',
      description: 'Space mining, propulsion, habitats, and debris cleanup systems',
      trends: ['Space Mining', 'Space Propulsion', 'Space Habitats'],
      investment: '$200B+'
    },
    {
      icon: <Dna className="w-8 h-8 text-zion-green" />,
      title: 'Biotech AI',
      description: 'Synthetic biology, brain-computer interfaces, and AI-powered drug discovery',
      trends: ['Synthetic Biology', 'Brain-Computer Interfaces', 'AI Drug Discovery'],
      investment: '$100B+'
    },
    {
      icon: <Leaf className="w-8 h-8 text-zion-emerald" />,
      title: 'Green Technology',
      description: 'Fusion energy, climate engineering, and sustainable technology solutions',
      trends: ['Fusion Energy', 'Climate Engineering', 'Sustainable Tech'],
      investment: '$500B+'
    },
    {
      icon: <Cpu className="w-8 h-8 text-zion-orange" />,
      title: 'Advanced Computing',
      description: 'Neuromorphic computing, edge AI, and model compression technologies',
      trends: ['Neuromorphic Computing', 'Edge AI', 'Model Compression'],
      investment: '$80B+'
    }
  ];

  const keyInsights = [
    {
      title: 'Quantum Revolution',
      description: 'Quantum computing will transform industries from finance to pharmaceuticals within the next decade',
      impact: 'High',
      timeline: '2025-2035'
    },
    {
      title: 'AI Consciousness',
      description: 'The development of self-aware AI systems will create new ethical and technological paradigms',
      impact: 'High',
      timeline: '2030-2040'
    },
    {
      title: 'Space Economy',
      description: 'Space mining and colonization will create trillion-dollar economic opportunities',
      impact: 'High',
      timeline: '2030-2060'
    },
    {
      title: 'Synthetic Biology',
      description: 'Custom organisms and bio-manufacturing will revolutionize industrial processes',
      impact: 'High',
      timeline: '2025-2035'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Service Innovation Hub
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge innovation trends, future technology roadmaps, and strategic insights 
              that will shape the next generation of revolutionary services and solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => document.getElementById('innovation-hub')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Innovation Hub
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-zion-purple text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Innovation Strategy Consultation', '_blank')}
              >
                Get Innovation Strategy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Areas Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Innovation Areas
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our comprehensive innovation hub covers the most transformative technology sectors 
              that will define the future of business and society.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-zion-blue-light/10 rounded-full flex items-center justify-center mb-4">
                      {area.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-zion-blue-dark mb-2">
                      {area.title}
                    </CardTitle>
                    <p className="text-sm text-zion-slate-light mb-3">
                      {area.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-zion-cyan">
                        {area.investment}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        Investment
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-zion-slate-dark">Key Trends:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.trends.map((trend, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {trend}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 px-6 bg-zion-blue-light/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Key Innovation Insights
            </h2>
            <p className="text-lg text-zion-slate-light">
              Strategic insights and predictions that will guide your innovation strategy and technology investments
            </p>
          </motion.div>

          <div className="space-y-6">
            {keyInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center text-white">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-zion-blue-dark">
                            {insight.title}
                          </h3>
                          <Badge className="bg-red-100 text-red-800">
                            {insight.impact} Impact
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {insight.timeline}
                          </Badge>
                        </div>
                        <p className="text-zion-slate-light">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Hub Section */}
      <section id="innovation-hub" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Interactive Innovation Hub
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive innovation hub with real-time trends, future roadmaps, 
              and strategic insights for informed decision making.
            </p>
          </motion.div>

          <AdvancedServiceInnovationHub />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Lead the Innovation Revolution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our innovation hub provides the insights, strategies, and tools you need to stay ahead 
              of emerging technologies and capitalize on future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Innovation Leadership Consultation', '_blank')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Lead Innovation
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-zion-purple text-lg px-8 py-4"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                <Shield className="w-5 h-5 mr-2" />
                Speak with an Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceInnovationHub;