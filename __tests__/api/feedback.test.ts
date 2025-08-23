import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../temp_essential_pages/api/feedback';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Feedback from '../../server/models/Feedback';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongoServer.getUri();
  await mongoose.connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

describe('/api/feedback', () => {
  it('stores feedback and returns 201', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { rating: 5, comment: 'Great', url: '/home', userAgent: 'jest', screenshot: 'data:image/png;base64,xyz' },
    });

    await handler(req as NextApiRequest, res as NextApiResponse);

    expect(res._getStatusCode()).toBe(201);
    const docs = await Feedback.find();
    expect(docs.length).toBe(1);
    expect(docs[0].rating).toBe(5);
    expect(docs[0].screenshot).toBe('data:image/png;base64,xyz');
  });
});
