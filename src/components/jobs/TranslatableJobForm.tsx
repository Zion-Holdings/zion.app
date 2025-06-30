
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Globe } from 'lucide-react';


import { useTranslation } from "react-i18next";
import { useTranslationService } from "@/hooks/useTranslationService";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";
import {logErrorToProduction} from '@/utils/productionLogger';


interface TranslatableJobFormProps {
  onSubmit: (formData: any) => void;
  isSubmitting?: boolean;
}

export function TranslatableJobForm({ onSubmit, isSubmitting = false }: TranslatableJobFormProps) {
  const { t } = useTranslation();
  const { translateContent, isTranslating } = useTranslationService();
  const { supportedLanguages, currentLanguage } = useLanguage();
  
  const [activeTab, setActiveTab] = useState<SupportedLanguage>(currentLanguage);
  
  // Form fields with translations
  const [title, setTitle] = useState<Record<SupportedLanguage, string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: "",
  });
  
  const [description, setDescription] = useState<Record<SupportedLanguage, string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: "",
  });
  
  const [requirements, setRequirements] = useState<Record<SupportedLanguage, string>>({
    en: "",
    es: "",
    fr: "",
    pt: "",
    ar: "",
  });
  
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  
  // Handle text changes
  const handleTitleChange = (value: string) => {
    setTitle({ ...title, [activeTab]: value });
  };
  
  const handleDescriptionChange = (value: string) => {
    setDescription({ ...description, [activeTab]: value });
  };
  
  const handleRequirementsChange = (value: string) => {
    setRequirements({ ...requirements, [activeTab]: value });
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Complete any missing translations with auto-translation
    await ensureAllTranslations();
    
    onSubmit({
      title,
      description,
      requirements,
      budget,
      deadline,
    });
  };
  
  // Auto translate content when language tab changes
  const handleTabChange = async (tab: string) => {
    const selectedLanguage = tab as SupportedLanguage;
    if (selectedLanguage !== activeTab) {
      setActiveTab(selectedLanguage);
    }
  };
  
  // Auto translate function
  const autoTranslate = async (field: 'title' | 'description' | 'requirements') => {
    let sourceLanguage: SupportedLanguage = 'en';
    let content = '';
    
    // Find first non-empty content to translate
    for (const lang of supportedLanguages.map(l => l.code)) {
      if (field === 'title' && title[lang]) {
        content = title[lang];
        sourceLanguage = lang;
        break;
      } else if (field === 'description' && description[lang]) {
        content = description[lang];
        sourceLanguage = lang;
        break;
      } else if (field === 'requirements' && requirements[lang]) {
        content = requirements[lang];
        sourceLanguage = lang;
        break;
      }
    }
    
    if (!content) {
      toast({
        title: t('translation.no_content'),
        description: t('translation.add_content_first'),
        variant: "destructive",
      });
      return;
    }
    
    try {
      const { translations, error } = await translateContent(content, 'job', sourceLanguage);
      
      if (error) {
        toast({
          title: t('translation.translation_failed'),
          description: error,
          variant: "destructive",
        });
        return;
      }
      
      if (field === 'title') {
        setTitle(translations);
      } else if (field === 'description') {
        setDescription(translations);
      } else if (field === 'requirements') {
        setRequirements(translations);
      }
      
      toast({
        title: t('translation.translation_success'),
        description: t('translation.content_translated'),
      });
    } catch (error) {
      logErrorToProduction('Error translating ${field}:', { data: error });
      toast({
        title: t('translation.translation_failed'),
        description: error instanceof Error ? error.message : t('translation.unknown_error'),
        variant: "destructive",
      });
    }
  };
  
  // Ensure all translations are available
  const ensureAllTranslations = async () => {
    const promises = [];
    
    if (!title.en && !title.es && !title.fr && !title.pt && !title.ar) return;
    if (!description.en && !description.es && !description.fr && !description.pt && !description.ar) return;
    
    // Title translations
    if (Object.values(title).some(val => val) && Object.values(title).some(val => !val)) {
      promises.push(autoTranslate('title'));
    }
    
    // Description translations
    if (Object.values(description).some(val => val) && Object.values(description).some(val => !val)) {
      promises.push(autoTranslate('description'));
    }
    
    // Requirements translations
    if (Object.values(requirements).some(val => val) && Object.values(requirements).some(val => !val)) {
      promises.push(autoTranslate('requirements'));
    }
    
    if (promises.length) {
      await Promise.all(promises);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">{t('jobs.post_job_title')}</h1>
        <p className="text-zion-slate-light mb-6">
          {t('jobs.post_job_description')}
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="title" className="text-lg font-medium">
              {t('jobs.job_title')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('title')}
              disabled={isTranslating || (!title.en && !title.es && !title.fr && !title.pt && !title.ar)}
              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.auto_translate')}
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <div className="space-y-1">
                  <Input
                    id={`title-${lang.code}`}
                    value={title[lang.code] || ''}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder={t('jobs.title_placeholder')}
                    className="w-full"
                    dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="description" className="text-lg font-medium">
              {t('jobs.job_description')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('description')}
              disabled={isTranslating || (!description.en && !description.es && !description.fr && !description.pt && !description.ar)}
              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.auto_translate')}
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea
                  id={`description-${lang.code}`}
                  value={description[lang.code] || ''}
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  placeholder={t('jobs.description_placeholder')}
                  className="min-h-32 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="requirements" className="text-lg font-medium">
              {t('jobs.skills_required')}
            </label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => autoTranslate('requirements')}
              disabled={isTranslating || (!requirements.en && !requirements.es && !requirements.fr && !requirements.pt && !requirements.ar)}
              className="flex items-center gap-1"
            >
              {isTranslating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Globe className="h-4 w-4" />
              )}
              {t('translation.auto_translate')}
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full">
              {supportedLanguages.map((lang) => (
                <TabsTrigger key={lang.code} value={lang.code} className="flex-1">
                  <span className="mr-1">{lang.flag}</span> {lang.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {supportedLanguages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-2">
                <Textarea
                  id={`requirements-${lang.code}`}
                  value={requirements[lang.code] || ''}
                  onChange={(e) => handleRequirementsChange(e.target.value)}
                  placeholder={t('jobs.requirements_placeholder')}
                  className="min-h-24 w-full"
                  dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="budget" className="text-lg font-medium">
              {t('jobs.budget')}
            </label>
            <Input
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="$1000 - $2000"
              className="w-full"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="deadline" className="text-lg font-medium">
              {t('jobs.deadline')}
            </label>
            <Input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan"
          disabled={isSubmitting || isTranslating}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('jobs.submitting')}
            </>
          ) : (
            t('jobs.post_job_button')
          )}
        </Button>
      </div>
    </form>
  );
}
