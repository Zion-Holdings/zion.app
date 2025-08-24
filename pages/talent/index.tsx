import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TalentIndex: NextPage = () => {
  const expertiseAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Our AI experts specialize in developing custom machine learning models, natural language processing systems, and intelligent automation solutions.",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"],
      experience: "8+ years",
      projects: "150+ AI projects"
    },
    {
      title: "Cloud Architecture & DevOps",
      description: "Cloud specialists with expertise in AWS, Azure, and Google Cloud, implementing scalable infrastructure and CI/CD pipelines.",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      experience: "10+ years",
      projects: "200+ cloud migrations"
    },
    {
      title: "Full-Stack Development",
      description: "Experienced developers building modern web applications, mobile apps, and enterprise software solutions.",
      skills: ["React", "Node.js", "Python", "Java", "Swift", "Kotlin", "PostgreSQL"],
      experience: "12+ years",
      projects: "300+ applications"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Security experts ensuring your digital assets are protected with industry-leading security practices and compliance standards.",
      skills: ["Penetration Testing", "Security Auditing", "Compliance", "Incident Response", "Threat Detection"],
      experience: "9+ years",
      projects: "100+ security assessments"
    },
    {
      title: "Data Engineering & Analytics",
      description: "Data specialists building robust data pipelines, analytics platforms, and business intelligence solutions.",
      skills: ["Apache Spark", "Hadoop", "Kafka", "Power BI", "Tableau", "Python", "SQL"],
      experience: "7+ years",
      projects: "80+ data projects"
    },
    {
      title: "UI/UX Design & Product Management",
      description: "Creative designers and product managers crafting user-centered experiences and driving product strategy.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Agile", "Scrum"],
      experience: "6+ years",
      projects: "120+ design projects"
    }
  ];

  const teamHighlights = [
    {
      title: "Certified Professionals",
      description: "All team members hold relevant certifications from leading technology providers and institutions",
      icon: "🎓",
      count: "100%"
    },
    {
      title: "Industry Experience",
      description: "Collective experience across multiple industries including finance, healthcare, retail, and manufacturing",
      icon: "🏢",
      count: "15+"
    },
    {
      title: "Continuous Learning",
      description: "Regular training and upskilling to stay current with the latest technologies and industry trends",
      icon: "📚",
      count: "Monthly"
    },
    {
      title: "Global Perspective",
      description: "Team members from diverse backgrounds bringing international experience and cultural insights",
      icon: "🌍",
      count: "8+"
    }
  ];

  const technologies = [
    "Frontend", "React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS",
    "Backend", "Node.js", "Python", "Java", "C#", "Go", "Ruby on Rails",
    "Databases", "PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Cassandra",
    "Cloud", "AWS", "Azure", "GCP", "DigitalOcean", "Heroku", "Vercel",
    "DevOps", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible",
    "AI/ML", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "LangChain"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Our Team & Expertise - Zion Tech Group | Technology Professionals</title>
        <meta name="description" content="Meet our team of certified technology professionals with expertise in AI, cloud computing, cybersecurity, and software development. Discover how our talent can transform your business." />
        <meta name="keywords" content="technology team, AI experts, cloud specialists, software developers, cybersecurity experts, IT professionals" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Team & Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Meet our team of certified technology professionals, industry experts, and innovative thinkers 
            who are passionate about delivering exceptional solutions and driving digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Work With Our Team
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a>
          </div>
        </div>

        {/* Team Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Our Team Stands Out</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{highlight.icon}</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{highlight.count}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Experience: {area.experience}</span>
                  <span>{area.projects}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies We Master</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { category: "Frontend", techs: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"] },
                { category: "Backend", techs: ["Node.js", "Python", "Java", "C#", "Go", "Ruby on Rails"] },
                { category: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Cassandra"] },
                { category: "Cloud", techs: ["AWS", "Azure", "GCP", "DigitalOcean", "Heroku", "Vercel"] },
                { category: "DevOps", techs: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible"] },
                { category: "AI/ML", techs: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "LangChain"] }
              ].map((category, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-3">{category.category}</h3>
                  <div className="space-y-2">
                    {category.techs.map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600 text-sm">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We work together as a team, sharing knowledge and supporting each other&apos;s growth.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in everything we do, from code quality to client communication.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Growth</h3>
              <p className="text-gray-600 text-sm">
                We invest in our team&apos;s development through training, certifications, and skill enhancement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Results-Driven</h3>
              <p className="text-gray-600 text-sm">
                We focus on delivering measurable results that drive business value and success.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Perspective</h3>
              <p className="text-gray-600 text-sm">
                We bring diverse perspectives and international experience to every project.
              </p>
            </div>
          </div>
        </div>

        {/* Work With Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Expert Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss your project requirements and discover how our talented team can help you 
            achieve your technology goals and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </Link>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch with Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Phone</div>
              <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Address</div>
              <div className="text-gray-600 text-sm">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TalentIndex;