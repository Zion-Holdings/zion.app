import React from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs/promises';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type DocsPageProps = {
  title: string;
  markdownContent: string;
  filePathRequested: string;
};

export default function DocsPage(props: DocsPageProps) {
  const { title, markdownContent, filePathRequested } = props;

  return (
    <>
      <Head>
        <title>{title} — Documentation</title>
        <meta name="description" content={`Documentation viewer for ${filePathRequested}`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-white/60 text-sm mt-2">Source: {filePathRequested}</p>
          </div>

          <article className="prose prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
          </article>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<DocsPageProps> = async (context) => {
  const slugPartsRaw = context.params?.slug;
  const slugParts = Array.isArray(slugPartsRaw) ? slugPartsRaw : [];

  // Join slug parts back into a path like "README.md" or "docs/guide.md"
  const requestedPath = slugParts.join('/');

  // Security: only allow .md files and restrict traversal
  if (!requestedPath || !requestedPath.toLowerCase().endsWith('.md') || requestedPath.includes('..')) {
    return { notFound: true };
  }

  // Resolve against repository root
  const repoRoot = process.cwd();
  const absolutePath = path.join(repoRoot, requestedPath);

  try {
    const fileBuffer = await fs.readFile(absolutePath);
    const fileContent = fileBuffer.toString('utf8');

    const titleBase = path.basename(requestedPath).replace(/\.md$/i, '');
    const title = titleBase.replace(/[-_]/g, ' ');

    return {
      props: {
        title,
        markdownContent: fileContent,
        filePathRequested: requestedPath,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

