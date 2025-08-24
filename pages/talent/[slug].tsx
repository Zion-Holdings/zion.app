import { useRouter } from 'next/router';

export default function TalentSlug() {
  const router = useRouter();
  const { slug } = router.query;
  return <div style={{ padding: 24 }}>Talent: {String(slug || '')}</div>;
}