import { useRouter } from 'next/router';

export default function TalentProfilePage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="py-8">
      <h1 className="text-xl font-semibold">Talent Profile</h1>
      <p className="text-gray-600 dark:text-gray-300">Profile for: {slug as string}</p>
    </div>
  );
}