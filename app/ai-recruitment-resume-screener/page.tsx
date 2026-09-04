import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Recruitment Resume Screener | Zion Tech Group",
  description: "Zion Tech Group builds recruitment resume screener solutions for IT teams and enterprises.",
  openGraph: {
    title: "Recruitment Resume Screener | Zion Tech Group",
    description: "Zion Tech Group builds recruitment resume screener solutions for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-recruitment-resume-screener/",
    type: 'website',
  },
  alternates: { canonical: "/ai-recruitment-resume-screener/" },
};

export default function AiRecruitmentResumeScreenerPage() {
  return (
    <StandardPage
      title="Recruitment Resume Screener"
      subtitle="Zion Tech Group builds recruitment resume screener solutions for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Recruitment Resume Screener" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group builds recruitment resume screener solutions for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
