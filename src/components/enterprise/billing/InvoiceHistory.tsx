
import React from "react";
import { Download, FileText, Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";



import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function InvoiceHistory() {
  // Mock invoice data
  const invoices = [
    {
      id: "INV-1234",
      date: "May 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "May 2025",
    },
    {
      id: "INV-1233",
      date: "Apr 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Apr 2025",
    },
    {
      id: "INV-1232",
      date: "Mar 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Mar 2025",
    },
    {
      id: "INV-1231",
      date: "Feb 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Feb 2025",
    },
    {
      id: "INV-1230",
      date: "Jan 1, 2025",
      amount: "$1,999.00",
      status: "paid",
      period: "Jan 2025",
    },
    {
      id: "INV-1229",
      date: "Dec 1, 2024",
      amount: "$1,999.00",
      status: "paid",
      period: "Dec 2024",
    },
  ];

  const handleDownloadInvoice = (invoiceId: string) => {
    // In a real app, this would trigger a download of the invoice PDF
    toast({
      title: "Downloading invoice",
      description: `Downloading invoice ${invoiceId} as PDF.`,
    });
  };

  const getBadgeForStatus = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500">Paid</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Invoice History</h3>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search invoices..."
            className="w-[200px] md:w-[300px] pl-9"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice Number</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Billing Period</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.period}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{getBadgeForStatus(invoice.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1"
                      onClick={() => handleDownloadInvoice(invoice.id)}
                    >
                      <Download className="h-3.5 w-3.5" />
                      PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="text-sm text-muted-foreground">
          Showing 1 - 6 of 12 invoices
        </div>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
