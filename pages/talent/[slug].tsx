import { useRouter } from 'next/router';

export default function TalentProfile() {
  const { query } = useRouter();
  const slug = query.slug as string;
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold">Talent: {slug}</h1>
    </div>
  );
}