import { useRouter } from 'next/router';

export default function TalentProfilePlaceholder() {
  const { query } = useRouter();
  const slug = query.slug as string;
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Talent Profile</h1>
      <p className="text-gray-700 dark:text-gray-300">Profile: {slug}</p>
    </div>
  );
}