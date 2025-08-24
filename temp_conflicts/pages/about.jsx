
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure their success is our success.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices.",
      icon: "🔒"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      expertise: "AI/ML, Cloud Architecture",
      experience: "15+ years"
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      expertise: "Full-Stack Development, DevOps",
      experience: "12+ years"
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Data Scientist",
      expertise: "Data Analytics, Machine Learning",
      experience: "10+ years"
    },
    {
      name: "David Kim",
      role: "Solutions Architect",
      expertise: "Cloud Solutions, Blockchain",
      experience: "14+ years"
    }
  ];

  return (
    <EnhancedLayout>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology company specializing in AI, cloud solutions, and digital transformation. Discover our mission, values, and team." />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative digital solutions. Since our founding, we've been at the 
            forefront of technological advancement, helping organizations navigate the 
            complexities of the digital age.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with cutting-edge technology solutions that drive 
              innovation, efficiency, and growth. We believe that every organization 
              deserves access to world-class technology expertise.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading technology partner for businesses worldwide, known for 
              delivering transformative solutions that shape the future of industries 
              and create lasting value for our clients.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold mb-2">Founded in 2018</h3>
              <p className="text-gray-600 text-sm">
                Started with a vision to democratize access to advanced technology solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold mb-2">Rapid Growth</h3>
              <p className="text-gray-600 text-sm">
                Expanded to serve 100+ clients across various industries
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Now operating in multiple countries with a diverse team
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16" id="team">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-blue-600">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.expertise}</p>
                <p className="text-gray-500 text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-8">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </main>
    </EnhancedLayout>
  );
};

export default About;