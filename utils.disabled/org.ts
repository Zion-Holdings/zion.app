import type { CoreTeamMember, OrgData } from '../types/org';

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

export function buildOrgQuery(params: Record<string, string | string[] | undefined | boolean>): string {
  const q = new URLSearchParams();
  Object.entries(params).forEach(([key, val]) => {
    if (val === undefined || val === '' || (Array.isArray(val) && val.length === 0)) return;
    if (Array.isArray(val)) {
      q.set(key, val.join(','));
    } else if (typeof val === 'boolean') {
      q.set(key, val ? 'true' : 'false');
    } else {
      q.set(key, String(val));
    }
  });
  const qs = q.toString();
  return qs ? `?${qs}` : '';
}