import { useRouter } from 'next/router';
export default function TalentPerson() { const { query } = useRouter(); return <div className="p-8">Talent: {String(query.slug || '')}</div>; }