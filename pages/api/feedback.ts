import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { z } from 'zod';
import type { Document, Model } from 'mongoose';
import { withErrorLogging } from '@/utils/withErrorLogging';
import {logErrorToProduction} from '@/utils/productionLogger';
import { sendFeedbackEmail } from '@/lib/email';

const mongoUri = process.env['MONGO_URI'] || 'mongodb://localhost:27017/zion';

const feedbackSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: String,
  url: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now },
});

interface FeedbackDoc extends Document {
  rating: number;
  comment?: string;
  url?: string;
  userAgent?: string;
  createdAt: Date;
}

const Feedback: Model<FeedbackDoc> =
  mongoose.models['Feedback'] ||
  mongoose.model<FeedbackDoc>('Feedback', feedbackSchema);

async function connect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(mongoUri);
  }
}

const FeedbackValidator = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  url: z.string(),
  userAgent: z.string(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const parsed = FeedbackValidator.safeParse(req['body']);
  if (!parsed.success) {
    res.status(400).json({
      error: parsed.error?.issues[0]?.message || 'Invalid feedback data',
    });
    return;
  }

  try {
    await connect();
    await Feedback.create(parsed.data);
    await sendFeedbackEmail({ ...parsed.data, comment: parsed.data.comment ?? "" }).catch(() => undefined);
    res.status(201).json({ success: true });
    return;
  } catch {
    logErrorToProduction('Error saving feedback:', { data: 'Error occurred' });
    res.status(500).json({ error: 'Failed to save feedback' });
    return;
  }
};

export default withErrorLogging(handler);
