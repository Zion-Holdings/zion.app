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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
