import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  Globe,
  Plus,
  X
} from 'lucide-react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  location: string;
  website: string;
  bio: string;
  interests: string[];
}

interface ProfileSetupProps {
  profileData: ProfileData;
  onUpdateProfile: (data: Partial<ProfileData>) => void;
  onComplete: () => void;
}

const INTEREST_OPTIONS = [
  'AI & Machine Learning',
  'Web Development',
  'Mobile Apps',
  'Cloud Computing',
  'Cybersecurity',
  'Data Analytics',
  'DevOps',
  'UI/UX Design',
  'E-commerce',
  'Digital Marketing',
  'Business Intelligence',
  'IoT',
];

export const ProfileSetup: React.FC<ProfileSetupProps> = ({
  profileData,
  onUpdateProfile,
  onComplete,
}) => {
  const [newInterest, setNewInterest] = useState('');

  const handleAddInterest = () => {
    if (newInterest.trim() && !profileData.interests.includes(newInterest.trim())) {
      onUpdateProfile({
        interests: [...profileData.interests, newInterest.trim()]
      });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest: string) => {
    onUpdateProfile({
      interests: profileData.interests.filter(i => i !== interest)
    });
  };

  const handleInterestOptionClick = (interest: string) => {
    if (!profileData.interests.includes(interest)) {
      onUpdateProfile({
        interests: [...profileData.interests, interest]
      });
    }
  };

  const isFormValid = () => {
    return profileData.firstName && 
           profileData.lastName && 
           profileData.email && 
           profileData.company;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Complete Your Profile
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tell us a bit more about yourself so we can personalize your experience
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={profileData.firstName}
                onChange={(e) => onUpdateProfile({ firstName: e.target.value })}
                placeholder="Enter your first name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={profileData.lastName}
                onChange={(e) => onUpdateProfile({ lastName: e.target.value })}
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => onUpdateProfile({ email: e.target.value })}
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={profileData.phone}
                onChange={(e) => onUpdateProfile({ phone: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization *</Label>
              <Input
                id="company"
                value={profileData.company}
                onChange={(e) => onUpdateProfile({ company: e.target.value })}
                placeholder="Enter your company name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="position">Job Title</Label>
              <Input
                id="position"
                value={profileData.position}
                onChange={(e) => onUpdateProfile({ position: e.target.value })}
                placeholder="Enter your job title"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={profileData.location}
                onChange={(e) => onUpdateProfile({ location: e.target.value })}
                placeholder="City, Country"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={profileData.website}
                onChange={(e) => onUpdateProfile({ website: e.target.value })}
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={profileData.bio}
              onChange={(e) => onUpdateProfile({ bio: e.target.value })}
              placeholder="Tell us about yourself, your experience, and what you're looking for..."
              rows={4}
            />
          </div>
          
          <div className="space-y-4">
            <Label>Areas of Interest</Label>
            <div className="flex flex-wrap gap-2 mb-4">
              {profileData.interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="flex items-center space-x-1">
                  <span>{interest}</span>
                  <button
                    onClick={() => handleRemoveInterest(interest)}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Input
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                placeholder="Add custom interest"
                onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
              />
              <Button onClick={handleAddInterest} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-sm text-gray-600 mb-2">Quick add:</div>
            <div className="flex flex-wrap gap-2">
              {INTEREST_OPTIONS.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className={`cursor-pointer hover:bg-blue-50 ${
                    profileData.interests.includes(interest) 
                      ? 'bg-blue-100 border-blue-300' 
                      : ''
                  }`}
                  onClick={() => handleInterestOptionClick(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center mt-8">
        <Button
          onClick={onComplete}
          disabled={!isFormValid()}
          className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );
};