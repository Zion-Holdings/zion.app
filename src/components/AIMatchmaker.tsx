<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react;;
import { toast } from '@/hooks/use-toast;;
import { Button } from '@/components/ui/button;;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;;
import { AIMatchingResults } from '@/components/AIMatchingResults;;
import { findMatches } from '@/lib/ai-matchmaking;;
import type { MatchResult } from '@/lib/ai-matchmaking;;
import { Textarea } from '@/components/ui/textarea;

import { logInfo, logErrorToProduction } from '@/utils/productionLogger;

interface AIMatchmakerProps {;
  serviceType?: string;
  onMatchSelect?: (match: MatchResult) => void;''
  className?: string''
};
;;
export function AIMatchmaker(): unknown {): unknown {): unknown {): unknown {): unknown {{;''
  serviceType = '',''
  onMatchSelect,;
  className,;''
}: AIMatchmakerProps) {;''
  const [query, setQuery] = useState('')''
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false);''
''
  const handleSearch: unknown = async () => {;
    if (!query.trim()) {;''
      toast({;''
        title: 'Please enter a description',;''
        description: "Tell us what you're looking for so we can find matches.,;'
        variant: 'destructive',''
      });
      return;
    };
;''
    setIsMatchmaking(true)''
    setHasSearched(true);
;''
    try {;''
      logInfo('Starting AI matching', { data: "{ query", serviceType } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}});"
";""
      // Get AI matches;";""
      const results: unknown = await findMatches(query", serviceType, 3)";;""
";;"""
      logInfo('AI matching results:', { data: { data: results } })";""
      setMatches(results);""
;";""
      toast({;";";""
        title: 'Matches Found',;''
        description: `Found ${results.length} matches based on your description.`,";""
      });";""
    } catch {;";";"
      logErrorToProduction('Error during AI matching:', { data: "error "});";""
      toast({;";""
        title: 'Matching Error',;''
        description:;''
          We couldn't find matches for your request. Please try again.",";;"""
        variant: 'destructive',''
=======
import React from 'react'
import { useState } from 'react''
import { Search, Sparkles } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AIMatchingResults } from '@/components/AIMatchingResults'
import { findMatches } from '@/lib/ai-matchmaking'
import type { MatchResult } from '@/lib/ai-matchmaking'
import { Textarea } from '@/components/ui/textarea'

import { logInfo, logErrorToProduction } from '@/utils/productionLogger'

interface AIMatchmakerProps {
  serviceType?: string
  onMatchSelect?: (match: MatchResult) => void'
  className?: string'

'
export function AIMatchmaker(): unknown {): unknown {): unknown {): unknown {): unknown {{'
  serviceType = '','
  onMatchSelect,;
  className,'
}: AIMatchmakerProps) {'
  const [query, setQuery] = useState('')'
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matches, setMatches] = useState([] as MatchResult[]);
  const [hasSearched, setHasSearched] = useState(false)'
'
  const handleSearch = async () => {;
    if (!query.trim()) {'
      toast({'
        title: 'Please enter a description','
        description: "Tell us what you're looking for so we can find matches.,;
        variant: 'destructive','
      });
      return;
    };
'
    setIsMatchmaking(true)'
    setHasSearched(true);
'
    try {'
      logInfo('Starting AI matching', { data: { query, serviceType } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}});
";"
      // Get AI matches;";"
      const results = await findMatches(query", serviceType, 3)"
";""
      logInfo('AI matching results:', { data: { data: results } })";"
      setMatches(results);"
;";"
      toast({;"
        title: 'Matches Found','`
        description: `Found ${results.length} matches based on your description.`,";"
      });";"
    } catch {;";";
      logErrorToProduction('Error during AI matching:', { data: "error "});"
      toast({;";"
        title: 'Matching Error','
        description:'
          We couldn't find matches for your request. Please try again.",""
        variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });
      // Set empty matches to show no results found UI;
      setMatches([]);
    } finally {;
<<<<<<< HEAD
      setIsMatchmaking(false);''
    }''
  };
;''
  const handleItemSelect: unknown = (_item: unknown) => {;''
    if (onMatchSelect && typeof item === 'object' && item !== null) {''
=======
      setIsMatchmaking(false)'
    }'
  };
'
  const handleItemSelect = (_item: unknown) => {'
    if (onMatchSelect && typeof item === 'object' && item !== null) {'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      // Find the corresponding match from matches array;
      const match = matches.find((m) => m.item === item);
      if (match) {;
        onMatchSelect(match);
      };
    };
  };

<<<<<<< HEAD
  // Extract just the items from each MatchResult;''
  const matchItems: unknown = matches.map((match) => match.item)''

  return (;''
    <Card;''`
      className={`border border-zion-blue-light bg-zion-blue-dark ${className || ''}`};''
    >;''
      <CardHeader className=pb-2>";";""
        <CardTitle className="flex items-center text-white>;"
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;""
          AI Matchmaker;";""
        </CardTitle>;";";""
        <p className=text-sm text-zion-slate-light>""
          Describe what you&apos;re looking for and our AI will find the best""
=======
  // Extract just the items from each MatchResult'
  const matchItems = matches.map((match) => match.item)'

  return ('`
    <Card'``
      className={`border border-zion-blue-light bg-zion-blue-dark ${className || ''}`}'
    >'
      <CardHeader className=pb-2>"
        <CardTitle className="flex items-center text-white>;"
          <Sparkles className="h-5 w-5 mr-2 text-zion-cyan" />;"
          AI Matchmaker;";"
        </CardTitle>;"
        <p className=text-sm text-zion-slate-light>"
          Describe what you&apos;re looking for and our AI will find the best"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          matches;
        </p>;
      </CardHeader>;
      <CardContent>;
<<<<<<< HEAD
        <div className="space-y-4">;";""
          <div className=space-y-2">";;""
            <Textarea";;"""
              placeholder=Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')""
              value={query};""
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>;";""
                setQuery(e.target.value);";""
              };";""
              className=min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white"""
=======
        <div className="space-y-4">;"
          <div className=space-y-2">"
            <Textarea";""
              placeholder=Describe what you need... (e.g., 'I need a senior machine learning engineer with expertise in computer vision for a 3-month project')"
              value={query};"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>;";"
                setQuery(e.target.value);";"
              };";"
              className=min-h-24 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white""
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            />;
            <Button;
              onClick={handleSearch};
              disabled={isMatchmaking};
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
            >
<<<<<<< HEAD
              {isMatchmaking ? (;"""
                <>Analyzing your needs...</>;;""
              ) : (";;""
                <>";;"""
                  <Search className=h-4 w-4 mr-2 />""
=======
              {isMatchmaking ? (;""
                <>Analyzing your needs...</>;"
              ) : (";"
                <>";""
                  <Search className=h-4 w-4 mr-2 />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  Find Matches;
                </>)};
            </Button>;
          </div>;

          {hasSearched && (;
            <AIMatchingResults;
              matches={matchItems};
              onSelectMatch={handleItemSelect};
              isLoading={isMatchmaking};
              serviceType={serviceType};
              projectDescription={query};
            />)};
        </div>;
      </CardContent>""
    </Card>;
  );
};
<<<<<<< HEAD
";""
}";""

}""
}""
=======
";"
}";"

}"`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`