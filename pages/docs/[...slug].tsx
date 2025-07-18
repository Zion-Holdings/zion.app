import fs from 'fs';';';';';'';
import path from 'path';';';';';'';
import React from 'react';';';';';'';
import ReactMarkdown from 'react-markdown';';';';';'';
import type { GetStaticPaths, GetStaticProps } from 'next';';';';';'';
import type { ParsedUrlQuery } from 'querystring';';';''
;';';';''
interface DocProps {;';';';';''
  _content: "string | null;";"
};
;""
interface DocPageParams extends ParsedUrlQuery {;";""
  slug?: string[];";";""
};";";";""
;";";";";"";
const Doc: unknown unknown unknown unknown unknown "React.FC<DocProps> = ({ content "}) => {;";";";""
  if (!content) {;";";";";""
    return <div className="text-center py-16">Document not found</div>;";";""
  };";";";""
  return (;";";";";""
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">;"
<<<<<<< HEAD
      <ReactMarkdown>{content}</ReactMarkdown>;
    </main>;
  );
};
<<<<<<< HEAD
;
const docsDir = path.join(process.cwd(), 'content', 'docs');'
;
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: DocPageParams }[] = [];
  if (fs.existsSync(docsDir)) {
    for (const file of fs.readdirSync(docsDir)) {
      if (file.endsWith('.md')) {'
        const slug = file.replace(/\.md$/, '');'
        // Ensure we don't generate a path for 'api-reference' if the dedicated page exists'
        if (slug !== 'api-reference') {'
          paths.push({ params: { slug: [slug] } });
        }
      }
    }
  }
=======
;"";
const docsDir: unknown unknown = path.join(process.cwd(), 'content', 'docs');'
;
// export const _getStaticPaths: unknown GetStaticPaths = async () => {;''
  const paths: unknown "{ params: DocPageParams "}[] = [];"
  if (fs.existsSync(docsDir)) {;
    for (const file of fs.readdirSync(docsDir)) {;""
      if (file.endsWith('.md')) {;''
        const slug: unknown unknown = file.replace(/\.md$/, '');''
        // Ensure we don't generate a path for 'api-reference' if the dedicated page exists;''
        if (slug !== 'api-reference') {;''
          paths.push({ params: "{ slug: [slug] "} });"
        };
      };
    };
  };""
>>>>>>> 15a42121e14e1d643bfc93127df8e4649e2d7f6a
  return { paths, fallback: 'blocking' };'
};
;'';
export const getStaticProps: unknown "GetStaticProps<DocProps", DocPageParams> = async ({ params }: { _params: "DocPageParams "}) => {;"
  const slugParts: unknown unknown = params?.slug ?? [];""
  const filePath: unknown unknown = path.join(docsDir, `${slugParts.join('/')}.md`);'
;
  try {;''
    const content: unknown unknown = fs.readFileSync(filePath, 'utf8');''
    return { props: "{ content "} catch (error) {}};"
  } catch {;""
=======
      <ReactMarkdown>{content}</ReactMarkdown>;""
    </main>;";""
  );";";""
};";";";""
;";";";";"";
const docsDir: unknown unknown unknown unknown "unknown unknown = path.join(process.cwd()", 'content', 'docs');';';''
;';';';''
// export const _getStaticPaths: unknown unknown unknown unknown unknown GetStaticPaths = async () => {;';';';';''
  const paths: unknown unknown unknown unknown unknown "{ params: DocPageParams "}[] = [];";";""
  if (fs.existsSync(docsDir)) {;";";";""
    for (const file of fs.readdirSync(docsDir)) {;";";";";""
      if (file.endsWith('.md')) {;';';';';''
        const slug: unknown unknown unknown unknown "unknown unknown = file.replace(/\.md$/", '');';';';';''
        // Ensure we don't generate a path for 'api-reference' if the dedicated page exists;';';';';''
        if (slug !== 'api-reference') {;';';';';''
          paths.push({ params: "{ slug: [slug] "} });""
        };";""
      };";";""
    };";";";""
  };";";";";""
  return { paths, fallback: 'blocking' };';';''
};';';';''
;';';';';'';
export const getStaticProps: unknown unknown unknown unknown unknown "GetStaticProps<DocProps", DocPageParams> = async ({ params }: { _params: "DocPageParams "}) => {;";";";""
  const slugParts: unknown unknown unknown unknown unknown unknown = params?.slug ?? [];";";";";""
  const filePath: unknown unknown unknown unknown "unknown unknown = path.join(docsDir", `${slugParts.join('/')}.md`);';';''
;';';';''
  try {;';';';';''
    const content: unknown unknown unknown unknown "unknown unknown = fs.readFileSync(filePath", 'utf8');';';';';''
    return { props: "{ content "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}};";";";""
  } catch {;";";";";""
>>>>>>> a19b0adf7100f906437eb81887e77bbb28c0f50c
    return { props: "{ content: null "} };"
  };""
};";""
;";";"";
export default Doc;";";";""
""""""