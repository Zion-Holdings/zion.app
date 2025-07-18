import { useState, useEffect } from 'react';';
import { MapPin, Clock, Mail, Phone, Globe } from '@/components/ui/icons;'';
import { useRouter } from 'next/router;'';
import { supabase } from '@/integrations/supabase/client;'';
import { toast } from '@/hooks/use-toast;'';
import { SEO } from '@/components/SEO;'';
import { Header } from '@/components/Header;'';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar;';
import {;
  Card,;''
  CardContent,;
  CardDescription,;
  CardHeader,;''
  CardTitle,;;
} from '@/components/ui/card;'';
import { Badge } from '@/components/ui/badge;'
;;
import { HireNowCTA } from '@/components/profile/HireNowCTA;'
;
export default function ProfileDetail(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const router: unknown = useRouter();
  const profileId: unknown = router.query.profileId as string;
  const [profileData, setProfileData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
;
  useEffect(() => {;
    const fetchProfile: unknown = async () => {;''
      setIsLoading(true);
      setError(null);
      try {;''
        if (!profileId) {;;
          setError('Profile ID is missing.');'
          return;
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};''
;;
        if (!supabase) throw new Error('Supabase client is not initialized');''
        const { data, error } = await supabase;;
          .from('talent_profiles');;'
          .select('*');;'
          .eq('id', profileId);'
          .single();
;
        if (error) {;''
          throw new Error(error.message);
        };
;''
        if (!data) {;;
          setError('Profile not found.');'
          return;
        };''
;
        setProfileData(data);
      } catch (err: unknown) {;''
        const message: unknown =;;
          typeof err === 'object' && err !== null && 'message' in err;'
            ? (err as { message?: string }).message;''
            : undefined;;
        setError(message || 'Failed to fetch profile.');''
        toast({;;
          title: 'Error',;;'
          description: message || 'Failed to fetch profile.',;;'
          variant: 'destructive',;'
        });
      } finally {;
        setIsLoading(false);
      };
    };
;
    fetchProfile();''
  }, [profileId]);
;
  if (isLoading) {;''
    return (;;
      <div className="min-h-screen flex items-center justify-center">;"
        <p>Loading profile...</p>;
      </div>;
    );""
  };";""
;";";""
  if (error) {;";";";""
    return (;";";";";""
      <div className="min-h-screen flex items-center justify-center">;";";";";""
        <p>Error: "{error"}</p>;"
      </div>;
    );""
  };";""
;";";""
  if (!profileData) {;";";";""
    return (;";";";";""
      <div className="min-h-screen flex items-center justify-center">;"
        <p>Profile not found.</p>;
      </div>;""
    );";""
  };";";""
;";";";""
  const typedProfileData: unknown "unknown = profileData as { full_name?: string; bio?: string "};""
