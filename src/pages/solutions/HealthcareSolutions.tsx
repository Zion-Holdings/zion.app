import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  Shield, 
  Database, 
  Brain, 
  Activity,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

export default function HealthcareSolutions() {
  const solutions = [
    {
      icon: Heart,
      title: "Patient Care AI",
      description: "AI-powered patient monitoring and personalized care recommendations",
      features: ["Real-time Monitoring", "Predictive Analytics", "Personalized Treatment Plans", "Remote Patient Care"]
    },
    {
      icon: Stethoscope,
      title: "Diagnostic Assistance",
      description: "Advanced AI diagnostics and medical imaging analysis",
      features: ["Medical Image Analysis", "Symptom Assessment", "Disease Prediction", "Treatment Recommendations"]
    },
    {
      icon: Shield,
      title: "Healthcare Security",
      description: "HIPAA-compliant security and data protection solutions",
      features: ["Data Encryption", "Access Control", "Audit Trails", "Compliance Monitoring"]
    },
    {
      icon: Database,
      title: "Health Data Management",
      description: "Secure and efficient healthcare data infrastructure",
      features: ["Electronic Health Records", "Data Interoperability", "Analytics Platform", "Cloud Storage"]
    },
    {
      icon: Brain,
      title: "Clinical Decision Support",
      description: "AI-powered clinical decision support systems",
      features: ["Evidence-based Guidelines", "Risk Assessment", "Drug Interaction Checking", "Clinical Pathways"]
    },
    {
      icon: Activity,
      title: "Operational Efficiency",
      description: "Streamlined healthcare operations and resource management",
      features: ["Resource Optimization", "Workflow Automation", "Performance Analytics", "Cost Management"]
    }
  ];

  const benefits = [
    "Improved patient outcomes and care quality",
    "Reduced medical errors and diagnostic time",
    "Enhanced operational efficiency and cost savings",
    "Better patient engagement and satisfaction",
    "Streamlined administrative processes",
    "Enhanced data security and compliance"
  ];

  const caseStudies = [
    {
      organization: "Regional Medical Center",
      specialty: "Cardiology",
      challenge: "High patient readmission rates and inefficient care coordination",
      solution: "Implemented AI-powered patient monitoring and predictive analytics",
      results: "25% reduction in readmissions, 40% improvement in care coordination"
    },
    {
      organization: "Urban Hospital Network",
      specialty: "Emergency Medicine",
      challenge: "Long wait times and resource allocation inefficiencies",
      solution: "AI-driven triage system and resource optimization platform",
      results: "30% reduction in wait times, 35% improvement in resource utilization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing healthcare delivery with AI-powered solutions that improve patient outcomes and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Healthcare Quote
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From patient care to operational efficiency, we provide end-to-end healthcare technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements in patient care and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from healthcare organizations using our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-400">{study.specialty}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{study.organization}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Challenge:</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Solution:</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-1">Results:</h4>
                    <p className="text-gray-300">{study.results}</p>
                  </div>
                </div>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our healthcare solutions can improve patient outcomes and operational efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/services-overview"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}