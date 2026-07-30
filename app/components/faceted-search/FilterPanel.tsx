"use client";

import React, { useState } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";

interface FilterState {
  industry: string[];
  category: string[];
  useCase: string[];
}

interface FilterPanelProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  activeCount: number;
  onClearAll: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

// Filter options - would come from API in production
const FILTER_OPTIONS = {
  industry: [
    "Technology", "Healthcare", "Finance", "E-commerce",
    "Manufacturing", "Education", "Energy", "Transportation",
  ],
  category: ["AI", "Cloud", "Cybersecurity", "Data", "Automation", "DevOps", "Blockchain", "IoT"],
  useCase: [
    "Predictive Analytics", "Content Generation", "Threat Detection",
    "Data Migration", "Process Automation", "Chatbots",
    "Recommendation Engines", "Fraud Detection",
  ],
};

export default function FilterPanel({
  filters,
  setFilters,
  activeCount,
  onClearAll,
  isMobile = false,
  onClose,
}: FilterPanelProps) {
  const [openSections, setOpenSections] = useState({
    industry: true,
    category: true,
    useCase: true,
  });

  const toggleSection = (section: keyof FilterState) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilter = (type: keyof FilterState, value: string) => {
    const current = filters[type];
    const newFilters = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    setFilters({ ...filters, [type]: newFilters });

    if (isMobile && onClose) {
      onClose();
    }
  };

  const renderFilterSection = (type: keyof FilterState, options: string[]) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(type)}
        className="flex items-center justify-between w-full text-left text-sm font-medium text-slate-300 mb-3"
      >
        <span className="capitalize">{type} ({options.filter((o) => filters[type].includes(o)).length})</span>
        <ChevronDownIcon
          className={clsx(
            "w-4 h-4 transition-transform duration-200",
            openSections[type] && "rotate-180"
          )}
        />
      </button>

      {openSections[type] && (
        <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-2">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[type].includes(option)}
                onChange={() => toggleFilter(type, option)}
                className="w-4 h-4 rounded border-slate-500 text-purple-500 focus:ring-purple-500"
              />
              <span className="text-sm text-slate-300 hover:text-white transition-colors">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Filter Services</h2>
        {activeCount > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-purple-400 hover:text-purple-300 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter Options */}
      <div className="flex-1 overflow-y-auto">
        {renderFilterSection("industry", FILTER_OPTIONS.industry)}
        {renderFilterSection("category", FILTER_OPTIONS.category)}
        {renderFilterSection("useCase", FILTER_OPTIONS.useCase)}
      </div>

      {/* Apply Button (mobile only) */}
      {isMobile && (
        <button
          onClick={onClose}
          className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-colors"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
}