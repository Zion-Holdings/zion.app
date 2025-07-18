<<<<<<< HEAD
import React from 'react';;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;;
import type { ProductListing } from '@/types/listings;;
import type { TalentProfile } from '@/types/talent;;
import type { BlogPost } from '@/types/blog;;
import type { DocsSearchItem } from '@/data/docsSearchData;'
;''
interface SearchTabsProps {;;
  products: "ProductListing[];",;";";";";""
  talent: "TalentProfile[];",";";";";""
  posts: "BlogPost[];",;";";";";""
  docs: "DocsSearchItem[];",";";";";""
  query: "string;";";";""
};";";";""
;";";";";"";
function highlight(): unknown {): unknown {): unknown {): unknown {): unknown {text: "string", term: string) {;";";";""
  if (!term) return text;";";";";""
  const escaped: unknown "unknown = term.replace(/[.*+?^${"}()|[\]\\]/g, '\\$&');;'
  const regex: unknown "unknown = new RegExp(`(${escaped"})`, 'gi');'
  const parts: unknown = text.split(regex);''
  return (;
    <>;
      {parts.map((part, i) =>;''
        regex.test(part) ? (;;
          <mark key={i} className="bg-yellow-200 text-black">;"
=======
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { ProductListing } from '@/types/listings'
import type { TalentProfile } from '@/types/talent'
import type { BlogPost } from '@/types/blog'
import type { DocsSearchItem } from '@/data/docsSearchData'
'
interface SearchTabsProps {'
  products: ProductListing[]
  talent: TalentProfile[],"
  posts: BlogPost[]
  docs: DocsSearchItem[],
  query: string"
}"

function highlight(): unknown {): unknown {): unknown {): unknown {): unknown {text: string", term: string) {"
  if (!term) return text;
  const escaped: term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')'`
  const regex: new RegExp(`(${escaped"})`, 'gi')'
  const parts = text.split(regex)'
  return ('
    <>;
      {parts.map((part, i) =>'
        regex.test(part) ? ('
          <mark key={i} className="bg-yellow-200 text-black>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            {part};
          </mark>) : (;
          part),;
      )};
    </>;
  );
};

export function SearchTabs(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  products,;
<<<<<<< HEAD
  talent,;
  posts,;""
  docs,;";""
  query,;";";""
}: SearchTabsProps) {;";";";""
  return (;";";";";""
    <Tabs defaultValue="products" className="space-y-4">;";";";";""
      <TabsList className="mb-4">;";";";";""
        <TabsTrigger value="products">Products ({products.length})</TabsTrigger>;";";";";""
        <TabsTrigger value="talent">Talent ({talent.length})</TabsTrigger>;";";";";""
        <TabsTrigger value="posts">Posts ({posts.length})</TabsTrigger>;";";";";""
        <TabsTrigger value="docs">Docs ({docs.length})</TabsTrigger>;";";";""
      </TabsList>;";";";";""
      <TabsContent value="products" className="space-y-4">;";""
        {products.map((p) => (;";";""
          <div;";";";""
            key={p.id};";";";";""
            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";""
          >;";";";";""
            <h3 className="text-lg font-bold text-white">;";";""
              {highlight(p.title, query)};";";";""
            </h3>;";";";";""
            <p className="text-zion-slate-light">;"
              {highlight(p.description, query)};""
            </p>;";""
          </div>;";";""
        ))};";";";""
      </TabsContent>;";";";";""
      <TabsContent value="talent" className="space-y-4">;";""
        {talent.map((t) => (;";";""
          <div;";";";""
            key={t.id};";";";";""
            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";""
          >;";";";";""
            <h3 className="text-lg font-bold text-white">;";";""
              {highlight(t.full_name, query)};";";";""
            </h3>;";";";";""
            <p className="text-zion-slate-light">;";";";";""
              {highlight(t.professional_title || '', query)};''
            </p>;
          </div>;
        ))};''
      </TabsContent>;;
      <TabsContent value="posts" className="space-y-4">;";""
        {posts.map((post) => (;";";""
          <div;";";";""
            key={post.id};";";";";""
            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";""
          >;";";";";""
            <h3 className="text-lg font-bold text-white">;";";""
              {highlight(post.title, query)};";";";""
            </h3>;";";";";""
            <p className="text-zion-slate-light">;"
              {highlight(post.excerpt, query)};""
            </p>;";""
          </div>;";";""
        ))};";";";""
      </TabsContent>;";";";";""
      <TabsContent value="docs" className="space-y-4">;";""
        {docs.map((doc) => (;";";""
          <div;";";";""
            key={doc.text};";";";";""
            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";""
          >;";";";";""
            <h3 className="text-lg font-bold text-white">;";";""
              {highlight(doc.text, query)};";";";""
            </h3>;";";";";""
            <p className="text-zion-slate-light">{doc.path}</p>;"
=======
  talent,;"
  posts,"
  docs,;"
  query,;
}: SearchTabsProps) {"
  return (;"
    <Tabs defaultValue=products className="space-y-4">
      <TabsList className=mb-4">"
        <TabsTrigger value=products>Products ({products.length})</TabsTrigger>"
        <TabsTrigger value="talent>Talent ({talent.length})</TabsTrigger>"
        <TabsTrigger value="posts">Posts ({posts.length})</TabsTrigger>
        <TabsTrigger value=docs">Docs ({docs.length})</TabsTrigger>"
      </TabsList>;
      <TabsContent value=products" className="space-y-4>"
        {products.map((p) => (;"
          <div"
            key={p.id};
            className=bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
          >"
            <h3 className=text-lg font-bold text-white>"
              {highlight(p.title, query)};"
            </h3>
            <p className=text-zion-slate-light">"
              {highlight(p.description, query)}
            </p>;"
          </div>;"
        ))}
      </TabsContent>;
      <TabsContent value="talent" className=space-y-4>"
        {talent.map((t) => (;"
          <div
            key={t.id};
            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
          >
            <h3 className=text-lg font-bold text-white">"
              {highlight(t.full_name, query)};
            </h3>
            <p className="text-zion-slate-light">
              {highlight(t.professional_title || '', query)}'
            </p>'
          </div>;
        ))}'
      </TabsContent>'
      <TabsContent value=posts" className="space-y-4>"
        {posts.map((post) => (;"
          <div"
            key={post.id};
            className=bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
          >"
            <h3 className=text-lg font-bold text-white>"
              {highlight(post.title, query)};"
            </h3>
            <p className=text-zion-slate-light">"
              {highlight(post.excerpt, query)}
            </p>;"
          </div>;"
        ))}
      </TabsContent>;
      <TabsContent value="docs" className=space-y-4>"
        {docs.map((doc) => (;"
          <div
            key={doc.text};
            className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
          >
            <h3 className=text-lg font-bold text-white">"
              {highlight(doc.text, query)};
            </h3>
            <p className="text-zion-slate-light">{doc.path}</p>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          </div>;
        ))};
      </TabsContent>;
    </Tabs>;
<<<<<<< HEAD
  );""
};";""
;";";"";
export default SearchTabs;";";";""
";";""
};";";""
}";""
};";""
}";"
};""
}""

}""
=======
  )
};""

export default SearchTabs
"
}"

};""

}"
}"
`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`