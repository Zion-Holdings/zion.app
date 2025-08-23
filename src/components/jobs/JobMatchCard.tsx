import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building, MapPin, Clock, DollarSign, Star } from 'lucide-react';





import { formatDistanceToNow } from "date-fns";
import { JobMatch } from "@/types/jobs";

interface JobMatchProps {
  matchId: string;
  talentId: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  location: string;
  category: string;
  matchPercent: number;
  skills: string[];
  onApply?: (matchId: string) => void;
  onViewDetails?: (matchId: string) => void;
  onInvite?: (matchId: string) => void;
}

export function JobMatchCard({ 
  matchId, 
  talentId, 
  name, 
  title, 
  company, 
  avatar, 
  location, 
  category, 
  matchPercent, 
  skills,
  onApply, 
  onViewDetails, 
  onInvite 
}: JobMatchProps) {
  const handleApply = () => {
    if (onApply) {
      onApply(matchId);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(matchId);
    }
  };

  const handleInvite = () => {
    if (onInvite) {
      onInvite(matchId);
    }
  };

  // Generate a formatted date for display
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - Math.floor(Math.random() * 14)); // Random date within last 2 weeks
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Match score indicator */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{matchPercent}% Match</span>
          </div>
          <Badge variant="outline" className="bg-background">
            {formatDistanceToNow(postedDate, { addSuffix: true })}
          </Badge>
        </div>
        
        {/* Talent details */}
        <div className="p-4">
          <div className="flex justify-between items-start gap-2 mb-3">
            <h3 className="text-lg font-bold line-clamp-2">{name}</h3>
            <Badge variant="default">
              Available
            </Badge>
          </div>
          
          <div className="text-lg font-medium mb-2">{title}</div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="outline">{category}</Badge>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-6 w-6">
              {avatar ? (
                <AvatarImage src={avatar} alt={name} />
              ) : (
                <AvatarFallback>
                  <Building className="h-3 w-3" />
                </AvatarFallback>
              )}
            </Avatar>
            <span className="text-sm font-medium">{company || 'Independent'}</span>
          </div>
          
          <div className="space-y-1 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location || 'Remote'}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {skills?.slice(0, 5).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2 justify-end">
            {onInvite && (
              <Button onClick={handleInvite} variant="default" size="sm">
                Invite
              </Button>
            )}
            {onViewDetails && (
              <Button onClick={handleViewDetails} variant="outline" size="sm">
                View Details
              </Button>
            )}
            {onApply && (
              <Button onClick={handleApply} className="w-full">
                Apply Now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
