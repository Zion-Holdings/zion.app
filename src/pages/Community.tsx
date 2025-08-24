import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Star, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Heart,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';

const Community = () => {
  const communityStats = [
    { number: "10,000+", label: "Active Members" },
    { number: "500+", label: "Expert Contributors" },
    { number: "50+", label: "Countries Represented" },
    { number: "24/7", label: "Community Support" }
  ];

  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Summit 2024",
      date: "2024-02-15",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual + New York, NY",
      type: "Conference",
      attendees: 250,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      title: "Micro SAAS Workshop Series",
      date: "2024-02-20",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual",
      type: "Workshop",
      attendees: 75,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices Meetup",
      date: "2024-02-25",
      time: "6:00 PM - 8:00 PM",
      location: "Philadelphia, PA",
      type: "Meetup",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=400"
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best practices for implementing AI in small businesses",
      author: "Sarah Chen",
      replies: 23,
      views: 156,
      category: "AI & ML",
      tags: ["AI", "Business", "Implementation"],
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      title: "Cloud migration strategies for enterprise companies",
      author: "Mike Rodriguez",
      replies: 18,
      views: 89,
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "Enterprise"],
      lastActivity: "5 hours ago"
    },
    {
      id: 3,
      title: "DevOps automation tools comparison 2024",
      author: "Alex Thompson",
      replies: 31,
      views: 203,
      category: "DevOps",
      tags: ["DevOps", "Automation", "Tools"],
      lastActivity: "1 day ago"
    },
    {
      id: 4,
      title: "Building scalable microservices architecture",
      author: "Emily Davis",
      replies: 27,
      views: 134,
      category: "Architecture",
      tags: ["Microservices", "Scalability", "Architecture"],
      lastActivity: "2 days ago"
    }
  ];

  const resources = [
    {
      title: "AI Implementation Guide",
      description: "Comprehensive guide to implementing AI solutions in your business",
      type: "Guide",
      downloads: 1250,
      rating: 4.8,
      author: "Zion Tech Team"
    },
    {
      title: "Cloud Migration Checklist",
      description: "Step-by-step checklist for successful cloud migration",
      type: "Checklist",
      downloads: 890,
      rating: 4.6,
      author: "Cloud Experts"
    },
    {
      title: "Cybersecurity Framework Template",
      description: "Ready-to-use cybersecurity framework for businesses",
      type: "Template",
      downloads: 567,
      rating: 4.9,
      author: "Security Specialists"
    }
  ];

  const achievements = [
    {
      title: "Community Champion",
      description: "Awarded to members who actively help others",
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      recipients: 45
    },
    {
      title: "Expert Contributor",
      description: "Recognized for valuable technical contributions",
      icon: <Star className="h-6 w-6 text-blue-400" />,
      recipients: 128
    },
    {
      title: "Innovation Leader",
      description: "For groundbreaking ideas and solutions",
      icon: <TrendingUp className="h-6 w-6 text-green-400" />,
      recipients: 23
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Community</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Connect, learn, and grow with fellow tech professionals, entrepreneurs, and innovators. 
            Share knowledge, discover opportunities, and build lasting relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
              Join Community
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              Explore Events
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
              View All Events
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-zion-cyan/90 text-white">
                    {event.type}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white text-lg">{event.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {event.title}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Calendar className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Discussions */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Discussions</h2>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
              Start Discussion
            </Button>
          </div>
          
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{discussion.category}</Badge>
                        <span className="text-zion-slate-light text-sm">by {discussion.author}</span>
                      </div>
                      
                      <h3 className="text-white text-lg font-medium mb-2 hover:text-zion-cyan cursor-pointer transition-colors duration-200">
                        {discussion.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                        <span>{discussion.replies} replies</span>
                        <span>{discussion.views} views</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {discussion.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                        <Bookmark className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Resources */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Community Resources</h2>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{resource.type}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-zion-slate-light">{resource.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-white font-medium mb-1">{resource.title}</h3>
                        <p className="text-zion-slate-light text-sm mb-2">{resource.description}</p>
                        <div className="flex items-center gap-4 text-xs text-zion-slate-light">
                          <span>by {resource.author}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-zion-cyan hover:bg-zion-cyan-light text-white">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Community Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{achievement.title}</h3>
                        <p className="text-zion-slate-light text-sm mb-2">{achievement.description}</p>
                        <span className="text-xs text-zion-cyan">{achievement.recipients} recipients</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Connect with thousands of tech professionals, share your expertise, and stay updated with the latest industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Join Now - It's Free
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;