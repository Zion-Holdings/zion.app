
import React from "react";
import { BillingHeader } from "./BillingHeader";
import { CurrentSubscription } from "./CurrentSubscription";
import { PaymentMethods } from "./PaymentMethods";
import { InvoiceHistory } from "./InvoiceHistory";
import { UsageOverview } from "./UsageOverview";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function BillingDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <BillingHeader />
      
      <Tabs defaultValue="subscription" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoice History</TabsTrigger>
          <TabsTrigger value="usage">Usage Overview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subscription" className="space-y-8">
          <CurrentSubscription />
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-8">
          <PaymentMethods />
        </TabsContent>
        
        <TabsContent value="invoices" className="space-y-8">
          <InvoiceHistory />
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-8">
          <UsageOverview />
        </TabsContent>
      </Tabs>
    </div>
  );
}
