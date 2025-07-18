<<<<<<< HEAD
import React from 'react';;
import { useEffect, useState } from 'react';;
import { Bell, X } from '@/components/ui/icons;;
import { useRouter } from 'next/router;'
;;
import { Button } from '@/components/ui/button;;
import { Card, CardContent } from '@/components/ui/card;;
import { useProjects } from '@/hooks/useProjects;;
import type { Project } from '@/types/projects;'

export function ProjectOfferBanner(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const router: unknown = useRouter();
  const { projects, isLoading } = useProjects();
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]);''
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {;''
    if (projects && !isLoading) {;;
      const offers: unknown = projects.filter((p) => p.status === 'offer_sent');''
      setPendingOffers(offers);
    };
  }, [projects, isLoading]);''
;;
  const handleDismiss: unknown = (projectId: "string", _e: React.MouseEvent) => {;"
=======
import React from 'react'
import { useEffect, useState } from 'react''
import { Bell, X } from '@/components/ui/icons'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useProjects } from '@/hooks/useProjects'
import type { Project } from '@/types/projects'

export function ProjectOfferBanner(): ;
  const router = useRouter();
  const { projects, isLoading } = useProjects();
  const [pendingOffers, setPendingOffers] = useState<Project[]>([])'
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())'

  useEffect(() => {'
    if (projects && !isLoading) {'
      const offers = projects.filter((p) => p.status === 'offer_sent')'
      setPendingOffers(offers)'
    };
  }, [projects, isLoading])'
'
  const handleDismiss = (projectId: "string, _e: React.MouseEvent) => {
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    e.stopPropagation();
    setDismissed((prev) => {;
      const updated = new Set(prev);
      updated.add(projectId);
      return updated;
    });
  };

  const handleViewOffer = (_projectId: string) => {;
    router.push(`/project/${projectId}`);
  };

  if (;
    isLoading ||;
    pendingOffers.length === 0 ||;
    pendingOffers.every((p) => dismissed.has(p.id));
<<<<<<< HEAD
  ) {;""
    return null;";""
  };";";""
;";";";""
  return (;";";";";""
    <div className="mb-6 space-y-3">;"
      {pendingOffers;""
        .filter((offer) => !dismissed.has(offer.id));";""
        .map((offer) => (;";";""
          <Card;";";";""
            key={offer.id};";";";";""
            className="border-2 border-primary bg-primary/5";";";""
            onClick={() => handleViewOffer(offer.id)};";";";""
          >;";";";";""
            <CardContent className="p-4 flex items-center justify-between">;";";";";""
              <div className="flex items-center gap-2">;";";";";""
                <div className="bg-primary/10 rounded-full p-2">;";";";";""
                  <Bell className="h-4 w-4 text-primary" />;";";""
                </div>;";";";""
                <div>;";";";";""
                  <h4 className="font-semibold"> New Project Offer!</h4>;";";";";""
                  <p className="text-sm text-muted-foreground">;";";";";""
                    You've been selected for "{offer.job?.title}". Review and;"
                    accept to get started.;""
                  </p>;";""
                </div>;";";""
              </div>;";";";""
;";";";";""
              <div className="flex items-center gap-2">;";";";";""
                <Button size="sm" className="whitespace-nowrap">;";""
                  View Offer;";";""
                </Button>;";";";""
                <Button;";";";";""
                  size="sm";";";";";""
                  variant="ghost";";";""
                  onClick={(e) => handleDismiss(offer.id, e)};";";";""
                >;";";";";""
                  <X className="h-4 w-4" />;"
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        ))};""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
  ) {"
    return null;"
  };
"
  return (;"
    <div className=mb-6 space-y-3>"
      {pendingOffers"
        .filter((offer) => !dismissed.has(offer.id));
        .map((offer) => (;"
          <Card"
            key={offer.id};
            className=border-2 border-primary bg-primary/5"
            onClick={() => handleViewOffer(offer.id)}"
          >;
            <CardContent className=p-4 flex items-center justify-between">"
              <div className=flex items-center gap-2>"
                <div className="bg-primary/10 rounded-full p-2>"
                  <Bell className="h-4 w-4 text-primary" />
                </div>;
                <div>"
                  <h4 className="font-semibold>🎉 New Project Offer!</h4>"
                  <p className="text-sm text-muted-foreground">
                    You've been selected for {offer.job?.title}". Review and"
                    accept to get started.
                  </p>;"
                </div>;"
              </div>

              <div className="flex items-center gap-2">
                <Button size=sm" className="whitespace-nowrap>"
                  View Offer;"
                </Button>"
                <Button;
                  size=sm"
                  variant="ghost
                  onClick={(e) => handleDismiss(offer.id, e)}"
                >;"
                  <X className="h-4 w-4 />
                </Button>;
              </div>;
            </CardContent>;
          </Card>;"
        ))}"
    </div>;"
  );
}"
"

}"
}"`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`