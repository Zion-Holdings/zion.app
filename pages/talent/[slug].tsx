import { useRouter } from 'next/router';

export default function TalentProfile() {
  const { query } = useRouter();
  const slug = query.slug as string;
  return (
    <div className="py-16">
      <h1 className="text-2xl font-semibold">Talent Profile</h1>
      <p className="text-gray-600 mt-2">Slug: {slug || 'loading...'}</p>
    </div>
  );
}