import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from '@/components/NextSeo';
function parseMarkdown(filePath) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const match = raw.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
    if (!match)
        return { meta: {}, content: raw };
    const meta = JSON.parse(match[1]);
    const content = match[2].trim();
    return { meta, content };
}
const StaticPage = ({ content, meta }) => {
    if (!content) {
        return _jsx("div", { children: "Page not found" });
    }
    return (_jsxs(_Fragment, { children: [_jsx(NextSeo, { title: meta?.title, description: meta?.description }), _jsx("main", { className: "prose dark:prose-invert max-w-3xl mx-auto py-8", children: _jsx(ReactMarkdown, { children: content }) })] }));
};
export const getStaticPaths = async () => {
    const dir = path.join(process.cwd(), 'content', 'pages');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
    // List of slugs that have dedicated pages and should be excluded from [slug].tsx
    const reservedSlugs = ['about', 'careers', 'innovation', 'roadmap', 'privacy', 'terms'];
    const paths = files
        .map((f) => ({ params: { slug: f.replace(/\.md$/, '') } }))
        .filter(p => !reservedSlugs.includes(p.params.slug));
    return { paths, fallback: false };
};
export const getStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const filePath = path.join(process.cwd(), 'content', 'pages', `${slug}.md`);
    if (!fs.existsSync(filePath)) {
        return { notFound: true };
    }
    const { meta, content } = parseMarkdown(filePath);
    return { props: { meta, content } };
};
export default StaticPage;
