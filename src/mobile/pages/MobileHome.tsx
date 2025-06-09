
import React from "react";
import { MobileHeader } from "@/mobile/components/common/MobileHeader";
import { BottomNavigation } from "@/mobile/components/common/BottomNavigation";
import { ClientDashboard } from "@/mobile/components/dashboard/ClientDashboard";
import { TalentDashboard } from "@/mobile/components/dashboard/TalentDashboard";
import { useAuth } from "@/hooks/useAuth";

export function MobileHome() {
  const { user } = useAuth();
  const isClient = user?.userType === 'employer' || user?.userType === 'buyer';
  
  return (
    <div className="min-h-screen">
      <MobileHeader 
        title={isClient ? "Client Dashboard" : "Talent Dashboard"} 
        showNotifications 
        showSettings
      />
      
      <main className="py-4">
        {isClient ? <ClientDashboard /> : <TalentDashboard />}
      </main>
      
      <BottomNavigation />
    </div>
  );
}
