
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TalentProfile } from "@/components/profile/TalentProfile";
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState";
import { ProfileErrorState } from "@/components/profile/ProfileErrorState";
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton";
import { useTalentProfile } from "@/hooks/useTalentProfile";
import { HireRequestModal } from "@/components/profile/hire-request";
import { useAuthStatus } from "@/hooks/talent";
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal";
import { StickyAction } from "@/components/ui/sticky-action";
import { Handshake, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { id } = useParams() as { id?: string };
  const navigate = useNavigate();
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const { isAuthenticated, user } = useAuth();

  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user ? {
    id: user.id || '',
    displayName: user.displayName || '',
    email: user.email || '', // Ensure email is always a string
    userType: user.userType || '',
    profileComplete: user.profileComplete || false,
    createdAt: user.createdAt || new Date().toISOString(),
    updatedAt: user.updatedAt || new Date().toISOString(),
    role: user.role || ''
  } : {
    id: userDetails?.id || '',
    displayName: userDetails?.name || '',
    email: userDetails?.email || '', // Ensure email is always a string
    userType: '', // Default empty string since userDetails doesn't have this property
    profileComplete: false, // Default value since userDetails doesn't have this property
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    role: '' // Default empty string since userDetails doesn't have this property
  };

  const pageUrl = id ? `https://app.ziontechgroup.com/talent/${id}` : undefined;
  const structuredData = profile ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: profile.professional_title,
    provider: {
      '@type': 'Person',
      name: profile.full_name
    },
    description: profile.bio,
    url: pageUrl
  } : null;

  // Handle loading error gracefully
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive",
      });
    }
  }, [error]);

  if (isLoading) {
    return <ProfileLoadingState />;
  }

  if (error || !profile) {
    return <ProfileErrorState error={error} />;
  }

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to hire this talent.",
        variant: "default",
      });
      navigate('/login', { state: { from: `/talent/${id}` } });
      return;
    }
    setIsHireModalOpen(true);
  };

  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to message this talent.",
        variant: "default",
      });
      navigate('/login', { state: { from: `/talent/${id}` } });
      return;
    }
    setIsMessageModalOpen(true);
  };

  return (
    <>
      <SEO
        title={
          profile
            ? `${profile.full_name} - ${profile.professional_title}`
            : 'Talent Profile'
        }
        description={profile?.bio || 'Talent profile on Zion'}
        canonical={pageUrl}
      />
      {structuredData && <StructuredData data={structuredData} />}
      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />
      <BackToDirectoryButton />
      
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
        <div className="p-2 flex gap-2">
          <Button 
            size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={handleRequestHire}
          >
            <Handshake className="mr-2 h-4 w-4" />
            Hire Now
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            onClick={handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>
      
      {/* Request to Hire Modal */}
      <HireRequestModal 
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />
      
      {/* Message Talent Modal */}
      <MessageTalentModal
        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </div>
    </>
  );
}
