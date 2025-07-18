'use client';
;'
import React, { useEffect, useState } from 'react';'
import { User, LogOut, LogIn } from '@/components/ui/icons';'
import { supabase } from '@/utils/supabase/client';'
import { Button } from '@/components/ui/button';'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';'
import { Badge } from '@/components/ui/badge';
;'
import { useRouter } from 'next/navigation';
import type {;
  User as SupabaseUser,;
  AuthChangeEvent,;
  Session,;'
} from '@supabase/supabase-js';
;
interface UserProfileProps {;'
  onUserChange?: (user: "SupabaseUser | null) => void;";
};
;
function getUserEmail(): unknown {user: SupabaseUser | null): string {;"
  return user?.email ?? '';
};
;
function isEmailVerified(): unknown {user: SupabaseUser | null): boolean {;
  // Supabase user has email_confirmed_at as string | null;
  return Boolean(user?.email_confirmed_at);
};
;
function getUserCreatedAt(): unknown {user: SupabaseUser | null): string {;'
  return user?.created_at ? new Date(user.created_at).toLocaleDateString() : '';
};
;
export default function UserProfile(): unknown {{ onUserChange }: UserProfileProps) {;
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router: unknown unknown = useRouter();
;
  useEffect(() => {;
    // Get initial session;
    const getInitialSession: unknown unknown = async () => {;
      if (!supabase) {;
        setLoading(false);
        return;
      };
      const {;'
        data: "{ session "},;
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
      onUserChange?.(session?.user ?? null);
    };
;
    getInitialSession();
;
    // Listen for auth changes;
    if (!supabase) {;
      return;
    };
    const {;"
      data: "{ subscription "},;
    } = supabase.auth.onAuthStateChange(;"
      (event: "AuthChangeEvent", _session: Session | null) => {;
        setUser(session?.user ?? null);
        setLoading(false);
        onUserChange?.(session?.user ?? null);
      },;
    );
;
    return () => subscription.unsubscribe();
  }, [onUserChange]);
;
  const handleSignOut: unknown unknown = async () => {;
    if (!supabase) {;
      return;
    };
    await supabase.auth.signOut();
  };
;
  const handleSignIn: unknown unknown = () => {;"
    router.push('/auth/login');
  };
;
  if (loading) {;
    return (;'
      <Card className="w-full max-w-sm">;"
        <CardContent className="p-6">;"
          <div className="animate-pulse space-y-4">;"
            <div className="h-4 bg-muted rounded"></div>;"
            <div className="h-4 bg-muted rounded w-3/4"></div>;
          </div>;
        </CardContent>;
      </Card>;
    );
  };
;
  if (!user) {;
    return (;"
      <Card className="w-full max-w-sm">;
        <CardHeader>;"
          <CardTitle className="flex items-center gap-2">;"
            <User className="h-5 w-5" />;
            Not Signed In;
          </CardTitle>;
        </CardHeader>;
        <CardContent>;"
          <Button onClick={handleSignIn} className="w-full">;"
            <LogIn className="h-4 w-4 mr-2" />;
            Sign In;
          </Button>;
        </CardContent>;
      </Card>;
    );
  };
;
  return (;"
    <Card className="w-full max-w-sm">;
      <CardHeader>;"
        <CardTitle className="flex items-center gap-2">;"
          <User className="h-5 w-5" />;
          User Profile;
        </CardTitle>;
      </CardHeader>;"
      <CardContent className="space-y-4">;"
        <div className="space-y-2">;"
          <div className="flex items-center gap-2">;"
            <span className="text-sm font-medium">Email:</span>;"
            <span className="text-sm">{getUserEmail(user)}</span>;
          </div>;"
          <div className="flex items-center gap-2">;"
            <span className="text-sm font-medium">Status:</span>;"
            <Badge variant={isEmailVerified(user) ? 'default' : 'secondary'}>;'
              {isEmailVerified(user) ? 'Verified' : 'Unverified'};
            </Badge>;
          </div>;'
          <div className="flex items-center gap-2">;"
            <span className="text-sm font-medium">Joined:</span>;"
            <span className="text-sm">{getUserCreatedAt(user)}</span>;
          </div>;
        </div>;"
        <Button onClick={handleSignOut} variant="outline" className="w-full">;"
          <LogOut className="h-4 w-4 mr-2" />;
          Sign Out;
        </Button>;
      </CardContent>;
    </Card>;
  );
};
"