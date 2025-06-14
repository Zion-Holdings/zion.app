import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet-async';
import { NextSeo } from '@/components/NextSeo';
import { BLOG_POSTS } from '@/data/blog-posts';
const BlogPostPage = ({ initialPost }) => {
    const router = useRouter();
    const { slug } = router.query;
    const [post, setPost] = React.useState(initialPost);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        if (initialPost && initialPost.slug === slug) {
            setPost(initialPost);
            setError(null); // Clear any previous error
        }
        else if (slug) {
            // This case handles if the slug changes and initialPost is not for the current slug
            // Or if initialPost was null from getStaticProps (which shouldn't happen if notFound is true)
            // For now, we will rely on getStaticProps to provide the correct post or a 404.
            // If initialPost is null and getStaticProps didn't return notFound, that's an inconsistent state.
            // The previous logic tried a fallback here, but we aim to make getStaticProps authoritative.
            const directFallback = BLOG_POSTS.find((p) => p.slug === slug) || null;
            if (directFallback) {
                setPost(directFallback);
                setError(null);
            }
            else {
                // If getStaticProps is working correctly, this path (slug exists, no initialPost, no fallback)
                // should ideally not be hit frequently, as getStaticProps would have returned notFound.
                // However, to maintain some robustness for dynamic client-side slug changes not triggering a new getStaticProps:
                setPost(null);
                setError('Article not found');
            }
        }
    }, [slug, initialPost]);
    if (error) {
        return _jsx("div", { children: error });
    }
    if (!post) {
        return _jsx("div", { children: "Article not found" });
    }
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.featuredImage,
        datePublished: post.publishedDate,
        author: {
            "@type": "Person",
            name: post.author.name,
        },
    };
    return (_jsxs(_Fragment, { children: [_jsx(NextSeo, { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: post.featuredImage ? [{ url: post.featuredImage }] : undefined } }), _jsx(Helmet, { children: _jsx("script", { type: "application/ld+json", children: JSON.stringify(articleLd) }) }), _jsxs("main", { className: "prose dark:prose-invert max-w-3xl mx-auto py-8", children: [_jsx("h1", { children: post.title }), _jsx(ReactMarkdown, { children: post.content })] })] }));
};
export default BlogPostPage;
export const getStaticPaths = async () => {
    // Pre-render only the sample posts. Others will be generated on demand.
    const paths = BLOG_POSTS.map((p) => ({ params: { slug: p.slug } }));
    return { paths, fallback: 'blocking' };
};
export const getStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const post = BLOG_POSTS.find((p) => p.slug === slug) || null; // Changed from 'fallback' to 'post' for clarity
    if (!post) { // Changed from 'fallback' to 'post'
        return { notFound: true };
    }
    return { props: { initialPost: post }, revalidate: 60 }; // Changed from 'fallback' to 'post'
};
