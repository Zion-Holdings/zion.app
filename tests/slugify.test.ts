import { slugify } from '@/lib/slugify';
import { unslugify } from '@/lib/slugify';

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

it('converts slug back to title', () => {
  expect(unslugify('multi-word-title')).toBe('Multi Word Title');
});

it('handles custom separator when unslugifying', () => {
  expect(unslugify('multi_word_title', '_')).toBe('Multi Word Title');
});

it('handles separators that include regex characters', () => {
  expect(unslugify('multi.word.title', '.')).toBe('Multi Word Title');
});

it('collapses multiple spaces and trims separators', () => {
  expect(slugify('  Multiple   Words  ')).toBe('multiple-words');
});
