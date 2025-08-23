import React, { useState } from "react";
import { Star, ExternalLink } from 'lucide-react';

import { Button } from "@/components/ui/button";

import { TalentProfile } from "@/types/talent";
import { HireRequestModal } from "@/components/profile/hire-request";
import { useAuthStatus } from "@/hooks/talent";
import type { UserProfile } from "@/types/auth";
import { useRouter } from 'next/router';

interface TalentCardFooterProps {
  profile: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire?: (profile: TalentProfile) => void;
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const router = useRouter();

  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {
    id: userDetails?.id,
    name: userDetails?.name || '',
    email: userDetails?.email || '',
    userType: null,
    profileComplete: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    role: userDetails?.userType || '',
    displayName: userDetails?.name || '',
    points: 0,
    avatarUrl: userDetails?.avatar || ''
  };

  // Handle request to hire
  const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (onRequestHire) {
      onRequestHire(profile);
    } else {
      // Open hire modal directly if no handler provided
      setIsHireModalOpen(true);
    }
  };

  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id || ''}`);
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id || '');
    }
  };

  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
        {/* Experience or Hourly Rate */}
        <div>
          {profile.hourly_rate ? (
            <div>
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-slate-light">{profile.years_experience} years exp.</span>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
      
      {/* Hire Request Modal */}
      <HireRequestModal
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />
    </>
  );
}
