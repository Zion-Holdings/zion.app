import { useRouter } from 'next/router';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useToast } from '../../components/ui/NotificationSystem';
import useResponsive from '../../hooks/useResponsive';
import { useEffect, useState } from 'react';

export default function TalentProfilePage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const { isMobile } = useResponsive();
  const { notify } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const onRequestQuote = () => {
    notify('Quote sent! Check your dashboard to track responses.', 'success');
  };

  return (
    <div className="relative">
      {loading ? (
        <EnhancedLoading lines={5} />
      ) : (
        <div className="space-y-4">
          <EnhancedCard>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold">{slug || 'Talent Name'}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Senior AI Engineer • Computer Vision • Generative AI</p>
              </div>
              {!isMobile && (
                <EnhancedButton onClick={onRequestQuote} variant="primary">Request Quote</EnhancedButton>
              )}
            </div>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className="font-semibold mb-2">About</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">Experienced in building AI-driven marketplaces, LLM integrations, and ML pipelines.</p>
          </EnhancedCard>

          <EnhancedCard>
            <h2 className="font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Python','TensorFlow','PyTorch','Next.js','TypeScript','Supabase'].map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{s}</span>
              ))}
            </div>
          </EnhancedCard>
        </div>
      )}

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 md:right-8 z-30">
        <EnhancedButton onClick={onRequestQuote} className="shadow-lg" variant="primary">Request Quote</EnhancedButton>
      </div>
    </div>
  );
}