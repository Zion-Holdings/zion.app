import { useRouter } from 'next/router';

export default function TalentDetail() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1 className="text-2xl font-semibold">Talent: {slug}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Profile coming soon.</p>
    </div>
  );
}