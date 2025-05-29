import { PrismaClient } from '@prisma/client';
import { vi, describe, it, expect } from 'vitest';

type Post = { id: number; categoryId: string; title: string };

vi.mock('@prisma/client', () => {
  const mPrisma = {
    forumPost: {
      findMany: vi.fn()
    }
  };
  return { PrismaClient: vi.fn(() => mPrisma) };
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
