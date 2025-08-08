import { useRouter } from 'next/router';

export default function TalentProfile() {
  const { query } = useRouter();
  return <div>Talent Profile: {String(query.slug || '')}</div>;
}