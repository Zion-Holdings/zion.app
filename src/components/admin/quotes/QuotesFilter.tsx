<<<<<<< HEAD
import React from 'react';;
import { Calendar, RefreshCw } from '@/components/ui/icons;'
;;
import { Card, CardContent } from '@/components/ui/card;;
import { Input } from '@/components/ui/input;;
import {;
  Select,;''
  SelectContent,;
  SelectItem,;
  SelectTrigger,;''
  SelectValue,;;
} from '@/components/ui/select;;
import {;
  Popover,;
  PopoverContent,;''
  PopoverTrigger,;;
} from '@/components/ui/popover;;
import { Button } from '@/components/ui/button;;
import { Calendar as CalendarComponent } from '@/components/ui/calendar;;
import { format } from 'date-fns;;
import type { DateRange } from 'react-day-picker;;
import type { QuoteStatus } from '@/types/quotes;'
;''
interface QuotesFilterProps {;;
  searchQuery: "string;",;";";";";""
  setSearchQuery: "(value: string) => void;",;";";";";""
  statusFilter: QuoteStatus | 'all,;'
  setStatusFilter: (value: QuoteStatus | 'all') => void;,;;'
  archiveFilter: 'active' | 'archived' | 'all,;'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;,;;'
  dateRange: "DateRange | undefined;",";";";";""
  setDateRange: "(range: DateRange | undefined) => void;",;";";";";""
  onReset: "() => void;";"
};

