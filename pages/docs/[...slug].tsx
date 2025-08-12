import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface DocProps {
  content: string | null;
}

interface DocPageParams extends ParsedUrlQuery {
  slug?: string[];
}

const Doc: React.FC<DocProps> = ({ content }) => {
  if (!content) {
    return <div className="text-center py-16">Document not found</div>;
  }
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
};

const docsDir = path.join(process.cwd(), 'content', 'docs');

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: DocPageParams }[] = [];
  if (fs.existsSync(docsDir)) {
    for (const file of fs.readdirSync(docsDir)) {
      if (file.endsWith('.md')) {
        const slug = file.replace(/\.md$/, '');
        // Ensure we don't generate a path for 'api-reference' if the dedicated page exists
        if (slug !== 'api-reference') {
          paths.push({ params: { slug: [slug] } });
        }
      }
    }
  }
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<DocProps, DocPageParams> = async ({ params }: { params: DocPageParams }) => {
  const slugParts = params?.slug ?? [];
  const filePath = path.join(docsDir, `${slugParts.join('/')}.md`);

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return { props: { content } };
  } catch {
    return { props: { content: null } };
  }
};

export default Doc;
