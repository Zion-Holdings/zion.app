import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useNavigate
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady';
import { FilterSidebar } from '@/components/talent/FilterSidebar';
import { TalentResults } from '@/components/talent/TalentResults';
import { TalentSkeleton } from '@/components/talent/TalentSkeleton';
import { ErrorBanner } from '@/components/talent/ErrorBanner';
import ErrorBoundary from '@/components/GlobalErrorBoundary'; // Import ErrorBoundary
import { useTalentDirectory } from '@/hooks/useTalentDirectory';
import { SORT_OPTIONS } from '@/data/sortOptions';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TalentProfile } from '@/types/talent';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function TalentDirectory() {
  const router = useRouterReady(); // Use our custom hook
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [initialized, setInitialized] = useState(false);

  // Force re-render and reset state when route changes
  const routeKey = useRouteChange(() => {
    setInitialized(false);
    setCurrentPage(1);
  });

  // Use our custom hook to manage state
  const {
    filteredTalents,
    total,
    isLoading,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    error,
    isAuthenticated,
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection,
  } = useTalentDirectory(currentPage, itemsPerPage);

  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredTalents, total]);

  const totalPages = Math.ceil(total / itemsPerPage);
  const paginatedTalents = filteredTalents;

  // Load filters from query parameters on first load
  useEffect(() => {
    if (!router.isReady || initialized) return;
    
    const {
      search,
      skills,
      availability,
      regions,
      priceMin,
      priceMax,
      expMin,
      expMax,
      sort,
      page,
    } = router.query as Record<string, string>;

    if (page) setCurrentPage(parseInt(page, 10) || 1);
    if (search) setSearchTerm(search);
    if (skills) skills.split(',').forEach((s) => toggleSkill(s));
    if (availability)
      availability.split(',').forEach((a) => toggleAvailability(a));
    if (regions) regions.split(',').forEach((r) => toggleRegion(r));
    if (priceMin && priceMax)
      setPriceRange([Number(priceMin), Number(priceMax)]);
    if (expMin && expMax)
      setExperienceRange([Number(expMin), Number(expMax)]);
    if (sort && SORT_OPTIONS.some((o) => o.value === sort))
      setSortOption(sort);
    setInitialized(true);
  }, [router.isReady, router.query, initialized]); // Fixed dependencies

  // Persist filters to query parameters
  useEffect(() => {
    if (!initialized || !router.isReady) return;
    
    const query: Record<string, string> = {};
    if (searchTerm) query.search = searchTerm;
    if (selectedSkills.length) query.skills = selectedSkills.join(',');
    if (selectedAvailability.length)
      query.availability = selectedAvailability.join(',');
    if (selectedRegions.length) query.regions = selectedRegions.join(',');
    if (priceRange[0] !== 50 || priceRange[1] !== 200) {
      query.priceMin = String(priceRange[0]);
      query.priceMax = String(priceRange[1]);
    }
    if (experienceRange[0] !== 0 || experienceRange[1] !== 15) {
      query.expMin = String(experienceRange[0]);
      query.expMax = String(experienceRange[1]);
    }
    if (sortOption !== 'relevance') query.sort = sortOption;
    if (currentPage > 1) query.page = String(currentPage);
    
    router.replace({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  }, [
    router.isReady,
    searchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    experienceRange,
    sortOption,
    currentPage,
    initialized,
  ]); // Fixed dependencies

  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent);
    setIsHireModalOpen(true);
  };

  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    router.push(`/talent/${id}`); // Changed to router.push
  };

  // Add key prop to force re-render when route changes
  const pageKey = `talent-directory-${routeKey}-${router.asPath}`;

  if (isLoading) {
    return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <TalentSkeleton />
      </div>
    );
  }

  if (
    !isLoading &&
    !error &&
    filteredTalents.length === 0 &&
    !searchTerm &&
    selectedSkills.length === 0 &&
    selectedAvailability.length === 0 &&
    selectedRegions.length === 0 &&
    priceRange[0] === 50 &&
    priceRange[1] === 200 &&
    experienceRange[0] === 0 &&
    experienceRange[1] === 15
  ) {
    return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <Image
            src="/images/talent-placeholder.svg"
            alt="No talent"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-white mb-4">
            Talent Directory Currently Empty
          </h2>
          <p className="text-zion-slate-light max-w-md mx-auto mb-6">
            No talent profiles are currently available.
          </p>
          <Link href="/create-talent-profile">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
              Be the first to list a talent
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
      </div>
    );
  }

  return (
    <div key={pageKey} className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              AI & Tech Talent Directory
            </h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers,
              and tech professionals for your projects.
            </p>
          </div>
          {isAdmin && (
            <Link
              href="/create-talent-profile"
              className="bg-zion-purple text-white px-4 py-2 rounded hover:bg-zion-purple-dark"
            >
              Add Talent
            </Link>
          )}
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <div className="w-full lg:w-64 shrink-0 hidden lg:block">
            <FilterSidebar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedSkills={selectedSkills}
              toggleSkill={toggleSkill}
              selectedAvailability={selectedAvailability}
              toggleAvailability={toggleAvailability}
              selectedRegions={selectedRegions}
              toggleRegion={toggleRegion}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              experienceRange={experienceRange}
              setExperienceRange={setExperienceRange}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
              sortOption={sortOption}
              setSortOption={setSortOption}
              clearFilters={clearFilters}
            />
          </div>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <Button
              onClick={() => setIsMobileFilterOpen(true)}
              variant="outline"
              className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
            >
              Filter & Sort
            </Button>
          </div>

          {/* Results and Pagination Wrapper for ErrorBoundary */}
          <div className="flex-1">
            {' '}
            {/* Added a wrapper div to contain Results and Pagination */}
            <ErrorBoundary>
              <TalentResults
                talents={paginatedTalents}
                totalCount={total}
                isLoading={isLoading}
                viewProfile={viewProfile}
                handleRequestHire={handleRequestHire}
                isAuthenticated={isAuthenticated}
                activeFiltersProps={{
                  selectedSkills,
                  toggleSkill,
                  selectedAvailability,
                  toggleAvailability,
                  selectedRegions,
                  toggleRegion,
                  priceRange,
                  setPriceRange,
                  experienceRange,
                  setExperienceRange,
                  clearFilters,
                }}
              />

              {totalPages > 1 && (
                <div className="mt-6">
                  <Pagination className="justify-center">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href={`?page=${currentPage - 1}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(Math.max(1, currentPage - 1));
                          }}
                        />
                      </PaginationItem>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <PaginationItem key={page}>
                            <PaginationButton
                              page={page}
                              isActive={page === currentPage}
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page);
                              }}
                            />
                          </PaginationItem>
                        )
                      )}
                      <PaginationItem>
                        <PaginationNext
                          href={`?page=${currentPage + 1}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            );
                          }}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </ErrorBoundary>
          </div>

          {/* Mobile filter sidebar */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
              <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-white">Filter & Sort</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-zion-slate-light h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <FilterSidebar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedSkills={selectedSkills}
                  toggleSkill={toggleSkill}
                  selectedAvailability={selectedAvailability}
                  toggleAvailability={toggleAvailability}
                  selectedRegions={selectedRegions}
                  toggleRegion={toggleRegion}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  experienceRange={experienceRange}
                  setExperienceRange={setExperienceRange}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                  clearFilters={clearFilters}
                  isMobileFilterOpen={isMobileFilterOpen}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
