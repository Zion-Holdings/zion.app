import fs from 'fs';
import path from 'path';
import type { OrgData, OrgFilters, CoreTeamMember, RoleType } from '../types/org';

const DATA_FILE = path.join(process.cwd(), 'data', 'org', 'seed.json');

export function readOrgData(): OrgData {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed as OrgData;
  } catch (error) {
    return { founders: [], coreTeam: [], contributors: [], delegates: [] };
  }
}

export function writeOrgData(data: OrgData) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export function filterOrgData(data: OrgData, filters: OrgFilters): OrgData {
  const { view, roleTypes, departments, categories, zones, regions, countries, search, teamOnly } = filters;

  const matchesSearch = (text?: string) => {
    if (!search) return true;
    const s = search.toLowerCase();
    return (text || '').toLowerCase().includes(s);
  };

  const matchesLocation = (loc?: { zone?: string; region?: string; country?: string }) => {
    if (!loc) return !(zones || regions || countries);
    const okZone = !zones || (loc.zone && zones.includes(loc.zone));
    const okRegion = !regions || (loc.region && regions.includes(loc.region));
    const okCountry = !countries || (loc.country && countries.includes(loc.country));
    return okZone && okRegion && okCountry;
  };

  const filterRoleType = (rt?: RoleType) => !roleTypes || (rt && roleTypes.includes(rt));

  const founders = data.founders.filter((p) => filterRoleType(p.roleType) && matchesLocation(p.location) && matchesSearch(p.name));

  const coreTeam = data.coreTeam.filter(
    (p) =>
      (!teamOnly || true) &&
      filterRoleType(p.roleType) &&
      (!departments || departments.includes(p.department)) &&
      matchesLocation(p.location) &&
      (matchesSearch(p.name) || matchesSearch(p.title))
  );

  const contributors = view === 'dao' || teamOnly
    ? []
    : data.contributors.filter(
        (p) =>
          filterRoleType(p.roleType) &&
          (!categories || categories.includes(p.category)) &&
          matchesLocation(p.location) &&
          matchesSearch(p.name)
      );

  const delegates = view && view !== 'dao'
    ? data.delegates.filter((p) => filterRoleType(p.roleType) && matchesLocation(p.location) && matchesSearch(p.name))
    : data.delegates.filter((p) => matchesLocation(p.location) && matchesSearch(p.name));

  return { founders, coreTeam, contributors, delegates };
}

export function detectGaps(data: OrgData, required: { department: string; zone?: string; region?: string }[]): string[] {
  const messages: string[] = [];
  required.forEach((req) => {
    const hasLeadInDept = data.coreTeam.some(
      (m: CoreTeamMember) =>
        m.department.toLowerCase() === req.department.toLowerCase() &&
        m.roleType === 'Lead' &&
        (!req.zone || m.location?.zone === req.zone) &&
        (!req.region || m.location?.region === req.region)
    );
    if (!hasLeadInDept) {
      const scope = req.region ? req.region : req.zone ? req.zone : 'Global';
      messages.push(`No ${req.department} Lead in ${scope}`);
    }
  });
  return messages;
}