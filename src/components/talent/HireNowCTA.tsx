import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Phone, 
  Calendar, 
  Star, 
  Clock, 
  DollarSign,
  CheckCircle
} from '@/components/icons';

interface HireNowCTAProps {
  talent: {
    id: string;
    name: string;
    hourlyRate: number;
    rating: number;
    availability: string;
    responseTime: string;
    skills: string[];
  };
  onContact: () => void;
  onSchedule: () => void;
}

export function HireNowCTA({ talent, onContact, onSchedule }: HireNowCTAProps) {
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

  return (
    <Card className="sticky top-4 bg-gradient-to-br from-zion-blue/5 to-zion-purple/5 border-zion-blue/20">
      <CardHeader>
        <CardTitle className="text-xl text-center text-zion-slate-900 dark:text-zion-slate-100">
          Hire {talent.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Pricing */}
        <div className="text-center">
          <div className="text-3xl font-bold text-zion-blue">
            ${talent.hourlyRate}
          </div>
          <div className="text-sm text-zion-slate-600 dark:text-zion-slate-400">
            per hour
          </div>
        </div>

        {/* Rating */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-2">
            {renderStars(talent.rating)}
          </div>
          <div className="text-sm text-zion-slate-600 dark:text-zion-slate-400">
            {talent.rating.toFixed(1)} rating
          </div>
        </div>

        {/* Availability */}
        <div className="text-center">
          <Badge className={`px-3 py-1 text-sm ${getAvailabilityColor(talent.availability)}`}>
            {talent.availability}
          </Badge>
        </div>

        {/* Response Time */}
        <div className="flex items-center justify-center space-x-2 text-sm text-zion-slate-600 dark:text-zion-slate-400">
          <Clock className="w-4 h-4" />
          <span>Response time: {talent.responseTime}</span>
        </div>

        {/* Top Skills */}
        <div>
          <h4 className="text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300 mb-2">
            Top Skills
          </h4>
          <div className="flex flex-wrap gap-1">
            {talent.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
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

        {/* Benefits */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zion-slate-700 dark:text-zion-slate-300">
            Why hire {talent.name}?
          </h4>
          <div className="space-y-2 text-sm text-zion-slate-600 dark:text-zion-slate-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Verified professional</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Fast response time</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Quality guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Secure payments</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onContact}
            className="w-full bg-gradient-to-r from-zion-blue to-zion-purple hover:from-zion-blue/90 hover:to-zion-purple/90"
            size="lg"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Contact Now
          </Button>
          
          <Button 
            onClick={onSchedule}
            variant="outline" 
            className="w-full"
            size="lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center text-xs text-zion-slate-500 dark:text-zion-slate-400 space-y-1">
          <p>• Free consultation call</p>
          <p>• No commitment required</p>
          <p>• 100% satisfaction guarantee</p>
        </div>

        {/* Contact Options */}
        <div className="pt-4 border-t border-zion-slate-200 dark:border-zion-slate-700">
          <div className="text-center text-sm text-zion-slate-600 dark:text-zion-slate-400 mb-3">
            Need immediate assistance?
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button variant="ghost" size="sm" className="flex-1">
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}