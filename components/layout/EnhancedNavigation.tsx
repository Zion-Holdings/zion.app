import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

export default function EnhancedNavigation() {
  const { t } = useTranslation();
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/">
          <a className="font-semibold">{t('brand')}</a>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/about"><a>{t('nav.about')}</a></Link>
          <Link href="/blog"><a>{t('nav.blog')}</a></Link>
          <Link href="/contact"><a>{t('nav.contact')}</a></Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}