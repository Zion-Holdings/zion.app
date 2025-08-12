import type { StoryPage } from './generateStorybookPdf';

export async function generateStorybookEpub(pages: StoryPage[]): Promise<Blob> {
  const content = [
    'The Day the Protocol Woke Up',
    '',
    ...pages.map((p, i) => `Page ${i + 1}\n${p.text}`),
  ].join('\n\n');
  return new Blob([content], { type: 'application/epub+zip' });
}
