
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SharedInbox() {
  // Mock messages
  const messages = [
    {
      id: "msg-1",
      from: "John Smith",
      subject: "Interview Scheduled",
      preview: "Your interview with senior developer candidate has been scheduled for Tuesday at 2pm.",
      timestamp: "2h ago",
      unread: true
    },
    {
      id: "msg-2",
      from: "Talent Support",
      subject: "New talent matches",
      preview: "We've found 5 new candidates that match your recent job posting for UI/UX Designer.",
      timestamp: "Yesterday",
      unread: false
    },
    {
      id: "msg-3",
      from: "Sarah Wilson",
      subject: "Contract approved",
      preview: "The contract with freelancer Michael Chen has been approved and signed.",
      timestamp: "2d ago",
      unread: false
    }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Shared Inbox</CardTitle>
            <CardDescription>Team messages and notifications</CardDescription>
          </div>
          <Badge className="bg-blue-500">{messages.filter(m => m.unread).length} New</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex flex-col p-4 hover:bg-muted/50 cursor-pointer ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
            >
              <div className="flex items-center justify-between">
                <p className={`font-medium ${message.unread ? 'font-semibold' : ''}`}>{message.from}</p>
                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
              </div>
              <p className="text-sm font-medium mt-1">{message.subject}</p>
              <p className="text-sm text-muted-foreground mt-1 truncate">{message.preview}</p>
            </div>
          ))}
        </div>
        
        {messages.length === 0 && (
          <div className="p-4 text-center text-muted-foreground">
            No new messages
          </div>
        )}
        
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">
            View All Messages
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
