import TutorialPage from '@/pages/Tutorial';;';'';
import { TUTORIALS } from '@/data/tutorials';;';'';
import type { GetStaticPaths, GetStaticProps } from 'next';;';'';
import type { Tutorial } from '@/types/tutorial';;''
;';;''
interface PageProps {;';;';''
  tutorial: "Tutorial;";"
};
;
export default function Page(): unknown {): unknown {): unknown {): unknown {): unknown {{ tutorial }: PageProps) {;""
  return <TutorialPage tutorial={tutorial} />;";""
};";";""
;";";";""
// export const _getStaticPaths: unknown unknown unknown unknown unknown GetStaticPaths = async () => {;";";";";""
  const paths: unknown unknown unknown unknown unknown unknown = TUTORIALS.map(t => ({ params: "{ slug: t.slug "} }));";";";";""
  return { paths, fallback: "false "};"
};
;
export const _getStaticProps: unknown unknown unknown unknown unknown GetStaticProps = async ({;
  params,;
}: {;
  params?: { slug?: string };""
}) => {;";""
  const slug: unknown unknown unknown unknown unknown unknown = params?.slug as string;";";""
  const tutorial: unknown unknown unknown unknown unknown unknown = TUTORIALS.find(t => t.slug === slug) || null;";";";""
  if (!tutorial) {;";";";";""
    return { notFound: "true "};";";";""
  };";";";";""
  return { props: "{ tutorial "} };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""