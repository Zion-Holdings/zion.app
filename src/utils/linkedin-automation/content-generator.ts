import { LINKEDIN_CONFIG } from './config';

export interface PostContent {
  title: string;
  content: string;
  hashtags: string[];
}

const postTemplates = [
  {
    title: 'Secure Authentication Solution',
    template: `🔐 Excited to share our latest development: A robust authentication system built with modern web technologies!

Our platform at ${LINKEDIN_CONFIG.app.url} provides:
✅ Server-side authentication with Supabase
✅ Email/password and social login support
✅ User profile management
✅ Email verification system
✅ Protected routes and middleware

Perfect for startups and businesses looking for a scalable, secure authentication solution.

#WebDevelopment #Authentication #Supabase #NextJS #React #Startup #SaaS`,
    hashtags: ['#WebDevelopment', '#Authentication', '#Supabase', '#NextJS', '#React', '#Startup', '#SaaS']
  },
  {
    title: 'Modern Web Development',
    template: `🚀 Building the future of web applications with cutting-edge technology!

Our Zion Tech Group platform demonstrates:
✨ Modern React/Next.js architecture
✨ Professional UI/UX design
✨ Scalable and production-ready code
✨ Comprehensive authentication system
✨ Secure user management

Check out our latest work: ${LINKEDIN_CONFIG.app.url}

#TechInnovation #WebDevelopment #React #NextJS #Startup #Innovation`,
    hashtags: ['#TechInnovation', '#WebDevelopment', '#React', '#NextJS', '#Startup', '#Innovation']
  },
  {
    title: 'Professional SaaS Solution',
    template: `💼 Transforming how businesses handle user authentication and management!

Our professional SaaS platform offers:
🔒 Enterprise-grade security
📱 Responsive design
⚡ Lightning-fast performance
🛡️ Comprehensive protection
📊 User analytics and insights

Built for modern businesses that demand excellence.

Visit: ${LINKEDIN_CONFIG.app.url}

#SaaS #Business #Technology #Innovation #Startup #WebDevelopment`,
    hashtags: ['#SaaS', '#Business', '#Technology', '#Innovation', '#Startup', '#WebDevelopment']
  },
  {
    title: 'Developer-Friendly Platform',
    template: `👨‍💻 Calling all developers! We've built something special.

Our authentication platform features:
🔧 Clean, maintainable code
📚 Comprehensive documentation
🔄 Easy integration
🎯 Developer experience focused
🚀 Production-ready deployment

Built with love for the developer community.

Explore: ${LINKEDIN_CONFIG.app.url}

#Developer #Coding #WebDevelopment #React #NextJS #Programming`,
    hashtags: ['#Developer', '#Coding', '#WebDevelopment', '#React', '#NextJS', '#Programming']
  },
  {
    title: 'Startup Innovation',
    template: `🌟 Innovation meets execution in our latest project!

Zion Tech Group presents a complete authentication solution:
🎯 Problem-focused design
⚡ Rapid development
🔐 Security-first approach
📈 Scalable architecture
💡 Modern tech stack

Perfect for startups ready to scale.

Discover more: ${LINKEDIN_CONFIG.app.url}

#Startup #Innovation #Technology #Entrepreneurship #WebDevelopment`,
    hashtags: ['#Startup', '#Innovation', '#Technology', '#Entrepreneurship', '#WebDevelopment']
  }
];

export async function generatePostContent(): Promise<PostContent[]> {
  const posts: PostContent[] = [];
  
  // Select random templates for variety
  const shuffledTemplates = postTemplates.sort(() => Math.random() - 0.5);
  const selectedTemplates = shuffledTemplates.slice(0, LINKEDIN_CONFIG.advertising.maxPostsPerDay);
  
  for (const template of selectedTemplates) {
    posts.push({
      title: template.title,
      content: template.template,
      hashtags: template.hashtags
    });
  }
  
  return posts;
}

export function generateCustomPost(topic: string): PostContent {
  const baseContent = `🚀 Exciting news from Zion Tech Group!

${topic}

Our platform at ${LINKEDIN_CONFIG.app.url} continues to evolve with cutting-edge features and professional-grade security.

${LINKEDIN_CONFIG.advertising.hashtags.join(' ')}`;

  return {
    title: `Custom Post - ${topic}`,
    content: baseContent,
    hashtags: LINKEDIN_CONFIG.advertising.hashtags
  };
} 