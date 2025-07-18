

  AlertDialogContent,;''';
  AlertDialogDescription,''';
  AlertDialogHeader,;''';
  AlertDialogTitle,;''';
} from '';

  SupportedLanguage,;''';
  LanguageContextType,;''';
} from '../context/LanguageContext''';
  AlertDialogContent,'';
  AlertDialogDescription,'';
  AlertDialogHeader,'';
  AlertDialogTitle,'';
} from '../components/ui/alert-dialog'';

  const [detectedLanguage, setDetectedLanguage] =;''';
    useState<SupportedLanguage | null>(null)''';
  useEffect(() => {;''';
    // Check if this is first visit;''';
    const hasVisited: unknown = safeStorage.getItem('zion_has_visited')''';
;''';
    // Mark as visited;''';
    safeStorage.setItem('zion_has_visited', 'true')''';
    // Get browser language;''';
            {t('language.switch_to_detected'';
            {t('language.switch_to_detected''