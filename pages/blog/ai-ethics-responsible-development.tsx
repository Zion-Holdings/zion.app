import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIEthicsResponsibleDevelopment() {
  return (
    <>
      <Head>
        <title>AI Ethics & Responsible Development: A Comprehensive Guide | Zion Tech Group</title>
        <meta name="description" content="Essential guide to AI ethics, responsible development practices, bias detection, transparency, and building trustworthy AI systems." />
        <meta property="og:title" content="AI Ethics & Responsible Development: A Comprehensive Guide" />
        <meta property="og:description" content="Essential guide to AI ethics, responsible development practices, and building trustworthy AI systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Blog
              </Link>
            </nav>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="mb-12 text-center">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                    AI Ethics
                  </span>
                  <span className="text-white/60 text-sm">January 17, 2025</span>
                  <span className="text-white/60 text-sm">•</span>
                  <span className="text-white/60 text-sm">12 min read</span>
                </div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Ethics & Responsible Development: A Comprehensive Guide
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  As AI systems become more autonomous and influential, ethical considerations and responsible development 
                  practices have never been more critical. Learn how to build AI systems that are fair, transparent, and trustworthy.
                </p>
              </header>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-green-400">Why AI Ethics Matter Now More Than Ever</h2>
                <p className="text-white/90 mb-4">
                  The rapid advancement of AI technology has brought us to a critical juncture. AI systems are now making 
                  decisions that affect millions of people—from loan approvals and job applications to medical diagnoses 
                  and criminal justice. The stakes have never been higher.
                </p>
                <p className="text-white/90 mb-4">
                  At Zion Tech Group, we believe that ethical AI isn't just a nice-to-have—it's a fundamental requirement 
                  for any AI system that will be deployed in production. Here's why:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-green-400 mb-2">Societal Impact</h4>
                    <p className="text-white/80 text-sm">
                      AI decisions can perpetuate or amplify existing societal biases, affecting vulnerable populations disproportionately.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-cyan-400 mb-2">Regulatory Requirements</h4>
                    <p className="text-white/80 text-sm">
                      Governments worldwide are implementing AI regulations that require ethical considerations and transparency.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-blue-400 mb-2">Business Risk</h4>
                    <p className="text-white/80 text-sm">
                      Ethical failures can lead to reputational damage, legal liability, and loss of customer trust.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-purple-400 mb-2">Long-term Success</h4>
                    <p className="text-white/80 text-sm">
                      Ethical AI systems are more likely to be adopted, trusted, and successful in the long run.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Core Principles of Ethical AI</h2>
                <p className="text-white/90 mb-4">
                  Building ethical AI systems requires adherence to fundamental principles. Here are the core tenets 
                  that guide our development process:
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">1. Fairness and Non-Discrimination</h3>
                <p className="text-white/90 mb-4">
                  AI systems must treat all individuals fairly, regardless of protected characteristics such as race, 
                  gender, age, or socioeconomic status. This requires:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Regular bias audits and testing</li>
                  <li>• Diverse training data representation</li>
                  <li>• Fairness metrics and monitoring</li>
                  <li>• Bias mitigation techniques</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">2. Transparency and Explainability</h3>
                <p className="text-white/90 mb-4">
                  Users and stakeholders must be able to understand how AI systems make decisions. This includes:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Clear documentation of decision processes</li>
                  <li>• Explainable AI techniques</li>
                  <li>• User-friendly explanations</li>
                  <li>• Audit trails and logging</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">3. Privacy and Data Protection</h3>
                <p className="text-white/90 mb-4">
                  AI systems must respect user privacy and comply with data protection regulations:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Data minimization principles</li>
                  <li>• Secure data handling</li>
                  <li>• User consent and control</li>
                  <li>• Anonymization and encryption</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">4. Accountability and Oversight</h3>
                <p className="text-white/90 mb-4">
                  Clear responsibility for AI system behavior and mechanisms for human oversight:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Human-in-the-loop systems</li>
                  <li>• Clear escalation procedures</li>
                  <li>• Regular audits and reviews</li>
                  <li>• Incident response protocols</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-green-400">Implementing Ethical AI: Practical Guidelines</h2>
                <p className="text-white/90 mb-4">
                  Understanding the principles is one thing, but implementing them requires practical strategies. 
                  Here's our proven approach to building ethical AI systems:
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-green-300">Phase 1: Ethical Design and Planning</h3>
                <div className="bg-white/10 rounded-lg p-6 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3">Ethical Impact Assessment</h4>
                  <p className="text-white/80 mb-4">
                    Before writing any code, conduct a comprehensive ethical impact assessment:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm mb-4">
                    <li>• Identify potential stakeholders and affected groups</li>
                    <li>• Assess potential risks and harms</li>
                    <li>• Evaluate fairness implications</li>
                    <li>• Consider privacy and security concerns</li>
                  </ul>
                  
                  <h4 className="font-semibold text-green-300 mb-3">Ethical Requirements Definition</h4>
                  <p className="text-white/80 mb-4">
                    Define specific ethical requirements for your AI system:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Fairness thresholds and metrics</li>
                    <li>• Transparency requirements</li>
                    <li>• Privacy protection measures</li>
                    <li>• Human oversight mechanisms</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-green-300">Phase 2: Ethical Development and Testing</h3>
                <div className="bg-white/10 rounded-lg p-6 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3">Bias Detection and Mitigation</h4>
                  <p className="text-white/80 mb-4">
                    Implement comprehensive bias testing throughout development:
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/20 mb-4">
                    <h5 className="font-semibold text-green-200 mb-2">Bias Testing Framework Example:</h5>
                    <pre className="text-sm text-cyan-300 overflow-x-auto">
{`class BiasDetector {
  async testFairness(model: AIModel, testData: Dataset): Promise<FairnessReport> {
    const results = await model.predict(testData);
    
    // Test for demographic parity
    const demographicParity = this.calculateDemographicParity(results, testData);
    
    // Test for equalized odds
    const equalizedOdds = this.calculateEqualizedOdds(results, testData);
    
    // Test for individual fairness
    const individualFairness = this.calculateIndividualFairness(results, testData);
    
    return {
      demographicParity,
      equalizedOdds,
      individualFairness,
      recommendations: this.generateRecommendations(results)
    };
  }
}`}
                    </pre>
                  </div>
                  
                  <h4 className="font-semibold text-green-300 mb-3">Explainability Implementation</h4>
                  <p className="text-white/80 mb-4">
                    Build explainability into your AI systems from the ground up:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Feature importance analysis</li>
                    <li>• Decision path explanations</li>
                    <li>• Counterfactual explanations</li>
                    <li>• Natural language explanations</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-green-300">Phase 3: Ethical Deployment and Monitoring</h3>
                <div className="bg-white/10 rounded-lg p-6 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3">Continuous Ethical Monitoring</h4>
                  <p className="text-white/80 mb-4">
                    Implement ongoing monitoring for ethical concerns:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm mb-4">
                    <li>• Real-time fairness monitoring</li>
                    <li>• Drift detection for model behavior</li>
                    <li>• User feedback collection</li>
                    <li>• Regular ethical audits</li>
                  </ul>
                  
                  <h4 className="font-semibold text-green-300 mb-3">Human Oversight Mechanisms</h4>
                  <p className="text-white/80 mb-4">
                    Ensure human oversight remains possible:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Human review queues for uncertain cases</li>
                    <li>• Override capabilities for human operators</li>
                    <li>• Escalation procedures for edge cases</li>
                    <li>• Regular human validation of system outputs</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Real-World Case Study: Ethical AI in Healthcare</h2>
                <p className="text-white/90 mb-4">
                  Let's examine a real project where we implemented ethical AI principles in a healthcare diagnostic system:
                </p>
                
                <div className="bg-white/10 rounded-lg p-6 border border-white/20 mb-6">
                  <h4 className="font-semibold text-blue-300 mb-3">Project Overview</h4>
                  <p className="text-white/80 mb-4">
                    We developed an AI system to assist radiologists in detecting early-stage lung cancer from CT scans. 
                    Given the critical nature of medical decisions, ethical considerations were paramount.
                  </p>
                  
                  <h4 className="font-semibold text-green-300 mb-3">Ethical Challenges Addressed</h4>
                  <ul className="space-y-2 text-white/70 text-sm mb-4">
                    <li>• Ensuring equal accuracy across demographic groups</li>
                    <li>• Providing clear explanations for AI recommendations</li>
                    <li>• Maintaining human oversight and final decision authority</li>
                    <li>• Protecting patient privacy and data security</li>
                  </ul>
                  
                  <h4 className="font-semibold text-cyan-300 mb-3">Solutions Implemented</h4>
                  <ul className="space-y-2 text-white/70 text-sm mb-4">
                    <li>• Comprehensive bias testing across age, gender, and ethnicity</li>
                    <li>• Explainable AI techniques showing which image regions influenced decisions</li>
                    <li>• Human-in-the-loop system requiring radiologist confirmation</li>
                    <li>• Federated learning to protect patient data privacy</li>
                  </ul>
                  
                  <h4 className="font-semibold text-purple-300 mb-3">Results and Impact</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• 95% accuracy maintained across all demographic groups</li>
                    <li>• 40% reduction in missed early-stage cancers</li>
                    <li>• 100% radiologist acceptance rate</li>
                    <li>• Zero privacy or security incidents</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-purple-400">Tools and Frameworks for Ethical AI</h2>
                <p className="text-white/90 mb-4">
                  Building ethical AI systems requires the right tools and frameworks. Here are the essential resources 
                  we use at Zion Tech Group:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-purple-400 mb-2">Bias Detection Tools</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• AI Fairness 360 (IBM)</li>
                      <li>• Fairlearn (Microsoft)</li>
                      <li>• Aequitas (University of Chicago)</li>
                      <li>• Custom bias testing frameworks</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-purple-400 mb-2">Explainability Libraries</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• SHAP (SHapley Additive exPlanations)</li>
                      <li>• LIME (Local Interpretable Model-agnostic Explanations)</li>
                      <li>• Integrated Gradients</li>
                      <li>• Counterfactual Explanations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-purple-400 mb-2">Privacy Protection</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Differential Privacy</li>
                      <li>• Federated Learning</li>
                      <li>• Homomorphic Encryption</li>
                      <li>• Secure Multi-party Computation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-purple-400 mb-2">Monitoring & Auditing</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Model monitoring platforms</li>
                      <li>• Drift detection algorithms</li>
                      <li>• Performance tracking dashboards</li>
                      <li>• Automated alerting systems</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-yellow-400">Building an Ethical AI Culture</h2>
                <p className="text-white/90 mb-4">
                  Ethical AI isn't just about technology—it's about people and culture. Here's how to build an 
                  organization-wide commitment to ethical AI:
                </p>
                
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">1. Leadership Commitment</h3>
                <p className="text-white/90 mb-4">
                  Ethical AI must start at the top. Leadership should:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Establish clear ethical AI policies and guidelines</li>
                  <li>• Allocate resources for ethical AI initiatives</li>
                  <li>• Lead by example in ethical decision-making</li>
                  <li>• Hold teams accountable for ethical compliance</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">2. Team Training and Education</h3>
                <p className="text-white/90 mb-4">
                  Ensure all team members understand ethical AI principles:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Regular ethics training sessions</li>
                  <li>• Case study discussions</li>
                  <li>• Ethics certification programs</li>
                  <li>• Ongoing learning and updates</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">3. Cross-Functional Collaboration</h3>
                <p className="text-white/90 mb-4">
                  Ethical AI requires input from multiple disciplines:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Data scientists and engineers</li>
                  <li>• Legal and compliance teams</li>
                  <li>• User experience designers</li>
                  <li>• Domain experts and stakeholders</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">4. Continuous Improvement</h3>
                <p className="text-white/90 mb-4">
                  Ethical AI is an ongoing journey:
                </p>
                <ul className="space-y-2 text-white/80 mb-6">
                  <li>• Regular ethical audits and reviews</li>
                  <li>• Feedback collection from users and stakeholders</li>
                  <li>• Process improvement based on lessons learned</li>
                  <li>• Staying updated with emerging best practices</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-red-400">Common Ethical AI Pitfalls and How to Avoid Them</h2>
                <p className="text-white/90 mb-4">
                  Even well-intentioned teams can fall into common ethical AI traps. Here's how to avoid them:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-red-400 mb-2">Pitfall 1: Assuming Data is Neutral</h4>
                    <p className="text-white/80 mb-3">
                      <strong>Problem:</strong> Many teams assume that if their data is "real-world," it's automatically fair and unbiased.
                    </p>
                    <p className="text-white/80 mb-3">
                      <strong>Reality:</strong> Historical data often reflects and perpetuates existing societal biases.
                    </p>
                    <p className="text-white/80">
                      <strong>Solution:</strong> Always conduct bias audits on your training data and implement bias mitigation techniques.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-red-400 mb-2">Pitfall 2: Focusing Only on Technical Accuracy</h4>
                    <p className="text-white/80 mb-3">
                      <strong>Problem:</strong> Teams optimize only for technical metrics like accuracy, precision, and recall.
                    </p>
                    <p className="text-white/80 mb-3">
                      <strong>Reality:</strong> High accuracy can mask serious fairness and ethical issues.
                    </p>
                    <p className="text-white/80">
                      <strong>Solution:</strong> Include ethical metrics in your evaluation criteria and optimization objectives.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-red-400 mb-2">Pitfall 3: Treating Ethics as a One-Time Check</h4>
                    <p className="text-white/80 mb-3">
                      <strong>Problem:</strong> Teams conduct ethical reviews only during initial development.
                    </p>
                    <p className="text-white/80 mb-3">
                      <strong>Reality:</strong> AI systems can develop ethical issues over time as data and conditions change.
                    </p>
                    <p className="text-white/80">
                      <strong>Solution:</strong> Implement continuous ethical monitoring and regular ethical audits.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-red-400 mb-2">Pitfall 4: Ignoring User Feedback</h4>
                    <p className="text-white/80 mb-3">
                      <strong>Problem:</strong> Teams don't collect or act on feedback about ethical concerns from users.
                    </p>
                    <p className="text-white/80 mb-3">
                      <strong>Reality:</strong> Users often spot ethical issues that developers miss.
                    </p>
                    <p className="text-white/80">
                      <strong>Solution:</strong> Implement robust feedback collection and response mechanisms.
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Getting Started with Ethical AI</h2>
                <p className="text-white/90 mb-4">
                  Ready to start building ethical AI systems? Here's a practical roadmap to get you started:
                </p>
                
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h4 className="font-semibold text-indigo-300 mb-4">Week 1-2: Foundation</h4>
                  <ul className="space-y-2 text-white/70 text-sm mb-4">
                    <li>• Conduct ethical AI training for your team</li>
                    <li>• Establish ethical AI policies and guidelines</li>
                    <li>• Identify ethical champions within your organization</li>
                    <li>• Set up basic bias testing infrastructure</li>
                  </ul>
                  
                  <h4 className="font-semibold text-indigo-300 mb-4">Week 3-4: Assessment</h4>
                  <ul className="space-y-2 text-white/70 text-sm mb-4">
                    <li>• Conduct ethical impact assessment of current AI systems</li>
                    <li>• Identify high-priority ethical concerns</li>
                    <li>• Establish baseline ethical metrics</li>
                    <li>• Create ethical AI development checklist</li>
                  </ul>
                  
                  <h4 className="font-semibold text-indigo-300 mb-4">Month 2-3: Implementation</h4>
                  <ul className="space-y-2 text-white/70 text-sm mb-4">
                    <li>• Implement bias testing in development pipeline</li>
                    <li>• Add explainability features to existing systems</li>
                    <li>• Establish human oversight mechanisms</li>
                    <li>• Create ethical monitoring dashboards</li>
                  </ul>
                  
                  <h4 className="font-semibold text-indigo-300 mb-4">Month 4-6: Optimization</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Refine ethical metrics and thresholds</li>
                    <li>• Optimize bias mitigation techniques</li>
                    <li>• Improve explainability and transparency</li>
                    <li>• Conduct comprehensive ethical audits</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-green-400">Conclusion</h2>
                <p className="text-white/90 mb-4">
                  Building ethical AI systems is not just a technical challenge—it's a fundamental responsibility 
                  that all AI developers and organizations must embrace. The technology we create today will shape 
                  the world of tomorrow, and we have a duty to ensure that impact is positive and equitable.
                </p>
                <p className="text-white/90 mb-4">
                  By following the principles and practices outlined in this guide, you can build AI systems that 
                  are not only technically advanced but also fair, transparent, and trustworthy. Remember that 
                  ethical AI is a journey, not a destination—it requires ongoing commitment, learning, and improvement.
                </p>
                <p className="text-white/90">
                  At Zion Tech Group, we're committed to leading the way in ethical AI development. If you're ready 
                  to start your ethical AI journey, we'd love to help you implement these principles in your organization.
                </p>
              </section>
            </article>
            
            <div className="mt-16 pt-8 border-t border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-white">Share this article</h3>
              <div className="flex gap-4">
                <a href="#" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors">
                  Email
                </a>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-lg border border-green-400/20">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Ready to Build Ethical AI Systems?</h3>
              <p className="text-white/80 mb-4">
                Get expert guidance on implementing ethical AI principles in your organization. 
                Our team of specialists can help you design, build, and deploy AI systems that are fair, transparent, and trustworthy.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-colors">
                  Schedule Consultation
                </Link>
                <Link href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition-colors border border-white/20">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}