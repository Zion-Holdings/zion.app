import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const BlogPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Blog - Zion Technology</title>
        <meta name="description" content="Latest insights in AI, technology, and digital transformation." />
      </Head>

      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Zion
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/services" className="hover:text-purple-300 transition-colors">Services</Link>
              <Link href="/products" className="hover:text-purple-300 transition-colors">Products</Link>
              <Link href="/talent" className="hover:text-purple-300 transition-colors">Talent</Link>
              <Link href="/blog" className="text-purple-300">Blog</Link>
              <Link href="/about" className="hover:text-purple-300 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span> Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights in AI, technology, and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Marketplaces</h3>
              <p className="text-gray-300 mb-4">Explore how AI is revolutionizing digital commerce.</p>
              <Link href="/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat" className="text-purple-400 hover:text-purple-300">
                Read More →
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Blockchain Technology</h3>
              <p className="text-gray-300 mb-4">Discover blockchain's impact on modern business.</p>
              <Link href="/blog/blockchain-technology-in-modern-business-solutions-chat" className="text-purple-400 hover:text-purple-300">
                Read More →
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Cloud Architecture</h3>
              <p className="text-gray-300 mb-4">Best practices for cloud-native applications.</p>
              <Link href="/blog/cloud-native-architecture-best-practices-chat" className="text-purple-400 hover:text-purple-300">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Zion. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
