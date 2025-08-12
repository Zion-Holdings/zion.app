import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { z } from 'zod';
import type { Document, Model } from 'mongoose';
import { withErrorLogging } from '@/utils/withErrorLogging';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/zion';

const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: String,
  screenshot: String,
  url: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now },
});

interface FeedbackDoc extends Document {
  rating: number;
  comment?: string;
  screenshot?: string;
  url?: string;
  userAgent?: string;
  createdAt: Date;
}

const Feedback: Model<FeedbackDoc> = mongoose.models.Feedback || mongoose.model<FeedbackDoc>('Feedback', feedbackSchema);

async function connect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
  }
}

const FeedbackValidator = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  screenshot: z.string().optional(),
  url: z.string(),
  userAgent: z.string(),
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const parsed = FeedbackValidator.safeParse(req.body);
  if (!parsed.success) {
    const errorMessage = parsed.error?.errors?.[0]?.message || 'Invalid input data';
    return res.status(400).json({ error: errorMessage });
  }

  try {
    await connect();
    const doc = await Feedback.create(parsed.data);
    return res.status(201).json({ id: doc._id });
  } catch (err) {
    console.error('Error saving feedback:', err);
    return res.status(500).json({ error: 'Failed to save feedback' });
  }
}

export default withErrorLogging(handler);
