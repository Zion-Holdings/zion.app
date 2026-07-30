"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { ChevronDownIcon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "./useDarkMode";
import FilterPanel from "./FilterPanel";
import ServiceCard from "./ServiceCard";

// Type definitions
interface Service {
  id: string;
  title: string;
  description: string;
  industry: string;
  category: string;
  useCase: string;
  icon?: string;
}

interface FilterState {
  industry: string[];
  category: string[];
  useCase: string[];
}

// Sample data - in production, this would come from an API or static file
const SAMPLE_SERVICES: Service[] = Array.from({ length: 500 }, (_, i) => ({
  id: `service-${i}`,
  title: `AI/ML Service #${i + 1}`,
  description: `Enterprise-grade AI solution for ${
    ["predictive analytics", "natural language processing", "computer vision", "recommendation engines", "fraud detection"][i % 5]
  } with seamless integration.`,
  industry: ["Technology", "Healthcare", "Finance", "E-commerce", "Manufacturing"][i % 5],
  category: ["AI", "Cloud", "Cybersecurity", "Data", "Automation"][i % 5],
  useCase: ["Predictive Analytics", "Content Generation", "Threat Detection", "Data Migration", "Process Automation"][i % 5],
}));

// Filter Chip Component
interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

const FilterChip = ({ label, onRemove }: FilterChipProps) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-700/50 text-slate-200 rounded-full border border-slate-600/50 hover:bg-slate-700 transition-colors">
    {label}
    <button
      onClick={onRemove}
      className="hover:text-red-400 transition-colors"
      aria-label={`Remove ${label} filter`}
    >
      <XMarkIcon className="w-3 h-3" />
    </button>
  </div>
);

// Main FacetedSearch Component
export default function FacetedSearch() {
  const [filters, setFilters] = useState<FilterState>({
    industry: [],
    category: [],
    useCase: [],
  });

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { isDark, toggleDark } = useDarkMode();

  // Filter services based on active filters
  const filteredServices = useMemo(() => {
    return SAMPLE_SERVICES.filter((service) => {
      const matchesIndustry =
        filters.industry.length === 0 || filters.industry.includes(service.industry);
      const matchesCategory =
        filters.category.length === 0 || filters.category.includes(service.category);
      const matchesUseCase =
        filters.useCase.length === 0 || filters.useCase.includes(service.useCase);

      return matchesIndustry && matchesCategory && matchesUseCase;
    });
  }, [filters]);

  // Calculate active filter count
  const activeCount = useMemo(
    () => filters.industry.length + filters.category.length + filters.useCase.length,
    [filters]
  );

  // Handle service click
  const handleServiceClick = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  // Auto-dismiss mobile filter overlay
  useEffect(() => {
    if (mobileOpen) {
      const handlePopState = () => setMobileOpen(false);
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDark}
          className="p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-700 transition-colors"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <SunIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <MoonIcon className="w-5 h-5 text-slate-300" />
          )}
        </button>
      </div>

      {/* Mobile Filter Overlay Background */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className="container-page py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI & IT Services</h1>
            <p className="text-slate-400">
              {filteredServices.length.toLocaleString()} services available
            </p>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="sm:hidden flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <ChevronDownIcon className="w-4 h-4" />
            Filters {activeCount > 0 && `(${activeCount})`}
          </button>
        </div>

        {/* Active Filters */}
        {activeCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 p-4 bg-slate-800/30 rounded-lg">
            {filters.industry.map((f) => (
              <FilterChip
                key={`industry-${f}`}
                label={`Industry: ${f}`}
                onRemove={() => setFilters({ ...filters, industry: filters.industry.filter((x) => x !== f) })}
              />
            ))}
            {filters.category.map((f) => (
              <FilterChip
                key={`category-${f}`}
                label={`Category: ${f}`}
                onRemove={() => setFilters({ ...filters, category: filters.category.filter((x) => x !== f) })}
              />
            ))}
            {filters.useCase.map((f) => (
              <FilterChip
                key={`useCase-${f}`}
                label={`Use Case: ${f}`}
                onRemove={() => setFilters({ ...filters, useCase: filters.useCase.filter((x) => x !== f) })}
              />
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {/* Desktop Filter Panel */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 h-fit bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                activeCount={activeCount}
                onClearAll={() => setFilters({ industry: [], category: [], useCase: [] })}
              />
            </div>
          </aside>

          {/* Mobile Filter Panel */}
          {mobileOpen && (
            <aside className="md:hidden fixed inset-0 z-50 overflow-y-auto">
              <div className="min-h-screen bg-slate-900/95 p-4">
                <div className="max-w-sm mx-auto">
                  <FilterPanel
                    filters={filters}
                    setFilters={setFilters}
                    activeCount={activeCount}
                    onClearAll={() => setFilters({ industry: [], category: [], useCase: [] })}
                    isMobile
                    onClose={() => setMobileOpen(false)}
                  />
                </div>
              </div>
            </aside>
          )}

          {/* Results */}
          <main className="flex-1">
            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-800 flex items-center justify-center mb-4">
                  <XMarkIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No services found</h3>
                <p className="text-slate-400 mb-4">
                  Try adjusting your filter criteria or clear all filters.
                </p>
                <button
                  onClick={() => setFilters({ industry: [], category: [], useCase: [] })}
                  className="px-4 py-2 text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceClick(service)}
                    className="cursor-pointer group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">{service.title[0]}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-400 text-sm mt-1 line-clamp-2">{service.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                            {service.category}
                          </span>
                          <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">
                            {service.industry}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900/95 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-900/95 rounded-t-2xl p-6 border-b border-slate-700/50 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{selectedService.title}</h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <XMarkIcon className="w-5 h-5 text-slate-300" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-slate-300 mb-4">{selectedService.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
                  {selectedService.category}
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-300">
                  {selectedService.industry}
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                  {selectedService.useCase}
                </span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-colors">
                  Request Demo
                </button>
                <button className="flex-1 px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg font-medium hover:bg-slate-700 transition-colors">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}