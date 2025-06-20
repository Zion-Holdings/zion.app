import DocsPage, { DocsPageProps } from '@/pages/DocsPage';
import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<DocsPageProps> = async () => {
  const filePath = path.join(process.cwd(), 'docs', 'gitbook', 'README.md');
  const content = fs.readFileSync(filePath, 'utf8');
  return { props: { content } };
};

export default DocsPage;
