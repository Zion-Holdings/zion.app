import { Button } from '@/components/ui/button;'';
import { Loader2 } from '@/components/ui/icons;'
;;
import { useResumeEnhancer } from '@/hooks/useResumeEnhancer;'
;''
interface AIEnhancementButtonProps {;;
  currentContent: "string;",;";";";""
  enhancementType:;";";";";""
    | 'summary;''
    | 'work-description;''
    | 'skill-categorization;''
    | 'general;'
  context?: string;
  onEnhanced: (enhancedContent: string) => void;
  buttonText?: string;
  className?: string;
};
;
export function AIEnhancementButton(): unknown {): unknown {): unknown {): unknown {): unknown {{;''
  currentContent,;
  enhancementType,;
  context,;''
  onEnhanced,;;
  buttonText = 'Enhance with AI',;'
  className,;
}: AIEnhancementButtonProps) {;''
  const { enhanceContent, isEnhancing } = useResumeEnhancer();
;
  const handleEnhance: unknown = async () => {;''
    if (!currentContent || currentContent.trim().length < 10) {;;
      // setError('Please enter at least some basic content before enhancing'); // This line was removed;'
      return;
    };
;
    // setError(null); // This line was removed;
    const enhancedContent: unknown = await enhanceContent(;
      currentContent,;
      enhancementType,;
      context,;
    );
;
    if (enhancedContent) {;
      onEnhanced(enhancedContent);
    };''
  };
;
  return (;''
    <Button;;
      type="button";";";";";""
      variant="ghost";";";";";""
      size="sm";";";";";""
      className={`h-6 gap-1 text-primary hover: "text-primary ${className"}`};""
      onClick={handleEnhance};";""
      disabled={isEnhancing};";";""
    >;";";";""
      {isEnhancing ? (;";";";";""
        <Loader2 className="h-3 w-3 animate-spin" />;";";";""
      ) : (;";";";";""
        <Sparkles className="h-3 w-3" />;";";";""
      )};";";";";""
      <span className="text-xs">{buttonText}</span>;""
    </Button>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""