import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Award, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Lightbulb,
  BarChart3,
  Rocket,
  Shield,
  Clock
} from 'lucide-react';
import { AdvancedServiceRecommendation } from '../components/AdvancedServiceRecommendation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const ServiceRecommendations: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-zion-cyan" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your business profile to find perfect service matches'
    },
    {
      icon: <Target className="w-6 h-6 text-zion-purple" />,
      title: 'Personalized Matching',
      description: 'Get recommendations tailored to your industry, budget, and technology maturity'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-zion-green" />,
      title: 'ROI Optimization',
      description: 'Focus on services that deliver the highest return on investment for your business'
    },
    {
      icon: <Award className="w-6 h-6 text-zion-orange" />,
      title: 'Expert Validation',
      description: 'All recommendations are validated by our technology experts and industry specialists'
    }
  ];

  const benefits = [
    'Save time researching and comparing different service options',
    'Get personalized recommendations based on your specific business needs',
    'Understand implementation complexity and expected timelines',
    'Focus on high-priority solutions with proven ROI potential',
    'Access to our comprehensive portfolio of cutting-edge services',
    'Expert guidance throughout the selection and implementation process'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Tell Us About Your Business',
      description: 'Fill out our comprehensive business profile form with industry, size, goals, and challenges',
      icon: <Users className="w-8 h-8 text-zion-cyan" />
    },
    {
      step: 2,
      title: 'AI Analysis & Matching',
      description: 'Our AI engine analyzes your profile and matches it with the most suitable services',
      icon: <Brain className="w-8 h-8 text-zion-purple" />
    },
    {
      step: 3,
      title: 'Personalized Recommendations',
      description: 'Receive detailed recommendations with match scores, priorities, and implementation details',
      icon: <Target className="w-8 h-8 text-zion-green" />
    },
    {
      step: 4,
      title: 'Expert Consultation',
      description: 'Connect with our experts to discuss implementation and get started with your chosen solution',
      icon: <Award className="w-8 h-8 text-zion-orange" />
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
              AI-Powered Service Recommendations
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect technology solutions for your business with our intelligent 
              recommendation engine. Get personalized matches based on your industry, goals, and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => document.getElementById('recommendation-engine')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-zion-purple text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Recommendation Help', '_blank')}
              >
                Learn More
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
              How Our AI Recommendation Engine Works
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our advanced AI analyzes your business profile to provide intelligent, 
              personalized service recommendations that maximize your ROI and success.
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

      {/* Process Steps Section */}
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
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Getting personalized service recommendations is quick and easy with our streamlined process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {step.icon}
                    <h3 className="text-xl font-bold text-zion-blue-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-zion-slate-light">
                    {step.description}
                  </p>
                </div>
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
              Why Use Our Recommendation Engine?
            </h2>
            <p className="text-lg text-zion-slate-light">
              Discover the advantages of AI-powered service matching for your business
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

      {/* Recommendation Engine Section */}
      <section id="recommendation-engine" className="py-16 px-6 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zion-blue-dark mb-4">
              Get Your Personalized Recommendations
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Fill out our comprehensive business profile and let our AI engine 
              find the perfect services for your needs.
            </p>
          </motion.div>

          <AdvancedServiceRecommendation />
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our AI-powered recommendation engine will help you find the perfect 
              technology solutions to accelerate your business growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg px-8 py-4"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation', '_blank')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Transformation
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

export default ServiceRecommendations;