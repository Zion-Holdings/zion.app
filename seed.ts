import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      id: 'demo-ai-writer',
      name: 'AI Writing Assistant',
      description: 'Generate blog posts and articles using AI.',
      price: 29.99,
      currency: 'USD',
      images: ['https://placehold.co/600x400?text=AI+Writer'],
    },
    {
      id: 'demo-ai-chatbot',
      name: 'Customer Support Chatbot',
      description: 'Automate customer chats with a smart AI bot.',
      price: 49.0,
      currency: 'USD',
      images: ['https://placehold.co/600x400?text=AI+Chatbot'],
    },
    {
      id: 'demo-ai-design',
      name: 'AI Design Generator',
      description: 'Create stunning designs from text prompts.',
      price: 39.0,
      currency: 'USD',
      images: ['https://placehold.co/600x400?text=AI+Design'],
    },
    {
      id: 'demo-ai-voice',
      name: 'Voice Cloning Tool',
      description: 'Clone voices for videos and podcasts.',
      price: 25.0,
      currency: 'USD',
      images: ['https://placehold.co/600x400?text=AI+Voice'],
    },
    {
      id: 'demo-ai-analytics',
      name: 'Predictive Analytics Suite',
      description: 'Forecast trends with machine learning analytics.',
      price: 59.0,
      currency: 'USD',
      images: ['https://placehold.co/600x400?text=AI+Analytics'],
    },
  ];

  await prisma.product.createMany({ data: products, skipDuplicates: true });

  const talents = [
    {
      name: 'Alice Johnson',
      role: 'Full Stack Developer',
      avatar: 'https://placehold.co/100x100?text=A',
      rate: 100,
      skills: ['React', 'Node.js', 'Prisma'],
    },
    {
      name: 'Bob Smith',
      role: 'Data Scientist',
      avatar: 'https://placehold.co/100x100?text=B',
      rate: 120,
      skills: ['Python', 'TensorFlow', 'Pandas'],
    },
    {
      name: 'Carol Williams',
      role: 'DevOps Engineer',
      avatar: 'https://placehold.co/100x100?text=C',
      rate: 110,
      skills: ['AWS', 'Docker', 'Kubernetes'],
    },
  ];

  await prisma.talent.createMany({ data: talents, skipDuplicates: true });

  const categories = [
    { id: 'services', name: 'Services', slug: 'services', icon: 'Briefcase', active: true },
    { id: 'talents', name: 'Talents', slug: 'talents', icon: 'Users', active: true },
    { id: 'equipment', name: 'Equipment', slug: 'equipment', icon: 'HardDrive', active: true },
    { id: 'innovation', name: 'Innovation', slug: 'innovation', icon: 'Lightbulb', active: true },
  ];

  await (prisma as any).category.createMany({ data: categories, skipDuplicates: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });