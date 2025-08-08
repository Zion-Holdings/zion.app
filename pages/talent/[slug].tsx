import type { GetServerSideProps, NextPage } from 'next';

type Props = { slug: string };

const TalentProfile: NextPage<Props> = ({ slug }) => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold">Talent Profile</h1>
    <p>Profile for: {slug}</p>
  </div>
);

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const slug = String(context.params?.slug || 'unknown');
  return { props: { slug } };
};

export default TalentProfile;