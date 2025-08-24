import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Calendar, 
  Edit, 
  Save, 
  X,
  Camera,
  Shield,
  Bell,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Star,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@ziontechgroup.com",
    phone: "+1 302 464 0950",
    company: "Zion Tech Group",
    position: "Senior Developer",
    location: "Middletown, DE",
    bio: "Experienced developer with 8+ years in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating innovative solutions and mentoring junior developers.",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/johndoe"
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setTempProfile(prev => ({ ...prev, [field]: value }));
  };

  const achievements = [
    {
      id: 1,
      title: "Top Performer",
      description: "Achieved highest performance rating for Q3 2024",
      date: "2024-10-01",
      icon: <Star className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Innovation Award",
      description: "Recognized for developing breakthrough AI solution",
      date: "2024-08-15",
      icon: <Award className="h-5 w-5" />
    },
    {
      id: 3,
      title: "5 Years Service",
      description: "Celebrated 5 years with Zion Tech Group",
      date: "2024-06-20",
      icon: <Clock className="h-5 w-5" />
    }
  ];

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "TypeScript", level: 88, category: "Frontend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "AWS", level: 80, category: "Cloud" },
    { name: "Docker", level: 75, category: "DevOps" }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Completed project milestone",
      description: "Successfully delivered Phase 2 of the AI Analytics platform",
      time: "2 hours ago",
      status: "completed"
    },
    {
      id: 2,
      action: "Code review completed",
      description: "Reviewed 15 pull requests for the mobile app team",
      time: "1 day ago",
      status: "completed"
    },
    {
      id: 3,
      action: "Team meeting attended",
      description: "Participated in weekly sprint planning session",
      time: "2 days ago",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
            <p className="text-zion-slate-light">Manage your personal information and preferences</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            {isEditing ? (
              <>
                <Button 
                  onClick={handleSave}
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={handleCancel} className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setIsEditing(true)}
                variant="outline" 
                className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2">
            {/* Basic Information */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Basic Information</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Your personal and professional details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">First Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempProfile.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    ) : (
                      <p className="text-white font-medium">{profile.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Last Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempProfile.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    ) : (
                      <p className="text-white font-medium">{profile.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={tempProfile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    ) : (
                      <p className="text-white">{profile.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={tempProfile.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    ) : (
                      <p className="text-white">{profile.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Company</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempProfile.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    ) : (
                      <p className="text-white">{profile.company}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Position</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempProfile.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    ) : (
                      <p className="text-white">{profile.position}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Bio</label>
                    {isEditing ? (
                      <textarea
                        rows={4}
                        value={tempProfile.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none resize-none"
                      />
                    ) : (
                      <p className="text-zion-slate-light">{profile.bio}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Skills & Expertise</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Your technical skills and proficiency levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs text-zion-cyan border-zion-cyan/30">
                            {skill.category}
                          </Badge>
                        </div>
                        <span className="text-zion-slate-light text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Your latest contributions and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                      <div className="mt-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{activity.action}</h4>
                        <p className="text-zion-slate-light text-sm mb-2">{activity.description}</p>
                        <span className="text-zion-slate-light text-xs">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Profile Picture */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-8">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple p-1">
                    <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                      <User className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  {isEditing && (
                    <Button 
                      size="sm" 
                      className="absolute bottom-0 right-0 w-8 h-8 rounded-full p-0 bg-zion-cyan hover:bg-zion-cyan-light"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{profile.firstName} {profile.lastName}</h3>
                <p className="text-zion-slate-light mb-3">{profile.position}</p>
                <Badge variant="outline" className="text-zion-cyan border-zion-cyan/30">
                  {profile.company}
                </Badge>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Achievements</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Your recent accomplishments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                      <div className="text-zion-cyan mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm mb-1">{achievement.title}</h4>
                        <p className="text-zion-slate-light text-xs mb-2">{achievement.description}</p>
                        <span className="text-zion-slate-light text-xs">{achievement.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardHeader>
                <CardTitle className="text-white">Social Links</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Connect with me online
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href={profile.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-zion-cyan/10 hover:border-zion-cyan/40 transition-colors"
                  >
                    <Globe className="h-5 w-5 text-zion-cyan" />
                    <span className="text-white text-sm">Website</span>
                  </a>
                  <a 
                    href={profile.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-zion-cyan/10 hover:border-zion-cyan/40 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-zion-cyan" />
                    <span className="text-white text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href={profile.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-zion-cyan/10 hover:border-zion-cyan/40 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-zion-cyan" />
                    <span className="text-white text-sm">Twitter</span>
                  </a>
                  <a 
                    href={profile.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-zion-cyan/10 hover:border-zion-cyan/40 transition-colors"
                  >
                    <Github className="h-5 w-5 text-zion-cyan" />
                    <span className="text-white text-sm">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;