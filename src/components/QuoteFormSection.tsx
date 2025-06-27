
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function QuoteFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="quote-form" className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading>{t('quote_form.title')}</GradientHeading>
          <p className="mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto">
            {t('quote_form.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-zion-blue-light rounded-lg border border-zion-purple/20 p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t('quote_form.sent_title')}</h3>
              <p className="text-zion-slate-light mb-6">
                {t('quote_form.sent_desc')}
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
              >
                {t('quote_form.submit_another')}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-1">
                    {t('quote_form.labels.name')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zion-slate-light mb-1">
                    {t('quote_form.labels.company')}
                  </label>
                  <Input
                    id="company"
                    type="text"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-1">
                    {t('quote_form.labels.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zion-slate-light mb-1">
                    {t('quote_form.labels.phone')}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="interest" className="block text-sm font-medium text-zion-slate-light mb-1">
                  {t('quote_form.labels.interests')}
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mt-2">
                  {[
                    t('quote_form.labels.interest_ai'),
                    t('quote_form.labels.interest_equipment'),
                    t('quote_form.labels.interest_servers'),
                    t('quote_form.labels.interest_storage'),
                    t('quote_form.labels.interest_networking'),
                    t('quote_form.labels.interest_support'),
                    t('quote_form.labels.interest_recycling')
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`interest-${index}`}
                        type="checkbox"
                        className="h-4 w-4 bg-zion-blue-dark border-zion-purple text-zion-purple focus:ring-zion-purple/50"
                      />
                      <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-zion-slate-light">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-1">
                  {t('quote_form.labels.additional_details')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-zion-blue-dark border border-zion-blue-light focus:border-zion-purple focus:ring-1 focus:ring-zion-purple text-white"
                ></textarea>
              </div>
              
              <div className="mt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3"
                >
                  {isSubmitting ? t('quote_form.sending') : t('quote_form.submit')}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