=======
import React from 'react'
import { Calendar, RefreshCw } from '@/components/ui/icons'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {;
  Select,'
  SelectContent,'
  SelectItem,
  SelectTrigger,'
  SelectValue,'
} from '@/components/ui/select'
import {'
  Popover,
  PopoverContent,'
  PopoverTrigger,'
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { format } from 'date-fns'
import type { DateRange } from 'react-day-picker'
import type { QuoteStatus } from '@/types/quotes'
'
interface QuotesFilterProps {'
  searchQuery: "string,"
  setSearchQuery: (value: string) => void,""
  statusFilter: QuoteStatus | 'all,'
  setStatusFilter: (value: QuoteStatus | 'all') => void,'
  archiveFilter: 'active' | 'archived' | 'all,'
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void,'
  dateRange: DateRange | undefined","
  setDateRange: (range: DateRange | undefined) => void,""
  onReset: "() => void

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export const _QuotesFilter: unknown React.FC<QuotesFilterProps> = ({;
  searchQuery,;
  setSearchQuery,;
  statusFilter,;
  setStatusFilter,;
  archiveFilter,;
  setArchiveFilter,;
<<<<<<< HEAD
  dateRange,;""
  setDateRange,;";""
  onReset,;";";""
}) => {;";";";""
  return (;";";";";""
    <Card className="mb-6 bg-zion-blue-dark border-zion-blue-light">;";";";";""
      <CardContent className="p-6">;";";";";""
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">;";";";";""
          <div className="relative">;";";";""
            <Input;";";";";""
              placeholder="Search quotes...";";";";";""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";"
              value={searchQuery};
              onChange={(e) => setSearchQuery(e.target.value)};""
            />;";""
          </div>;";";""
;";";";""
          <div>;";";";";""
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;";";""
            <Select;";";";""
              value={statusFilter};";";";";""
              onValueChange={(value: QuoteStatus | 'all') =>;'
                setStatusFilter(value);
              };''
            >;;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;";";";";""
                <SelectValue placeholder="Status" />;";";";""
              </SelectTrigger>;";";";";""
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;";";";";""
                <SelectItem value="all">All Statuses</SelectItem>;";";";";""
                <SelectItem value="new">New</SelectItem>;";";";";""
                <SelectItem value="in_review">In Review</SelectItem>;";";";";""
                <SelectItem value="responded">Responded</SelectItem>;";";";";""
                <SelectItem value="accepted">Accepted</SelectItem>;";";";";""
                <SelectItem value="closed">Closed</SelectItem>;"
              </SelectContent>;""
            </Select>;";""
          </div>;";";""
;";";";""
          <div>;";";";";""
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>;";";""
            <Select;";";";""
              value={archiveFilter};";";";";""
              onValueChange={(value: 'active' | 'archived' | 'all') =>;'
                setArchiveFilter(value);
              };''
            >;;
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">;";";";";""
                <SelectValue placeholder="Archive Status" />;";";";""
              </SelectTrigger>;";";";";""
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;";";";";""
                <SelectItem value="active">Active Only</SelectItem>;";";";";""
                <SelectItem value="archived">Archived Only</SelectItem>;";";";";""
                <SelectItem value="all">All Quotes</SelectItem>;"
              </SelectContent>;""
            </Select>;";""
          </div>;";";""
;";";";""
          <div>;";";";";""
            <p className="text-zion-slate-light text-sm mb-2">Date Range</p>;";""
            <Popover>;";";""
              <PopoverTrigger asChild>;";";";""
                <Button;";";";";""
                  variant="outline";";";";";""
                  className="w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white";";";";""
                >;";";";";""
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light" />;";""
                  {dateRange?.from ? (;";";""
                    dateRange.to ? (;";";";""
                      <>;";";";";""
                        {format(dateRange.from, 'LLL dd, y')} -{' '};;'
                        {format(dateRange.to, 'LLL dd, y')};'
                      </>;''
                    ) : (;;
                      format(dateRange.from, 'LLL dd, y');'
                    );
                  ) : (;
                    <span>Date range</span>;''
                  )};
                </Button>;
              </PopoverTrigger>;''
              <PopoverContent;;
                className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light";";";";";""
                align="start";";""
              >;";";""
                <CalendarComponent;";";";""
                  initialFocus;";";";";""
                  mode="range";";";";";""
                  {...(dateRange?.from ? { defaultMonth: "dateRange.from "} : {})};"
=======
  dateRange,"
  setDateRange,;"
  onReset,;";"
}) => {;";"
  return (;";"
    <Card className=mb-6 bg-zion-blue-dark border-zion-blue-light">""
      <CardContent className=p-6>"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end>;"";
          <div className="relative">;"
            <Input;";"
              placeholder=Search quotes..."""
              className=pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery};
              onChange={(e) => setSearchQuery(e.target.value)}"
            />;
          </div>;"";"";
          <div>;"";
            <p className="text-zion-slate-light text-sm mb-2">Status</p>;"
            <Select;";"
              value={statusFilter};"
              onValueChange={(value: QuoteStatus | 'all') =>'
                setStatusFilter(value);
              }'
            >'
              <SelectTrigger className=bg-zion-blue border-zion-blue-light text-white>"
                <SelectValue placeholder="Status />;"";
              </SelectTrigger>;"";
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;"
                <SelectItem value=all">All Statuses</SelectItem>""
                <SelectItem value=new>New</SelectItem>"
                <SelectItem value="in_review>In Review</SelectItem>;"";
                <SelectItem value="responded">Responded</SelectItem>;"
                <SelectItem value=accepted">Accepted</SelectItem>""
                <SelectItem value=closed>Closed</SelectItem>"
              </SelectContent>"
            </Select>;
          </div>;"";"";
          <div>;"";
            <p className="text-zion-slate-light text-sm mb-2">Archive</p>;"
            <Select;";"
              value={archiveFilter};"
              onValueChange={(value: 'active' | 'archived' | 'all') =>'
                setArchiveFilter(value);
              }'
            >'
              <SelectTrigger className=bg-zion-blue border-zion-blue-light text-white>"
                <SelectValue placeholder="Archive Status />;"";
              </SelectTrigger>;"";
              <SelectContent className="bg-zion-blue-dark border-zion-blue-light text-white">;"
                <SelectItem value=active">Active Only</SelectItem>""
                <SelectItem value=archived>Archived Only</SelectItem>"
                <SelectItem value="all>All Quotes</SelectItem>"
              </SelectContent>"
            </Select>;"
          </div>;";"
;";"
          <div>;";"
            <p className=text-zion-slate-light text-sm mb-2">Date Range</p>";
            <Popover>;""
              <PopoverTrigger asChild>;""
                <Button;"";
                  variant=outline"""
                  className=w-full justify-start text-left font-normal bg-zion-blue border-zion-blue-light text-white";";
                >"
                  <Calendar className="mr-2 h-4 w-4 text-zion-slate-light />;"
                  {dateRange?.from ? (";
                    dateRange.to ? (;"";
                      <>;""
                        {format(dateRange.from, 'LLL dd, y')} -{' '}'
                        {format(dateRange.to, 'LLL dd, y')}'
                      </>'
                    ) : ('
                      format(dateRange.from, 'LLL dd, y')'
                    );
                  ) : (;
                    <span>Date range</span>'
                  )}'
                </Button>;
              </PopoverTrigger>'
              <PopoverContent'
                className="w-auto p-0 bg-zion-blue-dark border-zion-blue-light;"";
                align="start";
              >";"
                <CalendarComponent;";"
                  initialFocus;";";
                  mode="range"
                  {...(dateRange?.from ? { defaultMonth: dateRange.from "} : {})}"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  selected={dateRange};
                  onSelect={setDateRange};
                  numberOfMonths={2};
                />;
<<<<<<< HEAD
              </PopoverContent>;""
            </Popover>;";""
          </div>;";";""
        </div>;";";";""
;";";";";""
        <div className="mt-4 flex justify-end">;";";";""
          <Button;";";";";""
            variant="outline";";";";""
            onClick={onReset};";";";";""
            className="border-zion-blue-light text-zion-slate-light";";";";""
          >;";";";";""
            <RefreshCw className="mr-2 h-4 w-4" /> Reset Filters;"
          </Button>;
        </div>;
      </CardContent>;""
    </Card>;";""
  );";";""
};";";";""
""""""
=======
              </PopoverContent>
            </Popover>;"
          </div>;";
        </div>";";
"
        <div className="mt-4 flex justify-end>;"";
          <Button;"";
            variant="outline"
            onClick={onReset};";"
            className=border-zion-blue-light text-zion-slate-light""
          >";""
            <RefreshCw className=mr-2 h-4 w-4 /> Reset Filters"
          </Button>;
        </div>;
      </CardContent>"
    </Card>;
  );"";
};"";
"""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
