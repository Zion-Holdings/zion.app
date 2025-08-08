import { useRouter } from 'next/router';

export default function TalentProfile() {
  const { query } = useRouter();
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Talent Profile</h1>
      <p>Profile: {query.slug as string}</p>
    </div>
  );
}