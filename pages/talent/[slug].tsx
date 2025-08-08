import { useRouter } from 'next/router';

export default function TalentDetails() {
  const { query } = useRouter();
  const { slug } = query as { slug?: string };
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Talent: {slug}</h1>
      <p className="text-gray-600">Profile coming soon.</p>
    </div>
  );
}