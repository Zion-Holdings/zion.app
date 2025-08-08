import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Seo from '../../components/seo/Seo';
import { SocialProfileJsonLd } from 'next-seo';
import { TALENT_PROFILES } from '../../data/talent';
import type { TalentProfile } from '../../data/talent';

type Props = { profile: TalentProfile | null };

const TalentProfilePage: NextPage<Props> = ({ profile }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!profile) {
    return <div>Profile not found</div>;
  }
  const url = `https://ziontechgroup.netlify.app/talent/${profile.slug}`;
  return (
    <div>
      <Seo
        title={`${profile.name} — ${profile.title}`}
        description={`${profile.name}, ${profile.title} in ${profile.location}. Skills: ${profile.skills.join(', ')}`}
        openGraph={{
          title: `${profile.name} — ${profile.title}`,
          description: `${profile.name}, ${profile.title} in ${profile.location}. Skills: ${profile.skills.join(', ')}`,
          url,
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name={profile.name}
        url={url}
        sameAs={[url]}
      />
      <main>
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
        <p>{profile.location}</p>
        <p>{profile.bio}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: TALENT_PROFILES.map((p) => ({ params: { slug: p.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const profile = TALENT_PROFILES.find((p) => p.slug === slug) || null;
  return { props: { profile } };
};

export default TalentProfilePage;