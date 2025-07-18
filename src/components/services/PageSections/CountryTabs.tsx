<<<<<<< HEAD
import { useState, useEffect } from 'react';';
import { Search } from '@/components/ui/icons;'
;;
import { Input } from '@/components/ui/input;';
import {;
  Pagination,;
  PaginationContent,;''
  PaginationItem,;
  PaginationButton,;
  PaginationNext,;''
  PaginationPrevious,;;
} from '@/components/ui/pagination;'';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;'';
import { CountryServiceCard } from '@/components/services/CountryServiceCard;'';
import type { CountryPricing } from '@/data/onsiteServicePricing;'
;''
interface CountryTabsProps {;;
  popularCountries: "string[];",;";";";";""
  filteredCountries: "CountryPricing[];",;";";";""
  handleCountrySelect: (country: CountryPricing) => void;";";";";""
  onQuote?: (country: "CountryPricing) => void;",;";";";";""
  searchQuery: "string;",";";";";""
  setSearchQuery: "(query: string) => void;";"
};
;
=======
import { useState, useEffect } from 'react''
import { Search } from '@/components/ui/icons'

import { Input } from '@/components/ui/input'
import {;
  Pagination,;
  PaginationContent,'
  PaginationItem,'
  PaginationButton,
  PaginationNext,'
  PaginationPrevious,'
} from '@/components/ui/pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CountryServiceCard } from '@/components/services/CountryServiceCard'
import type { CountryPricing } from '@/data/onsiteServicePricing'
'
interface CountryTabsProps {'
  popularCountries: string[]
  filteredCountries: CountryPricing[],"
  handleCountrySelect: (country: CountryPricing) => void
  onQuote?: (country: CountryPricing) => void"
  searchQuery: "string,
  setSearchQuery: "(query: string) => void"

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export function CountryTabs(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect,;
  onQuote,;
  searchQuery,;
  setSearchQuery,;
}: CountryTabsProps) {;
  const [currentPage, setCurrentPage] = useState(1);
<<<<<<< HEAD
  const countriesPerPage: unknown = 50;
;
  useEffect(() => {;
    setCurrentPage(1);
  }, [searchQuery]);
;
  const totalPages: unknown = Math.ceil(filteredCountries.length / countriesPerPage);
  const paginatedCountries: unknown = filteredCountries.slice(;""
    (currentPage - 1) * countriesPerPage,;";""
    currentPage * countriesPerPage,;";";""
  );";";";""
  return (;";";";";""
    <Tabs defaultValue="featured" className="w-full">;";";";";""
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;";";";""
        <TabsTrigger;";";";";""
          value="featured";";";";";""
          className="data-[state=active]:bg-zion-purple";";""
        >;";";""
          Featured Countries;";";";""
        </TabsTrigger>;";";";";""
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;""
          All Countries;";""
        </TabsTrigger>;";";""
      </TabsList>;";";";""
;";";";";""
      <TabsContent value="featured" className="mt-0">;";";";";""
        <div className="mb-6">;";";";";""
          <h2 className="text-2xl font-bold text-white text-center">;";";""
            Featured Service Locations;";";";""
          </h2>;";";";";""
          <p className="text-zion-slate-light text-center mt-2">;""
            Browse our most popular service destinations;";""
          </p>;";";""
        </div>;";";";""
;";";";";""
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;"
=======
  const countriesPerPage = 50;

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,;""
    currentPage * countriesPerPage,;
  )
  return (;"
    <Tabs defaultValue="featured className=w-full">"
      <TabsList className=bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6>"
        <TabsTrigger;"
          value=featured
          className="data-[state=active]:bg-zion-purple"
        >
          Featured Countries;
        </TabsTrigger>"
        <TabsTrigger value="all className=data-[state=active]:bg-zion-purple">"
          All Countries;
        </TabsTrigger>;"
      </TabsList>"

      <TabsContent value=featured" className="mt-0>"
        <div className="mb-6">
          <h2 className=text-2xl font-bold text-white text-center">"
            Featured Service Locations;
          </h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations;"
          </p>;"
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          {filteredCountries;
            .filter((country) => popularCountries.includes(country.country));
            .map((country) => (;
              <CountryServiceCard;
                key={country.country};
                country={country};
                onSelect={handleCountrySelect};
                isPopular={true};
                {...(onQuote ? { onQuote } : {})};
<<<<<<< HEAD
              />;""
            ))};";""
        </div>;";";""
      </TabsContent>;";";";""
;";";";";""
      <TabsContent value="all" className="mt-0">;";";";";""
        <div className="mb-6 max-w-md mx-auto">;";";";";""
          <div className="relative">;";";";";""
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;";";";""
            <Input;";";";";""
              type="text";";";";";""
              placeholder="Search by country...";";";";";""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
              value={searchQuery};
              onChange={(e) => setSearchQuery(e.target.value)};""
            />;";""
          </div>;";";""
        </div>;";";";""
;";";";";""
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;"
=======
              />
            ))};""
        </div>;
      </TabsContent>
;"
      <TabsContent value="all className=mt-0">"
        <div className=mb-6 max-w-md mx-auto>"
          <div className="relative>"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
            <Input;
              type="text"
              placeholder=Search by country...
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery};
              onChange={(e) => setSearchQuery(e.target.value)}
            />;""
          </div>;
        </div>
;"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          {paginatedCountries.map((country) => (;
            <CountryServiceCard;
              key={country.country};
              country={country};
              onSelect={handleCountrySelect};
              isPopular={popularCountries.includes(country.country)};
<<<<<<< HEAD
              {...(onQuote ? { onQuote } : {})};
            />;""
          ))};";""
        </div>;";";""
;";";";""
        {totalPages > 1 && (;";";";";""
          <div className="mt-8">;";";";";""
            <Pagination className="justify-center">;"
=======
              {...(onQuote ? { onQuote } : {})};"
            />"
          ))};"
        </div>;
"
        {totalPages > 1 && (;"
          <div className=mt-8>"
            <Pagination className="justify-center>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
              <PaginationContent>;
                <PaginationItem>;
                  <PaginationPrevious;
                    href={`?page=${currentPage - 1}`};
<<<<<<< HEAD
                    onClick={(e) => {;
                      e.preventDefault();""
                      setCurrentPage(Math.max(1, currentPage - 1));";""
                    }};";";""
                  />;";";";""
                </PaginationItem>;";";";";""
                {Array.from({ length: "totalPages "}, (_, i) => i + 1).map(;"
=======
                    onClick={(e) => {;"
                      e.preventDefault()"
                      setCurrentPage(Math.max(1, currentPage - 1));"
                    }};
                  />"
                </PaginationItem>;"
                {Array.from({ length: totalPages }, (_, i) => i + 1).map("
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  (page) => (;
                    <PaginationItem key={page}>;
                      <PaginationButton;
                        page={page};
                        isActive={page === currentPage};
                        onClick={(e) => {;
                          e.preventDefault();
                          setCurrentPage(page);
                        }};
                      />;
                    </PaginationItem>;
                  ),;
                )};
                <PaginationItem>;
                  <PaginationNext;`
                    href={`?page=${currentPage + 1}`};
                    onClick={(e) => {;
                      e.preventDefault();
                      setCurrentPage(Math.min(totalPages, currentPage + 1));
                    }};
                  />;
                </PaginationItem>;
              </PaginationContent>;
            </Pagination>;
          </div>;
        )};
<<<<<<< HEAD
      </TabsContent>;""
    </Tabs>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </TabsContent>"
    </Tabs>;
  );"
}"

}""
}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
