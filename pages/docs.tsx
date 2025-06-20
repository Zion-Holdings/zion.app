import DocsPage, { DocsPageProps } from '@/pages/DocsPage';
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<DocsPageProps> = async () => {
  // Temporarily disable content fetching to debug timeout
  // const filePath = path.join(process.cwd(), 'docs', 'gitbook', 'README.md');
  // const content = fs.readFileSync(filePath, 'utf8');
  // return { props: { content } };
  return { notFound: true }; // More aggressive
};

export default DocsPage;
