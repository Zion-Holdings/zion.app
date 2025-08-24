import { useRouter } from 'next/router';
import AdminNotesPanel from '../../components/admin/AdminNotesPanel';

export default function TalentProfilePage() {
  const { query } = useRouter();
  const slug = String(query.slug || '');
  return (
    <div className="space-y-6">
      <div className="p-6 rounded border">
        <h1 className="text-xl font-semibold">Talent: {slug}</h1>
        <p className="opacity-70 text-sm">Profile content placeholder.</p>
      </div>
      <AdminNotesPanel targetType="user" targetId={slug} />
    </div>
  );
}