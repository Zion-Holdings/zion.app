import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { productId, subject, body, fromUser } = req.body as {
    productId?: string;
    subject?: string;
    body?: string;
    fromUser?: string;
  };

  if (!productId || !subject || !body) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await prisma.chatMessage.create({
      data: {
        roomId: `product-${productId}`,
        senderId: fromUser ? parseInt(fromUser, 10) || 0 : 0,
        content: `${subject}\n${body}`,
      },
    });

    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com';
    if (apiKey) {
      sgMail.setApiKey(apiKey);
      await sgMail.send({
        to: fromEmail,
        from: fromEmail,
        subject: `[Product ${productId}] ${subject}`,
        text: body,
        mailSettings: { sandboxMode: { enable: true } },
      });
    }

    return res.status(200).json({ success: true });
  } catch (e: any) {
    console.error('Failed to send message:', e);
    return res.status(500).json({ error: 'Failed to send message' });
  } finally {
    await prisma.$disconnect();
  }
}
