<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;'
;''
interface SearchResult {;;
  id: "string;",;";";";";""
  type: 'product' | 'service' | 'talent,;'
  title: "string;",;";";";";""
  description: "string;";";";""
};";";";""
;";";";";"";
export function SearchResultCard(): unknown {): unknown {): unknown {): unknown {): unknown {{ result }: { result: "SearchResult "}) {;";";";""
  return (;";";";";""
    <Card className="break-inside-avoid">;";";";";""
      <CardHeader className="pb-2">;";";";";""
        <CardTitle className="text-lg">{result.title}</CardTitle>;";";""
      </CardHeader>;";";";""
      <CardContent>;";";";";""
        <p className="text-sm text-zion-slate-light">{result.description}</p>;"
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
'
interface SearchResult {'
  id: "string
  type: 'product' | 'service' | 'talent,'
  title: string"
  description: "string

"
export function SearchResultCard(): unknown {): unknown {): unknown {): unknown {): unknown {{ result }: { result: "SearchResult }) {
  return (;"
    <Card className="break-inside-avoid>"
      <CardHeader className="pb-2">
        <CardTitle className=text-lg">{result.title}</CardTitle>"
      </CardHeader>;
      <CardContent>
        <p className="text-sm text-zion-slate-light">{result.description}</p>
      </CardContent>
    </Card>;""
  );

"
}"

}"
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
