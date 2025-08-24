import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle,
  MessageSquare,
  Bookmark,
  Share2,
  Globe,
  Zap,
  Award,
  Clock,
  Shield
} from 'lucide-react';

const TalentDirectory = () => {
  const talentCategories = [
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: "AI & Machine Learning",
      count: "150+",
      description: "AI engineers, data scientists, ML specialists",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"]
    },
    {
      icon: <Globe className="h-8 w-8 text-zion-cyan" />,
      title: "Web Development",
      count: "200+",
      description: "Frontend, backend, and full-stack developers",
      skills: ["React", "Node.js", "Python", "JavaScript", "TypeScript"]
    },
    {
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      title: "DevOps & Cloud",
      count: "80+",
      description: "DevOps engineers and cloud architects",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-cyan" />,
      title: "Cybersecurity",
      count: "60+",
      description: "Security analysts and penetration testers",
      skills: ["Network Security", "Ethical Hacking", "Compliance", "Incident Response"]
    }
  ];

  const featuredTalents = [
    {
      name: "Sarah Chen",
      role: "Senior AI Engineer",
      experience: "8 years",
      location: "San Francisco, CA",
      skills: ["Python", "TensorFlow", "NLP", "Computer Vision"],
      rating: 4.9,
      hourlyRate: "$120",
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100",
      description: "Experienced AI engineer specializing in natural language processing and computer vision applications."
    },
    {
      name: "Michael Rodriguez",
      role: "Full-Stack Developer",
      experience: "6 years",
      location: "New York, NY",
      skills: ["React", "Node.js", "Python", "AWS"],
      rating: 4.8,
      hourlyRate: "$95",
      availability: "Part-time",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
      description: "Versatile developer with expertise in modern web technologies and cloud infrastructure."
    },
    {
      name: "Emily Davis",
      role: "DevOps Engineer",
      experience: "5 years",
      location: "Austin, TX",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      rating: 4.9,
      hourlyRate: "$110",
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
      description: "DevOps specialist focused on automation and scalable infrastructure solutions."
    }
  ];

  const services = [
    {
      title: "Talent Sourcing",
      description: "Find the perfect candidates for your projects",
      features: ["AI-powered matching", "Skill verification", "Background checks", "Portfolio review"],
      price: "From $299/month"
    },
    {
      title: "Recruitment Process",
      description: "End-to-end recruitment and hiring support",
      features: ["Job posting", "Candidate screening", "Interview coordination", "Offer management"],
      price: "From $499/month"
    },
    {
      title: "Talent Management",
      description: "Manage and retain your talent effectively",
      features: ["Performance tracking", "Skill development", "Career planning", "Retention strategies"],
      price: "From $199/month"
    },
    {
      title: "Consulting Services",
      description: "Expert guidance on talent strategy",
      features: ["Workforce planning", "Compensation analysis", "Culture building", "Best practices"],
      price: "From $150/hour"
    }
  ];

  const stats = [
    { number: "500+", label: "Verified Talents" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Countries" }
  ];

  const benefits = [
    "Pre-vetted professionals",
    "Fast hiring process",
    "Flexible engagement models",
    "Quality guarantee",
    "Cost-effective solutions",
    "Global talent pool",
    "Technical expertise",
    "Cultural fit matching"
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Talent</span> Directory
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Access a curated network of top tech talent. Find skilled professionals, 
            verified experts, and industry leaders for your projects and teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
              Browse Talents
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              Post a Job
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for skills, roles, or locations..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Talent Categories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Talent Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talentCategories.map((category, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  <div className="text-zion-cyan font-bold text-lg">{category.count}</div>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    View Talents
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Talents */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Talents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTalents.map((talent, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img
                      src={talent.avatar}
                      alt={talent.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-white text-lg">{talent.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white text-sm">{talent.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="text-zion-cyan font-medium">
                        {talent.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-zion-slate-light mb-4">{talent.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Briefcase className="h-4 w-4" />
                      <span>{talent.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <MapPin className="h-4 w-4" />
                      <span>{talent.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Clock className="h-4 w-4" />
                      <span>{talent.availability}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {talent.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold text-xl">{talent.hourlyRate}/hr</span>
                    <Badge variant="secondary">{talent.availability}</Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-zion-slate-light">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4">
                    <div className="text-white font-medium mb-3">{service.price}</div>
                    <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Talent Directory?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
                  <p className="text-zion-slate-light">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Find Your Perfect Talent?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Join thousands of companies already using our talent directory to build amazing teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Start Hiring
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TalentDirectory;