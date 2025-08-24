import { useRouter } from 'next/router';

export default function TalentProfile() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold">Talent: {slug}</h1>
      <p className="text-gray-600 dark:text-gray-400">Profile details coming soon.</p>
    </div>
  );
}