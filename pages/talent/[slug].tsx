import { useRouter } from 'next/router';

export default function TalentSlug() {
  const { query } = useRouter();
  return <div className="py-10">Talent: {String(query.slug || '')}</div>;
}