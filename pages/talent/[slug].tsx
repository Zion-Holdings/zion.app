import { useRouter } from 'next/router';

export default function TalentProfilePage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return <div className="py-10">Talent Profile: {slug}</div>;
}