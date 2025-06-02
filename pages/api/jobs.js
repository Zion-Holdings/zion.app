import { JOB_POSTS } from '@/data/jobsData';
export default function handler(req, res) {
    if (req.method && req.method !== 'GET') {
        res.status(405).end();
        return;
    }
    res.status(200).json(JOB_POSTS);
}
