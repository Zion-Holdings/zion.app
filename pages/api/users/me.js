import { withErrorLogging } from '@/utils/withErrorLogging';
let mockUser = {
    id: '1',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatarUrl: '',
    points: 0,
    notifications: {
        email: true,
        push: false,
    },
    softDeleted: false,
};
function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(mockUser);
        return;
    }
    if (req.method === 'PUT') {
        mockUser = { ...mockUser, ...req.body };
        res.status(200).json(mockUser);
        return;
    }
    if (req.method === 'DELETE') {
        mockUser.softDeleted = true;
        res.status(200).json({ success: true });
        return;
    }
    res.status(405).end();
}
export default withErrorLogging(handler);
