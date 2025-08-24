import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  TrendingUp, 
  Globe,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and emerging technologies"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code to customer service"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building solutions that can transform businesses and societies worldwide"
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across 5 continents"
    },
    {
      year: "2024",
      title: "AI Breakthrough",
      description: "Developed proprietary AI algorithms achieving 99.7% accuracy"
    },
    {
      year: "2023",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to democratize AI technology"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      bio: "Former research lead at OpenAI, PhD in Machine Learning from Stanford"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "20+ years in enterprise software, led teams at Google and Microsoft"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "Quantum computing expert with 15+ years in academic and industry research"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Full-stack architect specializing in scalable AI infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Pioneering the future of AI-powered business transformation and autonomous systems
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-6">
                To democratize access to advanced AI technologies, enabling businesses of all sizes to harness the power of autonomous systems and intelligent automation.
              </p>
              <p className="text-lg text-gray-600">
                We believe that AI should be accessible, understandable, and beneficial to everyone. Our solutions are designed to augment human capabilities, not replace them, creating a future where technology serves humanity.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-6">
                To be the leading force in creating a world where AI-powered autonomous systems drive unprecedented business growth and societal progress.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where businesses operate with superhuman efficiency, where complex problems are solved in seconds, and where innovation happens at the speed of thought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our company and our impact
            </p>
          </div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-lg text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation at Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Clients Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.7%</div>
              <div className="text-gray-600">AI Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">AI Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of the AI revolution and help us build a better tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/careers" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Careers
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}