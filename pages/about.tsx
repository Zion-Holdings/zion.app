import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.",
      icon: "🚀"
    },
    {
      title: "Client Success",
      description: "Your success is our success. We measure our performance by the tangible business outcomes we deliver for our clients.",
      icon: "🎯"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality in every project, ensuring robust, scalable, and maintainable solutions.",
      icon: "⭐"
    },
    {
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, fostering open communication and collaboration throughout the project lifecycle.",
      icon: "🤝"
    }
  ];

  const expertise = [
    {
      category: "Artificial Intelligence & Machine Learning",
      skills: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Model Development"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS/Azure/GCP", "Microservices Architecture", "DevOps & CI/CD", "Container Orchestration", "Serverless Computing"]
    },
    {
      category: "Web & Mobile Development",
      skills: ["React/Next.js", "Node.js/Python", "Mobile App Development", "Progressive Web Apps", "API Development"]
    },
    {
      category: "Data & Analytics",
      skills: ["Big Data Processing", "Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Pipeline Engineering"]
    },
    {
      category: "Security & Compliance",
      skills: ["Cybersecurity", "Penetration Testing", "Compliance Management", "Identity & Access Management", "Security Auditing"]
    },
    {
      category: "Emerging Technologies",
      skills: ["Blockchain Development", "IoT Platforms", "AR/VR Applications", "Edge Computing", "Quantum Computing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>About Us - Zion Tech Group | Technology Innovation Leaders</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology solutions provider with expertise in AI, cloud computing, and digital transformation. Discover our mission, values, and commitment to client success." />
        <meta name="keywords" content="about Zion Tech Group, technology company, AI experts, cloud specialists, digital transformation consultants" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to helping businesses 
            harness the power of innovation to achieve digital transformation and competitive advantage.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to democratize advanced technology solutions, Zion Tech Group 
                has grown from a small startup to a trusted technology partner for businesses across industries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every organization, regardless of size, deserves access to cutting-edge 
                technology solutions that can transform their operations and drive growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced engineers, designers, and consultants work collaboratively 
                to deliver innovative solutions that solve real business problems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-lg opacity-90">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative technology solutions that drive digital transformation, 
              improve operational efficiency, and create sustainable competitive advantages in the digital economy.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading technology partner for businesses seeking to leverage AI, cloud computing, 
              and emerging technologies to achieve breakthrough innovation and market leadership.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Our diverse team of technology experts brings together decades of combined experience 
            in software development, AI research, cloud architecture, and business consulting.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering Team</h3>
              <p className="text-gray-600">Full-stack developers, AI engineers, and DevOps specialists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Team</h3>
              <p className="text-gray-600">UX/UI designers and product strategists</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consulting Team</h3>
              <p className="text-gray-600">Business analysts and technology consultants</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how our expertise can help transform your business
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">📱 Mobile</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">✉️ Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;