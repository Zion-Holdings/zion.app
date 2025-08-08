import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const TalentDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Talent: {slug}</h1>
      <p className="text-gray-700 dark:text-gray-300">Profile details for {slug}.</p>
    </div>
  );
};

export default TalentDetail;