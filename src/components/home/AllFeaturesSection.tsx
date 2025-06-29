import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface AllFeaturesSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const features = [
  { key: 'ai_talent_matching', link: '/match' },
  { key: 'talent_directory', link: '/talents' },
  { key: 'services_marketplace', link: '/services' },
  { key: 'equipment_catalog', link: '/equipment' },
  { key: 'community_hub', link: '/community' },
  { key: 'mobile_app', link: '/mobile-launch' },
  { key: 'enterprise_solutions', link: '/enterprise' },
  { key: 'developer_tools', link: '/developers' },
  { key: 'learning_resources', link: '/blog' },
  { key: 'project_management', link: '/project-milestones' },
  { key: 'zion_hire_ai', link: '/zion-hire-ai' },
  { key: 'admin_dashboard', link: '/features/admin-dashboard' },
  { key: 'talent_marketplace', link: '/features/talent-marketplace' },
  { key: 'instant_messaging', link: '/features/instant-messaging' },
  { key: 'search', link: '/features/search' },
  { key: 'ecommerce_platform', link: '/features/e-commerce' },
  { key: 'integrations', link: '/features/integrations' },
  { key: 'internationalization', link: '/features/internationalization' },
  { key: 'ai_content_generation', link: '/features/ai-content-generation' },
];

export function AllFeaturesSection({ className, style }: AllFeaturesSectionProps) {
  const { t } = useTranslation();
  return (
    <section className={cn("py-16 bg-zion-blue-dark", className)} style={style}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
          {t('home.all_features_title', 'Explore All Features')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <Link
              key={idx}
              href={feature.link}
              className="block bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-4 text-center transition-all"
            >
              {t(`features.${feature.key}`)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllFeaturesSection;
