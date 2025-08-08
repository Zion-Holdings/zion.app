import { useRouter } from 'next/router';

export default function TalentDetail() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <div>
      <h1 className="text-2xl font-bold">Talent: {slug || 'Loading...'}</h1>
      <p className="opacity-70">Profile details coming soon.</p>
    </div>
  );
}