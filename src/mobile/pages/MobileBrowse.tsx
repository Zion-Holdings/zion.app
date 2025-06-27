
import React, { useState } from "react";
import { MobileHeader } from "@/mobile/components/common/MobileHeader";
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation";
import { BrowseFilters } from "@/mobile/components/browse/BrowseFilters";
import { BrowseCards } from "@/mobile/components/browse/BrowseCards";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { logInfo } from '@/utils/productionLogger';


// Mock data for demonstration
const jobsData = [
  {
    id: "1",
    title: "Senior React Developer",
    subtitle: "TechCorp Inc.",
    description: "Looking for a skilled React developer to join our team for a long-term project. Experience with TypeScript and GraphQL required.",
    location: "Remote",
    badges: ["React", "TypeScript", "GraphQL"],
    price: "$70-90/hr",
    timePosted: "2 days ago",
    match: 92
  },
  {
    id: "2",
    title: "UX/UI Designer",
    subtitle: "Creative Studios",
    description: "Seeking a creative UI/UX designer with experience in mobile app design. Portfolio must include at least 3 shipped applications.",
    location: "New York, US (Hybrid)",
    badges: ["Figma", "Design System", "Mobile Apps"],
    price: "$60-80/hr",
    timePosted: "4 hours ago",
    match: 87
  },
  {
    id: "3",
    title: "Full Stack Engineer",
    subtitle: "StartupXYZ",
    description: "Looking for a full stack engineer who can work with React, Node.js and AWS. Must have experience building scalable applications.",
    location: "San Francisco, CA",
    badges: ["React", "Node.js", "AWS"],
    price: "$75-100/hr",
    timePosted: "1 week ago",
    match: 78
  }
];

const talentsData = [
  {
    id: "1",
    title: "Sarah Johnson",
    subtitle: "UX Designer • 5 years exp",
    description: "Experienced UX designer specialized in creating intuitive mobile and web experiences. Former lead designer at DesignCorp.",
    location: "London, UK",
    badges: ["UI/UX", "Figma", "User Testing"],
    price: "$75/hr",
    image: "",
    match: 95
  },
  {
    id: "2",
    title: "Michael Chen",
    subtitle: "Full Stack Dev • 8 years exp",
    description: "Full stack developer with expertise in React, Node.js and AWS. Built multiple applications from ground up.",
    location: "Remote",
    badges: ["React", "Node.js", "AWS"],
    price: "$90/hr",
    image: "",
    match: 89
  },
  {
    id: "3",
    title: "Elena Rodriguez",
    subtitle: "Project Manager • 10 years exp",
    description: "PMP certified project manager with experience in leading agile teams. Successfully delivered over 15 large-scale projects.",
    location: "Madrid, Spain",
    badges: ["Agile", "Scrum", "JIRA"],
    price: "$85/hr",
    image: "",
    match: 82
  }
];

export function MobileBrowse() {
  const { user } = useAuth();
  const isClient = user?.userType === 'client' || user?.userType === 'admin';
  const [browseType, setBrowseType] = useState<"jobs" | "talents">(isClient ? "talents" : "jobs");
  
  const handleViewDetails = (id: string) => {
    logInfo(`View details for item ${id}`);
    // Navigate to details page
  };
  
  return (
    <div className="min-h-screen">
      <MobileHeader
        title={browseType === "jobs" ? "Browse Jobs" : "Browse Talents"}
        showBack
      />
      
      <div className="flex justify-center my-3 px-4">
        <div className="inline-flex rounded-full border border-border p-1">
          <Button
            variant={browseType === "jobs" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBrowseType("jobs")}
          >
            Jobs
          </Button>
          <Button
            variant={browseType === "talents" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setBrowseType("talents")}
          >
            Talents
          </Button>
        </div>
      </div>
      
      <BrowseFilters type={browseType} />
      
      <div className="py-4 px-4">
        <BrowseCards
          items={browseType === "jobs" ? jobsData : talentsData}
          type={browseType}
          onViewDetails={handleViewDetails}
        />
      </div>
      
      <BottomNavigation />
    </div>
  );
}
