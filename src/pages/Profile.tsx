import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar';
import { VerifiedBadge } from '@/components/VerifiedBadge';

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  notifications: { email: boolean; push: boolean };
  softDeleted?: boolean;
  kycStatus?: 'unverified' | 'pending' | 'verified';
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('/api/users/me');
        setUser(res.data);
      } catch (err: any) {
        console.error('Failed to load profile', err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleSave = async () => {
    if (!user) return;
    try {
      const res = await axios.patch('/api/users/me', user);
      setUser(res.data);
    } catch (err) {
      console.error('Failed to save profile', err);
      setError('Failed to save profile');
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async () => {
    const confirm = window.prompt('Enter password to confirm');
    if (!confirm) return;
    try {
      await axios.delete('/api/users/me');
      setUser(prev => (prev ? { ...prev, softDeleted: true } : prev));
    } catch (err) {
      console.error('Failed to delete user', err);
      setError('Deletion failed');
    }
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error && !user) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!user) {
    return <div className="p-4">No user found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-4">
          <TabsTrigger value="info">Personal Info</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <div className="space-y-4">
            <div>
              <Avatar className="w-24 h-24 mb-2">
                {avatarPreview || user.avatarUrl ? (
                  <AvatarImage src={avatarPreview || user.avatarUrl} alt={user.name || "User avatar"} />
                ) : (
                  <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                )}
              </Avatar>
              {user.kycStatus === 'verified' && (
                <VerifiedBadge verified label="Verified Identity" />
              )}
              <Input type="file" aria-label="avatar" onChange={handleAvatarChange} />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <Button variant="destructive" onClick={handleDelete}>
            Delete account
          </Button>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="nemail"
                checked={user.notifications.email}
                onCheckedChange={v =>
                  setUser({
                    ...user,
                    notifications: { ...user.notifications, email: !!v },
                  })
                }
              />
              <label htmlFor="nemail" className="text-sm text-white">
                Email notifications
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="npush"
                checked={user.notifications.push}
                onCheckedChange={v =>
                  setUser({
                    ...user,
                    notifications: { ...user.notifications, push: !!v },
                  })
                }
              />
              <label htmlFor="npush" className="text-sm text-white">
                Push notifications
              </label>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
