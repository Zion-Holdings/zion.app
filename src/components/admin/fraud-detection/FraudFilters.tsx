
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from 'lucide-react';



interface FraudFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: string | null;
  setStatusFilter: (value: string | null) => void;
  severityFilter: string | null;
  setSeverityFilter: (value: string | null) => void;
  contentTypeFilter: string | null;
  setContentTypeFilter: (value: string | null) => void;
  resetFilters: () => void;
}

export const FraudFilters: React.FC<FraudFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  severityFilter,
  setSeverityFilter,
  contentTypeFilter,
  setContentTypeFilter,
  resetFilters,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by user or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Statuses</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="reviewed">Reviewed</SelectItem>
          <SelectItem value="ignored">Ignored</SelectItem>
          <SelectItem value="actioned">Actioned</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={severityFilter || ""} onValueChange={value => setSeverityFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Severity" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Severities</SelectItem>
          <SelectItem value="safe">Safe</SelectItem>
          <SelectItem value="suspicious">Suspicious</SelectItem>
          <SelectItem value="dangerous">Dangerous</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={contentTypeFilter || ""} onValueChange={value => setContentTypeFilter(value || null)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Types</SelectItem>
          <SelectItem value="signup">Signups</SelectItem>
          <SelectItem value="job">Jobs</SelectItem>
          <SelectItem value="message">Messages</SelectItem>
          <SelectItem value="quote">Quotes</SelectItem>
          <SelectItem value="review">Reviews</SelectItem>
        </SelectContent>
      </Select>
      
      <Button variant="outline" onClick={resetFilters} className="md:w-auto">
        <Filter className="h-4 w-4 mr-2" /> Reset Filters
      </Button>
    </div>
  );
};
