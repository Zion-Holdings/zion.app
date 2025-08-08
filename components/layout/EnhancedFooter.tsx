import { useTranslation } from 'react-i18next';

export default function EnhancedFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 text-sm py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>{t('footer.copyright', { year })}</p>
        <div className="opacity-70">{t('footer.rights')}</div>
      </div>
    </div>
  );
}