import { PrismaClient } from '@prisma/client';

type Post = { id: number; categoryId: string; title: string };

jest.mock('@prisma/client', () => {
  const mPrisma = {
    forumPost: {
      findMany: jest.fn()
    }
  };
  return { PrismaClient: jest.fn(() => mPrisma) };
}, { virtual: true });

describe('forum post queries', () => {
  it('returns posts for getting-hired category', async () => {
    const prisma = new PrismaClient() as any;
    const mockPosts: Post[] = [
      { id: 1, categoryId: 'getting-hired', title: 'First post' }
    ];

    prisma.forumPost.findMany.mockResolvedValue(mockPosts);

    const result = await prisma.forumPost.findMany({ where: { categoryId: 'getting-hired' } });
    expect(prisma.forumPost.findMany).toHaveBeenCalledWith({ where: { categoryId: 'getting-hired' } });
    expect(result).toEqual(mockPosts);
  });
});
