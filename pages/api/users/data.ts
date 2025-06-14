export interface MockUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio?: string;
  points: number;
  notifications: { email: boolean; push: boolean };
  softDeleted?: boolean;
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
  },
};
