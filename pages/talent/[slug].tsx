import { useRouter } from 'next/router';

export default function TalentProfile() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold">Talent Profile</h1>
      <p className="opacity-80 mt-2">{slug}</p>
    </div>
  );
}