import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('privacy.title')}
        description={t('privacy.description')}
        canonical="https://app.ziontechgroup.com/privacy"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>{t('privacy.title')}</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t('privacy.subtitle')}
            </p>
          </div>
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              {t('privacy.data_collection')}
            </p>
            <p>
              {t('privacy.data_usage')}
            </p>
            <p>
              {t('privacy.contact_info')}
              {" "}
              <a
                href="mailto:support@ziontechgroup.com"
                className="text-zion-cyan hover:underline"
              >
                {t('privacy.support_email')}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
