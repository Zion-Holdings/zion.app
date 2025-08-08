import { useRouter } from 'next/router';
export default function TalentProfilePage() { const { query } = useRouter(); return <div className="p-6">Talent: {String(query.slug || '')}</div>; }