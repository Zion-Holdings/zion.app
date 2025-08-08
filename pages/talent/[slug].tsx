import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const TalentProfilePage: NextPage = () => {
  const { query } = useRouter();
  const { slug } = query as { slug?: string };
  return <div className="p-6">Talent: {slug}</div>;
};

export default TalentProfilePage;
