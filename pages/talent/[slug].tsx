import { useRouter } from 'next/router';
export default function TalentProfile() { const { query } = useRouter(); return <main className="p-8">Talent profile: {String(query.slug || '')}</main>; }