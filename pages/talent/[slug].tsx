import { useRouter } from 'next/router'
export default function TalentProfile(){ const r = useRouter(); return <div>Talent: {r.query.slug as string}</div> }