import { useRouter } from 'next/router';
export default function TalentDetail() { const router = useRouter(); const { slug } = router.query; return <div className="p-6">Talent: {slug as string}</div>; }
