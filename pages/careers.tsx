import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Research Engineer",
      department: "AI Research & Development",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead cutting-edge AI research in quantum machine learning and consciousness evolution",
      skills: ["Python", "TensorFlow", "Quantum Computing", "Research", "MLOps"],
      icon: "🤖"
    },
    {
      title: "Quantum Software Developer",
      department: "Quantum Computing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop quantum algorithms and quantum-classical hybrid applications",
      skills: ["Qiskit", "Python", "Quantum Algorithms", "Linear Algebra", "C++"],
      icon: "⚛️"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain scalable cloud infrastructure and CI/CD pipelines",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      icon: "☁️"
    },
    {
      title: "Frontend Developer",
      department: "Product Development",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive user interfaces for AI-powered applications",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "UX Design"],
      icon: "🎨"
    },
    {
      title: "AI Ethics Specialist",
      department: "AI Governance",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Ensure responsible AI development and ethical AI deployment",
      skills: ["AI Ethics", "Policy", "Research", "Communication", "Regulations"],
      icon: "⚖️"
    },
    {
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from complex datasets and build predictive models",
      skills: ["Python", "SQL", "Statistics", "Machine Learning", "Data Visualization"],
      icon: "📊"
    }
  ];

  const benefits = [
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and work-life balance",
      icon: "🏠"
    },
    {
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development programs",
      icon: "📚"
    },
    {
      title: "Innovation Time",
      description: "20% time for personal projects and innovation initiatives",
      icon: "💡"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs",
      icon: "❤️"
    },
    {
      title: "Team Events",
      description: "Regular team building and networking events",
      icon: "🎉"
    },
    {
      title: "Equity & Rewards",
      description: "Competitive compensation with equity participation",
      icon: "💰"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies",
      icon: "🚀"
    },
    {
      title: "Ethical AI",
      description: "Responsible development and deployment of AI systems",
      icon: "⚖️"
    },
    {
      title: "Collaboration",
      description: "Diverse teams working together to solve complex problems",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "Lifelong learning and skill development",
      icon: "🎓"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's mission to advance AI and quantum computing. Explore career opportunities in cutting-edge technology research and development." />
        <meta name="keywords" content="careers, jobs, AI research, quantum computing, technology jobs, remote work" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Help us shape the future of AI, quantum computing, and digital transformation. 
              Work with cutting-edge technologies and brilliant minds from around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#open-positions" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions
              </Link>
              <Link href="/contact" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Open Positions</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{position.icon}</div>
                    <div className="text-right">
                      <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {position.type}
                      </span>
                      <p className="text-sm text-gray-400">{position.location}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{position.department} • {position.experience}</p>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Apply</h3>
                <p className="text-gray-300">Submit your resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Review</h3>
                <p className="text-gray-300">Our team reviews your application</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Interview</h3>
                <p className="text-gray-300">Technical and cultural fit discussions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Offer</h3>
                <p className="text-gray-300">Welcome to the Zion Tech Group family</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto text-center">
                          <h2 className="text-4xl font-bold mb-6">Don&apos;t See the Right Fit?</h2>
                          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals to join our team. 
                Send us your resume and let&apos;s discuss how you can contribute to our mission.
              </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Send Resume
              </Link>
              <Link href="/about" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}