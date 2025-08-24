import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Calendar, 
  Award,
  Star,
  ExternalLink,
  Download
} from '@/components/icons';

interface TalentProfileProps {
  talent: {
    id: string;
    name: string;
    title: string;
    avatar?: string;
    bio: string;
    location: string;
    email: string;
    phone?: string;
    website?: string;
    hourlyRate: number;
    rating: number;
    reviewCount: number;
    skills: string[];
    experience: Array<{
      id: string;
      company: string;
      position: string;
      duration: string;
      description: string;
    }>;
    education: Array<{
      id: string;
      institution: string;
      degree: string;
      field: string;
      year: string;
    }>;
    portfolio: Array<{
      id: string;
      title: string;
      description: string;
      image: string;
      link?: string;
      technologies: string[];
    }>;
    certifications: Array<{
      id: string;
      name: string;
      issuer: string;
      year: string;
      link?: string;
    }>;
    languages: Array<{
      language: string;
      proficiency: 'Basic' | 'Conversational' | 'Fluent' | 'Native';
    }>;
    availability: 'Available' | 'Partially Available' | 'Not Available';
    timezone: string;
  };
}

export function TalentProfile({ talent }: TalentProfileProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-zion-slate-300'
        }`}
      />
    ));
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Partially Available':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Not Available':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-zion-slate-100 text-zion-slate-800 dark:bg-zion-slate-900/20 dark:text-zion-slate-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card>
        <CardHeader className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src={talent.avatar} alt={talent.name} />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-zion-blue to-zion-purple text-white">
                {talent.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-zion-slate-900 dark:text-zion-slate-100">
                {talent.name}
              </h1>
              <p className="text-xl text-zion-slate-600 dark:text-zion-slate-400">
                {talent.title}
              </p>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(talent.rating)}
              </div>
              <span className="text-zion-slate-600 dark:text-zion-slate-400">
                {talent.rating.toFixed(1)} ({talent.reviewCount} reviews)
              </span>
            </div>

            {/* Availability Badge */}
            <Badge className={`px-4 py-2 text-sm font-medium ${getAvailabilityColor(talent.availability)}`}>
              {talent.availability}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-zion-blue">${talent.hourlyRate}</p>
              <p className="text-sm text-zion-slate-500">per hour</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-zion-purple">{talent.experience.length}</p>
              <p className="text-sm text-zion-slate-500">years experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-zion-cyan">{talent.skills.length}</p>
              <p className="text-sm text-zion-slate-500">skills</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zion-slate-700 dark:text-zion-slate-300 leading-relaxed">
            {talent.bio}
          </p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {talent.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Work Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {talent.experience.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-zion-slate-900 dark:text-zion-slate-100">
                    {exp.position}
                  </h4>
                  <p className="text-zion-blue font-medium">{exp.company}</p>
                </div>
                <Badge variant="outline" className="text-sm">
                  {exp.duration}
                </Badge>
              </div>
              <p className="text-zion-slate-600 dark:text-zion-slate-400 text-sm">
                {exp.description}
              </p>
              {exp.id !== talent.experience[talent.experience.length - 1].id && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {talent.education.map((edu) => (
            <div key={edu.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-zion-slate-900 dark:text-zion-slate-100">
                    {edu.degree} in {edu.field}
                  </h4>
                  <p className="text-zion-blue font-medium">{edu.institution}</p>
                </div>
                <Badge variant="outline" className="text-sm">
                  {edu.year}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Portfolio Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {talent.portfolio.map((project) => (
              <div key={project.id} className="space-y-3">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  {project.link && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-zion-slate-900 dark:text-zion-slate-100">
                    {project.title}
                  </h4>
                  <p className="text-sm text-zion-slate-600 dark:text-zion-slate-400 mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact & Additional Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Contact & Additional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-zion-blue" />
                <span className="text-zion-slate-700 dark:text-zion-slate-300">
                  {talent.email}
                </span>
              </div>
              
              {talent.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-zion-blue" />
                  <span className="text-zion-slate-700 dark:text-zion-slate-300">
                    {talent.phone}
                  </span>
                </div>
              )}
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-zion-blue" />
                <span className="text-zion-slate-700 dark:text-zion-slate-300">
                  {talent.location}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              {talent.website && (
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-zion-blue" />
                  <a
                    href={talent.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-blue hover:underline"
                  >
                    {talent.website}
                  </a>
                </div>
              )}
              
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-zion-blue" />
                <span className="text-zion-slate-700 dark:text-zion-slate-300">
                  Timezone: {talent.timezone}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex-1 bg-gradient-to-r from-zion-blue to-zion-purple hover:from-zion-blue/90 hover:to-zion-purple/90">
          <MessageSquare className="w-5 h-5 mr-2" />
          Contact {talent.name}
        </Button>
        
        <Button size="lg" variant="outline" className="flex-1">
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </div>
    </div>
  );
}