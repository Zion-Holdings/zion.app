import React, { useState } from "react";
import Image from "next/image";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader2 } from 'lucide-react';

import { useTranslation } from "react-i18next";
import {logErrorToProduction} from '@/utils/productionLogger';

export function ITServiceRequestHero() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !location) {
      toast({
        title: "Missing Information",
        description: "Name, email and location are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await axios.post("/api/onsite-request", {
        name,
        email,
        phone,
        company,
        location,
        details,
      });

      if (res.status === 200) {
        toast({
          title: "Request received",
          description: "We've received your request. Our team will reach out shortly.",
        });
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setLocation("");
        setDetails("");
      }
    } catch (err: any) {
      logErrorToProduction(err);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient(#0f172a,_#020617)]"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:h-full md:flex md:flex-col md:items-center md:justify-center">
          <GradientHeading className="mb-6 text-4xl md:text-5xl text-center">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center">
            Worldwide coverage and rapid dispatch of certified technicians.
          </p>
        </div>
        <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/logos/zion-logo.png"
              alt="Zion logo"
              width={200}
              height={200}
              className="w-full h-auto md:w-40"
              priority
              quality={60}
            />
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('onsite_form.name_placeholder', 'Full name')}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.name_helper', 'Enter the main contact for this request.')}</p>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('onsite_form.email_placeholder', 'Work email')}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.email_helper', "We'll confirm your request here.")}</p>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('onsite_form.phone_placeholder', 'Phone number (optional)')}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.phone_helper', 'Include a direct line for urgent updates.')}</p>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={t('onsite_form.company_placeholder', 'Company name')}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.company_helper', 'Who do you represent?')}</p>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={t('onsite_form.location_placeholder', 'Service address or city')}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helper', 'Where do you need on-site support?')}</p>
              <Textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t('onsite_form.details_placeholder', 'Briefly describe the issue or equipment')}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.details_helper', 'Share any important context for our technicians.')}</p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Request Service
              </Button>
            </form>
          </div>
          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsite_form.privacy_notice', 'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
          </p>
        </div>
      </div>
    </section>
  );
}
