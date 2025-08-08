import { useRouter } from 'next/router';

export default function TalentProfilePage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Talent Profile</h1>
      <p className="opacity-80">Profile for: {slug}</p>
    </div>
  );
}