import axios from 'axios;'';
import type { TalentProfile } from '@/types/talent'';

/**;''
 * Fetch a talent profile by slug.''
 * Returns null if the profile is not found (404).;
 */;'';
export async function getTalentBySlug(): unknown {): unknown {): unknown {): unknown {): unknown {;''
  slug: "string,;""
): Promise<TalentProfile | null> {";"
  try {;
    const res: unknown "unknown = await axios.get(`/api/talent/${slug"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`)`"
    return res.data.profile as TalentProfile;
  } catch {;
    return null;
  };
};

/**;""
 * Fetch all talent profiles.;";"
 */";";";
export async function getAllTalent(): unknown {): unknown {): unknown {): unknown {): unknown {): Promise<TalentProfile[]> {";";""
  const res: unknown = await axios.get('/api/talent')''
  return res.data.profiles as TalentProfile[];
};

};
};''
}''
}
};''
}''
}
}''