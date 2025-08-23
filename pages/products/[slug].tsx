import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { readSolutionsIndex, readSolutionBySlug, type SolutionDetail } from '../../utils/marketplace';

interface Props { solution: SolutionDetail }

const ProductDetailPage: NextPage<Props> = ({ solution }) => {
  const price = solution.pricing?.priceUSD ?? solution.priceUSD;
  return (
    <div>
      <Head>
        <title>{solution.title} - Zion Solutions</title>
        <meta name="description" content={solution.summary} />
      </Head>
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
        <Link href="/products">← Back to Marketplace</Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '1rem 0' }}>{solution.title}</h1>
        <p style={{ color: '#444', marginBottom: '1rem' }}>{solution.summary}</p>
        {price && (
          <p style={{ fontWeight: 700, fontSize: 18 }}>Starting at ${price.toLocaleString()}</p>
        )}
        {Array.isArray(solution.features) && solution.features.length > 0 && (
          <section style={{ marginTop: 16 }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>What you get</h2>
            <ul>
              {solution.features.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </section>
        )}
        {Array.isArray(solution.outcomes) && solution.outcomes.length > 0 && (
          <section style={{ marginTop: 16 }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Expected outcomes</h2>
            <ul>
              {solution.outcomes.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </section>
        )}
        <div style={{ marginTop: 24 }}>
          <Link href={solution.cta?.url || `/contact?solution=${solution.slug}`}>
            <span style={{ display: 'inline-block', background: '#111', color: '#fff', padding: '0.6rem 1rem', borderRadius: 6 }}>Contact to purchase</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const solutions = readSolutionsIndex();
  const paths = solutions.map(s => ({ params: { slug: s.slug } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || '');
  const solution = readSolutionBySlug(slug);
  if (!solution || (solution.status || 'draft') === 'draft') {
    return { notFound: true };
  }
  return { props: { solution } };
};

export default ProductDetailPage;