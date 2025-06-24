import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProtectedRoute } from '@/components/ProtectedRoute';

interface KycRequest {
  id: string;
  userEmail: string;
  status: 'pending' | 'approved' | 'rejected';
}

const mockRequests: KycRequest[] = [
  { id: '1', userEmail: 'alice@example.com', status: 'pending' },
  { id: '2', userEmail: 'bob@example.com', status: 'pending' },
];

export default function KycDashboard() {
  const [requests, setRequests] = useState<KycRequest[]>(mockRequests);

  const updateStatus = (id: string, status: 'approved' | 'rejected') => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">KYC Dashboard</h1>
            <Card>
              <CardHeader>
                <CardTitle>Verification Queue</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requests.map(req => (
                    <li key={req.id} className="flex items-center justify-between bg-white p-4 rounded-md">
                      <span>{req.userEmail}</span>
                      <span className="capitalize">{req.status}</span>
                      {req.status === 'pending' && (
                        <div className="space-x-2">
                          <Button size="sm" onClick={() => updateStatus(req.id, 'approved')}>Approve</Button>
                          <Button size="sm" variant="destructive" onClick={() => updateStatus(req.id, 'rejected')}>Reject</Button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