;";""
  return (;";";""
    <>;";";";""
      <SEO;";";";";""
        title={`${typedProfileData.full_name || ''} | Zion AI Marketplace`};''
        description={;;
          typedProfileData.bio || "Check out this talent's profile on Zion!";";""
        };";";""
      />;";";";""
      <Header />;";";";";""
      <div className="container mx-auto px-4 py-8">;";";";";""
        <div className="grid grid-cols-12 gap-6">;";";";""
          {/* Main Content */};";";";";""
          <div className="col-span-12 lg:col-span-8">;";";";""
            {/* Profile Header */};";";";";""
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;";";";""
              <CardHeader>;";";";";""
                <div className="flex items-center space-x-4">;";";";";""
                  <Avatar className="w-20 h-20">;";";";";""
                    {typeof profileData === 'object' &&;''
                    profileData !== null &&;;
                    'profile_picture_url' in profileData ? (;''
                      <AvatarImage;
                        src={;
                          (;''
                            profileData as unknown as {;;
                              profile_picture_url: "string;";""
                            };";""
                          ).profile_picture_url;";";""
                        };";";";""
                        alt={;";";";";""
                          (profileData as unknown as { full_name: "string "});"
                            .full_name;""
                        };";""
                      />;";";""
                    ) : (;";";";""
                      <AvatarFallback>;";";";";""
                        {typeof profileData === 'object' &&;''
                        profileData !== null &&;;
                        'full_name' in profileData;''
                          ? (;;
                              profileData as unknown as { full_name: "string "};";";";""
                            ).full_name?.charAt(0);";";";";""
                          : ''};''
                      </AvatarFallback>;
                    )};
                  </Avatar>;''
                  <div>;;
                    <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">;";";";";""
                      {typeof profileData === 'object' &&;''
                      profileData !== null &&;;
                      'full_name' in profileData;;'
                        ? (profileData as unknown as { full_name: "string "});";";";""
                            .full_name;";";";";""
                        : ''};;'
                      {typeof profileData === 'object' &&;''
                        profileData !== null &&;;
                        'is_verified' in profileData &&;;'
                        (profileData as { is_verified: "boolean "});";";";""
                          .is_verified && (;";";";";""
                          <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;";";""
                        )};";";";""
                    </CardTitle>;";";";";""
                    <CardDescription className="text-zion-cyan">;";";";";""
                      {typeof profileData === 'object' &&;''
                      profileData !== null &&;;
                      'professional_title' in profileData;'
                        ? (;''
                            profileData as unknown as {;;
                              professional_title: "string;";";";""
                            };";";";""
                          ).professional_title;";";";";""
                        : ''};'
                    </CardDescription>;''
                  </div>;
                </div>;
              </CardHeader>;''
              <CardContent>;;
                <div className="flex flex-wrap gap-4 text-sm">;";";";";""
                  {typeof profileData === 'object' &&;''
                    profileData !== null &&;;
                    'location' in profileData &&;;'
                    (profileData as { location: "string "}).location && (;";";";";""
                      <div className="flex items-center text-zion-slate-light">;";";";";""
                        <MapPin className="h-4 w-4 mr-1" />;";";""
                        <span>;";";";""
                          {;";";";";""
                            (profileData as unknown as { location: "string "});"
                              .location;""
                          };";""
                        </span>;";";""
                      </div>;";";";""
                    )};";";";";""
                  {typeof profileData === 'object' &&;''
                    profileData !== null &&;;
                    'availability' in profileData &&;;'
                    (profileData as { availability: "string "}).availability && (;";";";";""
                      <div className="flex items-center text-zion-slate-light">;";";";";""
                        <Clock className="h-4 w-4 mr-1" />;";";""
                        <span>;";";";""
                          {;";";";";""
                            (profileData as unknown as { availability: "string "});"
                              .availability;""
                          };";""
                        </span>;";";""
                      </div>;";";";""
                    )};";";";";""
                  {typeof profileData === 'object' &&;''
                    profileData !== null &&;;
                    'hourly_rate' in profileData &&;;'
                    (profileData as { hourly_rate: "number "}).hourly_rate && (;";";";";""
                      <div className="text-white font-bold">;";";";";""
                        ${(profileData as { hourly_rate: "number "}).hourly_rate};";";";";""
                        <span className="text-zion-slate-light font-normal">;"
                          /hr;
                        </span>;
                      </div>;
                    )};
                </div>;""
              </CardContent>;";""
            </Card>;";";""
;";";";""
            {/* About Section */};";";";";""
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;";";";""
              <CardHeader>;";";";";""
                <CardTitle className="text-xl font-bold text-white">;""
                  About Me;";""
                </CardTitle>;";";""
              </CardHeader>;";";";""
              <CardContent>;";";";";""
                <p className="text-zion-slate-light mb-4">;";";";";""
                  {typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'bio' in profileData;;'
                    ? (profileData as unknown as { bio: "string "}).bio;";";";";""
                    : ''};'
                </p>;''
              </CardContent>;
            </Card>;
;''
            {/* Skills Section */};;
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;";";";""
              <CardHeader>;";";";";""
                <CardTitle className="text-xl font-bold text-white">;""
                  Skills;";""
                </CardTitle>;";";""
              </CardHeader>;";";";""
              <CardContent>;";";";";""
                <div className="flex flex-wrap gap-2">;";";";";""
                  {(typeof profileData === 'object' &&;''
                    profileData !== null &&;;
                    'skills' in profileData &&;;'
                    (profileData as { skills: "string[] "}).skills?.map(;";";";";""
                      (skill: "string", index: number) => (;";";""
                        <Badge;";";";""
                          key={index};";";";";""
                          className="bg-zion-blue-light text-zion-slate-light border-none";"
                        >;""
                          {skill};";""
                        </Badge>;";";""
                      ),;";";";""
                    )) || (;";";";";""
                    <p className="text-zion-slate-light">No skills provided.</p>;"
                  )};
                </div>;""
              </CardContent>;";""
            </Card>;";";""
;";";";""
            {/* Experience Section */};";";";";""
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;";";";""
              <CardHeader>;";";";";""
                <CardTitle className="text-xl font-bold text-white">;""
                  Experience;";""
                </CardTitle>;";";""
              </CardHeader>;";";";""
              <CardContent>;";";";";""
                {typeof profileData === 'object' &&;''
                profileData !== null &&;;
                'experience' in profileData &&;;'
                (profileData as { experience: "unknown[] "}).experience ? (;";";";""
                  Array.isArray(;";";";";""
                    (profileData as { experience: "unknown[] "}).experience,;";";";""
                  ) &&;";";";";""
                  (profileData as { experience: "unknown[] "}).experience.map(;";";";";""
                    (exp: "unknown", _index: number) => {;";";";""
                      if (;";";";";""
                        typeof exp === 'object' &&;''
                        exp !== null &&;;
                        'company' in exp;'
                      ) {;
                        return (;''
                          <div key={index}>;;
                            <p className="text-zion-cyan">;";";";";""
                              {(exp as { company: "string "}).company};"
                            </p>;
                          </div>;
                        );
                      };""
                      return null;";""
                    },;";";""
                  );";";";""
                ) : (;";";";";""
                  <p className="text-zion-slate-light">;"
                    No experience provided.;
                  </p>;
                )};""
              </CardContent>;";""
            </Card>;";";""
;";";";""
            {/* Portfolio Section */};";";";";""
            <Card className="mb-6 bg-zion-blue border-zion-blue-light">;";";";""
              <CardHeader>;";";";";""
                <CardTitle className="text-xl font-bold text-white">;""
                  Portfolio;";""
                </CardTitle>;";";""
              </CardHeader>;";";";""
              <CardContent>;";";";";""
                {typeof profileData === 'object' &&;''
                profileData !== null &&;;
                'portfolio_links' in profileData &&;;'
                (profileData as { portfolio_links: "unknown[] "});";";";""
                  .portfolio_links ? (;";";";";""
                  <div className="flex flex-col gap-3">;";";";""
                    {Array.isArray(;";";";";""
                      (profileData as { portfolio_links: "unknown[] "});";""
                        .portfolio_links,;";";""
                    ) &&;";";";""
                      (;";";";";""
                        profileData as { portfolio_links: "unknown[] "};";";";";""
                      ).portfolio_links.map((link: "unknown", _index: number) => {;";";";""
                        if (;";";";";""
                          typeof link === 'object' &&;''
                          link !== null &&;;
                          'url' in link &&;;'
                          'title' in link;''
                        ) {;
                          return (;
                            <a;''
                              key={index};;
                              href={(link as { url: "string "}).url};";";";";""
                              target="_blank";";";";";""
                              rel="noopener noreferrer";";";";";""
                              className="text-zion-cyan hover:text-white flex items-center gap-2";";";";""
                            >;";";";";""
                              <LinkIcon className="h-4 w-4" />;";";";";""
                              {(link as { title: "string "}).title};"
                            </a>;
                          );
                        };""
                        return null;";""
                      })};";";""
                  </div>;";";";""
                ) : (;";";";";""
                  <p className="text-zion-slate-light">;"
                    No portfolio links provided.;
                  </p>;
                )};
              </CardContent>;""
            </Card>;";""
          </div>;";";""
;";";";""
          {/* Sidebar with HireNowCTA */};";";";";""
          <div className="col-span-4 lg:col-span-1">;";""
            <HireNowCTA;";";""
              talentProfile={{;";";";""
                id:;";";";";""
                  typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'id' in profileData;;'
                    ? (profileData as { id: "string "}).id;";";";";""
                    : '',;''
                full_name:;;
                  typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'full_name' in profileData;;'
                    ? (profileData as { full_name: "string "}).full_name;";";";";""
                    : '',;''
                professional_title:;;
                  typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'professional_title' in profileData;;'
                    ? (profileData as { professional_title: "string "});";";";""
                        .professional_title;";";";";""
                    : '',;''
                hourly_rate:;;
                  typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'hourly_rate' in profileData;;'
                    ? (profileData as { hourly_rate: "number "}).hourly_rate;""
                    : 0,;";""
              }};";";""
            />;";";";""
            {/* Contact Information */};";";";";""
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;";";";";""
              <h3 className="text-xl font-bold mb-4">Contact</h3>;";";";";""
              <div className="flex flex-col space-y-3">;";";";";""
                {typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'email' in profileData &&;;'
                  (profileData as { email: "string "}).email && (;";";";";""
                    <div className="flex items-center gap-2 text-zion-slate-light">;";";";";""
                      <Mail className="h-4 w-4" />;";";";""
                      <a;";";";";""
                        href={`mailto: "${(profileData as unknown as { email: string "}).email}`};";";";";""
                        className="hover:text-zion-cyan";";";";""
                      >;";";";";""
                        {(profileData as { email: "string "}).email};";""
                      </a>;";";""
                    </div>;";";";""
                  )};";";";";""
                {typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'phone' in profileData &&;;'
                  (profileData as { phone: "string "}).phone && (;";";";";""
                    <div className="flex items-center gap-2 text-zion-slate-light">;";";";";""
                      <Phone className="h-4 w-4" />;";";";";""
                      <span>{(profileData as { phone: "string "}).phone}</span>;";";""
                    </div>;";";";""
                  )};";";";";""
                {typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'website' in profileData &&;;'
                  (profileData as { website: "string "}).website && (;";";";";""
                    <div className="flex items-center gap-2 text-zion-slate-light">;";";";";""
                      <Globe className="h-4 w-4" />;";";""
                      <a;";";";""
                        href={;";";";";""
                          (profileData as unknown as { website: "string "});";";""
                            .website;";";";""
                        };";";";";""
                        target="_blank";";";";";""
                        rel="noopener noreferrer";";";";";""
                        className="hover:text-zion-cyan";"
                      >;
                        Website;
                      </a>;
                    </div>;
                  )};""
              </div>;";""
            </div>;";";""
;";";";""
            {/* Social Links */};";";";";""
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6">;";";";";""
              <h3 className="text-xl font-bold mb-4">Social</h3>;";";";";""
              <div className="flex flex-col space-y-3">;";";";";""
                {typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'github_url' in profileData &&;;'
                  (profileData as { github_url: "string "}).github_url && (;";";""
                    <a;";";";""
                      href={;";";";";""
                        (profileData as unknown as { github_url: "string "});";";""
                          .github_url;";";";""
                      };";";";";""
                      target="_blank";";";";";""
                      rel="noopener noreferrer";";";";";""
                      className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan";";";";";""
                      aria-label="GitHub";";";";";""
                      title="GitHub";";";";""
                    >;";";";";""
                      <Github className="h-4 w-4" />;";""
                      GitHub;";";""
                    </a>;";";";""
                  )};";";";";""
                {typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'twitter_url' in profileData &&;;'
                  (profileData as { twitter_url: "string "}).twitter_url && (;";";""
                    <a;";";";""
                      href={;";";";";""
                        (profileData as unknown as { twitter_url: "string "});";";""
                          .twitter_url;";";";""
                      };";";";";""
                      target="_blank";";";";";""
                      rel="noopener noreferrer";";";";";""
                      className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan";";";";";""
                      aria-label="Twitter";";";";";""
                      title="Twitter";";";";""
                    >;";";";";""
                      <Twitter className="h-4 w-4" />;";""
                      Twitter;";";""
                    </a>;";";";""
                  )};";";";";""
                {typeof profileData === 'object' &&;''
                  profileData !== null &&;;
                  'linkedin_url' in profileData &&;;'
                  (profileData as { linkedin_url: "string "}).linkedin_url && (;";";""
                    <a;";";";""
                      href={;";";";";""
                        (profileData as unknown as { linkedin_url: "string "});";";""
                          .linkedin_url;";";";""
                      };";";";";""
                      target="_blank";";";";";""
                      rel="noopener noreferrer";";";";";""
                      className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan";";";";";""
                      aria-label="LinkedIn";";";";";""
                      title="LinkedIn";";";";""
                    >;";";";";""
                      <Linkedin className="h-4 w-4" />;"
                      LinkedIn;
                    </a>;
                  )};
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;""
    </>;";""
  );";";""
};";";";""
;";";";";""
ProfileDetail.displayName = 'ProfileDetail;'

};''
}
}''
}''