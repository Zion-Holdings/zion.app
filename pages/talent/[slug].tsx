import { useRouter } from 'next/router';

export default function TalentDetail() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Talent: {slug}</h1>
      <p className="text-gray-600 dark:text-gray-300">Profile coming soon.</p>
    </div>
  );
}