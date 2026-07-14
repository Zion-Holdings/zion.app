import Link from 'next/link';
export const metadata = {
  title: 'Favicon Generator | Zion Tech Group',
  description: 'Free online favicon generator tool from Zion Tech Group.',
};
/* favicon-generator placeholder */
export default function FaviconGeneratorPlaceholder() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold gradient-text mb-3">Favicon Generator</h1>
        <p className="mt-4 text-lg text-slate-300">This tool is being updated. For now, you can use any online favicon generator and place the result in your site root as <code className="text-purple-300">/icon.svg</code>.</p>
      </div>
    </div>
  );
}
