
import { useState, useEffect } from "react";
import { MapPin, Clock } from '@/components/ui/icons';
import { useRouter } from "next/router";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { SEO } from "@/components/SEO";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
import { logErrorToProduction } from '@/utils/productionLogger';










export default function ProfilePage() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const router = useRouter();
  const profileId = router.query.profileId as string;
  const [profileData, setProfileData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        if (!supabase) throw new Error('Supabase client not initialized');
        const { data, error } = await supabase
          .from("talent_profiles")
          .select("*")
          .eq("id", profileId)
          .single();

        if (error) {
          throw error;
        }

        setProfileData(data);
      } catch (error) {
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching profile' });
        setIsError(true);
        toast({
          title: "Error",
          description: "Failed to load profile. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (profileId) {
      fetchProfile();
    }
  }, [profileId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (isError || !profileData || typeof profileData !== 'object' || profileData === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    );
  }

  // Type guard for profileData
  const pd = profileData as {
    id?: string;
    full_name?: string;
    bio?: string;
    profile_picture_url?: string;
    is_verified?: boolean;
    professional_title?: string;
    location?: string;
    availability?: string;
    skills?: string[];
    portfolio_links?: string[];
    experience?: string;
    github_link?: string;
    twitter_link?: string;
    linkedin_link?: string;
    hourly_rate?: number;
  };

  return (
    <>
      <SEO
        title={`${pd.full_name ?? ''} | Talent Profile`}
        description={pd.bio || "View the profile of this talented individual."}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">
            {/* Profile Header */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <div className="flex items-start">
                {/* Avatar */}
                <div className="relative mr-4">
                  <Avatar className="w-24 h-24">
                    {pd.profile_picture_url ? (
                      <AvatarImage src={pd.profile_picture_url} alt={pd.full_name ?? ''} />
                    ) : (
                      <AvatarFallback>{pd.full_name?.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  {pd.is_verified && (
                    <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
                    </div>
                  )}
                </div>

                {/* Main Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold text-white">{pd.full_name}</h1>
                      <p className="text-zion-cyan font-medium">{pd.professional_title}</p>
                    </div>
                    {/* Add Save/Unsave Button Here */}
                  </div>

                  {/* Location & Availability */}
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    {pd.location && (
                      <div className="flex items-center text-zion-slate-light">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{pd.location}</span>
                      </div>
                    )}
                    {pd.availability && (
                      <div className="flex items-center text-zion-slate-light">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{pd.availability}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Skills */}
              {pd.skills && pd.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {pd.skills.map((skill: string, index: number) => (
                      <Badge key={skill + index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
              <p className="text-zion-slate-light">{pd.bio || "No bio provided."}</p>
            </div>

            {/* Portfolio Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Portfolio</h2>
              <div className="space-y-3">
                {pd.portfolio_links && pd.portfolio_links.length > 0 ? (
                  pd.portfolio_links.map((link: string, index: number) => (
                    <a
                      key={link + index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zion-cyan hover:text-white transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {link}
                    </a>
                  ))
                ) : (
                  <p className="text-zion-slate-light">No portfolio links provided.</p>
                )}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Experience</h2>
              <p className="text-zion-slate-light">{pd.experience || "No experience provided."}</p>
            </div>

            {/* Social Links */}
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Connect</h2>
              <div className="flex space-x-4">
                {pd.github_link && (
                  <a
                    href={pd.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                )}
                {pd.twitter_link && (
                  <a
                    href={pd.twitter_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="Twitter"
                    title="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                )}
                {pd.linkedin_link && (
                  <a
                    href={pd.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-cyan hover:text-white transition-colors"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar with HireNowCTA */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <HireNowCTA
              talentProfile={{
                id: pd.id || '',
                full_name: pd.full_name || '',
                professional_title: pd.professional_title || '',
                hourly_rate: pd.hourly_rate || 0
              }}
            />
            {/* Placeholder for other sidebar elements */}
          </div>
        </div>
      </div>
    </>
  );
}
