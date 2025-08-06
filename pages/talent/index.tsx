import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const TalentPage: NextPage = () => {
  const positions = [
    {
      id: 'senior-developer',
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Lead development of scalable web applications using modern technologies',
      requirements: ['5+ years experience', 'React/Next.js', 'Node.js/Python', 'Cloud platforms', 'Team leadership']
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain cloud infrastructure and CI/CD pipelines',
      requirements: ['3+ years experience', 'AWS/Azure/GCP', 'Docker/Kubernetes', 'Terraform', 'Monitoring tools']
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Develop machine learning models and data-driven insights',
      requirements: ['4+ years experience', 'Python/R', 'ML frameworks', 'SQL/NoSQL', 'Statistical analysis']
    },
    {
      id: 'ui-ux-designer',
      title: 'Senior UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create exceptional user experiences and beautiful interfaces',
      requirements: ['5+ years experience', 'Figma/Sketch', 'User research', 'Prototyping', 'Design systems']
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Drive product strategy and execution for enterprise solutions',
      requirements: ['4+ years experience', 'Agile/Scrum', 'Market analysis', 'User research', 'Cross-functional leadership']
    },
    {
      id: 'security-engineer',
      title: 'Security Engineer',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description: 'Protect our systems and ensure compliance with security standards',
      requirements: ['3+ years experience', 'Security frameworks', 'Penetration testing', 'Compliance', 'Incident response']
    }
  ]

  const benefits = [
    'Competitive salary with equity options',
    'Flexible remote work environment',
    'Comprehensive health insurance',
    'Professional development budget',
    'Latest tools and equipment',
    'Unlimited PTO',
    'Team events and retreats',
    'Career growth opportunities'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Join Our Team • Zion Technology</title>
        <meta
          name="description"
          content="Join Zion's talented team of innovators. Explore exciting career opportunities in technology, engineering, design, and more."
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >
              Zion
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/services" className="hover:text-purple-300">
                Services
              </Link>
              <Link href="/products" className="hover:text-purple-300">
                Products
              </Link>
              <Link href="/talent" className="text-purple-300">
                Talent
              </Link>
              <Link href="/blog" className="hover:text-purple-300">
                Blog
              </Link>
              <Link href="/about" className="hover:text-purple-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-purple-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Join Our
          </span>{' '}
          Mission
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10 text-lg md:text-xl">
          Build the future of technology with a team that values innovation, collaboration, and continuous learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#open-positions"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            View Open Positions
          </Link>
          <Link
            href="/contact"
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Culture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            At Zion, we believe in fostering an environment where creativity thrives, innovation is encouraged, 
            and every team member has the opportunity to make a meaningful impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-300">We encourage experimentation and creative problem-solving in everything we do.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Team</h3>
            <p className="text-gray-300">We work together, learn from each other, and celebrate our collective achievements.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-gray-300">We invest in your growth with ongoing education and skill development opportunities.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Benefits & Perks</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We believe in taking care of our team with comprehensive benefits and a supportive work environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join our team of passionate technologists and help us build the future of digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((position) => (
            <div
              key={position.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-gray-300 text-sm">{position.department} • {position.location}</p>
                </div>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {position.type}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{position.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href={`/contact?position=${position.id}`}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors duration-200"
              >
                Apply Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Fit?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Send Your Resume
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Zion. All rights reserved.
      </footer>
    </div>
  )
}

export default TalentPage
