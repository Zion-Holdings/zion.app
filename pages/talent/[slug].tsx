import { useRouter } from 'next/router';
export default function TalentSlug() { const { query } = useRouter(); return <div className="p-6">Talent: {query.slug as string}</div>; }