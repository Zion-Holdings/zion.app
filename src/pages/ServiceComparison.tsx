import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import { AdvancedServiceComparison } from '../components/AdvancedServiceComparison';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ServiceComparison: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-zion-cyan" />,
      title: 'Advanced Filtering',
      description: 'Filter services by category, complexity, price range, and technology stack'
    },
    {
      icon: <Target className="w-6 h-6 text-zion-purple" />,
      title: 'Smart Comparison',
      description: 'Compare multiple services side-by-side with detailed feature analysis'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-zion-green" />,
      description: 'Real-time ratings and popularity indicators to guide your decision'
    },
    {
      icon: <Award className="w-6 h-6 text-zion-orange" />,
      title: 'Expert Insights',
      description: 'Get detailed insights into each service\'s capabilities and target audience'
    }
  ];

  const benefits = [
    'Make informed decisions with comprehensive service comparisons',
    'Find the perfect service tier for your business needs and budget',
    'Understand complexity levels and implementation requirements',
    'Compare pricing, features, and benefits across different solutions',
    'Get personalized recommendations based on your requirements'
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
              Service Comparison
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Make informed decisions with our comprehensive service comparison tool. 
              Compare features, pricing, and complexity levels to find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => document.getElementById('comparison-tool')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Comparing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-zion-purple text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Comparison Help', '_blank')}
              >
                Get Expert Help
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Use Our Comparison Tool?
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our advanced comparison platform helps you make the best decisions for your business 
              with comprehensive analysis and expert insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-zion-blue-light/10 rounded-full flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-zion-blue-dark">
                      {feature.title}
                    </CardTitle>
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
              Key Benefits
            </h2>
            <p className="text-lg text-zion-slate-light">
              Discover how our comparison tool can transform your decision-making process
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

      {/* Comparison Tool Section */}
      <section id="comparison-tool" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Start Comparing Services
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Use our advanced comparison tool to evaluate different service tiers, 
              features, and pricing options to find your perfect match.
            </p>
          </motion.div>

          <AdvancedServiceComparison />
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
              Need Help Choosing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you navigate through our services 
              and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Selection Help', '_blank')}
              >
                <Users className="w-5 h-5 mr-2" />
                Get Expert Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-zion-purple text-lg px-8 py-4"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                <Zap className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceComparison;