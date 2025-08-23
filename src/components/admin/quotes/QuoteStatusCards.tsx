
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface QuoteStatusCardsProps {
  statusCounts: {
    new: number;
    in_review: number;
    responded: number;
    accepted: number;
    closed: number;
  };
}

export const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ statusCounts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            New Requests
            <Badge className="bg-blue-500">{statusCounts.new}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">Unreviewed quote requests</p>
        </CardContent>
      </Card>
      
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            In Review
            <Badge className="bg-yellow-500">{statusCounts.in_review}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">Quotes being evaluated</p>
        </CardContent>
      </Card>
      
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Responded
            <Badge className="bg-purple-500">{statusCounts.responded}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">Quotes with responses sent</p>
        </CardContent>
      </Card>
      
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Accepted
            <Badge className="bg-green-500">{statusCounts.accepted}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">Successfully converted quotes</p>
        </CardContent>
      </Card>
      
      <Card className="bg-zion-blue-dark border border-zion-blue-light">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-white flex justify-between items-center">
            Closed
            <Badge className="bg-gray-500">{statusCounts.closed}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zion-slate-light">Finalized or declined quotes</p>
        </CardContent>
      </Card>
    </div>
  );
};
