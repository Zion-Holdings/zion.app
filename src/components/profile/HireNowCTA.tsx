import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Calendar, Star } from 'lucide-react';

interface HireNowCTAProps {
  hourlyRate: number;
  availability: string;
  rating: number;
  reviewCount: number;
}

export const HireNowCTA: React.FC<HireNowCTAProps> = ({
  hourlyRate,
  availability,
  rating,
  reviewCount,
}) => {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-xl">Hire This Talent</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            ${hourlyRate}
          </div>
          <div className="text-gray-600">per hour</div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Rating</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{rating}</span>
              <span className="text-gray-500">({reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Availability</span>
            <Badge 
              variant={availability === 'available' ? 'default' : 'secondary'}
              className={availability === 'available' ? 'bg-green-100 text-green-800' : ''}
            >
              {availability}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <MessageCircle className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          
          <Button variant="outline" className="w-full">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Call
          </Button>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>Response time: Usually within 2 hours</p>
          <p>Available for new projects</p>
        </div>
      </CardContent>
    </Card>
  );
};