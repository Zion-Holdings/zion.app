import type { NextPage } from 'next';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import EnhancedButton from '../../components/ui/EnhancedButton';
import GlassmorphismCard from '../../components/ui/GlassmorphismCard';

const BlogPage: NextPage = () => {
  const blogPosts = [
    {
      title: 'AI-Powered Marketplaces',
      description: 'Explore how AI is revolutionizing digital commerce and transforming the way businesses connect.',
      link: '/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat',
      icon: '🤖',
      color: 'blue' as const
    },
    {
      title: 'Blockchain Technology',
      description: 'Discover blockchain\'s impact on modern business solutions and decentralized applications.',
      link: '/blog/blockchain-technology-in-modern-business-solutions-chat',
      icon: '🔗',
      color: 'purple' as const
    },
    {
      title: 'Cloud Architecture',
      description: 'Best practices for cloud-native applications and scalable infrastructure design.',
      link: '/blog/cloud-native-architecture-best-practices-chat',
      icon: '☁️',
      color: 'green' as const
    },
    {
      title: 'Machine Learning Applications',
      description: 'Real-world applications of machine learning in enterprise software development.',
      link: '/blog/machine-learning-applications-in-enterprise-software-chat',
      icon: '🧠',
      color: 'pink' as const
    },
    {
      title: 'Cybersecurity Trends',
      description: 'Latest trends and best practices in cybersecurity for 2024 and beyond.',
      link: '/blog/cybersecurity-trends-for-2024-and-beyond-chat',
      icon: '🔒',
      color: 'blue' as const
    },
    {
      title: 'DevOps Automation',
      description: 'Strategies for modern DevOps teams to automate and streamline development processes.',
      link: '/blog/devops-automation-strategies-for-modern-teams-chat',
      icon: '⚙️',
      color: 'purple' as const
    }
  ];

  return (
    <EnhancedLayout
      title="Blog - Zion Technology"
      description="Latest insights in AI, technology, and digital transformation."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Zion Blog
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              Stay updated with the latest insights in AI, technology, and digital transformation. 
              Discover cutting-edge trends and best practices from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/services"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Explore Services
              </EnhancedButton>
              <EnhancedButton
                href="/contact"
                variant="outline"
                size="lg"
                icon="📧"
              >
                Get in Touch
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Featured Articles
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Explore our latest insights and thought leadership in technology and AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <GlassmorphismCard key={index} gradient={post.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{post.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-6">{post.description}</p>
                  <a 
                    href={post.link}
                    className="text-neon-blue hover:text-neon-purple transition-colors font-semibold inline-flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </a>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="glass-dark border border-neon-blue/30 rounded-2xl p-12 text-center">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Stay Connected
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, trends, and updates in AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="📧"
              >
                Subscribe Now
              </EnhancedButton>
              <EnhancedButton
                href="/services"
                variant="outline"
                size="lg"
                icon="📋"
              >
                Explore Services
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  );
};

export default BlogPage;
