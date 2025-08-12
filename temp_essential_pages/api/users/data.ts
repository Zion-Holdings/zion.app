import { NextApiRequest, NextApiResponse } from 'next';

export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
  points: number;
  notifications: { email: boolean; push: boolean };
  softDeleted: boolean;
  password?: string; // For testing only
  emailVerified: boolean;
}

// 🔐 SECURITY: Generate development users from environment variables
const getDevMockUsers = (): Record<string, MockUser> => {
  const users: Record<string, MockUser> = {};

  // Only include development users in development mode
  if (process.env.NODE_ENV === 'development') {
    // Load development users from environment variables
    const devUser1Email = process.env.DEV_USER_1_EMAIL;
    const devUser1Password = process.env.DEV_USER_1_PASSWORD;
    const devUser2Email = process.env.DEV_USER_2_EMAIL;
    const devUser2Password = process.env.DEV_USER_2_PASSWORD;
    const devUser3Email = process.env.DEV_USER_3_EMAIL;
    const devUser3Password = process.env.DEV_USER_3_PASSWORD;

    if (devUser1Email && devUser1Password) {
      users['1'] = {
        id: '1',
        name: 'Development User 1',
        email: devUser1Email,
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
        bio: 'Development test user',
        points: 150,
        notifications: { email: true, push: true },
        softDeleted: false,
        password: devUser1Password,
        emailVerified: true,
      };
    }

    if (devUser2Email && devUser2Password) {
      users['2'] = {
        id: '2',
        name: 'Development User 2',
        email: devUser2Email,
        avatarUrl: '',
        bio: 'Development test user',
        points: 0,
        notifications: { email: true, push: false },
        softDeleted: false,
        password: devUser2Password,
        emailVerified: true,
      };
    }

    if (devUser3Email && devUser3Password) {
      users['3'] = {
        id: '3',
        name: 'Development User 3',
        email: devUser3Email,
        avatarUrl: '',
        bio: 'Development test user with unverified email',
        points: 0,
        notifications: { email: true, push: false },
        softDeleted: false,
        password: devUser3Password,
        emailVerified: false, // For testing email verification
      };
    }

    // Fallback users if no environment variables are set
    if (Object.keys(users).length === 0) {
      users['1'] = {
        id: '1',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatarUrl: '',
        bio: 'Development test user',
        points: 0,
        notifications: { email: true, push: false },
        softDeleted: false,
        password: 'password123',
        emailVerified: true,
      };

      users['2'] = {
        id: '2',
        name: 'Test User',
        email: 'test@unverified.com',
        avatarUrl: '',
        bio: 'Test user with unverified email',
        points: 0,
        notifications: { email: true, push: false },
        softDeleted: false,
        password: 'test123',
        emailVerified: false,
      };
    }
  }

  return users;
};

export const users: Record<string, MockUser> = getDevMockUsers();

export const findUserByEmail = (email: string): MockUser | undefined => {
  return Object.values(users).find(user => user.email === email);
};

export const findUserById = (id: string): MockUser | undefined => {
  return users[id];
};

// Mock user validation (for testing purposes only)
export const validateUser = (email: string, password: string): MockUser | null => {
  // 🔐 SECURITY: Only work in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const user = findUserByEmail(email);
  if (user && user.password === password) {
    return user;
  }
  return null;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 🔐 SECURITY: Don't expose user data in production
  if (process.env.NODE_ENV !== 'development') {
    return res.status(404).json({ error: 'Not found' });
  }

  // Return users without passwords for security
  const safeUsers = Object.entries(users).reduce((acc, [id, user]) => {
    acc[id] = {
      ...user,
      password: undefined, // Remove password from response
    };
    return acc;
  }, {} as Record<string, Partial<MockUser>>);

  res.status(200).json(safeUsers);
}
