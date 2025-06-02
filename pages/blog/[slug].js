import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ReactMarkdown from 'react-markdown';
import NextHead from '@/components/NextHead';
import { BLOG_POSTS } from '@/data/blog-posts';
const BlogPostPage = ({ post }) => {
    if (!post) {
        return _jsx("div", { children: "Article not found" });
    }
    return (_jsxs(_Fragment, { children: [_jsx(NextHead, { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, image: post.featuredImage } }), _jsxs("main", { className: "prose dark:prose-invert max-w-3xl mx-auto py-8", children: [_jsx("h1", { children: post.title }), _jsx(ReactMarkdown, { children: post.content })] })] }));
};
export const getStaticPaths = async () => {
    const paths = BLOG_POSTS.map((p) => ({ params: { slug: p.slug } }));
    return { paths, fallback: 'blocking' };
};
export const getStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    try {
        const res = await fetch(`${appUrl}/api/blog/${slug}`);
        if (res.ok) {
            const post = await res.json();
            return { props: { post }, revalidate: 60 };
        }
    }
    catch (e) {
        console.error('Failed to fetch blog post', e);
    }
    const post = BLOG_POSTS.find((p) => p.slug === slug) || null;
    if (!post) {
        return { notFound: true };
    }
    return { props: { post } };
};
export default BlogPostPage;
