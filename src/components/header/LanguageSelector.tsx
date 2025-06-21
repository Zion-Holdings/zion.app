
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext';

export function LanguageSelector() {
  const { t } = useTranslation();
  const { currentLanguage, supportedLanguages, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentFlag =
    supportedLanguages.find((l) => l.code === currentLanguage)?.flag || '🌐';

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-zion-purple/10"
          aria-label={t('general.select_language')}
          aria-expanded={isOpen}
          tabIndex={0}
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
            onClick={() => changeLanguage(lang.code)}
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
