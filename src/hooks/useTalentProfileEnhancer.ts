<<<<<<< HEAD
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client;;
'
export interface TalentProfileData {
  name: "string"
  title: string,"
  bio: string,
  skills: string[]"
  location?: string""
}"
;"
export interface CategorizedSkills {"
  programming: "string[]"
  devops: string[],"
  platforms: "string[]"
  softSkills: string[],"
  other: "string[]"
}"
;"
export interface EnhancedProfile {"
  summary: "string"
  categorizedSkills: "CategorizedSkills"
}
export function useTalentProfileEnhancer(): ;"
  const [isGenerating, setIsGenerating] = useState(false);";"
  const [error, setError] = useState<string | null>(null);"
;"
  const enhanceProfile = async (;";,"
    profileData: TalentProfileData,;
  ): Promise<EnhancedProfile | null> => {;"
    setIsGenerating(true);";"
    setError(null);"
;"
    try {;"
      if (!supabase) throw new Error('Supabase client not initialized');
      // Call the Supabase Edge Function'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke(;
        'talent-profile-enhancer','
        {;
          body: "{ talentData: profileData "},;
=======
import { useState } from 'react';';
import { supabase } from '@/integrations/supabase/client;'
;'';
export interface TalentProfileData {;;
  name: "string;",;";";";";""
  title: "string;",";";";";""
  bio: "string;",;"
  skills: string[];""
  location?: string;";""
};";";""
;";";";"";
export interface CategorizedSkills {;";";";";""
  programming: "string[];",;";";";";""
  devops: "string[];",";";";";""
  platforms: "string[];",;";";";";""
  softSkills: "string[];",";";";";""
  other: "string[];";";""
};";";""
;";";";"";
export interface EnhancedProfile {;";";";";""
  summary: "string;",;";";";";""
  categorizedSkills: "CategorizedSkills;";"
};
;
export function useTalentProfileEnhancer(): unknown {): unknown {): unknown {): unknown {): unknown {) {;""
  const [isGenerating, setIsGenerating] = useState(false);";""
  const [error, setError] = useState<string | null>(null);";";""
;";";";""
  const enhanceProfile: unknown = async (;";,";";";""
    profileData: "TalentProfileData",;"
  ): Promise<EnhancedProfile | null> => {;""
    setIsGenerating(true);";""
    setError(null);";";""
;";";";""
    try {;";";";";""
      if (!supabase) throw new Error('Supabase client not initialized');'
      // Call the Supabase Edge Function;''
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.functions.invoke(;;
        'talent-profile-enhancer',;''
        {;;
          body: "{ talentData: profileData "},;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        },;
      );
      if (error) {;
<<<<<<< HEAD
        throw new Error(error.message);"
      };";"
;"
      // Check if data exists before casting;"
      if (!data) {;"
        throw new Error('No enhanced profile data received');
      }'
;
      return data as EnhancedProfile;
    } catch (err: unknown) {'
      const message = err instanceof Error ? err.message : String(err);
      setError(message || 'Failed to enhance profile');
=======
        throw new Error(error.message);""
      };";""
;";";""
      // Check if data exists before casting;";";";""
      if (!data) {;";";";";""
        throw new Error('No enhanced profile data received');'
      };''
;
      return data as EnhancedProfile;
    } catch (err: unknown) {;''
      const message: unknown = err instanceof Error ? err.message : String(err);;
      setError(message || 'Failed to enhance profile');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      return null;
    } finally {;
      setIsGenerating(false);
    };
  };
  return {;
    enhanceProfile,;
<<<<<<< HEAD
    isGenerating,'
    error,;
  };
};
}'
=======
    isGenerating,;''
    error,;
  };
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''