import { useRouter } from 'next/router';

export default function TalentProfile() {
  const { query } = useRouter();
  const { slug } = query;
  return <div>Talent Profile: {slug as string}</div>;
}