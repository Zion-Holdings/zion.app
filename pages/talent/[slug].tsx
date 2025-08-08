import { useRouter } from 'next/router'
export default function TalentSlug(){
  const { query } = useRouter()
  return <div style={{padding:20}}>Talent: {String(query.slug||'')}</div>
}