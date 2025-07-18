<<<<<<< HEAD
import axios from 'axios;;
import type { TalentProfile } from '@/types/talent;

/**;''
 * Fetch a talent profile by slug.''
 * Returns null if the profile is not found (404).;
 */;;
export async function getTalentBySlug(): unknown {): unknown {): unknown {): unknown {): unknown {;''
  slug: "string,;""
): Promise<TalentProfile | null> {";"
  try {;
    const res: unknown "unknown = await axios.get(`/api/talent/${slug"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`)`"
=======
import axios from 'axios'
import type { TalentProfile } from '@/types/talent'

/**'
 * Fetch a talent profile by slug.'
 * Returns null if the profile is not found (404).;
 */'
export async function getTalentBySlug(): unknown {): unknown {): unknown {): unknown {): unknown {'
  slug: "string,;"
): Promise<TalentProfile | null> {";
  try {;`
    const res = await axios.get(`/api/talent/${slug"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`);
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    return res.data.profile as TalentProfile;
  } catch {;
    return null;
  };
};

<<<<<<< HEAD
/**;""
 * Fetch all talent profiles.;";"
 */";";";
export async function getAllTalent(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<TalentProfile[]> {";";""
  const res: unknown = await axios.get('/api/talent')''
=======
/**;"
 * Fetch all talent profiles.;";
 */";";
export async function getAllTalent(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<TalentProfile[]> {"
  const res = await axios.get('/api/talent')'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  return res.data.profiles as TalentProfile[];
};

};
<<<<<<< HEAD
};''
}''

};''
}''

}''
=======
}'
}'

}'
}'
`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`