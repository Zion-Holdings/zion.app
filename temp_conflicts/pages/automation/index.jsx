
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const Talent = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our AI team to build cutting-edge machine learning models and AI solutions.",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Cloud Platforms"],
      href: "/talent/senior-ai-engineer"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud architectures for enterprise clients.",
      skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
      href: "/talent/cloud-solutions-architect"
    },
    {
      title: "Full-Stack Developer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Build modern web applications using React, Node.js, and cloud technologies.",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
      href: "/talent/full-stack-developer"
    },
    {
      title: "Data Scientist",
      department: "Data Analytics",
      location: "London, UK",
      type: "Full-time",
      experience: "4+ years",
      description: "Transform data into actionable insights using advanced analytics and ML.",
      skills: ["Python", "SQL", "Pandas", "Scikit-learn", "Data Visualization"],
      href: "/talent/data-scientist"
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Automate and optimize our development and deployment processes.",
      skills: ["CI/CD", "Docker", "Kubernetes", "AWS", "Monitoring"],
      href: "/talent/devops-engineer"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "6+ years",
      description: "Lead product strategy and development for our technology platforms.",
      skills: ["Product Strategy", "Agile", "User Research", "Data Analysis", "Stakeholder Management"],
      href: "/talent/product-manager"
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support",
      icon: "🏥"
    },
    {
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and unlimited PTO",
      icon: "🏠"
    },
    {
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and training programs",
      icon: "📚"
    },
    {
      title: "Team Building",
      description: "Regular team events, hackathons, and company retreats",
      icon: "🎉"
    },
    {
      title: "Equity & Rewards",
      description: "Competitive salary, equity options, and performance bonuses",
      icon: "💰"
    },
    {
      title: "Work-Life Balance",
      description: "Generous parental leave, sabbaticals, and wellness programs",
      icon: "⚖️"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and experimentation"
    },
    {
      title: "Continuous Learning",
      description: "Growth mindset is core to our culture"
    },
    {
      title: "Collaboration",
      description: "We believe great things happen when we work together"
    },
    {
      title: "Impact Driven",
      description: "We focus on solutions that make a real difference"
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>Join Our Team - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's talented team. Explore career opportunities in AI, cloud computing, blockchain, and more. Build the future of technology with us." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of technology. We're looking for passionate, 
            innovative minds to join our mission of transforming businesses through 
            cutting-edge solutions.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Join Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {position.type}
                      </span>
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {position.experience}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">📍 {position.location}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <Link href={position.href} className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600">
              We foster an environment where innovation thrives and every voice matters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Diversity & Inclusion</h3>
              <p className="text-gray-600">
                We believe diverse teams create better solutions. We're committed to building 
                an inclusive workplace where everyone feels valued and empowered to contribute.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation & Experimentation</h3>
              <p className="text-gray-600">
                We encourage our team to think outside the box, experiment with new ideas, 
                and push the boundaries of what's possible in technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                We understand that great work comes from happy, well-rested people. 
                We support flexible schedules and prioritize mental health and wellness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Continuous Growth</h3>
              <p className="text-gray-600">
                Learning never stops at Zion Tech Group. We invest in our team's growth 
                through training, mentorship, and opportunities to work on cutting-edge projects.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-blue-100 mb-6">
            We're always looking for talented individuals. Send us your resume and let's discuss 
            how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send Resume
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Contact HR
            </Link>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default Talent;