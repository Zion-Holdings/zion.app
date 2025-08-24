import React from 'react';
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ExternalLink,
  ArrowRight,
  Star,
  Building,
  Lightbulb
} from "lucide-react";

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $180k",
      description: "Join our core engineering team to build the next generation of AI-powered marketplace solutions.",
      skills: ["React", "Node.js", "Python", "AI/ML", "AWS"],
      featured: true
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100k - $150k",
      description: "Develop cutting-edge AI algorithms for talent matching and recommendation systems.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      featured: true
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110k - $160k",
      description: "Lead product strategy and development for our marketplace platform.",
      skills: ["Product Strategy", "User Research", "Agile", "Analytics", "B2B SaaS"],
      featured: false
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $130k",
      description: "Create intuitive and beautiful user experiences for our platform.",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100k - $150k",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      featured: false
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80k - $120k + Commission",
      description: "Drive partnerships and business growth for our enterprise solutions.",
      skills: ["B2B Sales", "Partnerships", "Enterprise", "Tech Industry", "CRM"],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-zion-cyan" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and mentorship programs"
    },
    {
      icon: <Globe className="w-8 h-8 text-zion-cyan" />,
      title: "Remote First",
      description: "Work from anywhere with flexible hours and home office setup allowance"
    },
    {
      icon: <Award className="w-8 h-8 text-zion-cyan" />,
      title: "Equity & Rewards",
      description: "Competitive salary, equity options, and performance-based bonuses"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-cyan" />,
      title: "Team Events",
      description: "Regular team building, hackathons, and company retreats"
    },
    {
      icon: <Building className="w-8 h-8 text-zion-cyan" />,
      title: "Modern Tools",
      description: "Latest hardware, software, and tools to do your best work"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-zion-purple" />,
      title: "Innovation",
      description: "We encourage creative thinking and experimentation"
    },
    {
      icon: <Users className="w-6 h-6 text-zion-purple" />,
      title: "Collaboration",
      description: "Great ideas come from working together"
    },
    {
      icon: <Heart className="w-6 h-6 text-zion-purple" />,
      title: "Empathy",
      description: "We care about our users and each other"
    },
    {
      icon: <Zap className="w-6 h-6 text-zion-purple" />,
      title: "Excellence",
      description: "We strive for quality in everything we do"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Careers - Join Zion Tech Group" 
        description="Join our team and help build the future of technology. Explore career opportunities at Zion Tech Group."
        keywords="careers, jobs, Zion Tech Group, employment, tech jobs, AI jobs"
        canonical="https://ziontechgroup.com/careers"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-zion-cyan">Team</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Help us build the future of technology. We're looking for passionate, 
            innovative minds to join our mission.
          </p>
          <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
            <a href="#open-positions">View Open Positions</a>
          </Button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-zion-cyan">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-lg text-zion-slate-light mb-8">
                At Zion Tech Group, we believe that great products are built by great teams. 
                We foster a culture of innovation, collaboration, and continuous learning where 
                every team member can thrive and grow.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{value.title}</h4>
                      <p className="text-zion-slate-light text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Life at Zion</h3>
                <p className="text-zion-slate-light mb-6">
                  Join a team that's passionate about making technology accessible to everyone. 
                  We work hard, have fun, and make a real impact.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-zion-cyan font-semibold">Flexible Hours</div>
                  <div className="text-zion-cyan font-semibold">Remote Work</div>
                  <div className="text-zion-cyan font-semibold">Team Events</div>
                  <div className="text-zion-cyan font-semibold">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Open Positions</h2>
          <div className="grid gap-6">
            {openPositions.map((position) => (
              <Card key={position.id} className={`bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors ${position.featured ? 'ring-2 ring-zion-cyan' : ''}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-white">{position.title}</CardTitle>
                        {position.featured && (
                          <Badge className="bg-zion-cyan text-zion-blue-dark">Featured</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-zion-slate-light">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {position.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
                      <a href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}>
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply</h3>
              <p className="text-zion-slate-light">
                Submit your application with resume and cover letter
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Review</h3>
              <p className="text-zion-slate-light">
                Our team reviews your application within 48 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interview</h3>
              <p className="text-zion-slate-light">
                Technical and cultural fit interviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-blue-dark font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Offer</h3>
              <p className="text-zion-slate-light">
                Welcome to the Zion Tech Group team!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark">
              <a href="mailto:careers@ziontechgroup.com?subject=General Application">
                Send General Application
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
