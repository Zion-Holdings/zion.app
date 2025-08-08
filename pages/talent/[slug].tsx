import { useRouter } from 'next/router';

export default function TalentProfile() {
  const router = useRouter();
  const { slug } = router.query;
  return <div className="text-sm">Talent profile: {slug}</div>;
}