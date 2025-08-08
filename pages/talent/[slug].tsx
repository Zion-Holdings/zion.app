import { useRouter } from 'next/router';

export default function TalentDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Talent: {String(slug || '')}</h1>
      <p className="mt-2 text-gray-600">Talent details coming soon.</p>
    </div>
  );
}