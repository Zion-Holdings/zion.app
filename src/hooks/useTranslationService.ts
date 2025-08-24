
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage, SupportedLanguage } from '@/context/LanguageContext';

type ContentType = 'job' | 'profile' | 'service' | 'general';

interface TranslationResponse {
  translations: Record<SupportedLanguage, string>;
  error?: string;
}

export function useTranslationService() {
  const [isTranslating, setIsTranslating] = useState(false);
  const { currentLanguage } = useLanguage();
  
  const translateContent = async (
    content: string,
    contentType: ContentType = 'general',
    sourceLanguage: SupportedLanguage = 'en',
    targetLanguages: SupportedLanguage[] = ['en', 'es', 'pt', 'ar']
  ): Promise<TranslationResponse> => {
    setIsTranslating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('translate-content', {
        body: {
          content,
          sourceLanguage,
          targetLanguages,
          contentType
        }
      });
      
      setIsTranslating(false);
      
      if (error) {
        console.error('Translation error:', error);
        const initialTranslations: Record<SupportedLanguage, string> = {
          en: content,
          es: '',
          pt: '',
          ar: ''
        };
        initialTranslations[sourceLanguage] = content;
        return { translations: initialTranslations, error: error.message };
      }
      
      return { translations: data.translations };
    } catch (err) {
      setIsTranslating(false);
      console.error('Translation service error:', err);
      
      const initialTranslations: Record<SupportedLanguage, string> = {
        en: content,
        es: '',
        pt: '',
        ar: ''
      };
      initialTranslations[sourceLanguage] = content;
      
      return { 
        translations: initialTranslations,
        error: err instanceof Error ? err.message : 'Unknown translation error' 
      };
    }
  };
  
  const getTranslation = (translations: Record<SupportedLanguage, string>, fallback: string = '') => {
    if (!translations) return fallback;
    return translations[currentLanguage] || translations.en || fallback;
  };
  
  return {
    translateContent,
    isTranslating,
    getTranslation
  };
}
