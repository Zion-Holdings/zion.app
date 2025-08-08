import { useRouter } from 'next/router';

export default function TalentProfile() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <div>
      <h1 className="text-2xl font-semibold">Talent Profile</h1>
      <p className="opacity-80">Profile: {slug}</p>
    </div>
  );
}