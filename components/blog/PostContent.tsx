import { sanitizeHtml } from '@/utils/sanitizeHtml';

function basicMarkdownToHtml(md: string): string {
  let html = md;
  html = html.replace(/^###\s+(.*)$/gm, '<h3 id="$1">$1</h3>');
  html = html.replace(/^##\s+(.*)$/gm, '<h2 id="$1">$1</h2>');
  html = html.replace(/^#\s+(.*)$/gm, '<h1 id="$1">$1</h1>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\n\n+/g, '</p><p>');
  html = `<p>${html}</p>`;
  return html;
}

export default function PostContent({ body }: { body: string }) {
  const isHtml = body.trim().startsWith('<');
  const html = sanitizeHtml(isHtml ? body : basicMarkdownToHtml(body));
  return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}