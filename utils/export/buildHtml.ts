import type { BookProject } from '../book/bookTypes';

export function buildPrintableHtml(project: BookProject): string {
  const { meta, chapters, visuals } = project;
  const quotesHtml = visuals.quoteCallouts
    .map((q) => `<blockquote class="quote"><p>${escapeHtml(q.text)}</p>${q.attribution ? `<cite>${escapeHtml(q.attribution)}</cite>` : ''}</blockquote>`)
    .join('\n');

  const chapterHtml = chapters
    .map(
      (c) => `
      <section class="chapter">
        <h2>${escapeHtml(c.title)}</h2>
        <div class="content">${paragraphize(c.content)}</div>
      </section>
    `,
    )
    .join('\n\n');

  const visualsHtml = [
    ...visuals.timelineImages,
    ...visuals.daoVoteCharts,
    ...visuals.uiScreens,
  ]
    .map((src) => `<figure class="visual"><img src="${src}" /></figure>`) // base64 ok
    .join('\n');

  const barcode = meta.isbn ? `<img class="barcode" src="/api/barcode/isbn?code=${encodeURIComponent(meta.isbn)}" />` : '';

  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>${escapeHtml(meta.title)}</title>
<style>
  @page { margin: 1in; }
  body { font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; color: #111; }
  .cover { break-after: page; display: flex; flex-direction: column; justify-content: center; height: 90vh; }
  .cover h1 { font-size: 40px; margin: 0; }
  .cover h3 { font-size: 20px; margin: 8px 0 0 0; color: #444; }
  .cover .by { margin-top: 24px; color: #666; }
  .barcode { margin-top: 24px; height: 64px; }
  .quote { border-left: 4px solid #222; padding-left: 12px; margin: 16px 0; color: #333; }
  .quote cite { display:block; margin-top:6px; color:#666; font-style: normal; }
  .chapter { break-before: page; }
  .chapter h2 { font-size: 28px; margin: 0 0 12px 0; }
  .content p { line-height: 1.6; margin: 0 0 12px 0; white-space: pre-wrap; }
  .visual { break-inside: avoid; margin: 12px 0; }
  .visual img { max-width: 100%; height: auto; }
</style>
</head>
<body>
  <section class="cover">
    <div>${escapeHtml(meta.publisher || '')}</div>
    <h1>${escapeHtml(meta.title)}</h1>
    <h3>${escapeHtml(meta.subtitle || '')}</h3>
    <div class="by">By ${escapeHtml(meta.author)}</div>
    ${barcode}
  </section>
  ${quotesHtml}
  ${chapterHtml}
  ${visualsHtml}
</body>
</html>`;
}

function paragraphize(text: string): string {
  if (!text) return '';
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}