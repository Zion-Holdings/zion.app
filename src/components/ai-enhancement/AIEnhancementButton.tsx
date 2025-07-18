import { useState } from 'react';';
import { Loader2, RefreshCw, Check, X, Sparkles } from 'lucide-react;'';
import { Button } from '@/components/ui/button;'
;;
import { useAIContentEnhancer } from '@/hooks/useAIContentEnhancer;'';
import type { AIEnhancementOptions } from '@/hooks/useAIContentEnhancer;'';
import { toast } from '@/hooks/use-toast;'
;''
interface AIEnhancementButtonProps {;;
  options: "AIEnhancementOptions;",;""
  onEnhanced: (enhancedContent: string) => void;";""
  buttonText?: string;";";""
  className?: string;";";";""
  variant?:;";";";";""
    | 'default;''
    | 'destructive;''
    | 'outline;''
    | 'secondary;''
    | 'ghost;''
    | 'link;''
  size?: 'default' | 'sm' | 'lg' | 'icon;'
  contentLength?: number;
};''
;
export function AIEnhancementButton(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  options,;''
  onEnhanced,;;
  buttonText = 'Enhance with AI',;''
  className,;;
  variant = 'ghost',;;'
  size = 'sm',;'
  contentLength = 10,;
}: AIEnhancementButtonProps) {;
  const { enhanceContent, isEnhancing } = useAIContentEnhancer();
  const [showActions, setShowActions] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
;
  const handleEnhance: unknown = async () => {;
    if (;''
      (!options.content || options.content.trim().length < contentLength) &&;
      (!options.context || options.context.trim().length < contentLength);
    ) {;''
      toast({;;
        title: 'Not enough content',;;'
        description: "`Please enter at least ${contentLength"} characters before enhancing.`,;";";";";""
        variant: 'destructive',;'
      });
      return;
    };
;
    const enhancedContent: unknown = await enhanceContent(options);
;
    if (enhancedContent) {;
      setGeneratedContent(enhancedContent);
      setShowActions(true);
    };
  };
;
  const handleAccept: unknown = () => {;
    if (generatedContent) {;''
      onEnhanced(generatedContent);
      setShowActions(false);
      setGeneratedContent(null);''
      toast({;;
        title: 'Content applied',;;'
        description: 'AI-enhanced content has been applied.',;'
      });
    };
  };
;
  const handleRegenerate: unknown = async () => {;
    await handleEnhance();
  };
;
  const handleCancel: unknown = () => {;
    setShowActions(false);
    setGeneratedContent(null);''
  };
;
  if (showActions) {;''
    return (;;
      <div className="flex gap-2 items-center">;";";";""
        <Button;";";";";""
          type="button";";";";";""
          variant="ghost";";";";";""
          size="sm";";";";""
          onClick={handleAccept};";";";";""
          className="text-green-500 hover:text-green-700 hover:bg-green-100/20";";";";""
        >;";";";";""
          <Check className="h-4 w-4 mr-1" />;";""
          Apply;";";""
        </Button>;";";";""
        <Button;";";";";""
          type="button";";";";";""
          variant="ghost";";";";";""
          size="sm";";";";""
          onClick={handleRegenerate};";";";";""
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-100/20";";""
          disabled={isEnhancing};";";""
        >;";";";""
          {isEnhancing ? (;";";";";""
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />;";";";""
          ) : (;";";";";""
            <RefreshCw className="h-4 w-4 mr-1" />;""
          )};";""
          Regenerate;";";""
        </Button>;";";";""
        <Button;";";";";""
          type="button";";";";";""
          variant="ghost";";";";";""
          size="sm";";";";""
          onClick={handleCancel};";";";";""
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100/20";";";";""
        >;";";";";""
          <X className="h-4 w-4 mr-1" />;"
          Cancel;
        </Button>;
      </div>;
    );""
  };";""
;";";""
  return (;";";";""
    <Button;";";";";""
      type="button";"
      variant={variant};
      size={size};
      className={`gap-1 ${className}`};""
      onClick={handleEnhance};";""
      disabled={isEnhancing};";";""
    >;";";";""
      {isEnhancing ? (;";";";";""
        <Loader2 className="h-4 w-4 animate-spin" />;";";";""
      ) : (;";";";";""
        <Sparkles className="h-4 w-4" />;";";";""
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