import { withErrorLogging } from '@/utils/withErrorLogging';
import type { NextApiRequest, NextApiResponse } from 'next';

interface UserNotifications {
  email: boolean;
  push: boolean;
}

interface UserMe {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  points: number;
  notifications: UserNotifications;
  softDeleted: boolean;
  // Add any other fields that mockUser might have or that are expected by the client
}

// In-memory store for the mock user for this example
// In a real application, this would come from a database.
let mockUser: UserMe = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane@example.com',
  avatarUrl: '', // Typically a URL string, empty if no avatar
  points: 0,
  notifications: {
    email: true,
    push: false,
  },
  softDeleted: false,
};

interface MutationSuccessResponse {
  success: boolean;
  message?: string;
}

interface ErrorResponse {
  error: string;
}

// Type for the handler function itself before being wrapped by withErrorLogging
type UserMeApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse<UserMe | MutationSuccessResponse | ErrorResponse>
) => void | Promise<void>;


const handler: UserMeApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    // Simulate fetching user data
    if (mockUser.softDeleted) { // Check if user is "deleted"
        return res.status(404).json({ error: 'User not found or has been deleted.' });
    }
    return res.status(200).json(mockUser);
  }

  if (req.method === 'PUT') {
    // Assume req.body is Partial<UserMe> for updates
    const updateData = req.body as Partial<UserMe>;
    
    // Prevent changing ID or re-activating a soft-deleted user via this simple PUT
    if (updateData.id && updateData.id !== mockUser.id) {
        return res.status(400).json({ error: 'Cannot change user ID.' });
    }
    if (mockUser.softDeleted && updateData.softDeleted === false) {
        return res.status(403).json({ error: 'Cannot re-activate user via this endpoint.'});
    }
    if (updateData.softDeleted === true) { // If PUT request tries to soft delete
        return res.status(400).json({ error: 'Use DELETE method to soft delete user.'})
    }


    mockUser = { ...mockUser, ...updateData };
    return res.status(200).json(mockUser);
  }

  if (req.method === 'DELETE') {
    mockUser.softDeleted = true;
    // Optionally, you might clear out some user data here or log the deletion
    console.log(`User ${mockUser.id} soft deleted.`);
    return res.status(200).json({ success: true, message: 'User account has been deactivated.' });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
};

export default withErrorLogging(handler);
