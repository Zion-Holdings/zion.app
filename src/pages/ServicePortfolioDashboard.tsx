import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Award, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Lightbulb,
  Rocket,
  Shield,
  Clock,
  Target,
  DollarSign,
  Brain,
  Eye
} from 'lucide-react';
import AdvancedServicePortfolioDashboard from '../components/AdvancedServicePortfolioDashboard';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ServicePortfolioDashboard: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-zion-cyan" />,
      title: 'Comprehensive Analytics',
      description: 'Real-time insights into service performance, revenue, and growth metrics'
    },
    {
      icon: <PieChart className="w-6 h-6 text-zion-purple" />,
      title: 'Portfolio Visualization',
      description: 'Interactive charts and graphs showing service distribution and trends'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-zion-green" />,
      title: 'Performance Tracking',
      description: 'Monitor service performance, client satisfaction, and market demand'
    },
    {
      icon: <Target className="w-6 h-6 text-zion-orange" />,
      title: 'Strategic Insights',
      description: 'Data-driven recommendations for portfolio optimization and growth'
    }
  ];

  const benefits = [
    'Comprehensive view of all service offerings and their performance',
    'Real-time analytics and performance metrics for informed decision making',
    'Portfolio optimization insights and strategic recommendations',
    'Client engagement tracking and revenue analysis',
    'Market demand analysis and competitive positioning',
    'Technology maturity assessment and innovation tracking'
  ];

  const portfolioStats = [
    {
      label: 'Total Services',
      value: '52+',
      description: 'Cutting-edge technology solutions',
      icon: <Rocket className="w-8 h-8 text-zion-cyan" />
    },
    {
      label: 'Technology Categories',
      value: '12+',
      description: 'Major technology sectors covered',
      icon: <Brain className="w-8 h-8 text-zion-purple" />
    },
    {
      label: 'Price Range',
      value: '$5K-$2M',
      description: 'Monthly service pricing',
      icon: <DollarSign className="w-8 h-8 text-zion-green" />
    },
    {
      label: 'Market Coverage',
      value: '95%+',
      description: 'Technology market segments',
      icon: <Globe className="w-8 h-8 text-zion-orange" />
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
              Service Portfolio Dashboard
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive insights into our revolutionary service portfolio, performance metrics, 
              and strategic analysis for informed decision making and portfolio optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => document.getElementById('portfolio-dashboard')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-zion-purple text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Portfolio Strategy Consultation', '_blank')}
              >
                Get Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Statistics */}
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
              Portfolio Overview
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our comprehensive service portfolio spans cutting-edge technologies across all major sectors, 
              providing unmatched coverage and innovation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-zion-blue-light/10 rounded-full flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-zion-blue-dark mb-2">
                      {stat.value}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">
                      {stat.label}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-zion-blue-light/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Dashboard Features
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Powerful tools and insights to help you understand, analyze, and optimize your service portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-zion-blue-light/10 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg text-zion-blue-dark">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Why Use Our Portfolio Dashboard?
            </h2>
            <p className="text-lg text-zion-slate-light">
              Discover the advantages of comprehensive portfolio management and strategic insights
            </p>
          </motion.div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                <span className="text-zion-slate-dark">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Dashboard Section */}
      <section id="portfolio-dashboard" className="py-16 px-6 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Interactive Portfolio Dashboard
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive service portfolio with real-time analytics, 
              performance metrics, and strategic insights.
            </p>
          </motion.div>

          <AdvancedServicePortfolioDashboard />
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
              Ready to Optimize Your Portfolio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our comprehensive portfolio dashboard provides the insights you need to make 
              informed decisions and drive strategic growth in your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Portfolio Optimization Consultation', '_blank')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Portfolio Strategy
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

export default ServicePortfolioDashboard;