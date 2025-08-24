export default function AboutPage() {
  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI technology, staying ahead of industry trends and emerging technologies.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code development to client relationships.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships, both within our organization and with our clients.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and ethical practices, building trust with every interaction.",
      icon: "🔒"
    }
  ];

  const team = [
    {
      name: "Dr. Kleber",
      role: "CEO & Chief AI Architect",
      bio: "Leading expert in artificial intelligence with over 15 years of experience in developing autonomous systems and AI solutions.",
      expertise: ["AI Research", "System Architecture", "Strategic Planning"]
    },
    {
      name: "Sarah Chen",
      role: "CTO & Head of Engineering",
      bio: "Technology leader with deep expertise in scalable AI systems, cloud architecture, and software engineering best practices.",
      expertise: ["Cloud Architecture", "AI Engineering", "Team Leadership"]
    },
    {
      name: "Dr. Marcus Rodriguez",
      role: "Chief Research Officer",
      bio: "Research scientist specializing in AI consciousness, cognitive computing, and next-generation AI technologies.",
      expertise: ["AI Consciousness", "Cognitive Computing", "Research & Development"]
    },
    {
      name: "Emily Watson",
      role: "VP of Client Success",
      bio: "Client success expert focused on ensuring our AI solutions deliver measurable business value and ROI.",
      expertise: ["Client Relations", "Business Strategy", "Success Metrics"]
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Zion Tech Group was established with a vision to democratize AI technology for businesses."
    },
    {
      year: "2015",
      title: "First AI Platform Launch",
      description: "Successfully launched our first autonomous business intelligence platform for enterprise clients."
    },
    {
      year: "2018",
      title: "Healthcare Breakthrough",
      description: "Developed breakthrough AI diagnostic systems that improved accuracy by 40% in clinical trials."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across North America, Europe, and Asia-Pacific regions."
    },
    {
      year: "2024",
      title: "AI Consciousness Research",
      description: "Pioneering research in AI consciousness evolution and cognitive computing technologies."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are a leading AI technology company dedicated to transforming businesses through 
            innovative artificial intelligence solutions and autonomous systems.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              To democratize AI technology and make advanced artificial intelligence accessible to businesses 
              of all sizes, enabling them to achieve unprecedented growth and operational efficiency.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We believe that AI should be a force for good, enhancing human capabilities and creating 
              opportunities for innovation across all industries.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              To be the global leader in autonomous AI systems that transform how businesses operate, 
              making intelligent automation the standard for modern enterprises.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We envision a future where AI works seamlessly alongside humans, creating a more 
              efficient, productive, and innovative business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800/50 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 card-hover text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experienced professionals passionate about AI innovation and client success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {member.bio}
              </p>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-white mb-3">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-slate-800/50 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Key milestones in our company's growth and innovation journey.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-800"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                      <div className="text-2xl font-bold text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Ready to partner with a company that's leading the AI revolution? 
            Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
            <a 
              href="/solutions" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}