import fs from 'fs';
import path from 'path';

type Props = {
  content: string | null;
  generatedAt: string | null;
};

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">Changelog</h1>
      {generatedAt && (
        <p className="mt-2 text-sm text-gray-600">Generated: {generatedAt}</p>
      )}
      {content ? (
        <pre className="mt-6 whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-800 shadow-sm">
{content}
        </pre>
      ) : (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
          No changelog generated yet.
        </div>
      )}
    </main>
  );
}

export async function getStaticProps() {
  try {
    const file = path.join(process.cwd(), 'CHANGELOG.md');
    const content = fs.readFileSync(file, 'utf8');
    return { props: { content, generatedAt: new Date().toISOString() }, revalidate: 300 };
  } catch {
    return { props: { content: null, generatedAt: null }, revalidate: 300 };
  }
}