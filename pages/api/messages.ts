import { PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

interface MessagesRequestBody {
  productId?: string;
  subject?: string;
  body?: string;
  fromUser?: string; // Assuming fromUser is a string that will be parsed to an int or a default
}

interface MutationSuccessResponse {
  success: boolean;
  message?: string;
}

interface ErrorResponse {
  error: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<MutationSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { productId, subject, body, fromUser } = req.body as MessagesRequestBody;

  if (!productId || !subject || !body) {
    return res.status(400).json({ error: 'Missing required fields: productId, subject, and body are required.' });
  }

  // Validate fromUser if provided, or set a default.
  // Consider if '0' is a valid default or if it should be an anonymous/system user ID.
  let senderIdNum = 0; // Default sender ID
  if (fromUser) {
    const parsedId = parseInt(fromUser, 10);
    if (isNaN(parsedId)) {
      // Optionally handle invalid fromUser string (e.g., return 400 or use default)
      console.warn(`Invalid fromUser ID: ${fromUser}. Defaulting to 0.`);
    } else {
      senderIdNum = parsedId;
    }
  }


  try {
    await prisma.chatMessage.create({
      data: {
        roomId: `product-${productId}`, // Ensure this room ID convention is what you intend
        senderId: senderIdNum,
        content: `${subject}\n${body}`,
      },
    });

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.SENDGRID_TO_EMAIL; // Assuming you want to send to a specific admin/support email
    const fromEmailDisplay = process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com'; // Email address to show as "from"
    
    if (apiKey && toEmail) {
      sgMail.setApiKey(apiKey);
      try {
        await sgMail.send({
          to: toEmail, // The actual recipient
          from: fromEmailDisplay, // Verified SendGrid sender
          replyTo: fromUser && /.+@.+\..+/.test(fromUser) ? fromUser : undefined, // Optional: if fromUser is an email
          subject: `[Product Inquiry: ${productId}] ${subject}`,
          text: `Message from: ${fromUser || 'Guest/System'}\n\n${body}`,
          // mailSettings: { sandboxMode: { enable: process.env.NODE_ENV !== 'production' } }, // Recommended for testing
        });
      } catch (sendgridError: unknown) {
          console.error('SendGrid API Error:', sendgridError);
          // Decide if this failure should prevent a 200 response to the client.
          // For now, we'll assume the message is saved, and email is secondary.
      }
    } else {
        console.warn('SendGrid API Key or To Email not configured. Skipping email notification.');
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (e: unknown) {
    console.error('Failed to send message:', e);
    let errorMessage = 'Failed to send message';
    let errorDetails: string | undefined;

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
        errorMessage = 'Database error while sending message.';
        errorDetails = e.message;
    } else if (e instanceof Error) {
      errorMessage = e.message;
      errorDetails = e.stack;
    } else if (typeof e === 'string') {
      errorMessage = e;
    }
    
    return res.status(500).json({ error: errorMessage, details: errorDetails });
  } finally {
    await prisma.$disconnect();
  }
}
