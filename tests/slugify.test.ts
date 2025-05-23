import { slugify } from '@/lib/slugify';

it('removes accents from strings', () => {
  expect(slugify('Crème Brûlée')).toBe('creme-brulee');
});

it('treats underscores as spaces', () => {
  expect(slugify('AI_Tools')).toBe('ai-tools');
});

it('removes special characters', () => {
  expect(slugify('R&D Tools!')).toBe('rd-tools');
});

it('allows custom separators', () => {
  expect(slugify('Multi Word Title', '_')).toBe('multi_word_title');
});
