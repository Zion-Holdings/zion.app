import dynamic from 'next/dynamic';

const TranslationPreview = dynamic(() => import('../../components/admin/TranslationPreview'), { ssr: false });

export default function TranslationsAdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TranslationPreview />
    </div>
  );
}