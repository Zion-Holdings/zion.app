
import { useState } from 'react';
import { useLocalStorage } from '@/hooks';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet, Database, Save } from 'lucide-react';



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export default function AccountSettings() {

  const { user } = useAuth();
  const [displayWeb3, setDisplayWeb3] = useLocalStorage('display_web3', false);
  const [didHandle, setDidHandle] = useLocalStorage('did_handle', '');
  const [enableBackup, setEnableBackup] = useLocalStorage('enable_backup', false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      try {
        setDisplayWeb3(displayWeb3);
        setDidHandle(didHandle);
        setEnableBackup(enableBackup);
        logInfo('Saved settings', { displayWeb3, didHandle, enableBackup });
        toast.success('Account settings updated successfully');
      } catch (e) {
        logErrorToProduction('Failed to save settings', { data:  e });
        toast.error('Failed to save settings');
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };
  
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
        return;
      }
      
      // Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`;
      await ethereum.request({
        method: 'personal_sign',
        params: [address, message]
      });
      
      // Auto-set DID handle if ENS is available
      try {
        const provider = new (window as any).ethers.providers.Web3Provider(ethereum);
        const ensName = await provider.lookupAddress(address);
        if (ensName) {
          setDidHandle(ensName);
        }
      } catch (error) {
        logErrorToProduction('ENS lookup error:', { data: error });
      }
      
      toast.success(`Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`);
    } catch (error: any) {
      toast.error(error.message || 'Failed to connect wallet');
    }
  };

  return (
    <>
      <SEO title="Account Settings" description="Manage your account" />
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal information and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  value={user?.email || ''}
                  disabled
                  className="bg-gray-100"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="didHandle">Web3 Identity Handle</Label>
                <div className="flex gap-2">
                  <Input
                    id="didHandle"
                    value={didHandle}
                    onChange={(e) => setDidHandle(e.target.value)}
                    placeholder="ENS / Lens / Ceramic / Farcaster"
                  />
                  <Button 
                    variant="outline" 
                    onClick={handleConnectWallet}
                    type="button"
                    className="flex items-center gap-1"
                  >
                    <Wallet className="h-4 w-4" />
                    Connect
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Link your decentralized identity to display on your profile
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>
                </div>
                <Switch
                  id="displayWeb3"
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="backup" className="flex items-center gap-1">
                    <Database className="h-4 w-4" />
                    Decentralized Backup
                  </Label>
                  <p className="text-xs text-gray-500">
                    Backup your profile data to IPFS/Arweave
                  </p>
                </div>
                <Switch
                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />
              </div>
              
              {enableBackup && (
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                  Data will be backed up to decentralized storage. This feature is in beta.
                </div>
              )}
              
              <Button 
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Web3 Features</CardTitle>
              <CardDescription>Manage your Web3 connections and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Connected Wallet</h3>
                {didHandle ? (
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{didHandle}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>No wallet connected</span>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Backup Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Profile Data</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Resume Data</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Project History</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Reviews</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Recovery Options</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  disabled={!enableBackup}
                >
                  Restore Profile from Backup
                </Button>
                <p className="text-xs text-gray-500 mt-1">
                  {enableBackup 
                    ? 'Restore your profile data from decentralized storage' 
                    : 'Enable backup first to use this feature'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
