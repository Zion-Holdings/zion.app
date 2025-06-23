import { SEO } from "@/components/SEO";
import TermsOfService from "@/legal/TermsOfService";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO
        title={t('terms.title')}
        description={t('terms.description')}
        canonical="https://app.ziontechgroup.com/terms"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <TermsOfService />
        </div>
      </main>
    </>
  );
}
