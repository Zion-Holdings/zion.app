import { useRouter } from 'next/router';

export default function TalentSlug() {
  const router = useRouter();
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold text-white">Talent Profile</h1>
      <p className="text-white/80 mt-2">Profile: {router.query.slug as string}</p>
    </div>
  );
}