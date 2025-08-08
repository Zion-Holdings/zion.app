export type RoleType = 'Admin' | 'Lead' | 'Builder' | 'Delegate';

export type Location = {
  zone: string; // e.g., Global, Africa, Europe, Asia, AMER, APAC
  region?: string; // e.g., Zion Africa
  country?: string; // ISO code
  city?: string;
};

export type Link = {
  label: string;
  url: string;
};

export type BasePerson = {
  id: string;
  name: string;
  alias?: string;
  roleType: RoleType;
  title?: string;
  bio?: string;
  links?: Link[];
  location?: Location;
  photoUrl?: string;
  avatarUrl?: string;
  active?: boolean;
};

export type Founder = BasePerson & { roleType: 'Admin' };
export type CoreTeamMember = BasePerson & {
  department: 'Ops' | 'Tech' | 'Growth' | 'Legal' | string;
};
export type Contributor = BasePerson & {
  category: 'bounties' | 'academy mentors' | 'devs' | string;
};
export type Delegate = BasePerson & {
  votingPower?: number;
};

export type OrgData = {
  founders: Founder[];
  coreTeam: CoreTeamMember[];
  contributors: Contributor[];
  delegates: Delegate[];
};

export type OrgFilters = {
  view?: 'all' | 'dao';
  roleTypes?: RoleType[];
  departments?: string[];
  categories?: string[];
  zones?: string[];
  regions?: string[];
  countries?: string[];
  search?: string;
  teamOnly?: boolean; // core team only
};

export type DisplayMode = 'tree' | 'grid';