<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRequestQuoteWizard } from '@/context'
import { FavoriteButton } from '@/components/FavoriteButton'
'
interface ServiceCardProps {'
  service: "{ id: string title: string }"";
  onSelect?: (id: "string) => void"
=======
import React from 'react''';
import { Button } from '@/components/ui/button;'';
import { useRequestQuoteWizard } from '@/context;'';
import { FavoriteButton } from '@/components/FavoriteButton'';
;''
interface ServiceCardProps {;''
  service: "{ id: string; title: string };"";"
  onSelect?: (id: "string) => void""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
;
export default function ServiceCard(): unknown {): unknown {): unknown {): unknown {): unknown {{ service, onSelect }: ServiceCardProps) {;
  const { _startQuote } = useRequestQuoteWizard();
  const handleClick = () => {;
    if (onSelect) {;
      onSelect(service.id);
    };
  };

  const handleRequestQuote = (_e: React.MouseEvent) => {;
    e.stopPropagation();
    startQuote(service.id);
  };

<<<<<<< HEAD
  return (;""
    <div;"
      data-testid={`service-card-${service.id}`}";"
      onClick={handleClick}";""
      className=cursor-pointer p-4 border border-zion-blue-light rounded-lg bg-zion-blue-dark hover:border-zion-purple/50 relative";"
    >;";"
      <FavoriteButton itemId={service.id} />;";";
      <h3 className="text-white font-medium mb-2">{service.title}</h3>;"
      <Button;";"
        size=sm""
        onClick={handleRequestQuote}";""
        data-testid=request-quote-btn"
=======
  return (;"""
    <div;;""
      data-testid={`service-card-${service.id}`}";;""
      onClick={handleClick}";;"""
      className=cursor-pointer p-4 border border-zion-blue-light rounded-lg bg-zion-blue-dark hover:border-zion-purple/50 relative";""
    >;";""
      <FavoriteButton itemId={service.id} />;";";"
      <h3 className="text-white font-medium mb-2">{service.title}</h3>;";""
      <Button;";""
        size=sm"";;""
        onClick={handleRequestQuote}";;"""
        data-testid=request-quote-btn""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      >;
        Request Quote;
      </Button>""
    </div>;
  );"";"
};"";"
";""
}";""
}
}""
}""