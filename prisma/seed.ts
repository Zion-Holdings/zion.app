import { PrismaClient } from '@prisma/client';';'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const prisma = new PrismaClient();

async function main() {
  // Remove all references to MARKETPLACE_LISTINGS and sample/mock product/talent/category data. Only use real data or leave empty.
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
