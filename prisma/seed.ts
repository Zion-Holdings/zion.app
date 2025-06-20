import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';
const prisma = new PrismaClient();

async function main() {
  // At the beginning of main() or after prisma client initialization
  console.log('Attempting to seed categories via Django management command...');
  try {
    // Adjust the path to manage.py and python executable if necessary based on your environment
    // Assuming prisma/seed.ts is run from the root of the project
    const command = 'python backend/manage.py seed_categories';
    execSync(command, { stdio: 'inherit', cwd: process.cwd() }); // stdio: 'inherit' will show output from the command
    console.log('Django seed_categories command executed successfully.');
  } catch (error) {
    console.error('Failed to execute Django seed_categories command:', error);
    // Decide if you want to exit the process or continue with other seeding operations
    // process.exit(1); // Uncomment to exit if Django seeding fails
  }

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

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
