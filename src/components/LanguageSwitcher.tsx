import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  useLanguage,
  SupportedLanguage,
  SUPPORTED_LANGUAGES
} from '@/context/LanguageContext';
import { safeStorage } from '@/utils/safeStorage';
import { setCookie } from '@/utils/cookies';

export function LanguageSwitcher() {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const availableLanguages =
    supportedLanguages && supportedLanguages.length > 0
      ? supportedLanguages
      : SUPPORTED_LANGUAGES;
  const currentFlag =
    availableLanguages.find((l) => l.code === currentLanguage)?.flag || '🌐';
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number>(-1);
  const [announce, setAnnounce] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleOpen = () => setOpen((o) => !o);

  const selectLanguage = async (lang: SupportedLanguage) => {
    await changeLanguage(lang);
    setCookie('i18n_lang', lang);
    safeStorage.setItem('i18n_lang', lang);
    const langName = availableLanguages.find((l) => l.code === lang)?.name || lang;
    setAnnounce(t('language.language_changed', { language: langName }));
    setOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        listRef.current &&
        !listRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (open) {
      const idx = availableLanguages.findIndex((l) => l.code === currentLanguage);
      setHighlighted(idx >= 0 ? idx : 0);
    } else {
      setHighlighted(-1);
    }
  }, [open, currentLanguage, availableLanguages]);

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOpen();
    }
  };

  const handleListKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((h) => (h + 1) % availableLanguages.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => (h - 1 + availableLanguages.length) % availableLanguages.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setHighlighted(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setHighlighted(availableLanguages.length - 1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (highlighted >= 0 && highlighted < availableLanguages.length) {
        const selectedLanguage = availableLanguages[highlighted];
        if (selectedLanguage) {
          selectLanguage(selectedLanguage.code);
        }
      }
    }
  };

  return (
    <div className="relative inline-block">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className="text-white hover:bg-zion-purple/10"
        aria-label={t('general.select_language')}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggleOpen}
        onKeyDown={handleButtonKeyDown}
      >
        <span className="text-lg" aria-hidden="true">
          {currentFlag}
        </span>
        <span className="sr-only">{t('general.select_language')}</span>
      </Button>
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className="absolute right-0 mt-2 min-w-[8rem] rounded-md border border-zion-purple/20 bg-zion-blue-dark shadow-lg focus:outline-none"
          onKeyDown={handleListKeyDown}
        >
          {availableLanguages.map((lang, idx) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={currentLanguage === lang.code}
              className={`cursor-pointer px-3 py-1.5 ${
                idx === highlighted ? 'bg-zion-purple/20' : ''
              } ${
                currentLanguage === lang.code ? 'text-zion-cyan' : 'text-white hover:bg-zion-purple/10'
              }`}
              onMouseEnter={() => setHighlighted(idx)}
              onClick={() => selectLanguage(lang.code)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span>{t(`language.${lang.code}`)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div aria-live="polite" className="sr-only">
        {announce}
      </div>
    </div>
  );
}
