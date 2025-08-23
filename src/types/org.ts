export type RoleType = 'Admin' | 'Lead' | 'Builder' | 'Delegate';
export interface OrgMember {
  id: number;
  name: string;
  alias?: string;
  roleType: RoleType;
  section: 'Founders' | 'Core Team' | 'Contributors' | 'DAO Delegates';
  team: string;
  location: string;
  bio?: string;
  links?: { label: string; url: string }[];
  votingPower?: number;
  avatar?: string;
}
