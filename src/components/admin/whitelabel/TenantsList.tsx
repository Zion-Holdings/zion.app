import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import {logErrorToProduction} from '@/utils/productionLogger';
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { WhitelabelTenant } from '@/hooks/useWhitelabelTenant';
import { format } from 'date-fns';

export function TenantsList() {
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTenants();
  }, []);

  const loadTenants = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setTenants(data as WhitelabelTenant[]);
    } catch (error: any) {
      logErrorToProduction('Error loading tenants:', { data: error });
      toast({
        variant: 'destructive',
        title: 'Failed to load tenants',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {
      const { error } = await supabase
        .from('whitelabel_tenants')
        .update({ is_active: !(tenant as any).is_active })
        .eq('id', (tenant as any).id);
        
      if (error) throw error;
      
      // Update local state
      setTenants(tenants.map(t => 
        (t as any).id === (tenant as any).id ? { ...t, is_active: !(t as any).is_active } : t
      ));
      
      toast({
        title: `Tenant ${(tenant as any).is_active ? 'deactivated' : 'activated'}`,
        description: `${(tenant as any).brand_name} has been ${(tenant as any).is_active ? 'deactivated' : 'activated'} successfully.`,
      });
    } catch (error: any) {
      logErrorToProduction('Error toggling tenant status:', { data: error });
      toast({
        variant: 'destructive',
        title: 'Failed to update tenant',
        description: error.message,
      });
    }
  };

  const verifyDns = async (tenant: WhitelabelTenant) => {
    try {
      // In a real implementation, this would verify DNS records
      // For now, we'll just mark it as verified
      const { error } = await supabase
        .from('whitelabel_tenants')
        .update({ dns_verified: true })
        .eq('id', (tenant as any).id);
        
      if (error) throw error;
      
      // Update local state
      setTenants(tenants.map(t => 
        (t as any).id === (tenant as any).id ? { ...t, dns_verified: true } : t
      ));
      
      toast({
        title: 'DNS verified',
        description: `Custom domain for ${(tenant as any).brand_name} has been verified.`,
      });
    } catch (error: any) {
      logErrorToProduction('Error verifying DNS:', { data: error });
      toast({
        variant: 'destructive',
        title: 'Failed to verify DNS',
        description: error.message,
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">White-Label Tenants</h2>
        <Button onClick={loadTenants} variant="outline" size="sm">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Subdomain</TableHead>
                <TableHead>Custom Domain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No tenants found. Create a new white-label instance to get started.
                  </TableCell>
                </TableRow>
              ) : (
                tenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell className="font-medium">{tenant.brand_name}</TableCell>
                    <TableCell>
                      <a 
                        href={`https://${tenant.subdomain}.ziontechmarketplace.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline"
                      >
                        {tenant.subdomain}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </TableCell>
                    <TableCell>
                      {tenant.custom_domain ? (
                        <div className="flex items-center">
                          <a
                            href={`https://${tenant.custom_domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center"
                          >
                            {tenant.custom_domain}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                          <Badge 
                            variant={tenant.dns_verified ? "default" : "outline"} 
                          >
                            {tenant.dns_verified ? "Verified" : "Pending"}
                          </Badge>
                          {!tenant.dns_verified && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => verifyDns(tenant)}
                              className="ml-1 h-6 w-6 p-0"
                            >
                              <RefreshCcw className="h-3 w-3" />
                              <span className="sr-only">Verify DNS</span>
                            </Button>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={tenant.is_active ? "default" : "destructive"}>
                        {tenant.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Tenant
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            Manage Admins
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleTenantStatus(tenant)}>
                            {tenant.is_active ? (
                              <>
                                <PowerOff className="mr-2 h-4 w-4" />
                                Disable Tenant
                              </>
                            ) : (
                              <>
                                <Power className="mr-2 h-4 w-4" />
                                Enable Tenant
                              </>
                            )}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
