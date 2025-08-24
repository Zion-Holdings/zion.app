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
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

const TalentsPage = () => {
  const talents = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior AI Engineer",
      experience: "8 years",
      location: "San Francisco, CA",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Machine Learning"],
      rating: 4.9,
      hourlyRate: "$120",
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&h=200",
      description: "Experienced AI engineer specializing in natural language processing and computer vision applications. Led multiple successful AI projects for Fortune 500 companies.",
      education: "MS Computer Science, Stanford University",
      certifications: ["AWS Machine Learning", "Google Cloud AI", "TensorFlow Developer"],
      languages: ["English", "Mandarin"],
      portfolio: "https://sarahchen.dev",
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Full-Stack Developer",
      experience: "6 years",
      location: "New York, NY",
      skills: ["React", "Node.js", "Python", "AWS", "TypeScript", "MongoDB"],
      rating: 4.8,
      hourlyRate: "$95",
      availability: "Part-time",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
      description: "Versatile developer with expertise in modern web technologies and cloud infrastructure. Built scalable applications for startups and enterprises.",
      education: "BS Computer Science, NYU",
      certifications: ["AWS Solutions Architect", "MongoDB Developer", "React Developer"],
      languages: ["English", "Spanish"],
      portfolio: "https://michaelrodriguez.dev",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/michaelrodriguez"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "DevOps Engineer",
      experience: "5 years",
      location: "Austin, TX",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"],
      rating: 4.9,
      hourlyRate: "$110",
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
      description: "DevOps specialist focused on automation and scalable infrastructure solutions. Expert in cloud migration and CI/CD pipeline optimization.",
      education: "BS Information Technology, UT Austin",
      certifications: ["AWS DevOps Engineer", "Kubernetes Administrator", "Terraform Associate"],
      languages: ["English"],
      portfolio: "https://emilydavis.dev",
      linkedin: "https://linkedin.com/in/emilydavis",
      github: "https://github.com/emilydavis"
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Cybersecurity Specialist",
      experience: "7 years",
      location: "Washington, DC",
      skills: ["Network Security", "Penetration Testing", "Incident Response", "Compliance", "SIEM"],
      rating: 4.7,
      hourlyRate: "$130",
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
      description: "Cybersecurity expert with extensive experience in protecting critical infrastructure and enterprise systems from advanced threats.",
      education: "MS Cybersecurity, Georgetown University",
      certifications: ["CISSP", "CEH", "CompTIA Security+", "GIAC GPEN"],
      languages: ["English"],
      portfolio: "https://alexthompson.dev",
      linkedin: "https://linkedin.com/in/alexthompson",
      github: "https://github.com/alexthompson"
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      role: "Data Scientist",
      experience: "4 years",
      location: "Seattle, WA",
      skills: ["Python", "R", "SQL", "Tableau", "Machine Learning", "Statistical Analysis"],
      rating: 4.8,
      hourlyRate: "$100",
      availability: "Part-time",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&h=200",
      description: "Data scientist passionate about turning complex data into actionable insights. Specializes in predictive modeling and business intelligence.",
      education: "MS Data Science, University of Washington",
      certifications: ["Google Data Analytics", "Tableau Desktop", "Python for Data Science"],
      languages: ["English", "Spanish"],
      portfolio: "https://jennifermartinez.dev",
      linkedin: "https://linkedin.com/in/jennifermartinez",
      github: "https://github.com/jennifermartinez"
    },
    {
      id: 6,
      name: "David Kim",
      role: "Mobile App Developer",
      experience: "6 years",
      location: "Los Angeles, CA",
      skills: ["iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin"],
      rating: 4.9,
      hourlyRate: "$105",
      availability: "Full-time",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
      description: "Mobile app developer with expertise in both native and cross-platform development. Created apps with millions of downloads.",
      education: "BS Computer Science, UCLA",
      certifications: ["Apple Developer", "Google Play Developer", "React Native Developer"],
      languages: ["English", "Korean"],
      portfolio: "https://davidkim.dev",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    }
  ];

  const filters = [
    "All",
    "AI & ML",
    "Web Development",
    "DevOps",
    "Cybersecurity",
    "Data Science",
    "Mobile Development"
  ];

  const sortOptions = [
    "Rating (High to Low)",
    "Experience (High to Low)",
    "Hourly Rate (Low to High)",
    "Availability",
    "Location"
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Top Talent</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Discover skilled professionals, verified experts, and industry leaders. 
            Connect with talent that matches your project requirements and company culture.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for skills, roles, or locations..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {filters.map((filter) => (
                <Badge
                  key={filter}
                  variant={filter === "All" ? "default" : "secondary"}
                  className={`cursor-pointer transition-all duration-200 ${
                    filter === "All" 
                      ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white" 
                      : "bg-white/10 text-zion-slate-light hover:bg-white/20"
                  }`}
                >
                  {filter}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-center">
              <select className="px-4 py-2 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none">
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Talents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent) => (
            <Card key={talent.id} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <img
                    src={talent.avatar}
                    alt={talent.name}
                    className="w-20 h-20 rounded-full"
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
                <p className="text-zion-slate-light mb-4 line-clamp-3">{talent.description}</p>
                
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
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <GraduationCap className="h-4 w-4" />
                    <span>{talent.education}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-white font-medium text-sm">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {talent.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{talent.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-zion-cyan/20 pt-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-bold text-xl">{talent.hourlyRate}/hr</span>
                    <Badge variant="secondary">{talent.availability}</Badge>
                  </div>
                  
                  <div className="flex gap-2 mb-3">
                    <Button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portfolio
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 border-zion-cyan/20 text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
            Load More Talents
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Can't Find the Right Talent?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Our team can help you find the perfect match or create a custom talent search strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Contact Our Team
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Post a Job
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TalentsPage;