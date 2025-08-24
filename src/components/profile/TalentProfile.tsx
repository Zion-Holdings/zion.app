import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Clock, Star, Link as LinkIcon, Github, Twitter, Linkedin, Globe } from 'lucide-react';
import type { TalentProfileWithSocial } from '@/types/talent';

interface TalentProfileProps {
  profile: TalentProfileWithSocial;
}

export const TalentProfile: React.FC<TalentProfileProps> = ({ profile }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-start space-x-6">
            <Avatar className="w-24 h-24">
              {profile.profile_picture_url ? (
                <AvatarImage src={profile.profile_picture_url} alt={profile.full_name} />
              ) : (
                <AvatarFallback>{profile.full_name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            
            <div className="flex-1">
              <CardTitle className="text-3xl mb-2">{profile.full_name}</CardTitle>
              <p className="text-xl text-gray-600 mb-4">{profile.professional_title}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{profile.experience_years} years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>${profile.hourly_rate}/hr</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {profile.bio && (
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-700">{profile.bio}</p>
            </div>
          )}
          
          {profile.skills && profile.skills.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-zion-blue/10 text-zion-blue border-zion-blue/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex space-x-4">
            {profile.portfolio_url && (
              <Button variant="outline" asChild>
                <a href={profile.portfolio_url} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Portfolio
                </a>
              </Button>
            )}
            
            {profile.linkedin_url && (
              <Button variant="outline" asChild>
                <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            )}
            
            {profile.github_url && (
              <Button variant="outline" asChild>
                <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};