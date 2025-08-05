import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 'ai-powered-marketplaces-the-future-of-digital-commerce',
      title: 'AI-Powered Marketplaces: The Future of Digital Commerce',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital marketplaces and creating new opportunities for businesses and consumers alike.',
      author: 'Zion Team',
      publishDate: '2024-01-15',
      tags: ['AI', 'Marketplace', 'Digital Commerce', 'Technology'],
      readTime: '8 min read'
    },
    {
      id: 'blockchain-technology-in-modern-business-solutions',
      title: 'Blockchain Technology in Modern Business Solutions',
      excerpt: 'Explore how blockchain technology is transforming business operations and creating new opportunities for secure, transparent transactions.',
      author: 'Zion Team',
      publishDate: '2024-01-10',
      tags: ['Blockchain', 'Business', 'Technology', 'Security'],
      readTime: '7 min read'
    },
    {
      id: 'cybersecurity-trends-for-2024-and-beyond',
      title: 'Cybersecurity Trends for 2024 and Beyond',
      excerpt: 'Stay ahead of the curve with the latest cybersecurity trends and best practices for protecting your digital assets.',
      author: 'Zion Team',
      publishDate: '2024-01-08',
      tags: ['Cybersecurity', 'Security', 'Technology', 'Trends'],
      readTime: '6 min read'
    },
    {
      id: 'machine-learning-applications-in-enterprise-software',
      title: 'Machine Learning Applications in Enterprise Software',
      excerpt: 'Learn how machine learning is being integrated into enterprise software solutions to improve efficiency and decision-making.',
      author: 'Zion Team',
      publishDate: '2024-01-05',
      tags: ['Machine Learning', 'Enterprise', 'Software', 'AI'],
      readTime: '9 min read'
    },
    {
      id: 'the-rise-of-edge-computing-in-iot-applications',
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'Discover how edge computing is revolutionizing IoT applications and enabling real-time data processing closer to the source.',
      author: 'Zion Team',
      publishDate: '2024-01-03',
      tags: ['Edge Computing', 'IoT', 'Technology', 'Innovation'],
      readTime: '7 min read'
    },
    {
      id: 'blockchain-for-supply-chain-management',
      title: 'Blockchain for Supply Chain Management',
      excerpt: 'Explore how blockchain technology is improving transparency and efficiency in supply chain management across industries.',
      author: 'Zion Team',
      publishDate: '2024-01-01',
      tags: ['Blockchain', 'Supply Chain', 'Management', 'Technology'],
      readTime: '6 min read'
    },
    {
      id: 'cybersecurity-in-the-age-of-ai',
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Understanding the evolving landscape of cybersecurity as artificial intelligence becomes more prevalent in our digital world.',
      author: 'Zion Team',
      publishDate: '2023-12-28',
      tags: ['Cybersecurity', 'AI', 'Security', 'Technology'],
      readTime: '8 min read'
    },
    {
      id: 'machine-learning-in-healthcare',
      title: 'Machine Learning in Healthcare',
      excerpt: 'Discover how machine learning is transforming healthcare delivery and improving patient outcomes through advanced analytics.',
      author: 'Zion Team',
      publishDate: '2023-12-25',
      tags: ['Machine Learning', 'Healthcare', 'AI', 'Medicine'],
      readTime: '7 min read'
    },
    {
      id: 'sustainable-technology-solutions',
      title: 'Sustainable Technology Solutions',
      excerpt: 'Explore how technology is being used to create sustainable solutions for environmental challenges and climate change.',
      author: 'Zion Team',
      publishDate: '2023-12-22',
      tags: ['Sustainability', 'Technology', 'Environment', 'Innovation'],
      readTime: '6 min read'
    },
    {
      id: '5g-networks-and-iot-integration',
      title: '5G Networks and IoT Integration',
      excerpt: 'Learn how 5G networks are enabling the next generation of IoT applications and connected devices.',
      author: 'Zion Team',
      publishDate: '2023-12-20',
      tags: ['5G', 'IoT', 'Networks', 'Technology'],
      readTime: '5 min read'
    },
    {
      id: 'augmented-reality-in-enterprise',
      title: 'Augmented Reality in Enterprise',
      excerpt: 'Discover how augmented reality is being adopted by enterprises to improve training, maintenance, and customer experiences.',
      author: 'Zion Team',
      publishDate: '2023-12-18',
      tags: ['AR', 'Enterprise', 'Technology', 'Innovation'],
      readTime: '6 min read'
    },
    {
      id: 'cloud-native-architecture-patterns',
      title: 'Cloud-Native Architecture Patterns',
      excerpt: 'Explore the key patterns and best practices for building scalable, resilient cloud-native applications.',
      author: 'Zion Team',
      publishDate: '2023-12-15',
      tags: ['Cloud', 'Architecture', 'Technology', 'Development'],
      readTime: '8 min read'
    },
    {
      id: 'quantum-computing-applications-in-business',
      title: 'Quantum Computing Applications in Business',
      excerpt: 'Learn about the potential applications of quantum computing in business and how it could revolutionize various industries.',
      author: 'Zion Team',
      publishDate: '2023-12-12',
      tags: ['Quantum Computing', 'Business', 'Technology', 'Innovation'],
      readTime: '7 min read'
    },
    {
      id: 'digital-transformation-strategies',
      title: 'Digital Transformation Strategies',
      excerpt: 'Discover effective strategies for implementing digital transformation initiatives in your organization.',
      author: 'Zion Team',
      publishDate: '2023-12-10',
      tags: ['Digital Transformation', 'Strategy', 'Business', 'Technology'],
      readTime: '9 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Blog - Zion</title>
        <meta name="description" content="Latest insights on AI-powered marketplaces, blockchain technology, and digital innovation" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container-responsive">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-responsive-xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-8">
              <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-responsive-sm font-medium touch-target">
                Marketplace
              </Link>
              <Link href="/blog" className="text-white px-3 py-2 rounded-md text-responsive-sm font-medium touch-target">
                Blog
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-responsive-sm font-medium touch-target">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-responsive section-padding">
        <div className="text-center">
          <h1 className="text-responsive-4xl font-bold text-white mb-6">
            Zion
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Blog</span>
          </h1>
          <p className="text-responsive-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Latest insights on AI-powered marketplaces, blockchain technology, and digital innovation
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container-responsive section-padding">
        <div className="grid-responsive-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover-responsive">
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-responsive-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-responsive-lg font-semibold text-white mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-300 text-responsive-sm mb-4 line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between text-responsive-sm text-gray-400 mb-4">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-responsive-xs text-gray-500">{new Date(post.publishDate).toLocaleDateString()}</span>
                <Link href={`/blog/${post.id}`} className="text-purple-400 hover:text-purple-300 font-medium text-responsive-sm touch-target">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="container-responsive section-padding-sm">
          <div className="text-center text-gray-400">
            <p className="text-responsive-sm">&copy; 2024 Zion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Blog 