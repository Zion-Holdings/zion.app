export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio?: string;
  points: number;
  notifications: { email: boolean; push: boolean };
  softDeleted?: boolean;
  password?: string; // Added for development authentication
  emailVerified?: boolean; // Added for email verification testing
}

export const users: Record<string, MockUser> = {
  '1': {
    id: '1',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatarUrl: '',
    bio: '',
    points: 0,
    notifications: { email: true, push: false },
    softDeleted: false,
    password: 'password123', // For testing
    emailVerified: true, // Email is verified
  },
  '2': {
    id: '2',
    name: 'Kalciano Pessoa',
    email: 'kalcatrao@hotmail.com',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200',
    bio: 'Software developer and entrepreneur',
    points: 150,
    notifications: { email: true, push: true },
    softDeleted: false,
    password: 'kalc2024!', // Default password for testing
    emailVerified: true, // Email is verified
  },
  // Add a test user with unverified email for testing
  '3': {
    id: '3',
    name: 'Test User',
    email: 'test@unverified.com',
    avatarUrl: '',
    bio: 'Test user with unverified email',
    points: 0,
    notifications: { email: true, push: false },
    softDeleted: false,
    password: 'test123',
    emailVerified: false, // Email not verified - for testing 403 response
  },
};

// Helper function to find user by email
export function findUserByEmail(email: string): MockUser | undefined {
  return Object.values(users).find(user => 
    user.email.toLowerCase() === email.toLowerCase() && !user.softDeleted
  );
}
