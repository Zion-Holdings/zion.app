import type { NextPage } from 'next";
import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const ChatContentIndex: NextPage = () => {
  const chatTopics = ['
    {
      title: 'AI-Powered Business Solutions Discussion',
      description: 'Explore how AI is transforming business operations and decision-making processes',
      href: '/chat-content/ai-powered-business-solutions-discussion',
      icon: '🤖',
      category: 'Business AI'}
    },'
{
      title: 'Cloud Computing Strategies',
      description: Discuss cloud migration, optimization, and best practices for modern applications',
      href: '/chat-content/cloud-computing-strategies',
      icon: '☁️',
      category: 'Cloud Computing'
    },'
    {
      title: 'Cybersecurity Best Practices',
      description: 'Learn about the latest cybersecurity threats and defense strategies',
      href: '/chat-content/cybersecurity-best-practices',
      icon: '🔒',
      category: 'Security'
    },'
{
      title: 'Data Analytics Implementation',
      description: 'Discover how to implement effective data analytics solutions',
      href: '/chat-content/data-analytics-implementation',
      icon: '📊',
      category: 'Data Analytics'
    },'
    {
      title: 'Digital Transformation Insights',
      description: 'Explore digital transformation strategies and implementation approaches',
      href: '/chat-content/digital-transformation-insights',
      icon: '🔄',
      category: 'Digital Transformation'
    },'
{
      title: 'Emerging Technology Trends',
      description: 'Stay updated on the latest technology trends and innovations',
      href: '/chat-content/emerging-technology-trends',
      icon: '🚀',
      category: 'Innovation'
    },'
    {
      title: 'Future of Work and Automation',
      description: 'Discuss how automation is reshaping the workplace and job market',
      href: '/chat-content/future-of-work-and-automation',
      icon: '⚙️',
      category: 'Automation'
    },'
{
      title: 'Innovation in Enterprise Technology',
      description: 'Explore cutting-edge enterprise technology solutions and implementations',
      href: '/chat-content/innovation-in-enterprise-technology',
      icon: '💡',
      category: 'Enterprise'
    },'
    {
      title: 'Sustainable Technology Practices',
      description: 'Learn about green technology and sustainable development practices',
      href: '/chat-content/sustainable-technology-practices',
      icon: '🌱',
      category: 'Sustainability'
    },'
{
      title: 'Technology Implementation Strategies',
      description: 'Best practices for implementing new technologies in organizations',
      href: '/chat-content/technology-implementation-strategies',
      icon: '📋',
      category: 'Implementation
    };
  ];

  return (
    <div>
      </div><div>
      <Head>
        <title>Chat Content - Zion</title>
        <meta name = "description content=Explore our comprehensive chat content covering AI, cloud computing, cybersecurity, and more > </meta" name="description" content="Explore our comprehensive chat content covering AI, cloud computing, cybersecurity, and" more" ><link rel="icon href=/favicon.ico > </link" rel="icon" href="/favicon.ico" ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      
      <div className="min-h-screen" bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue> 
        </div><div className="container-responsive" py-40>
          <div className="text-center" mb-16>
            
            >
              <span className="text-transparent" bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple>
                Chat Content Hub
              </span>
            </motion.h1>
            
            >
              Explore our comprehensive collection of chat content covering AI, cloud computing, cybersecurity, and emerging technology trends
            </motion.p>
          </div>
          <div className="grid"  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
            {chatTopics.map((topic, index) => ("
              >
                <div className="flex" items-start space-x-4> 
                  </div><div className="text-3xl>{topic.icon}</div"">
                  <div className="flex-1>"
                    </div><div className="text-xs" text-neon-blue font-medium mb-2 >{topic.category}</div>
                    <h3 className="text-lg" font-semibold text-high-contrast mb-2>
                      {topic.title}
                    </h3>
                    <p className="text-high-contrast-secondary" text-sm mb-4>
                      {topic.description}
                    </p>
                    
                     />
                      Start Chat →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
          >
            
              className="inline-flex" items-center px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple hover from-neon-purple hover to-neon-blue text-white rounded-lg font-medium transition-all duration-300 />
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  
  </div >
  </div> 
  </div>
;
};
'
export default ChatContentIndex ")"'"