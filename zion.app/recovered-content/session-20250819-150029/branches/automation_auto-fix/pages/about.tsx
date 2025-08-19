import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>About Zion Tech Group | Leading AI & Cloud Automation Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered cloud automation solutions, autonomous systems, and intelligent optimization technologies. Discover our mission, vision, and innovative approach to digital transformation." />
        <meta name="keywords" content="Zion Tech Group, AI automation, cloud solutions, autonomous systems, digital transformation, technology innovation, Zion Tech Group about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
        <meta property="og:title" content="About Zion Tech Group | Leading AI & Cloud Automation Solutions" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI-powered cloud automation solutions and autonomous systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zion Tech Group" />
        <meta name="twitter:description" content="Leading AI & Cloud Automation Solutions" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered cloud automation solutions and autonomous systems",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "sameAs": [
            "https://github.com/Zion-Holdings",
            "https://linkedin.com/company/zion-tech-group"
          ]
        })}</script>
      </Head>
      
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <Link href="/team" className="internal-link link-instance-3">[CONTENT] Content Link</Link>
        {/* Hero Section */}
        <section className="text-center mb-16">
        <a href="https://meet.google.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="external-link link-instance-5">[BUSINESS] Business Tool</a>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Pioneering the future of autonomous technology through innovative AI solutions, 
            cloud automation, and intelligent systems that transform how businesses operate.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To democratize autonomous technology by making AI-powered automation accessible, 
                reliable, and beneficial for organizations of all sizes. We believe in creating 
                systems that continuously learn, adapt, and improve, enabling businesses to 
                focus on what matters most while technology handles the rest.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Our Vision</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                A world where autonomous systems seamlessly manage complex operations, 
                continuously optimize performance, and enable unprecedented levels of 
                efficiency and innovation across all industries and sectors.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Automation</h3>
              <p className="text-white/70">
                Develop intelligent systems that automate complex tasks, continuously learn, 
                and optimize performance without human intervention.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
              <p className="text-white/70">
                Build scalable, secure, and efficient cloud infrastructure that adapts 
                to changing demands and optimizes resource utilization.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-white/70">
                Continuously monitor, analyze, and optimize system performance to ensure 
                maximum efficiency and user experience.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
              <p className="text-white/70">
                Implement robust security measures and ensure compliance with industry 
                standards and regulatory requirements.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
              <p className="text-white/70">
                Design and implement tailored solutions that address specific business 
                challenges and drive measurable results.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Research & Innovation</h3>
              <p className="text-white/70">
                Continuously research and develop cutting-edge technologies to stay 
                ahead of industry trends and deliver innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Approach</h2>
          
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Autonomous First</h3>
                <p className="text-white/80 mb-4">
                  We believe in building systems that can operate independently, make 
                  intelligent decisions, and continuously improve without constant 
                  human oversight.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Self-learning algorithms</li>
                  <li>• Automated optimization</li>
                  <li>• Intelligent decision-making</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-4">Human-Centric Design</h3>
                <p className="text-white/80 mb-4">
                  While our systems are autonomous, they're designed to enhance human 
                  capabilities, not replace them, ensuring technology serves people.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• User experience focus</li>
                  <li>• Accessibility and usability</li>
                  <li>• Human oversight integration</li>
                  <li>• Ethical AI principles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">AI & Machine Learning</h3>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• TensorFlow & PyTorch</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Reinforcement Learning</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">Cloud Platforms</h3>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• AWS & Azure</li>
                <li>• Google Cloud Platform</li>
                <li>• Kubernetes & Docker</li>
                <li>• Serverless Architecture</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Development</h3>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Python & JavaScript</li>
                <li>• React & Next.js</li>
                <li>• Node.js & Express</li>
                <li>• TypeScript</li>
              </ul>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-green-400 mb-3">DevOps & Automation</h3>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring & Logging</li>
                <li>• Security Automation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Proven Expertise</h3>
              <p className="text-white/80">
                With years of experience in AI, cloud computing, and autonomous systems, 
                we have the knowledge and skills to deliver exceptional results.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-fuchsia-400 mb-3">Innovation Focus</h3>
              <p className="text-white/80">
                We stay at the forefront of technology, continuously researching and 
                implementing cutting-edge solutions for our clients.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Quality Assurance</h3>
              <p className="text-white/80">
                Our rigorous testing and validation processes ensure that every solution 
                meets the highest standards of quality and reliability.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Ongoing Support</h3>
              <p className="text-white/80">
                We provide comprehensive support and maintenance to ensure your systems 
                continue to perform optimally long after deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Discover how our autonomous technology solutions can revolutionize your 
              operations, improve efficiency, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </a>
              <a 
                href="/services" 
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

<a href="https://linkedin.com/company/zion-tech-group" target="_blank" rel="noopener noreferrer" className="external-link">Company Profile</a>
