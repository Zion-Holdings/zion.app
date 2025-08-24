import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, ArrowRight, Star, Users, TrendingUp, Shield, 
  Zap, BarChart3, MessageSquare, Target, Heart, Award
} from 'lucide-react';

const AIPoweredCustomerSuccessAutomation = () => {
  const features = [
    'Predictive churn scoring with 95% accuracy',
    'Automated onboarding sequence optimization',
    'Customer health monitoring and alerts',
    'Personalized success playbooks',
    'Integration with CRM and support tools',
    'Advanced analytics and reporting dashboard',
    'Multi-channel communication automation',
    'Customer sentiment analysis'
  ];

  const benefits = [
    'Reduce customer churn by 40%',
    'Increase customer lifetime value by 60%',
    'Automate 80% of customer success tasks',
    'Improve customer satisfaction scores',
    'Scale operations without additional headcount',
    'Data-driven decision making'
  ];

  const useCases = [
    'SaaS companies looking to reduce churn',
    'B2B businesses with complex customer journeys',
    'Customer success teams needing automation',
    'Companies with high customer acquisition costs',
    'Businesses focused on customer retention'
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Intercom', 'Zendesk', 
    'Slack', 'Microsoft Teams', 'Gmail', 'Calendly'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO 
        title="AI-Powered Customer Success Automation | Zion Tech Group"
        description="Predictive churn prevention and automated customer journey optimization. Reduce churn by 40% and increase customer lifetime value with AI-powered customer success automation."
        keywords="customer success automation, AI customer success, churn prevention, customer retention, customer success platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">🎯</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI-Powered Customer Success Automation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Predict customer churn before it happens and automate your customer success workflows. 
                Reduce churn by 40% and increase customer lifetime value with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start with our 21-day free trial. No credit card required.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Professional Plan
                </h3>
                <div className="text-6xl font-bold text-emerald-600 mb-2">
                  $299
                </div>
                <div className="text-xl text-gray-600">per month</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Additional Benefits:</h4>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
                >
                  Start Free Trial
                </motion.button>
                <p className="text-sm text-gray-500 mt-3">
                  Free for 21 days • No setup fees • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Customer Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to automate customer success 
              and prevent churn before it happens.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Predictive Churn Scoring
              </h3>
              <p className="text-gray-600">
                Identify at-risk customers with 95% accuracy using advanced machine learning algorithms.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automated Workflows
              </h3>
              <p className="text-gray-600">
                Create intelligent workflows that automatically engage customers at the right time.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced Analytics
              </h3>
              <p className="text-gray-600">
                Get deep insights into customer behavior and success metrics with real-time dashboards.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Seamless Integrations
              </h3>
              <p className="text-gray-600">
                Connect with your existing tools and workflows without any disruption.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multi-Channel Communication
              </h3>
              <p className="text-gray-600">
                Reach customers through email, SMS, Slack, and more with personalized messaging.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sentiment Analysis
              </h3>
              <p className="text-gray-600">
                Understand customer emotions and satisfaction levels in real-time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect For Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a growing SaaS company or an established enterprise, 
              our platform scales with your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200"
              >
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {useCase}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Proven Results for Our Customers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">40%</div>
              <div className="text-xl">Reduction in Churn</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">60%</div>
              <div className="text-xl">Increase in LTV</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">80%</div>
              <div className="text-xl">Task Automation</div>
            </div>
          </div>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            "Our customer success team has been transformed. We're now able to proactively 
            identify and address customer issues before they become problems."
          </p>
          <div className="text-lg font-semibold">- Sarah Johnson, VP Customer Success, TechCorp</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Customer Success?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of companies that have already improved their customer retention 
            and success metrics with our AI-powered platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-colors"
            >
              Contact Sales
            </motion.button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Questions? Call us at <a href="tel:+13024640950" className="text-emerald-600 hover:underline">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-600 hover:underline">kleber@ziontechgroup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredCustomerSuccessAutomation;