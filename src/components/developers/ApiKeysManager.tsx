
import React, { useState } from 'react';
import { useApiKeys, ApiKeyScope } from '../../hooks/useApiKeys';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';
import CodeBlock from './CodeBlock';
import { Copy, MoreHorizontal, Eye, EyeOff, RotateCcw, Trash2, Settings } from 'lucide-react';

export default function ApiKeysManager() {
  const {
    apiKeys,
    loading,
    newApiKey,
    fetchApiKeys,
    createApiKey,
    deleteApiKey,
    toggleApiKey,
    updateApiKeyScopes,
    regenerateApiKey,
    revokeApiKey,
    clearNewApiKey
  } = useApiKeys();

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [selectedScopes, setSelectedScopes] = useState<ApiKeyScope[]>([]);
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  const scopeOptions: { value: ApiKeyScope; label: string; description: string }[] = [
    { value: 'jobs:read', label: 'Read Jobs', description: 'Access to view job listings' },
    { value: 'jobs:write', label: 'Write Jobs', description: 'Create and manage job listings' },
    { value: 'talent:read', label: 'Read Talent', description: 'Access to view talent profiles' },
    { value: 'quotes:write', label: 'Write Quotes', description: 'Create and manage quotes' },
    { value: 'webhooks:manage', label: 'Manage Webhooks', description: 'Set up and manage webhook endpoints' }
  ];

  const handleCreateKey = async () => {
    if (!newKeyName.trim() || selectedScopes.length === 0) return;
    
    await createApiKey(newKeyName.trim(), selectedScopes);
    setNewKeyName('');
    setSelectedScopes([]);
    setShowCreateDialog(false);
  };

  const handleScopeToggle = (scope: ApiKeyScope) => {
    setSelectedScopes(prev => 
      prev.includes(scope) 
        ? prev.filter(s => s !== scope)
        : [...prev, scope]
    );
  };

  const getExampleCode = (apiKey: string) => {
    return `curl -X GET "https://ziontechgroup.com/api/v1/jobs" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json"`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">API Keys</h2>
          <p className="text-zinc-400">Manage your API keys for accessing Zion Tech Group APIs</p>
        </div>
        <Button onClick={() => setShowCreateDialog(true)} className="bg-zion-cyan hover:bg-zion-cyan-light text-zinc-900">
          Create New API Key
        </Button>
      </div>

      {/* Create New API Key Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogTrigger asChild>
          <span></span>
        </DialogTrigger>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Create New API Key</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Create a new API key with specific permissions
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="keyName" className="text-white">Key Name</Label>
              <input
                id="keyName"
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="e.g., Production API Key"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
            
            <div>
              <Label className="text-white">Permissions</Label>
              <div className="space-y-2 mt-2">
                {scopeOptions.map((scope) => (
                  <Checkbox
                    key={scope.value}
                    checked={selectedScopes.includes(scope.value)}
                    onChange={() => handleScopeToggle(scope.value)}
                    label={`${scope.label} - ${scope.description}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateDialog(false)} className="border-zinc-700 text-white hover:bg-zinc-800">
              Cancel
            </Button>
            <Button onClick={handleCreateKey} className="bg-zion-cyan hover:bg-zion-cyan-light text-zinc-900">
              Create Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New API Key Display */}
      {newApiKey && (
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold mb-2">New API Key Created!</h3>
          <p className="text-green-300 text-sm mb-3">
            Copy this key now. You won't be able to see it again.
          </p>
          <CodeBlock code={newApiKey} className="mb-3" />
          <div className="space-y-2">
            <p className="text-green-300 text-sm font-medium">Example Usage:</p>
            <CodeBlock code={getExampleCode(newApiKey)} language="bash" />
          </div>
          <Button onClick={clearNewApiKey} className="mt-3 bg-green-600 hover:bg-green-700">
            I've Copied the Key
          </Button>
        </div>
      )}

      {/* API Keys List */}
      <div className="space-y-4">
        {apiKeys.map((apiKey) => (
          <div key={apiKey.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white font-semibold">{apiKey.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    apiKey.isActive 
                      ? 'bg-green-900/30 text-green-400 border border-green-500/30' 
                      : 'bg-red-900/30 text-red-400 border border-red-500/30'
                  }`}>
                    {apiKey.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span>Created: {new Date(apiKey.createdAt).toLocaleDateString()}</span>
                  {apiKey.lastUsed && (
                    <span>Last used: {new Date(apiKey.lastUsed).toLocaleDateString()}</span>
                  )}
                </div>
                
                <div className="mt-2">
                  <span className="text-zinc-400 text-sm">Permissions: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {apiKey.scopes.map((scope) => (
                      <span key={scope} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                        {scope}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleApiKey(apiKey.id)}
                  className="text-zinc-400 hover:text-white"
                >
                  {apiKey.isActive ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">
                    <DropdownMenuItem onClick={() => setShowRegenerateConfirm(apiKey.id)} className="cursor-pointer">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Regenerate Key
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowDeleteConfirm(apiKey.id)} className="cursor-pointer text-red-500">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Key
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            {/* Key Preview */}
            <div className="mt-3 pt-3 border-t border-zinc-800">
              <Popover>
                <PopoverTrigger className="flex items-center hover:text-zinc-300">
                  <Settings className="h-4 w-4 mr-2" />
                  <span className="text-sm text-zinc-400">View Key</span>
                </PopoverTrigger>
                <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3">
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-400">API Key (first 8 characters):</p>
                    <code className="text-zinc-300 text-sm">{apiKey.key.substring(0, 8)}...</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(apiKey.key)}
                      className="w-full text-zinc-400 hover:text-white"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Full Key
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))}
      </div>

      {/* Regenerate Confirmation Dialog */}
      <AlertDialog open={showRegenerateConfirm !== null} onOpenChange={() => setShowRegenerateConfirm(null)}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Regenerate API Key</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This will invalidate the current key and create a new one. Any applications using the old key will stop working.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <DialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (showRegenerateConfirm) {
                  regenerateApiKey(showRegenerateConfirm);
                  setShowRegenerateConfirm(null);
                }
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Regenerate Key
            </AlertDialogAction>
          </DialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteConfirm !== null} onOpenChange={() => setShowDeleteConfirm(null)}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete API Key</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action cannot be undone. The API key will be permanently deleted and any applications using it will stop working.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <DialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (showDeleteConfirm) {
                  deleteApiKey(showDeleteConfirm);
                  setShowDeleteConfirm(null);
                }
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete Key
            </AlertDialogAction>
          </DialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
