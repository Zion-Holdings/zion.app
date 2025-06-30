
import { SearchSuggestion } from "@/types/search";
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Search } from 'lucide-react';

import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { cn } from "@/lib/utils";
import {
 getDocsSearchPath,
 docsSearchSuggestions
} from "@/data/docsSearchData";

interface ApiDocsLayoutProps {
  children: React.ReactNode;
}

export function ApiDocsLayout({ children }: ApiDocsLayoutProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [searchValue, setSearchValue] = useState("");

  const navigationItems = [
   { title: "Getting Started", path: "/developers/docs/getting-started" },
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/docs/sample-code" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" },
  ];

  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    const path = getDocsSearchPath(suggestion.text);
    if (path) {
      router.push(path);
      setSearchValue("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const path = getDocsSearchPath(searchValue);
    if (path) {
      router.push(path);
      setSearchValue("");
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950">
     {/* Sidebar */}
     <div className="hidden md:block w-64 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
      <Link href="/developers/docs" className="flex items-center mb-8">
       <div className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-md w-8 h-8 mr-3 flex items-center justify-center">
        <span className="text-white font-bold">Z</span>
       </div>
       <span className="font-bold text-white">API Docs</span>
      </Link>

      <div className="mb-6">
       <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-500" />
        <EnhancedSearchInput
         value={searchValue}
         onChange={setSearchValue}
         onSelectSuggestion={handleSelectSuggestion}
         searchSuggestions={docsSearchSuggestions}
         placeholder="Search documentation"
        />
       </form>
      </div>

      <nav role="navigation" aria-label="Main" className="flex flex-col space-y-1">
       {navigationItems.map((item) => (
        <Link
         key={item.path}
         href={item.path}
         className={cn(
          "block px-3 py-2 rounded-md text-sm",
          currentPath === item.path
           ? "bg-zion-purple/20 text-zion-cyan"
           : "text-zinc-400 hover:text-white hover:bg-zinc-900"
         )}
        >
         {item.title}
        </Link>
       ))}
      </nav>
     </div>

     {/* Main content */}
     <div className="flex-grow max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
      {children}
     </div>
    </div>
  );
}

export default ApiDocsLayout;
