import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function TermsOfService() {
  const { t } = useTranslation();
  
  // Create localized terms sections
  const getTermsSections = () => [
    {
      id: "introduction",
      title: t('terms.sections.introduction.title'),
      content: `<p>${t('terms.sections.introduction.content')}</p>`
    },
    {
      id: "accounts",
      title: t('terms.sections.accounts.title'),
      content: `<p>${t('terms.sections.accounts.content')}</p>`
    },
    {
      id: "payments",
      title: t('terms.sections.payments.title'),
      content: `<p>${t('terms.sections.payments.content')}</p>`
    },
    {
      id: "prohibited",
      title: t('terms.sections.prohibited.title'),
      content: `<p>${t('terms.sections.prohibited.content')}</p>`
    },
    {
      id: "termination",
      title: t('terms.sections.termination.title'),
      content: `<p>${t('terms.sections.termination.content')}</p>`
    },
    {
      id: "contact",
      title: t('terms.sections.contact.title'),
      content: `<p>${t('terms.sections.contact.content')}</p>`
    }
  ];

  const TERMS_SECTIONS = getTermsSections();
  const [active, setActive] = useState(TERMS_SECTIONS[0].id);
  const headingRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    TERMS_SECTIONS.forEach((section) => {
      const el = headingRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [TERMS_SECTIONS]);

  return (
    <div className="md:flex gap-8">
      <aside className="md:w-1/4 mb-6 md:mb-0">
        <ScrollArea className="sticky top-24 h-[calc(100vh-6rem)] pr-4">
          <nav>
            <ul className="space-y-2">
              {TERMS_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={cn(
                      "text-zion-slate-light hover:text-zion-cyan text-sm transition-colors",
                      active === section.id && "text-zion-cyan font-semibold"
                    )}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </aside>
      <div className="flex-1 space-y-8">
        {TERMS_SECTIONS.map((section) => (
          <section key={section.id}>
            <h2
              id={section.id}
              ref={(el) => (headingRefs.current[section.id] = el)}
              className="text-xl font-semibold text-white mb-2 scroll-mt-24"
            >
              {section.title}
            </h2>
            <div
              className="space-y-4 text-zion-slate-light"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
