import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import {logErrorToProduction} from '@/utils/productionLogger';


// Only use the public client-side OpenAI key - never reference server-side secrets
const openAiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
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
    targetLanguages: SupportedLanguage[] = ['en', 'es', 'fr', 'pt', 'ar']
  ): Promise<TranslationResponse> => {
    setIsTranslating(true);

    try {
      if (openAiKey) {
        const systemPrompt =
          contentType === 'job'
            ? 'You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.'
            : contentType === 'profile'
              ? 'You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.'
              : 'You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.';

        const translations: Record<SupportedLanguage, string> = {} as Record<SupportedLanguage, string>;

        for (const targetLang of targetLanguages) {
          if (targetLang === sourceLanguage) {
            translations[targetLang] = content;
            continue;
          }

          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${openAiKey}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              model: 'gpt-4o',
              messages: [
                { role: 'system', content: systemPrompt },
                {
                  role: 'user',
                  content: `Translate the following ${contentType || 'content'} from ${sourceLanguage} to ${targetLang}:\n\n${content}\n\nOnly provide the translated text, no explanations or additional comments.`
                }
              ],
              temperature: 0.3
            })
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`OpenAI API error: ${JSON.stringify(errorData)}`);
          }

          const data = await response.json();
          translations[targetLang] = data.choices[0].message.content.trim();
        }

        setIsTranslating(false);
        return { translations };
      }

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
        logErrorToProduction('Translation error:', { data: error });
        const initialTranslations: Record<SupportedLanguage, string> = {
          en: content,
          es: '',
          fr: '',
          pt: '',
          ar: ''
        };
        initialTranslations[sourceLanguage] = content;
        return { translations: initialTranslations, error: error.message };
      }
      
      // Handle mock response with fallback
      if (!data || !(data as any)?.translations) {
        const initialTranslations: Record<SupportedLanguage, string> = {
          en: content,
          es: '',
          fr: '',
          pt: '',
          ar: ''
        };
        initialTranslations[sourceLanguage] = content;
        return { translations: initialTranslations };
      }
      
      return { translations: (data as any).translations };
    } catch (err) {
      setIsTranslating(false);
      logErrorToProduction('Translation service error:', { data: err });
      
      const initialTranslations: Record<SupportedLanguage, string> = {
        en: content,
        es: '',
        fr: '',
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
