import { useRouter } from 'next/router';

export default function TalentSlugPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return <div className="py-8">Talent Profile: {slug || 'loading...'}</div>;
}