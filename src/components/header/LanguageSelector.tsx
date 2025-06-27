import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
import { logInfo, logError } from '@/utils/productionLogger';

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, type SupportedLanguage } from '@/context/LanguageContext';

export function LanguageSelector() {
  const { t } = useTranslation();
  const { currentLanguage, supportedLanguages, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  logInfo('LanguageSelector: Rendered with currentLanguage:', { data: currentLanguage });
  logInfo('LanguageSelector: Available languages:', { data: supportedLanguages.map(l => l.code }));

  const currentFlag =
    supportedLanguages.find((l) => l.code === currentLanguage)?.flag || '🌐';

  const handleLanguageChange = async (langCode: SupportedLanguage) => {
    logInfo('LanguageSelector: Language item clicked:', { data: langCode });
    try {
      await changeLanguage(langCode);
      setIsOpen(false);
    } catch (error) {
      logError('LanguageSelector: Error changing language:', { data: error });
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-zion-purple/10 relative"
          aria-label={t('general.select_language')}
          aria-expanded={isOpen}
          tabIndex={0}
          data-testid="language-selector"
        >
          <span className="text-lg" aria-hidden="true">
            {currentFlag}
          </span>
          <span className="sr-only">{t('general.select_language')}</span>
          {/* Visual indicator that this is interactive */}
          <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-current opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-zion-blue-dark border border-zion-purple/20 min-w-[140px]"
        sideOffset={5}
      >
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`cursor-pointer transition-colors ${
              currentLanguage === lang.code 
                ? 'bg-zion-purple/20 text-zion-cyan' 
                : 'text-white hover:bg-zion-purple/10'
            }`}
            onClick={() => handleLanguageChange(lang.code)}
            onSelect={() => handleLanguageChange(lang.code)}
          >
            <div className="flex items-center gap-2 w-full">
              <span className="text-lg flex-shrink-0">{lang.flag}</span>
              <span className="flex-1">{t(`language.${lang.code}`)}</span>
              {currentLanguage === lang.code && (
                <span className="text-zion-cyan text-xs">✓</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
