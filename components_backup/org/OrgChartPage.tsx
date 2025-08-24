import React, { useEffect, useMemo, useState } from 'react';
import type { DisplayMode, OrgData, OrgFilters } from '../../types/org';
import Filters from './Filters';
import OrgTree from './OrgTree';
import OrgGrid from './OrgGrid';
import { detectGaps, buildOrgQuery } from '../../utils/org';

export default function OrgChartPage() {
  const [filters, setFilters] = useState<OrgFilters>({ view: 'all' });
  const [displayMode, setDisplayMode] = useState<DisplayMode>('tree');
  const [showPhotos, setShowPhotos] = useState<boolean>(true);
  const [data, setData] = useState<OrgData>({ founders: [], coreTeam: [], contributors: [], delegates: [] });

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const qs = buildOrgQuery({
        view: filters.view,
        roleTypes: filters.roleTypes,
        departments: filters.departments,
        categories: filters.categories,
        zones: filters.zones,
        regions: filters.regions,
        countries: filters.countries,
        search: filters.search,
        teamOnly: !!filters.teamOnly,
      });
      const res = await fetch(`/api/org${qs}`, { signal: controller.signal });
      if (!res.ok) return;
      const json = (await res.json()) as OrgData;
      setData(json);
    };
    fetchData();
    return () => controller.abort();
  }, [filters]);

  const gaps = useMemo(
    () =>
      detectGaps(data, [
        { department: 'Tech', region: 'Zion Africa' },
        { department: 'Ops', region: 'Zion Africa' },
        { department: 'Growth', region: 'Zion Africa' },
        { department: 'Legal', region: 'Zion Africa' },
      ]),
    [data]
  );

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold">Zion Organization</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Core team, contributors, and DAO delegates</p>
        </div>
      </div>

      <Filters
        filters={filters}
        onChange={setFilters}
        displayMode={displayMode}
        onDisplayModeChange={setDisplayMode}
        showPhotos={showPhotos}
        onTogglePhotos={setShowPhotos}
      />

      {gaps.length > 0 && (
        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 p-3 rounded-lg text-sm">
          <strong>Gaps:</strong> {gaps.join(' • ')}
        </div>
      )}

      {displayMode === 'tree' ? (
        <OrgTree data={data} showPhotos={showPhotos} />)
        : (
        <OrgGrid data={data} showPhotos={showPhotos} />
      )}
    </div>
  );
}