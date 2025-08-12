import { PrismaClient } from '@prisma/client';
import { MARKETPLACE_LISTINGS } from '../src/data/listingData';

const prisma = new PrismaClient();

async function main() {
  const products = MARKETPLACE_LISTINGS.map((item) => ({
    id: item.id,
    name: item.title,
    description: item.description,
    price: item.price ?? undefined,
    currency: item.currency === '$' ? 'USD' : item.currency,
    images: item.images,
    category: item.category,
    tags: item.tags,
  }));

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
