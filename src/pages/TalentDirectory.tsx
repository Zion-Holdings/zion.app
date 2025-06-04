
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FilterSidebar } from "@/components/talent/FilterSidebar";
import { TalentResults } from "@/components/talent/TalentResults";
import { TalentSkeleton } from "@/components/talent/TalentSkeleton";
import { ErrorBanner } from "@/components/talent/ErrorBanner";
import { ErrorBoundary } from "@/components/ErrorBoundary"; // Import ErrorBoundary
import { useTalentDirectory } from "@/hooks/useTalentDirectory";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TalentProfile } from "@/types/talent";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function TalentDirectory() {
  const navigate = useNavigate();

  // Use our custom hook to manage state
  const {
    filteredTalents,
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
  } = useTalentDirectory();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredTalents]);

  const totalPages = Math.ceil(filteredTalents.length / itemsPerPage);
  const paginatedTalents = filteredTalents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent);
    setIsHireModalOpen(true);
  };
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <TalentSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.
            </p>
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
            <div className="flex-1"> {/* Added a wrapper div to contain Results and Pagination */}
              <ErrorBoundary fallback={<p className="text-red-500 text-center">Could not load talent content. Please try again later.</p>}>
                <TalentResults
                  talents={paginatedTalents}
                  totalCount={filteredTalents.length}
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
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(Math.max(1, currentPage - 1));
                            }}
                          />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                        ))}
                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(Math.min(totalPages, currentPage + 1));
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
