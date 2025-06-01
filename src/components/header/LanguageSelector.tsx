
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext';
import { safeStorage } from '@/utils/safeStorage';

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const { currentLanguage, supportedLanguages } = useLanguage();

  const changeLang = async (lang: SupportedLanguage) => {
    if (lang === currentLanguage) return;
    await i18n.changeLanguage(lang);
    safeStorage.setItem('i18n_lang', lang);
  };

  const currentFlag =
    supportedLanguages.find((l) => l.code === currentLanguage)?.flag || '🌐';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-zion-purple/10"
          aria-label={t('general.select_language')}
        >
          <span className="text-lg" aria-hidden="true">
            {currentFlag}
          </span>
          <span className="sr-only">{t('general.select_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zion-blue-dark border border-zion-purple/20">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`cursor-pointer ${
              currentLanguage === lang.code ? 'bg-zion-purple/20 text-zion-cyan' : 'text-white hover:bg-zion-purple/10'
            }`}
            onClick={() => changeLang(lang.code)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span>{t(`language.${lang.code}`)}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
