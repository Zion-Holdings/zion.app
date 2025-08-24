import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Zap, Heart, Globe, Shield } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Join our AI team to build cutting-edge machine learning models and algorithms that power our marketplace recommendations.",
      requirements: ["5+ years ML/AI experience", "Python, TensorFlow, PyTorch", "PhD in Computer Science preferred"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Build beautiful, responsive user interfaces using React and modern web technologies.",
      requirements: ["3+ years React experience", "TypeScript, Tailwind CSS", "Performance optimization skills"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Drive product strategy and execution for our marketplace platform.",
      requirements: ["5+ years PM experience", "Marketplace/B2B experience", "Data-driven decision making"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure experience", "Kubernetes, Docker", "CI/CD expertise"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Develop and execute marketing campaigns to grow our user base and brand awareness.",
      requirements: ["3+ years marketing experience", "Digital marketing skills", "Analytics and reporting"],
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Chicago",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Ensure customer satisfaction and help users maximize value from our platform.",
      requirements: ["3+ years CS experience", "Strong communication skills", "Problem-solving mindset"],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO"
    },
    {
      icon: <Heart className="w-8 h-8 text-zion-purple" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-cyan" />,
      title: "Team Events",
      description: "Regular team building activities and company retreats"
    },
    {
      icon: <Globe className="w-8 h-8 text-zion-purple" />,
      title: "Global Team",
      description: "Work with talented people from around the world"
    },
    {
      icon: <Shield className="w-8 h-8 text-zion-cyan" />,
      title: "Security",
      description: "Competitive salary, equity, and retirement benefits"
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Join Zion Tech Group" 
        description="Join our team and help build the future of AI and technology marketplace. Explore open positions and learn about our culture." 
        keywords="careers, jobs, Zion Tech Group, AI jobs, tech jobs, remote jobs"
        canonical="https://ziontechgroup.com/careers"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <GradientHeading>Join Our Team</GradientHeading>
            <p className="mt-6 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Help us build the world's first free marketplace dedicated to high-tech and artificial intelligence. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-zion-cyan bg-zion-cyan/10">
                Remote First
              </Badge>
              <Badge variant="secondary" className="text-zion-purple bg-zion-purple/10">
                AI & Tech
              </Badge>
              <Badge variant="secondary" className="text-zion-cyan bg-zion-cyan/10">
                Growth Mindset
              </Badge>
              <Badge variant="secondary" className="text-zion-purple bg-zion-purple/10">
                Innovation
              </Badge>
            </div>
          </div>

          {/* Company Culture */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-zion-cyan">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-zion-cyan">{position.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light mt-2">
                          {position.department} • {position.location}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-zion-purple text-zion-purple">
                          {position.type}
                        </Badge>
                        <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                          {position.salary}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light mb-4">{position.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Posted {position.posted}
                        </span>
                      </div>
                      <Button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-20 text-center">
            <Card className="bg-zion-blue-dark border-zion-cyan/30 text-white max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">Don't See the Right Fit?</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-zion-purple hover:bg-zion-purple/80 text-white">
                  Send General Application
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light max-w-2xl mx-auto">
              <p className="text-zion-slate-light mb-4">
                Questions about working at Zion Tech Group? We'd love to hear from you.
              </p>
              <div className="space-y-2 text-zion-slate-light">
                <p><strong>Email:</strong> careers@ziontechgroup.com</p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/zion-tech-group" className="text-zion-cyan hover:underline">Follow us on LinkedIn</a></p>
                <p><strong>Location:</strong> Remote-first, with offices in major tech hubs</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
