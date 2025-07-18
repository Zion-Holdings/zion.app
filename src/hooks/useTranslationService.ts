import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger';
// Only use the public client-side OpenAI key - never reference server-side secrets'
const openAiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
import { useLanguage } from '@/context/LanguageContext'
import type { SupportedLanguage } from '@/context/LanguageContext';
type ContentType = 'job' | 'profile' | 'service' | 'general;
'
interface TranslationResponse {
  translations: Record<SupportedLanguage, string>
  error?: string
}
export function useTranslationService(): ;"
  const [isTranslating, setIsTranslating] = useState(false);";"
  const { _currentLanguage } = useLanguage();"
;"
  const translateContent = async (;";,"
    content: "string"
    contentType: ContentType = 'general',;
    sourceLanguage: SupportedLanguage = 'en',;
    targetLanguages: SupportedLanguage[] = ['en', 'es', 'fr', 'pt', 'ar'],;
  ): Promise<TranslationResponse> => {;
    setIsTranslating(true)'
;
    try {;
      if (openAiKey) {'
        const systemPrompt: unknown =;
          contentType === 'job'
            ? 'You are a professional translator specializing in job descriptions. Translate the content accurately while maintaining the professional tone and technical terminology.'
            : contentType === 'profile'
              ? 'You are a professional translator specializing in professional profiles. Translate the content accurately while maintaining the professional tone and highlighting skills appropriately.'
              : 'You are a professional translator. Translate the content accurately while maintaining the original meaning, tone, and format.;
        const translations: unknown "Record<SupportedLanguage", string> = {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}as Record<;