import { useRouter } from 'next/router';

export default function TalentSlug() {
  const router = useRouter();
  const { slug } = router.query;
  return <div className="py-8">Talent: {slug as string}</div>;
}