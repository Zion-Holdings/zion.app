import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

type BlogIndexProps = { slugs: string[] };

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const blogDir = path.join(process.cwd(), 'pages', 'blog');
  let slugs: string[] = [];
  try {
    const files = fs.readdirSync(blogDir);
    slugs = files
      .filter((f) => f.endsWith('.tsx') && f !== 'index.tsx')
      .map((f) => f.replace(/\.tsx$/, ''));
  } catch {
    slugs = [];
  }
  return { props: { slugs } };
};

const Index: NextPage<BlogIndexProps> = ({ slugs }) => {
  return (
    <div>
      <Head>
        <title>Blog - Zion Tech Solutions</title>
        <meta name="description" content="Zion blog" />
      </Head>
      <main>
        <h1>Blog</h1>
        {slugs.length === 0 ? (
          <p>No posts yet. Check back soon.</p>
        ) : (
          <ul>
            {slugs.map((slug) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`}>{slug.replace(/-/g, ' ')}</Link>
              </li>
            ))}
          </ul>
        )}
        <p><Link href="/">Back to Home</Link></p>
      </main>
    </div>
  );
};

export default Index;