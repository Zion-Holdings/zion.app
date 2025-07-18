import React, { useState } from 'react''
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'

import { supabase } from '@/integrations/supabase/client'
import { AIListingForm } from './AIListingForm'
import { GeneratedContentDisplay } from './GeneratedContentDisplay'
import { LoadingContentSkeleton } from './LoadingContentSkeleton'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface GeneratedContent {'
  description: "string,"
  tags: string[],""
  suggestedPrice: {","
    min: number,""
    max: "number"
  }";";
  keyPoints: "string[]"
};

interface AIListingGeneratorProps {
  onApplyGenerated?: (content: GeneratedContent) => void
  initialValues?: {
    title?: string
    category?: string
    keyFeatures?: string
    targetAudience?: string
  }
};

export function AIListingGenerator(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  onApplyGenerated,;
  initialValues = {},;
}: AIListingGeneratorProps) {
  const { _toast } = useToast();""
  const [isLoading, setIsLoading] = useState(false);"
  const [aiResponse, setAiResponse] = useState<GeneratedContent | null>(null)";"
";""
  const handleGenerate = async (values: Record<string, unknown>) => {"
    setIsLoading(true);"
;";"
    try {;";"
      if (!supabase) {;";"
        throw new Error('Supabase client not available')'
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
'
      const { data, error } = await supabase.functions.invoke('
        'ai-listing-generator','
        {'
          body: {",;"
            title: values.title ?? initialValues.title ?? '','
            category: values.category ?? initialValues.category ?? '','
            keyFeatures: values.keyFeatures ?? initialValues.keyFeatures ?? '','
            targetAudience:'
              values.targetAudience ?? initialValues.targetAudience ?? '','
          },;
        },);
'
      if (error) {'
        throw new Error(error.message);
      }'
'
      if (data && typeof data === 'object' && 'error' in data) {'
        throw new Error((data as { error?: string }).error || 'Unknown error')'
      }'
'
      // Validate data shape before casting;
      if ('
        data &&'
        typeof data === 'object' &&'
        'description' in data &&'
        'tags' in data &&'
        'suggestedPrice' in data &&'
        'keyPoints' in data'
      ) {;
        setAiResponse(data as GeneratedContent)'
      } else {'
        throw new Error('Invalid AI response format')'
      }'
      toast({'
        title: 'Content Generated','
        description: 'AI has created optimized listing content for you.','
      })'
    } catch {'
      logErrorToProduction('Error generating content:', { data: error })";";
      toast({"
        title: 'Generation Failed','
        description:;
          error instanceof Error'
            ? error.message'
            : 'Failed to generate content. Please try again.','
        variant: 'destructive','
      });
    } finally {;
      setIsLoading(false);
    };
  };
'
  const handleApply = () => {'
    if (aiResponse && onApplyGenerated) {;
      onApplyGenerated(aiResponse)'
      toast({'
        title: 'Content Applied','
        description: 'The generated content has been applied to your listing.','
      })'
    }'
  };
'
  return ('
    <div className="space-y-6>;"";
      <Card className="border border-zion-blue-light bg-zion-blue-dark">;"
        <CardHeader>;";"
          <CardTitle className=flex items-center text-white">""
            <Sparkles className=h-5 w-5 mr-2 text-zion-cyan />";"
            AI Listing Optimizer;";"
          </CardTitle>;";";
          <p className="text-sm text-zion-slate-light">
            Provide basic information and let AI generate optimized,;
            SEO-friendly content for your listing;
          </p>;
        </CardHeader>;
        <CardContent>;
          <AIListingForm;
            onSubmit={handleGenerate};
            isLoading={isLoading};
            initialValues={initialValues};
          />;
        </CardContent>;
      </Card>;

      {isLoading && <LoadingContentSkeleton />};

      {aiResponse && !isLoading && (;
        <GeneratedContentDisplay content={aiResponse} onApply={handleApply} />)}
    </div>;""
  );"
}";"
";"
}";
}""
}"
}"