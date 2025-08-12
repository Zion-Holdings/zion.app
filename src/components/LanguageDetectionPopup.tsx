import { useState, useEffect } from 'react';
import { safeStorage } from '@/utils/safeStorage';
import { useTranslation } from 'react-i18next';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import { useLanguage, SupportedLanguage, LanguageContextType } from '../context/LanguageContext';

export function LanguageDetectionPopup() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } = useLanguage() as LanguageContextType;
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage | null>(null);

  useEffect(() => {
    // Check if this is first visit
    const hasVisited = safeStorage.getItem('zion_has_visited');
    if (hasVisited) return;

    // Mark as visited
    safeStorage.setItem('zion_has_visited', 'true');
    
    // Get browser language
    const browserLang = navigator.language.substring(0, 2) as SupportedLanguage;
    
    // Check if browser language is supported and different from current language
    const isSupported = supportedLanguages.some(lang => lang.code === browserLang);
    if (isSupported && browserLang !== currentLanguage) {
      setDetectedLanguage(browserLang);
      setOpen(true);
    }
  }, []);

  if (!detectedLanguage) return null;

  const languageName = supportedLanguages.find(lang => lang.code === detectedLanguage)?.name || detectedLanguage;

  const handleAccept = async () => {
    await changeLanguage(detectedLanguage);
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-zion-blue-dark text-white border border-zion-purple/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            {t('language.switch_to_detected', { language: languageName })}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-zion-slate-light">
            {`${supportedLanguages.find(lang => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">
            {t('general.no')}
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleAccept}
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
          >
            {t('general.yes')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}