import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  const expertiseAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Cutting-edge AI solutions including custom model development, predictive analytics, and intelligent automation",
      icon: "🤖",
      services: ["AI Model Development", "Predictive Analytics", "Natural Language Processing", "Computer Vision"]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions, migration services, and infrastructure optimization for modern applications",
      icon: "☁️",
      services: ["Cloud Migration", "Multi-cloud Management", "DevOps Automation", "Performance Optimization"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize legacy systems and processes",
      icon: "🚀",
      services: ["Legacy System Modernization", "Process Automation", "Digital Workflow Design", "Change Management"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: "🔒",
      services: ["Security Auditing", "Network Protection", "Compliance Management", "Incident Response"]
    },
    {
      title: "Data & Analytics",
      description: "Advanced data solutions for business intelligence, analytics, and decision-making",
      icon: "📊",
      services: ["Data Analytics", "Business Intelligence", "Data Pipeline Engineering", "Real-time Dashboards"]
    },
    {
      title: "Software Development",
      description: "Full-stack development services for web, mobile, and enterprise applications",
      icon: "💻",
      services: ["Web Applications", "Mobile Apps", "API Development", "Microservices Architecture"]
    }
  ];

  const companyStats = [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Projects Delivered" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "50+", label: "Technology Partners" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Client Retention" }
  ];

  const technologies = [
    "React & Next.js", "Python & Django", "Node.js & Express", "AWS & Azure", "Docker & Kubernetes",
    "TensorFlow & PyTorch", "PostgreSQL & MongoDB", "Redis & Elasticsearch", "GraphQL & REST APIs",
    "Jenkins & GitLab CI", "Terraform & Ansible", "Prometheus & Grafana", "Selenium & Jest",
    "Figma & Adobe XD", "Jira & Confluence", "Slack & Microsoft Teams"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Head>
        <title>About Us - Zion Tech Group | Leading Technology Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology solutions provider with 10+ years of experience in AI, cloud, and digital transformation services." />
        <meta name="keywords" content="about us, technology company, AI services, cloud solutions, digital transformation, IT services" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            We are a leading technology solutions provider, specializing in innovative AI services, 
            cloud solutions, and digital transformation that drive business growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth. We believe in making advanced technology accessible and 
              practical for organizations of all sizes.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🔮</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the trusted technology partner for businesses worldwide, leading the way in 
              AI innovation, cloud transformation, and digital excellence. We envision a future 
              where technology seamlessly enhances human potential and business success.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Constantly pushing boundaries and exploring new technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">Building long-term relationships based on trust and results</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Delivering exceptional quality in every project and service</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">Fostering continuous learning and professional development</p>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="space-y-1">
                  {area.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies We Master</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Our team consists of certified professionals with deep expertise in their respective domains.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                We pride ourselves on delivering projects on time and within budget, every time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">
                We provide continuous support and maintenance to ensure your solutions remain optimal.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">
                We offer transparent, competitive pricing with flexible payment options for all budgets.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                We serve clients worldwide with our comprehensive technology solutions and support.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                Our track record speaks for itself with measurable improvements in client operations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how our expertise can help you achieve your technology goals and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </Link>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;