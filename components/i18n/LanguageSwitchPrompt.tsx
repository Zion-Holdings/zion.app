import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n, { supportedLocales, isRtl } from '../../utils/i18n';

const localeLabelKey: Record<string, string> = {
  en: 'lang.english',
  pt: 'lang.portuguese',
  es: 'lang.spanish',
  ar: 'lang.arabic',
};

export default function LanguageSwitchPrompt() {
  const { t } = useTranslation();
  const [suggested, setSuggested] = useState<string | null>(null);

  useEffect(() => {
    const key = 'langPromptShown';
    const preferred = localStorage.getItem('preferredLanguage');
    if (preferred) return; // user has chosen
    if (localStorage.getItem(key)) return; // already prompted

    const detected = i18n.language || i18n.resolvedLanguage || navigator.language || 'en';
    const normalized = detected.split('-')[0];
    const suggestion = supportedLocales.includes(normalized as any) && normalized !== 'en' ? normalized : null;
    if (suggestion) setSuggested(suggestion);
  }, []);

  if (!suggested) return null;

  const accept = async () => {
    await i18n.changeLanguage(suggested!);
    localStorage.setItem('preferredLanguage', suggested!);
    localStorage.setItem('langPromptShown', '1');
    document.documentElement.setAttribute('dir', isRtl(suggested!) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', suggested!);
    setSuggested(null);
  };

  const decline = () => {
    localStorage.setItem('langPromptShown', '1');
    setSuggested(null);
  };

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 text-sm">
        <div>
          {t('lang.switch_prompt', { language: t(localeLabelKey[suggested]) })}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded bg-amber-600 text-white" onClick={accept}>{t('lang.switch_accept')}</button>
          <button className="px-3 py-1 rounded border border-amber-300 dark:border-amber-700" onClick={decline}>{t('lang.switch_decline')}</button>
        </div>
      </div>
    </div>
  );
}