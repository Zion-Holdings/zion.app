import React from 'next/react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Zion Tech Group - AI & Automation Success Stories</title>
        <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group has transformed businesses through AI and automation solutions." />
        <meta property="og:title" content="Case Studies - Zion Tech Group" />
        <meta property="og:description" content="Real-world AI and automation success stories with measurable business outcomes." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world success stories showcasing how our AI and automation solutions have transformed businesses 
              across industries, delivering measurable results and competitive advantages.
            </p>
          </section>

          <section className="mx-auto max-w-6xl space-y-16">
            {/* Healthcare Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      Healthcare
                    </span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                      Medical Imaging
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-green-400">
                    AI-Powered Medical Imaging Diagnosis
                  </h2>
                  <p className="text-white/80 mb-6">
                    A leading hospital network partnered with us to develop an AI system that assists radiologists 
                    in detecting early-stage lung cancer from CT scans, improving diagnostic accuracy and patient outcomes.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-green-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">
                        Radiologists were struggling with high caseloads and the need to detect subtle early-stage 
                        lung cancer indicators that could be easily missed during routine screening.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">
                        Developed a deep learning system using convolutional neural networks trained on thousands 
                        of annotated CT scans, with explainable AI features showing which image regions influenced decisions.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 40% increase in early-stage cancer detection</li>
                        <li>• 95% accuracy maintained across all demographic groups</li>
                        <li>• 30% reduction in radiologist workload</li>
                        <li>• 100% radiologist acceptance rate</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-colors">
                      Learn More
                    </Link>
                    <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                      View Services
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Technical Implementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-200 mb-2">AI Architecture</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• ResNet-50 backbone with custom modifications</li>
                        <li>• Transfer learning from ImageNet pre-trained weights</li>
                        <li>• Attention mechanisms for interpretability</li>
                        <li>• Ensemble methods for improved robustness</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-200 mb-2">Data Pipeline</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 50,000+ annotated CT scans</li>
                        <li>• Federated learning for privacy protection</li>
                        <li>• Automated data augmentation</li>
                        <li>• Continuous learning from new cases</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-200 mb-2">Deployment</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Edge deployment for real-time processing</li>
                        <li>• HIPAA-compliant security measures</li>
                        <li>• Human-in-the-loop validation</li>
                        <li>• Comprehensive monitoring and alerting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Services Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                      Financial Services
                    </span>
                    <span className="px-3 py-1 bg-red-400/20 text-red-400 text-sm rounded-full border border-red-400/30">
                      Fraud Detection
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-blue-400">
                    Real-Time Fraud Detection System
                  </h2>
                  <p className="text-white/80 mb-6">
                    A major credit card company needed to upgrade their fraud detection capabilities to handle 
                    increasing transaction volumes while maintaining high accuracy and reducing false positives.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-blue-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">
                        Existing rule-based systems were generating too many false positives, leading to 
                        customer frustration and increased operational costs for manual review processes.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">
                        Implemented a hybrid AI system combining deep learning models with traditional 
                        rule-based logic, featuring real-time learning and adaptive thresholds.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 85% reduction in false positives</li>
                        <li>• 60% faster fraud detection</li>
                        <li>• $2.3M annual cost savings</li>
                        <li>• 99.7% fraud detection accuracy</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-colors">
                      Learn More
                    </Link>
                    <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                      View Services
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Technical Implementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">AI Models</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• LSTM networks for sequence modeling</li>
                        <li>• Random Forest for feature importance</li>
                        <li>• Gradient Boosting for ensemble learning</li>
                        <li>• AutoML for hyperparameter optimization</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">Real-Time Processing</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Apache Kafka for stream processing</li>
                        <li>• Redis for caching and session management</li>
                        <li>• Microservices architecture</li>
                        <li>• Horizontal scaling capabilities</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-200 mb-2">Security Features</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• End-to-end encryption</li>
                        <li>• Multi-factor authentication</li>
                        <li>• Audit logging and monitoring</li>
                        <li>• Compliance with PCI DSS standards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-orange-400/20 text-orange-400 text-sm rounded-full border border-orange-400/30">
                      Manufacturing
                    </span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                      Predictive Maintenance
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-orange-400">
                    Predictive Maintenance for Industrial Equipment
                  </h2>
                  <p className="text-white/80 mb-6">
                    A global manufacturing company wanted to reduce unplanned downtime and optimize 
                    maintenance schedules using IoT sensors and AI-powered predictive analytics.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-orange-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">
                        Equipment failures were causing millions in lost production time annually, 
                        with reactive maintenance approaches proving costly and inefficient.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">
                        Deployed IoT sensors across critical equipment and implemented machine learning 
                        models to predict failures weeks in advance, enabling proactive maintenance.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 70% reduction in unplanned downtime</li>
                        <li>• 45% decrease in maintenance costs</li>
                        <li>• 90% accuracy in failure prediction</li>
                        <li>• $4.2M annual cost savings</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold transition-colors">
                      Learn More
                    </Link>
                    <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                      View Services
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">Technical Implementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-orange-200 mb-2">IoT Infrastructure</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 500+ IoT sensors across 15 facilities</li>
                        <li>• Real-time data collection every 30 seconds</li>
                        <li>• Edge computing for local processing</li>
                        <li>• 5G connectivity for low-latency transmission</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-200 mb-2">AI Models</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Time series forecasting with Prophet</li>
                        <li>• Anomaly detection using Isolation Forest</li>
                        <li>• Survival analysis for equipment lifetime</li>
                        <li>• Ensemble methods for improved accuracy</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-orange-200 mb-2">Analytics Platform</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Real-time dashboards and alerts</li>
                        <li>• Mobile app for field technicians</li>
                        <li>• Integration with CMMS systems</li>
                        <li>• Automated report generation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Retail Case Study */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full border border-purple-400/30">
                      Retail
                    </span>
                    <span className="px-3 py-1 bg-pink-400/20 text-pink-400 text-sm rounded-full border border-pink-400/30">
                      Customer Experience
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-purple-400">
                    AI-Powered Customer Experience Platform
                  </h2>
                  <p className="text-white/80 mb-6">
                    A major retail chain wanted to personalize customer experiences across all touchpoints, 
                    from online shopping to in-store interactions, using AI-driven insights and automation.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Challenge</h4>
                      <p className="text-white/70 text-sm">
                        Customer data was siloed across multiple systems, making it impossible to deliver 
                        personalized experiences and leading to declining customer satisfaction scores.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-2">Solution</h4>
                      <p className="text-white/70 text-sm">
                        Built a unified customer data platform with AI-powered recommendation engines, 
                        predictive analytics, and automated personalization across all channels.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Results</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• 35% increase in customer lifetime value</li>
                        <li>• 50% improvement in conversion rates</li>
                        <li>• 25% reduction in customer churn</li>
                        <li>• 40% increase in average order value</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link href="/contact" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold transition-colors">
                      Learn More
                    </Link>
                    <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                      View Services
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Technical Implementation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-200 mb-2">Data Platform</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Real-time data streaming with Apache Kafka</li>
                        <li>• Data lake architecture on AWS S3</li>
                        <li>• Real-time analytics with Apache Spark</li>
                        <li>• Customer 360 data model</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-200 mb-2">AI Features</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Collaborative filtering recommendations</li>
                        <li>• Natural language processing for chatbots</li>
                        <li>• Computer vision for in-store analytics</li>
                        <li>• Predictive customer behavior modeling</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-purple-200 mb-2">Integration</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• API-first architecture</li>
                        <li>• Real-time synchronization</li>
                        <li>• Multi-channel orchestration</li>
                        <li>• A/B testing framework</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 rounded-2xl p-8 border border-cyan-400/20 text-center">
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                These case studies demonstrate the real impact our AI and automation solutions can have on your business. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold text-lg transition-colors">
                  Start Your Project
                </Link>
                <Link href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold text-lg transition-colors border border-white/20">
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CaseStudiesPage;