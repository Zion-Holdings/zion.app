import { useRouter } from 'next/router';
export default function TalentDetail(){
  const { query } = useRouter();
  return <div className="max-w-3xl mx-auto p-6">Talent: {String(query.slug || '')}</div>;
}