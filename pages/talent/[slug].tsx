import { useRouter } from 'next/router';
export default function TalentSlug() {
  const { query } = useRouter();
  return <div>Talent: {query.slug as string}</div>;
}