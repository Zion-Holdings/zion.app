import fs from 'fs';
import path from 'path';
import type { GetServerSideProps } from 'next';
import EnhancedLayout from '../components/layout/EnhancedLayout';

export const getServerSideProps: GetServerSideProps = async () => {
  const fp = path.join(process.cwd(), 'public', 'changelog', 'latest.md');
  let content = '# Weekly Changelog\n\nNo entries yet.';
  try { content = fs.readFileSync(fp, 'utf8'); } catch {}
  return { props: { content } };
};

export default function ChangelogPage({ content }: { content: string }) {
  return (
    <EnhancedLayout>
      <div className="prose dark:prose-invert max-w-none">
        <article>
          <div dangerouslySetInnerHTML={{ __html: content.replace(/^# /, '<h1>').replace('\n', '</h1>')
            .replace(/^## (.*)$/gm, '<h2>$1</h2>')
            .replace(/^\- (.*)$/gm, '<li>$1</li>')
            .replace(/\n\n/g, '<br/>') }} />
        </article>
      </div>
    </EnhancedLayout>
  );
}