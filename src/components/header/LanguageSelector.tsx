import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { fireEvent } from '@/lib/analytics';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  useLanguage,
  type SupportedLanguage,
  SUPPORTED_LANGUAGES
} from '@/context/LanguageContext';

export function LanguageSelector() {
  const { t } = useTranslation();
  const { currentLanguage, supportedLanguages, changeLanguage } = useLanguage();
  // Fallback in case the context fails to provide languages for any reason
  const availableLanguages =
    supportedLanguages && supportedLanguages.length > 0
      ? supportedLanguages
      : SUPPORTED_LANGUAGES;
  const [isOpen, setIsOpen] = useState(false);

  logInfo('LanguageSelector: Rendered with currentLanguage:', { data: currentLanguage });
  logInfo('LanguageSelector: Available languages:', { data: availableLanguages.map(l => l.code) });

  const currentFlag =
    availableLanguages.find((l) => l.code === currentLanguage)?.flag || '🌐';

  const handleLanguageChange = async (langCode: SupportedLanguage) => {
    logInfo('LanguageSelector: Language item clicked:', { data: langCode });
    try {
      await changeLanguage(langCode);
      setIsOpen(false);
      fireEvent('language_change', { language: langCode });
    } catch (error) {
      logErrorToProduction('LanguageSelector: Error changing language:', { data: error });
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    fireEvent('language_selector_toggle', { open });
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-accent hover:text-accent-foreground relative"
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
        className="bg-popover border border-border min-w-[140px]" // Use popover background and standard border
        sideOffset={5}
      >
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`cursor-pointer transition-colors ${
              currentLanguage === lang.code 
                ? 'bg-primary/20 text-primary' // Use primary color for selected
                : 'text-popover-foreground hover:bg-accent hover:text-accent-foreground' // Use popover text and accent for hover
            }`}
            onClick={() => handleLanguageChange(lang.code)}
            onSelect={() => handleLanguageChange(lang.code)}
          >
            <div className="flex items-center gap-2 w-full">
              <span className="text-lg flex-shrink-0">{lang.flag}</span>
              <span className="flex-1">{t(`language.${lang.code}`)}</span>
              {currentLanguage === lang.code && (
                <span className="text-primary text-xs">✓</span> // Use primary color for checkmark
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
