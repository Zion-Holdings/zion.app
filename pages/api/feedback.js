import mongoose from 'mongoose';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/zion';
const feedbackSchema = new mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: String,
    url: String,
    userAgent: String,
    createdAt: { type: Date, default: Date.now },
});
const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
async function connect() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}
const FeedbackValidator = z.object({
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
    url: z.string(),
    userAgent: z.string(),
});
async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    const parsed = FeedbackValidator.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors[0].message });
    }
    try {
        await connect();
        const doc = await Feedback.create(parsed.data);
        return res.status(201).json({ id: doc._id });
    }
    catch (err) {
        console.error('Error saving feedback:', err);
        return res.status(500).json({ error: 'Failed to save feedback' });
    }
}
export default withErrorLogging(handler);
