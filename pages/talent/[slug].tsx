import { useRouter } from 'next/router';

export default function TalentDetail() {
  const { query } = useRouter();
  const slug = query.slug as string;
  return (
    <div>
      <h1 className="text-2xl font-semibold">Talent: {slug}</h1>
    </div>
  );
}
