import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/utils/types/blog';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'blog');
const POSTS_PATH = path.resolve(DATA_DIR, 'posts.json');

function ensureStore(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(POSTS_PATH)) {
    fs.writeFileSync(POSTS_PATH, JSON.stringify([], null, 2), 'utf8');
  }
}

export function readPosts(): BlogPost[] {
  ensureStore();
  try {
    const raw = fs.readFileSync(POSTS_PATH, 'utf8');
    return JSON.parse(raw) as BlogPost[];
  } catch (e) {
    return [];
  }
}

export function writePosts(posts: BlogPost[]): void {
  ensureStore();
  fs.writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2), 'utf8');
}

export function findPostBySlug(slug: string): BlogPost | undefined {
  return readPosts().find((p) => p.slug === slug);
}

export function findPostById(id: string): BlogPost | undefined {
  return readPosts().find((p) => p.id === id);
}

export function upsertPost(post: BlogPost): BlogPost {
  const posts = readPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.unshift(post);
  }
  writePosts(posts);
  return post;
}

export function listPublishedPosts(): BlogPost[] {
  return readPosts()
    .filter((p) => p.status === 'published')
    .sort((a, b) => (new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()));
}

export function listAllAuthors(): string[] {
  return Array.from(new Set(readPosts().map((p) => p.author).filter(Boolean)));
}

export function listAllTopics(): string[] {
  return Array.from(new Set(readPosts().flatMap((p) => p.topics || [])));
}

export function listAllTags(): string[] {
  return Array.from(new Set(readPosts().flatMap((p) => p.tags || [])));
}

export function incrementMetric(id: string, metric: keyof BlogPost['metrics']): BlogPost | undefined {
  const posts = readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx < 0) return undefined;
  posts[idx].metrics[metric] += 1;
  writePosts(posts);
  return posts[idx];
}