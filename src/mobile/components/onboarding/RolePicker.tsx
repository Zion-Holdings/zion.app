
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Check } from "lucide-react";

type UserRole = "talent" | "client" | null;

interface RolePickerProps {
  onSelect: (role: UserRole) => void;
}

export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const { t } = useTranslation();

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role);
    onSelect(role);
  };

  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium">{t('onboarding.title')}</h2>
      <p className="text-muted-foreground">{t('onboarding.subtitle')}</p>

      <div className="space-y-3 mt-6">
        <Card 
          className={`cursor-pointer transition-all ${
            selectedRole === 'talent' 
              ? "border-primary bg-primary/5" 
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect('talent')}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{t('onboarding.talent_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('onboarding.talent_desc')}</p>
              </div>
              {selectedRole === 'talent' && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all ${
            selectedRole === 'client' 
              ? "border-primary bg-primary/5" 
              : "border-border hover:border-primary/40"
          }`}
          onClick={() => handleSelect('client')}
        >
          <CardContent className="p-5">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{t('onboarding.client_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('onboarding.client_desc')}</p>
              </div>
              {selectedRole === 'client' && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
