import { useRouter } from 'next/router';
export default function TalentSlug() {
  const { query } = useRouter();
  return <div>Talent: {String(query.slug || '')}</div>;
}