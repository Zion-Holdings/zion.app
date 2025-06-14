import { handler as sentryCheck } from '../../netlify/functions/_sentryCheck';
import { withErrorLogging } from '@/utils/withErrorLogging';
async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    const result = await sentryCheck();
    return res.status(result.statusCode).end();
}
export default withErrorLogging(handler);
