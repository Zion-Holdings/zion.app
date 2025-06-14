import { withErrorLogging } from '@/utils/withErrorLogging';
import { users } from './data';
let mockUser = users['1'];
function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(mockUser);
        return;
    }
    if (req.method === 'PUT') {
        mockUser = { ...mockUser, ...req.body };
        users[mockUser.id] = mockUser;
        res.status(200).json(mockUser);
        return;
    }
    if (req.method === 'DELETE') {
        mockUser.softDeleted = true;
        users[mockUser.id] = mockUser;
        res.status(200).json({ success: true });
        return;
    }
    res.status(405).end();
}
export default withErrorLogging(handler);
