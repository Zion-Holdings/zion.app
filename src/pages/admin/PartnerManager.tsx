import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import { Check, Flag, Search, Settings, X, Users } from 'lucide-react';






import { supabase } from "@/integrations/supabase/client";
import { logErrorToProduction } from '@/utils/productionLogger';
import { EmptyState } from "@/components/ui/empty-state";

interface PartnerProfile {
  id: string;
  user_id: string;
  name: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  niche: string;
  audience_size: string;
  social_media?: Record<string, string>;
  website?: string;
  bio?: string;
  payout_method?: string;
  fraud_flags?: number;
  commission_rate?: number;
}

export default function PartnerManager() {
  const [partners, setPartners] = useState<PartnerProfile[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<PartnerProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedPartner, setSelectedPartner] = useState<PartnerProfile | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(25);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login?returnTo=' + encodeURIComponent('/admin/partners'));
      return;
    }

    fetchPartners();
  }, [isAuthenticated, router]);

  const fetchPartners = async () => {
    try {
      setIsLoading(true);
      // In a real application, check admin permissions here
      
      const { data, error } = await supabase
        .from('partner_profiles')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      // If no data is returned, use mock data
      if (!data || data.length === 0) {
        const mockData: PartnerProfile[] = [
          {
            id: '1',
            user_id: 'user1',
            name: 'AI Bytes',
            status: 'pending',
            created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            niche: 'AI Tutorials',
            audience_size: '10k-50k',
            social_media: { twitter: '@aibytes', youtube: 'AI Bytes' },
            website: 'aibytes.com',
            bio: 'We create AI tutorials and insights for developers.',
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25
          },
          {
            id: '2',
            user_id: 'user2',
            name: 'ML Academy',
            status: 'approved',
            created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
            niche: 'Machine Learning Education',
            audience_size: 'over100k',
            social_media: { twitter: '@mlacademy', youtube: 'ML Academy' },
            website: 'mlacademy.edu',
            bio: 'Premiere online academy for machine learning enthusiasts.',
            payout_method: 'bank',
            fraud_flags: 0,
            commission_rate: 30
          },
          {
            id: '3',
            user_id: 'user3',
            name: 'Tech Insights',
            status: 'rejected',
            created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            niche: 'Technology News',
            audience_size: '1k-10k',
            social_media: { twitter: '@techinsights' },
            website: 'techinsights.io',
            bio: 'We share insights about the latest in tech.',
            payout_method: 'crypto',
            fraud_flags: 2,
            commission_rate: 20
          },
          {
            id: '4',
            user_id: 'user4',
            name: 'CodeMaster',
            status: 'approved',
            created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            niche: 'Coding Tutorials',
            audience_size: '50k-100k',
            social_media: { youtube: 'CodeMaster', linkedin: 'codemaster' },
            website: 'codemaster.dev',
            bio: 'Learn to code with our expert tutorials.',
            payout_method: 'paypal',
            fraud_flags: 0,
            commission_rate: 25
          },
          {
            id: '5',
            user_id: 'user5',
            name: 'AI Daily',
            status: 'pending',
            created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            niche: 'AI News',
            audience_size: '10k-50k',
            social_media: { twitter: '@aidaily', instagram: '@aidailynews' },
            website: 'aidaily.news',
            bio: 'Daily updates on the world of artificial intelligence.',
            payout_method: 'platform_credit',
            fraud_flags: 1,
            commission_rate: 20
          }
        ];
        
        setPartners(mockData);
        filterPartners(mockData, activeTab, searchQuery);
      } else {
        setPartners(data as PartnerProfile[]);
        filterPartners(data as PartnerProfile[], activeTab, searchQuery);
      }
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching partners' });
      toast({
        title: "Error",
        description: "Failed to load partner data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filterPartners = (partners: PartnerProfile[], status: string, query: string) => {
    let filtered = partners;
    
    // Filter by status
    if (status !== "all") {
      filtered = filtered.filter(p => p.status === status);
    }
    
    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.niche.toLowerCase().includes(lowerQuery) ||
        p.bio?.toLowerCase().includes(lowerQuery) ||
        p.website?.toLowerCase().includes(lowerQuery)
      );
    }
    
    setFilteredPartners(filtered);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    filterPartners(partners, activeTab, e.target.value);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    filterPartners(partners, value, searchQuery);
  };

  const handleViewDetails = (partner: PartnerProfile) => {
    setSelectedPartner(partner);
    setIsDetailsOpen(true);
  };

  const handleOpenSettings = (partner: PartnerProfile) => {
    setSelectedPartner(partner);
    setCommissionRate(partner.commission_rate || 25);
    setIsSettingsOpen(true);
  };

  const handleUpdateStatus = async (partnerId: string, status: 'approved' | 'rejected') => {
    try {
      // In a real app, this would update the database
      setPartners(partners.map(p => 
        p.id === partnerId ? { ...p, status } : p
      ));
      
      filterPartners(
        partners.map(p => p.id === partnerId ? { ...p, status } : p),
        activeTab,
        searchQuery
      );
      
      toast({
        title: status === 'approved' ? "Partner Approved" : "Partner Rejected",
        description: `The partner has been ${status}.`,
        variant: status === 'approved' ? "default" : "destructive",
      });
      
      // Close the dialog if open
      if (isDetailsOpen && selectedPartner?.id === partnerId) {
        setIsDetailsOpen(false);
      }
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error updating partner status' });
      toast({
        title: "Error",
        description: "Failed to update partner status",
        variant: "destructive",
      });
    }
  };

  const handleSaveSettings = async () => {
    if (!selectedPartner) return;
    
    try {
      // Update commission rate
      setPartners(partners.map(p => 
        p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p
      ));
      
      filterPartners(
        partners.map(p => p.id === selectedPartner.id ? { ...p, commission_rate: commissionRate } : p),
        activeTab,
        searchQuery
      );
      
      toast({
        title: "Settings Updated",
        description: "Partner settings have been updated successfully.",
        variant: "default",
      });
      
      setIsSettingsOpen(false);
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error updating partner settings' });
      toast({
        title: "Error",
        description: "Failed to update partner settings",
        variant: "destructive",
      });
    }
  };

  const getAudienceSizeLabel = (size: string) => {
    switch (size) {
      case 'under1k': return 'Under 1,000';
      case '1k-10k': return '1,000 - 10,000';
      case '10k-50k': return '10,000 - 50,000';
      case '50k-100k': return '50,000 - 100,000';
      case 'over100k': return 'Over 100,000';
      default: return size;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-900/30 text-yellow-500 border-yellow-600">Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-900/30 text-green-500 border-green-600">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getFraudFlagBadge = (flags: number = 0) => {
    if (flags === 0) return null;
    
    return (
      <Badge variant="outline" className="bg-red-900/30 text-red-500 border-red-600 flex items-center gap-1">
        <Flag className="h-3 w-3" />
        {flags}
      </Badge>
    );
  };

  return (
    <div className="container max-w-7xl py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Management</h1>
          <p className="text-zion-slate-light">Approve and manage affiliate partners</p>
        </div>
      </div>

      <Card className="bg-zion-blue-dark border-zion-blue-light mb-8">
        <CardHeader className="pb-3">
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Pending Applications
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.filter(p => p.status === 'pending').length}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
                  Partners waiting for review and approval
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Active Partners
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.filter(p => p.status === 'approved').length}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
                  Currently approved and active partners
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-blue border-zion-blue-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zion-slate-light">
                  Fraud Flags
                </CardTitle>
                <div className="text-2xl font-bold text-white">
                  {partners.reduce((total, p) => total + (p.fraud_flags || 0), 0)}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-zion-slate-light">
                  Total potential fraud flags detected
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader className="pb-3 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <CardTitle>Partners</CardTitle>
            <CardDescription>Manage partnership applications and settings</CardDescription>
          </div>
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-zion-slate-light" />
              <Input
                placeholder="Search partners..."
                className="pl-8"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pending" className="space-y-4">
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
            
            <TabsContent value="approved" className="space-y-4">
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
            
            <TabsContent value="rejected" className="space-y-4">
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus} 
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
            
            <TabsContent value="all" className="space-y-4">
              <PartnerTable 
                partners={filteredPartners} 
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Partner Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-lg bg-zion-blue border-zion-blue-light">
          <DialogHeader>
            <DialogTitle>Partner Details</DialogTitle>
            <DialogDescription>
              Review the details of the partner application
            </DialogDescription>
          </DialogHeader>
          
          {selectedPartner && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Name</p>
                  <p className="font-medium text-white">{selectedPartner.name}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Status</p>
                  <div>{getStatusBadge(selectedPartner.status)}</div>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-zion-slate-light">Bio</p>
                <p className="text-white">{selectedPartner.bio || "No bio provided"}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Niche</p>
                  <p className="text-white">{selectedPartner.niche}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Audience Size</p>
                  <p className="text-white">{getAudienceSizeLabel(selectedPartner.audience_size)}</p>
                </div>
              </div>
              
              {selectedPartner.website && (
                <div>
                  <p className="text-xs text-zion-slate-light">Website</p>
                  <p className="text-zion-cyan">{selectedPartner.website}</p>
                </div>
              )}
              
              {selectedPartner.social_media && Object.keys(selectedPartner.social_media).length > 0 && (
                <div>
                  <p className="text-xs text-zion-slate-light">Social Media</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedPartner.social_media).map(([platform, handle]) => (
                      <p key={platform} className="text-white">
                        <span className="font-medium">{platform}: </span>
                        {handle}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-zion-slate-light">Payout Method</p>
                  <p className="text-white capitalize">{selectedPartner.payout_method || "Not specified"}</p>
                </div>
                <div>
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>
                  <p className="text-white">{selectedPartner.commission_rate || 25}%</p>
                </div>
              </div>
              
              {selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && (
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">
                  <AlertTitle className="flex items-center gap-2">
                    <Flag className="h-4 w-4" />
                    Potential Fraud Detected ({selectedPartner.fraud_flags})
                  </AlertTitle>
                  <AlertDescription>
                    This application has triggered our fraud detection system. Review carefully before approving.
                  </AlertDescription>
                </Alert>
              )}
              
              {selectedPartner.status === 'pending' && (
                <div className="flex justify-end gap-2 mt-4">
                  <Button 
                    variant="destructive" 
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'rejected')}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleUpdateStatus(selectedPartner.id, 'approved')}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Partner Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="bg-zion-blue border-zion-blue-light">
          <DialogHeader>
            <DialogTitle>Partner Settings</DialogTitle>
            <DialogDescription>
              Configure commission rates and other settings
            </DialogDescription>
          </DialogHeader>
          
          {selectedPartner && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white">Partner Name</label>
                <p className="text-zion-slate-light">{selectedPartner.name}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-white" htmlFor="commission-rate">
                  Commission Rate (%)
                </label>
                <Input
                  id="commission-rate"
                  type="number"
                  min="1"
                  max="50"
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(parseInt(e.target.value))}
                />
                <p className="text-xs text-zion-slate-light mt-1">
                  Percentage of reward granted to this partner for successful referrals
                </p>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsSettingsOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveSettings} className="bg-zion-purple hover:bg-zion-purple-dark">
                  Save Changes
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface PartnerTableProps {
  partners: PartnerProfile[];
  isLoading: boolean;
  onViewDetails: (partner: PartnerProfile) => void;
  onUpdateStatus: (partnerId: string, status: 'approved' | 'rejected') => void;
  onOpenSettings: (partner: PartnerProfile) => void;
  getStatusBadge: (status: string) => React.JSX.Element;
  getFraudFlagBadge: (flags?: number) => React.JSX.Element | null;
}

function PartnerTable({ 
  partners, 
  isLoading, 
  onViewDetails, 
  onUpdateStatus,
  onOpenSettings,
  getStatusBadge,
  getFraudFlagBadge
}: PartnerTableProps) {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <p className="text-zion-slate-light">Loading partner data...</p>
      </div>
    );
  }
  
  if (partners.length === 0) {
    return (
      <div className="py-8">
        <EmptyState
          icon={<Users className="h-8 w-8" />}
          title="No Partners Found"
          description="There are no partner applications to display."
          className="border-none bg-transparent text-center"
        />
      </div>
    );
  }
  
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Niche</TableHead>
          <TableHead>Audience</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {partners.map((partner) => (
          <TableRow key={partner.id} className="border-zion-blue-light hover:bg-zion-blue-light/10">
            <TableCell className="font-medium text-white">
              <div className="flex items-center gap-2">
                {partner.name}
                {getFraudFlagBadge(partner.fraud_flags)}
              </div>
            </TableCell>
            <TableCell>{partner.niche}</TableCell>
            <TableCell>
              {partner.audience_size.replace('k', ',000').replace('-', ' - ').replace('over', 'Over ')}
            </TableCell>
            <TableCell>{getStatusBadge(partner.status)}</TableCell>
            <TableCell>
              {new Date(partner.created_at).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                {partner.status === 'pending' && (
                  <>
                    <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'rejected')}
                      className="text-red-500 hover:text-red-600 hover:bg-red-900/20"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Reject</span>
                    </Button>
                    <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => onUpdateStatus(partner.id, 'approved')}
                      className="text-green-500 hover:text-green-600 hover:bg-green-900/20"
                    >
                      <Check className="h-4 w-4" />
                      <span className="sr-only">Approve</span>
                    </Button>
                  </>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onOpenSettings(partner)}
                  className="text-zion-slate-light hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onViewDetails(partner)}
                >
                  View
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
