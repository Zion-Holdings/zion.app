<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header'
import { NextSeo } from '@/components/NextSeo'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { toast } from '@/hooks/use-toast'
import Link from 'next/link // Changed from react-router-dom;;
import { safeStorage } from '@/utils/safeStorage;;
'
interface Suggestion {
  id: "string"
  title: string,"
  description: "string"
}";"
;"
export default function RoadmapSuggestPage(): ;"
  const { _user } = useAuth();"
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')'
  const [submitted, setSubmitted] = useState<Suggestion[]>(() => {;
    const raw = safeStorage.getItem('feature_requests');
=======
import React, { useState, useEffect } from 'react';';
import { Header } from '@/components/Header;'';
import { NextSeo } from '@/components/NextSeo;'';
import { Input } from '@/components/ui/input;'';
import { Textarea } from '@/components/ui/textarea;'';
import { Button } from '@/components/ui/button;'';
import { useAuth } from '@/hooks/useAuth;'';
import { toast } from '@/hooks/use-toast;'';
import Link from 'next/link // Changed from react-router-dom;;';
import { safeStorage } from '@/utils/safeStorage;'
;''
interface Suggestion {;;
  id: "string;",;";";";";""
  title: "string;",";";";";""
  description: "string;";""
};";""
;";";"";
export default function RoadmapSuggestPage(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";";""
  const { _user } = useAuth();";";";";""
  const [title, setTitle] = useState('');;'
  const [description, setDescription] = useState('');''
  const [submitted, setSubmitted] = useState<Suggestion[]>(() => {;;
    const raw: unknown = safeStorage.getItem('feature_requests');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    if (!raw) return [];
    try {;
      return JSON.parse(raw) as Suggestion[];
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;
<<<<<<< HEAD
      return []'
    };
  });
'
  useEffect(() => {
    safeStorage.setItem('feature_requests', JSON.stringify(submitted))
  }, [submitted])
'
  const handleSubmit = (_e: React.FormEvent) => {;
    e.preventDefault();
    if (!user) {'
      toast({;
        title: 'Login required',;
        description: 'Please sign in to suggest',;
      });
      return'
    };
    const suggestion = { id: Date.now().toString(), title, description };"
    setSubmitted((prev) => [...prev, suggestion]);"
    setTitle('');
    setDescription('')'
    toast({;
      title: 'Suggestion added',;
      description: 'Thank you for your feedback',;
    })'
  };
  return ('
    <>;
      <NextSeo title="Suggest a Feature" description="Share your ideas" />;"
      <Header />;"
      <main className="min-h-screen bg-background py-24">;"
        <div className="container mx-auto max-w-xl space-y-6">;"
          <h1 className="text-2xl font-bold">Suggest a Feature</h1>;"
          <form onSubmit={handleSubmit} className="space-y-4">;"
            <Input;"
              placeholder="Feature title";
              value={title};"
              onChange={(e) => setTitle(e.target.value)};";"
              required;"
            />;"
            <Textarea;"
              placeholder="Description"
              value={description};";"
              onChange={(e) => setDescription(e.target.value)};"
              required;"
            />;"
            <Button type="submit">Submit</Button>;"
          </form>;"
          {submitted.length > 0 && (;"
            <div className="space-y-2">;"
              <h2 className="text-lg font-semibold">Community Queue</h2>;"
              <ul className="list-disc pl-6 text-sm">;
                {submitted.map((s) => (;
                  <li key={s.id}>{s.title}</li>;"
                ))};";"
              </ul>;"
            </div>;"
          )};"
          <Button variant="outline" asChild>;"
            <Link href="/roadmap">Back to Roadmap</Link>;
          </Button>;
        </div>;
      </main>;"
    </>;";"
  );"
};"
"
}"
}";"
}"
}"
=======
      return [];''
    };
  });
;''
  useEffect(() => {;;
    safeStorage.setItem('feature_requests', JSON.stringify(submitted));'
  }, [submitted]);
;''
  const handleSubmit: unknown = (_e: React.FormEvent) => {;
    e.preventDefault();
    if (!user) {;''
      toast({;;
        title: 'Login required',;;'
        description: 'Please sign in to suggest',;'
      });
      return;''
    };;
    const suggestion: unknown = { id: "Date.now().toString()", title, description };";";";""
    setSubmitted((prev) => [...prev, suggestion]);";";";";""
    setTitle('');;'
    setDescription('');''
    toast({;;
      title: 'Suggestion added',;;'
      description: 'Thank you for your feedback',;'
    });''
  };
;
  return (;''
    <>;;
      <NextSeo title="Suggest a Feature" description="Share your ideas" />;";";";""
      <Header />;";";";";""
      <main className="min-h-screen bg-background py-24">;";";";";""
        <div className="container mx-auto max-w-xl space-y-6">;";";";";""
          <h1 className="text-2xl font-bold">Suggest a Feature</h1>;";";";";""
          <form onSubmit={handleSubmit} className="space-y-4">;";";";""
            <Input;";";";";""
              placeholder="Feature title";"
              value={title};""
              onChange={(e) => setTitle(e.target.value)};";""
              required;";";""
            />;";";";""
            <Textarea;";";";";""
              placeholder="Description";""
              value={description};";""
              onChange={(e) => setDescription(e.target.value)};";";""
              required;";";";""
            />;";";";";""
            <Button type="submit">Submit</Button>;";";""
          </form>;";";";""
          {submitted.length > 0 && (;";";";";""
            <div className="space-y-2">;";";";";""
              <h2 className="text-lg font-semibold">Community Queue</h2>;";";";";""
              <ul className="list-disc pl-6 text-sm">;"
                {submitted.map((s) => (;
                  <li key={s.id}>{s.title}</li>;""
                ))};";""
              </ul>;";";""
            </div>;";";";""
          )};";";";";""
          <Button variant="outline" asChild>;";";";";""
            <Link href="/roadmap">Back to Roadmap</Link>;"
          </Button>;
        </div>;
      </main>;""
    </>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
