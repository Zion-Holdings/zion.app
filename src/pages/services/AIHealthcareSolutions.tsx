import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Shield, 
  Clock, 
  TrendingUp, 
  Users, 
  Globe,
  Activity,
  CheckCircle,
  BarChart3,
  Zap,
  Target,
  Pill,
  Microscope,
  FileText,
  Lock,
  Award
} from 'lucide-react';

export default function AIHealthcareSolutions() {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Intelligent diagnostic assistance using advanced machine learning and medical imaging",
      icon: Stethoscope,
      benefits: ["95% diagnostic accuracy", "Faster diagnosis", "Early detection", "Reduced errors"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-driven patient outcome prediction and risk assessment",
      icon: Brain,
      benefits: ["Risk stratification", "Outcome prediction", "Preventive care", "Resource optimization"]
    },
    {
      title: "Medical Imaging Analysis",
      description: "Advanced AI analysis of X-rays, MRIs, CT scans, and other medical images",
      icon: Microscope,
      benefits: ["Image enhancement", "Abnormality detection", "Quantitative analysis", "Report generation"]
    },
    {
      title: "Patient Monitoring",
      description: "Real-time patient monitoring with AI-powered alert systems",
      icon: Activity,
      benefits: ["Continuous monitoring", "Early warning alerts", "Trend analysis", "Remote care"]
    },
    {
      title: "Drug Discovery & Development",
      description: "AI-accelerated pharmaceutical research and drug development",
      icon: Pill,
      benefits: ["Target identification", "Molecule screening", "Clinical trial optimization", "Safety prediction"]
    },
    {
      title: "Healthcare Analytics",
      description: "Comprehensive healthcare data analytics and insights",
      icon: BarChart3,
      benefits: ["Performance metrics", "Quality improvement", "Cost analysis", "Population health"]
    }
  ];

  const healthcareAreas = [
    {
      name: "Radiology",
      description: "AI-powered medical imaging analysis and diagnostic support",
      icon: Microscope,
      tools: ["X-ray analysis", "MRI interpretation", "CT scan review", "Ultrasound enhancement"]
    },
    {
      name: "Cardiology",
      description: "AI-assisted cardiac diagnosis and monitoring",
      icon: Heart,
      tools: ["ECG analysis", "Echocardiogram review", "Risk assessment", "Treatment planning"]
    },
    {
      name: "Oncology",
      description: "AI-powered cancer detection and treatment planning",
      icon: Target,
      tools: ["Tumor detection", "Treatment optimization", "Prognosis prediction", "Clinical trials"]
    },
    {
      name: "Primary Care",
      description: "AI-enhanced primary care and preventive medicine",
      icon: Users,
      tools: ["Symptom analysis", "Risk assessment", "Preventive care", "Patient education"]
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$399/month",
      description: "Perfect for small clinics and medical practices",
      features: [
        "Up to 1,000 patients/month",
        "Basic AI diagnosis",
        "Medical imaging analysis",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Hospital",
      price: "$1,299/month",
      description: "Ideal for hospitals and large medical facilities",
      features: [
        "Up to 10,000 patients/month",
        "Advanced AI diagnosis",
        "Predictive analytics",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "API access",
        "Integration support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999/month",
      description: "For large healthcare systems and research institutions",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced reporting",
        "On-premise option",
        "SLA guarantees",
        "Research collaboration"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: "95%",
      description: "Diagnostic accuracy",
      detail: "AI-powered analysis and validation"
    },
    {
      metric: "60%",
      description: "Faster diagnosis",
      detail: "Automated analysis and reporting"
    },
    {
      metric: "40%",
      description: "Cost reduction",
      detail: "Efficient workflows and automation"
    },
    {
      metric: "80%",
      description: "Patient satisfaction",
      detail: "Improved care quality and outcomes"
    }
  ];

  const useCases = [
    {
      scenario: "Medical Imaging",
      description: "AI-powered analysis of medical images for faster and more accurate diagnosis",
      benefits: ["Faster diagnosis", "Improved accuracy", "Reduced workload", "Better outcomes"]
    },
    {
      scenario: "Patient Monitoring",
      description: "Real-time patient monitoring with AI-powered early warning systems",
      benefits: ["Early intervention", "Reduced complications", "Better outcomes", "Cost savings"]
    },
    {
      scenario: "Drug Discovery",
      description: "AI-accelerated pharmaceutical research and development",
      benefits: ["Faster development", "Lower costs", "Better safety", "Improved efficacy"]
    },
    {
      scenario: "Preventive Care",
      description: "AI-powered risk assessment and preventive care recommendations",
      benefits: ["Early detection", "Preventive measures", "Better health", "Lower costs"]
    }
  ];

  const complianceFeatures = [
    {
      name: "HIPAA Compliance",
      description: "Full HIPAA compliance with end-to-end encryption and audit trails",
      icon: Shield
    },
    {
      name: "FDA Approval",
      description: "FDA-cleared AI algorithms for medical diagnosis and treatment",
      icon: CheckCircle
    },
    {
      name: "Data Security",
      description: "Enterprise-grade security with SOC 2 Type II certification",
      icon: Lock
    },
    {
      name: "Clinical Validation",
      description: "Clinically validated AI models with peer-reviewed research",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-pink-900">
      <SEO 
        title="AI Healthcare Solutions Platform - Zion Tech Group" 
        description="Revolutionize healthcare with AI-powered diagnosis, predictive analytics, and medical imaging analysis."
        keywords="AI healthcare, medical AI, diagnostic AI, medical imaging, healthcare analytics, AI diagnosis"
        canonical="https://ziontechgroup.com/services/ai-healthcare-solutions"
      />

      {/* Hero Section with Futuristic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-600/20 to-purple-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Solutions
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Solutions
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              Transform Healthcare with Intelligent Technology
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize healthcare delivery with AI-powered tools that enhance diagnosis, 
            improve patient outcomes, and optimize healthcare operations. Our platform 
            combines cutting-edge AI with medical expertise.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
              <div className="text-gray-400 text-sm">Diagnostic Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-400 text-sm">Faster Diagnosis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-400 text-sm">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Powered Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform covers every aspect of healthcare delivery, 
              from diagnosis to treatment planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Areas Section */}
      <section className="py-20 bg-red-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Specialized Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered tools designed for specific medical specialties and healthcare areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthcareAreas.map((area, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security and compliance for healthcare applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-red-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI healthcare platform solves real challenges in medical practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.scenario}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI healthcare platform delivers for medical facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-red-400 mb-2">{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.description}</div>
                <div className="text-gray-400 text-sm">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-red-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your healthcare facility needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500/50 shadow-2xl shadow-red-500/25' 
                  : 'border-gray-700/50 hover:border-red-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/50 via-pink-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of healthcare providers who have already revolutionized patient care 
            with AI-powered healthcare solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise pricing? <a href="/contact" className="text-red-400 hover:text-red-300 underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}