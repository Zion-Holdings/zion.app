import type { NextApiRequest, NextApiResponse } from 'next';
import { readOrgData, filterOrgData } from '../../../utils/org-data';
import type { OrgFilters, RoleType } from '../../../types/org';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const data = readOrgData();

  const parseArray = (v?: string | string[]) => {
    if (!v) return undefined;
    return Array.isArray(v) ? v : v.split(',').map((s) => s.trim()).filter(Boolean);
  };

  const filters: OrgFilters = {
    view: (req.query.view as OrgFilters['view']) || 'all',
    roleTypes: parseArray(req.query.roleTypes) as RoleType[] | undefined,
    departments: parseArray(req.query.departments),
    categories: parseArray(req.query.categories),
    zones: parseArray(req.query.zones),
    regions: parseArray(req.query.regions),
    countries: parseArray(req.query.countries),
    search: (req.query.search as string) || undefined,
    teamOnly: req.query.teamOnly === 'true' ? true : undefined,
  };

  const filtered = filterOrgData(data, filters);
  return res.status(200).json(filtered);
}