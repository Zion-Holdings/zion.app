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
  },
};

// Helper function to find user by email
export function findUserByEmail(email: string): MockUser | undefined {
  return Object.values(users).find(user => 
    user.email.toLowerCase() === email.toLowerCase() && !user.softDeleted
  );
}
