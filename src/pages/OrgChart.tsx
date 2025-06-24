import { useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { orgMembers } from '@/data/orgMembers';
import { OrgMember, RoleType } from '@/types/org';

const sections = ['Founders', 'Core Team', 'Contributors', 'DAO Delegates'] as const;

export default function OrgChart() {
  const [role, setRole] = useState<'ALL' | RoleType>('ALL');
  const [zone, setZone] = useState('ALL');
  const [team, setTeam] = useState('ALL');
  const [treeView, setTreeView] = useState(false);
  const [showPhotos, setShowPhotos] = useState(true);

  const roles = useMemo(() => Array.from(new Set(orgMembers.map(m => m.roleType))), []);
  const zones = useMemo(() => Array.from(new Set(orgMembers.map(m => m.location))), []);
  const teams = useMemo(() => Array.from(new Set(orgMembers.map(m => m.team))), []);

  const filtered = orgMembers.filter(m =>
    (role === 'ALL' || m.roleType === role) &&
    (zone === 'ALL' || m.location === zone) &&
    (team === 'ALL' || m.team === team)
  );

  const noResults = filtered.length === 0;

  const renderMember = (member: OrgMember) => (
    <div key={member.id} className="border rounded-lg p-4 text-center">
      {showPhotos ? (
        <Avatar className="mx-auto mb-2">
          {member.avatar && <AvatarImage src={member.avatar} alt={member.name} />}
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
      ) : (
        <div className="mx-auto mb-2 h-10 w-10 bg-muted rounded-full flex items-center justify-center">
          {member.alias?.charAt(0) || member.name.charAt(0)}
        </div>
      )}
      <h3 className="font-medium">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.roleType}</p>
      <p className="text-xs text-muted-foreground">{member.team}</p>
      <p className="text-xs text-muted-foreground">{member.location}</p>
    </div>
  );

  return (
    <>
      <SEO title="Zion Org Chart" description="Meet the Zion team and DAO delegates" />
      <Header />
      <main className="container mx-auto py-8 space-y-6">
        <h1 className="text-3xl font-bold">Organization Chart</h1>
        <div className="flex flex-wrap gap-4 items-center">
          <Select value={role} onValueChange={v => setRole(v as any)}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Roles</SelectItem>
              {roles.map(r => (
                <SelectItem key={r} value={r}>{r}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={zone} onValueChange={setZone}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Zones</SelectItem>
              {zones.map(z => (
                <SelectItem key={z} value={z}>{z}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={team} onValueChange={setTeam}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Teams</SelectItem>
              {teams.map(t => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <Switch checked={treeView} onCheckedChange={setTreeView} id="tree" />
            <label htmlFor="tree">Tree View</label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={showPhotos} onCheckedChange={setShowPhotos} id="photo" />
            <label htmlFor="photo">Photo</label>
          </div>
        </div>
        {noResults && (
          <p className="text-destructive font-semibold">
            No {team !== 'ALL' ? `${team} ` : ''}{role !== 'ALL' ? `${role} ` : ''}in {zone}
          </p>
        )}
        {sections.map(section => {
          const members = filtered.filter(m => m.section === section);
          if (!members.length) return null;
          return (
            <section key={section} className="space-y-4">
              <h2 className="text-2xl font-semibold mt-6">{section}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {members.map(renderMember)}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
