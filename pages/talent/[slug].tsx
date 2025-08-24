import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return { props: { slug: ctx.params?.slug ?? '' } };
};

export default function TalentSlug({ slug }: { slug: string }) { return <main style={{padding:'2rem'}}>Talent: {slug}</main>; }