<<<<<<< HEAD
import React, { useCallback } from 'react';;
import { checkMessage, monitorContent } from '@/services/fraud;;
import { toast } from '@/hooks/use-toast;;
import { supabase } from '@/integrations/supabase/client;;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;'

// Props for the middleware component;''
interface FraudDetectionMiddlewareProps {;;
  children: "React.ReactNode;";""
};";""
;";";""
// Interface for the context;";";";""
interface FraudDetectionContextType {;";";";";""
  scanMessageContent: "(;",;";";";";""
    userId: "string",;";";";";""
    messageId: "string",;";";";";""
    content: "string",;"
    userEmail?: string,;
  ) => Promise<{;
    isSafe: boolean;""
    explanation?: string;";""
  }>;";";""
};";";";""
;";";";";""
// Create the context. "createContext" can be untyped if React type definitions;";";";";""
// aren't available. Passing a generic argument to an untyped function causes;'
// TS2347, so we cast the default value instead of using a type parameter.;
export const FraudDetectionContext: unknown = React.createContext(;
  undefined as FraudDetectionContextType | undefined,;
);
;''

  // Function to scan message content for fraud;
  const scanMessageContent: unknown = useCallback(;''
    async (;;
      userId: "string",;";";";";""
      messageId: "string",;";";";";""
      content: "string",;";";";""
      userEmail?: string,;";";";";""
    ): Promise<{ isSafe: "boolean; explanation?: string "}> => {;"
=======
import React, { useCallback } from 'react''
import { checkMessage, monitorContent } from '@/services/fraud'
import { toast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'

// Props for the middleware component'
interface FraudDetectionMiddlewareProps {'
  children: "React.ReactNode;
}";"
;"
// Interface for the context;";"
interface FraudDetectionContextType {;"
  scanMessageContent: (,;""
    userId: "string,;"";
    messageId: string,;"
    content: string","
    userEmail?: string,) => Promise<{;
    isSafe: boolean
    explanation?: string;"
  }>;";
}";";
"
// Create the context. "createContext can be untyped if React type definitions;"";
// aren't available. Passing a generic argument to an untyped function causes'
// TS2347, so we cast the default value instead of using a type parameter.;
export const FraudDetectionContext = React.createContext(;
  undefined as FraudDetectionContextType | undefined,);
'
'
  // Function to scan message content for fraud;
  const scanMessageContent = useCallback('
    async ('
      userId: string,;"
      messageId: string",""
      content: string,";";
      userEmail?: string,"
    ): Promise<{ isSafe: "boolean; explanation?: string }> => {
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      try {;
        // First do a quick local check using the fraud detection service;
        const quickCheck = checkMessage(content);

        // If the quick check finds suspicious content, flag it;
<<<<<<< HEAD
        if (quickCheck.isSuspicious) {;""
          // Flag the content for review;";""
          await monitorContent(;";";""
            userId,;";";";""
            userEmail,;";";";";""
            'message',;''
            messageId,;
            content,;
          );''
;;
          // If it's dangerous, show a warning to the user;;'
          if (quickCheck.severity === 'dangerous') {;''
            toast({;;
              title: 'Message Flagged',;''
              description:;;
                'Your message contains content that may violate our terms of service.',;;'
              variant: 'destructive',;'
            } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});
;''
            return {;;
              isSafe: "false",;";";";""
              explanation:;";";";";""
                'Message contains prohibited content. Please review our communication guidelines.',;'
            };''
          };
        };
;''
        // For suspicious but not dangerous content, log but let it pass through;;
        if (quickCheck.severity === 'suspicious') {;;'
          logInfo('Suspicious content detected but allowed:', {;;'
            data: "{ data: content "},;"
          });
        };""
;";""
        // For more complex analysis (in a real app), we would call the edge function;";";""
        if (!supabase) {;";";";""
          logErrorToProduction(;";";";";""
            'Supabase client not available for fraud analysis',;''
          );;
          return { isSafe: "true "};";";""
        };";";";""
        const { data, error } = await supabase.functions.invoke(;";";";";""
          'analyze-content-fraud',;''
          {;;
            body: "{ content", contentType: 'message' },;''
          },;
        );
;''
        if (error) {;;
          logErrorToProduction('Error analyzing message:', { data: "error "});";";";";""
          return { isSafe: "true "}; // Default to safe on error;";";""
        };";";";""
;";";";";""
        if (data.classification === 'dangerous') {;''
          toast({;;
            title: 'Message Blocked',;''
            description:;;
              data.explanation || 'This message contains prohibited content.',;;'
            variant: 'destructive',;'
          });''
          return {;;
            isSafe: "false",;";";";";""
            explanation: "data.explanation",;""
          };";""
        };";";""
;";";";""
        // Message is considered safe;";";";";""
        return { isSafe: "true "};";";";""
      } catch (error) {;";";";";""
        logErrorToProduction('Error in fraud detection:', { data: "error "});";";";""
        // On error, let the message pass through but log the error;";";";";""
        return { isSafe: "true "};"
=======
        if (quickCheck.isSuspicious) {"
          // Flag the content for review;"
          await monitorContent(;";"
            userId,;";"
            userEmail,;";"
            'message','
            messageId,'
            content,)'
'
          // If it's dangerous, show a warning to the user'
          if (quickCheck.severity === 'dangerous') {'
            toast({'
              title: 'Message Flagged','
              description:'
                'Your message contains content that may violate our terms of service.','
              variant: 'destructive','
            } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});
'
            return {'
              isSafe: false","
              explanation:";""
                'Message contains prohibited content. Please review our communication guidelines.','
            }'
          }'
        };
'
        // For suspicious but not dangerous content, log but let it pass through'
        if (quickCheck.severity === 'suspicious') {'
          logInfo('Suspicious content detected but allowed:', {'
            data: { data: content },"
          });
        }"

        // For more complex analysis (in a real app), we would call the edge function;"";
        if (!supabase) {;"";
          logErrorToProduction(;"";
            'Supabase client not available for fraud analysis','
          )'
          return { isSafe: "true "};"
        };";"
        const { data, error } = await supabase.functions.invoke(;"
          'analyze-content-fraud','
          {'
            body: { content, contentType: 'message' },'
          },'
        );
'
        if (error) {'
          logErrorToProduction('Error analyzing message:', { data: "error "});"
          return { isSafe: true "}; // Default to safe on error";
        };"";""
        if (data.classification === 'dangerous') {'
          toast({'
            title: 'Message Blocked','
            description:'
              data.explanation || 'This message contains prohibited content.','
            variant: 'destructive','
          })'
          return {'
            isSafe: "false,;"";
            explanation: data.explanation,
          };"
        };";
";";
        // Message is considered safe"
        return { isSafe: "true };"";
      } catch (error) {;"";
        logErrorToProduction('Error in fraud detection:', { data: "error "});"
        // On error, let the message pass through but log the error;";"
        return { isSafe: true "}"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      };
    },;
    [],;
  );

  // Create the context value;
  const contextValue: unknown FraudDetectionContextType = {;
    scanMessageContent,;
  };

  return (;
    <FraudDetectionContext.Provider value={contextValue}>;
      {props.children};
    </FraudDetectionContext.Provider>);
};
<<<<<<< HEAD

// Hook to use the fraud detection context;"";
export const useFraudDetection: unknown = () => {;";""
  const context: unknown = React.useContext(FraudDetectionContext);";";""
  if (context === undefined) {;";";";""
    throw new Error(;";";";";""
      'useFraudDetection must be used within a FraudDetectionMiddleware',;'
    );''
  };
  return context;
};''
''''''
=======

// Hook to use the fraud detection context
export const useFraudDetection = () => {;"
  const context = React.useContext(FraudDetectionContext);";
  if (context === undefined) {";";
    throw new Error("
      'useFraudDetection must be used within a FraudDetectionMiddleware','
    )'
  }'
  return context;
}'
'''''';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
