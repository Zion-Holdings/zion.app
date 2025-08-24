import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, Download } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  // Mock portfolio data - in real app this would come from user's profile
  const [portfolioData, setPortfolioData] = useState({
    headline: "AI & Full-Stack Developer with 5+ years of experience",
    summary: "Passionate developer specializing in AI/ML applications, web development, and cloud solutions. I help businesses leverage cutting-edge technology to solve complex problems and drive innovation.",
    skills: ["React", "Python", "TensorFlow", "AWS", "Node.js", "Machine Learning"],
    projects: [
      {
        id: 1,
        title: "AI-Powered E-commerce Recommendation System",
        description: "Built a machine learning system that increased conversion rates by 35% through personalized product recommendations.",
        technologies: ["Python", "TensorFlow", "React", "Node.js"],
        image: "/api/placeholder/400/300",
        link: "#",
        featured: true
      },
      {
        id: 2,
        title: "Real-time Chat Application",
        description: "Developed a scalable chat application with real-time messaging, file sharing, and video calling capabilities.",
        technologies: ["React", "Socket.io", "Express", "MongoDB"],
        image: "/api/placeholder/400/300",
        link: "#",
        featured: false
      },
      {
        id: 3,
        title: "Data Analytics Dashboard",
        description: "Created an interactive dashboard for business intelligence with real-time data visualization and reporting.",
        technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
        image: "/api/placeholder/400/300",
        link: "#",
        featured: false
      }
    ],
    experience: [
      {
        id: 1,
        company: "TechCorp Inc.",
        position: "Senior AI Developer",
        duration: "2022 - Present",
        description: "Leading AI initiatives and developing machine learning solutions for enterprise clients."
      },
      {
        id: 2,
        company: "StartupXYZ",
        position: "Full-Stack Developer",
        duration: "2020 - 2022",
        description: "Built scalable web applications and managed cloud infrastructure."
      }
    ],
    education: [
      {
        id: 1,
        degree: "Master of Science in Computer Science",
        school: "University of Technology",
        year: "2020",
        description: "Specialized in Artificial Intelligence and Machine Learning"
      }
    ]
  });

  const handleSave = () => {
    setIsEditing(false);
    // In real app, save to backend
    console.log('Portfolio saved:', portfolioData);
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: "New Project",
      description: "Project description",
      technologies: [],
      image: "/api/placeholder/400/300",
      link: "#",
      featured: false
    };
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const removeProject = (projectId: number) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== projectId)
    }));
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Portfolio - Zion Tech Group" 
        description="Showcase your work and manage your professional portfolio on Zion Tech Group."
        keywords="portfolio, showcase, work samples, professional profile, Zion Tech Group"
        canonical="https://ziontechgroup.com/portfolio"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
              <p className="text-zion-slate-light">Showcase your work and expertise</p>
            </div>
            <div className="flex gap-3">
              {isEditing ? (
                <>
                  <Button onClick={handleSave} className="bg-zion-purple hover:bg-zion-purple-light">
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(false)}
                    className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} className="bg-zion-purple hover:bg-zion-purple-light">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Portfolio
                </Button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-zion-blue-light mb-8">
            {['overview', 'projects', 'experience', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-zion-cyan border-b-2 border-zion-cyan'
                    : 'text-zion-slate-light hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-zion-blue border-zion-blue-light">
                    <CardHeader>
                      <CardTitle className="text-white">Professional Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {isEditing ? (
                        <Textarea
                          value={portfolioData.summary}
                          onChange={(e) => setPortfolioData(prev => ({ ...prev, summary: e.target.value }))}
                          className="bg-zion-blue-dark border-zion-blue-light text-white"
                          rows={4}
                        />
                      ) : (
                        <p className="text-zion-slate-light">{portfolioData.summary}</p>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-zion-blue border-zion-blue-light">
                    <CardHeader>
                      <CardTitle className="text-white">Skills & Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {portfolioData.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Stats */}
                <div className="space-y-6">
                  <Card className="bg-zion-blue border-zion-blue-light">
                    <CardHeader>
                      <CardTitle className="text-white">Portfolio Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-zion-cyan">{portfolioData.projects.length}</div>
                        <div className="text-zion-slate-light">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-zion-cyan">{portfolioData.experience.length}</div>
                        <div className="text-zion-slate-light">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-zion-cyan">{portfolioData.skills.length}</div>
                        <div className="text-zion-slate-light">Skills</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
                  {isEditing && (
                    <Button onClick={addProject} className="bg-zion-purple hover:bg-zion-purple-light">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioData.projects.map((project) => (
                    <Card key={project.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-purple transition-colors">
                      <div className="relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        {project.featured && (
                          <Badge className="absolute top-2 right-2 bg-zion-purple">
                            Featured
                          </Badge>
                        )}
                        {isEditing && (
                          <div className="absolute top-2 left-2 flex gap-2">
                            <Button size="sm" variant="destructive" onClick={() => removeProject(project.id)}>
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-zion-cyan border-zion-cyan">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                            <Eye className="w-3 h-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                            <Download className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Work Experience</h2>
                <div className="space-y-4">
                  {portfolioData.experience.map((exp) => (
                    <Card key={exp.id} className="bg-zion-blue border-zion-blue-light">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white">{exp.position}</CardTitle>
                            <CardDescription className="text-zion-cyan">{exp.company}</CardDescription>
                          </div>
                          <Badge variant="outline" className="text-zion-slate-light border-zion-slate-light">
                            {exp.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zion-slate-light">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Education</h2>
                <div className="space-y-4">
                  {portfolioData.education.map((edu) => (
                    <Card key={edu.id} className="bg-zion-blue border-zion-blue-light">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white">{edu.degree}</CardTitle>
                            <CardDescription className="text-zion-cyan">{edu.school}</CardDescription>
                          </div>
                          <Badge variant="outline" className="text-zion-slate-light border-zion-slate-light">
                            {edu.year}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-zion-slate-light">{edu.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}