<<<<<<< HEAD
import { useState, useEffect } from 'react';;
import { safeStorage } from '@/utils/safeStorage;;
import { useTranslation } from 'react-i18next;
=======
import { useState, useEffect } from 'react;
import { safeStorage } from '@/utils/safeStorage'
import { useTranslation } from 'react-i18next'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
import {;
  AlertDialog,;
  AlertDialogAction,;
  AlertDialogCancel,;
<<<<<<< HEAD
  AlertDialogContent,;''
  AlertDialogDescription,''
  AlertDialogFooter,
  AlertDialogHeader,;''
  AlertDialogTitle,;''
} from '../components/ui/alert-dialog;;
import { useLanguage } from '../context/LanguageContext;
import type {;
  SupportedLanguage,;''
  LanguageContextType,;''
} from '../context/LanguageContext''

export function LanguageDetectionPopup(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
=======
  AlertDialogContent,'
  AlertDialogDescription,'
  AlertDialogFooter,
  AlertDialogHeader,'
  AlertDialogTitle,'
} from '../components/ui/alert-dialog'
import { useLanguage } from '../context/LanguageContext'
import type {;
  SupportedLanguage,'
  LanguageContextType,'
} from '../context/LanguageContext'

export function LanguageDetectionPopup(): ;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { changeLanguage, currentLanguage, supportedLanguages } = ;
    useLanguage() as LanguageContextType;
<<<<<<< HEAD
  const [detectedLanguage, setDetectedLanguage] =;''
    useState<SupportedLanguage | null>(null)''

  useEffect(() => {;''
    // Check if this is first visit;''
    const hasVisited: unknown = safeStorage.getItem('zion_has_visited')''
    if (hasVisited) return;
;''
    // Mark as visited;''
    safeStorage.setItem('zion_has_visited', 'true')''

    // Get browser language;''
    const browserLang: unknown "unknown = navigator.language.substring(0, 2) as SupportedLanguage"
=======
  const [detectedLanguage, setDetectedLanguage] ='
    useState<SupportedLanguage | null>(null)'

  useEffect(() => {'
    // Check if this is first visit'
    const hasVisited = safeStorage.getItem('zion_has_visited')'
    if (hasVisited) return;
'
    // Mark as visited'
    safeStorage.setItem('zion_has_visited', 'true')'

    // Get browser language'
    const browserLang: navigator.language.substring(0, 2) as SupportedLanguage
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae

    // Check if browser language is supported and different from current language;
    const isSupported = supportedLanguages.some(;
      (lang) => lang.code === browserLang,;
    );
    if (isSupported && browserLang !== currentLanguage) {;
      setDetectedLanguage(browserLang);
      setOpen(true);
    };
  }, [currentLanguage, supportedLanguages]);

  if (!detectedLanguage) return null;

  const languageName: unknown =;
    supportedLanguages.find((lang) => lang.code === detectedLanguage)?.name ||;
    detectedLanguage;

  const handleAccept = async () => {;
    await changeLanguage(detectedLanguage);
    setOpen(false)""
  };""
;";""
  return (;";""
    <AlertDialog open={open} onOpenChange={setOpen}>
<<<<<<< HEAD
      <AlertDialogContent className=bg-zion-blue-dark text-white border border-zion-purple/20">";;""
        <AlertDialogHeader>";;"""
          <AlertDialogTitle className=text-white>";";""
            {t('language.switch_to_detected', { language: "languageName })};"";"
          </AlertDialogTitle>;"";"
          <AlertDialogDescription className="text-zion-slate-light">;";""
            {`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag || ''} ${languageName}`}`'
          </AlertDialogDescription>;
        </AlertDialogHeader>;''
        <AlertDialogFooter>;''
          <AlertDialogCancel className=bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">";;"""
            {t('general.no')}''
          </AlertDialogCancel>;
          <AlertDialogAction;''
            onClick={handleAccept};''
            className=bg-zion-purple text-white hover:bg-zion-purple-dark";";"
          >";";""
            {t('general.yes')}''
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>;''
    </AlertDialog>''
  );
};

};''

}''
}''
=======
      <AlertDialogContent className=bg-zion-blue-dark text-white border border-zion-purple/20">"
        <AlertDialogHeader>";""
          <AlertDialogTitle className=text-white>"
            {t('language.switch_to_detected', { language: "languageName })};"";
          </AlertDialogTitle>;"";
          <AlertDialogDescription className="text-zion-slate-light">;"`
            {`${supportedLanguages.find((lang) => lang.code === detectedLanguage)?.flag || ''} ${languageName}`};
          </AlertDialogDescription>;
        </AlertDialogHeader>'
        <AlertDialogFooter>'
          <AlertDialogCancel className=bg-transparent text-white border border-zion-purple/20 hover:bg-zion-purple/10">""
            {t('general.no')}'
          </AlertDialogCancel>;
          <AlertDialogAction'
            onClick={handleAccept}'
            className=bg-zion-purple text-white hover:bg-zion-purple-dark";";
          >"
            {t('general.yes')}'
          </AlertDialogAction>;
        </AlertDialogFooter>;
      </AlertDialogContent>'
    </AlertDialog>'
  );
};

}'

}'`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`