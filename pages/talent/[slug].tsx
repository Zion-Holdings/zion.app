import { useRouter } from 'next/router';

export default function TalentProfile() {
  const { query } = useRouter();
  const slug = String(query.slug || '');
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold mb-2">Talent: {slug}</h1>
      <p className="text-gray-600 dark:text-gray-300">Profile coming soon.</p>
    </div>
  );
}