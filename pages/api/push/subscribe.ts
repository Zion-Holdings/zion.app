import type { NextApiRequest, NextApiResponse } from 'next';

// Define the expected structure of a PushSubscription object
// This often aligns with the PushSubscriptionJSON interface from web APIs
interface PushSubscriptionKeys {
  p256dh: string;
  auth: string;
}

interface PushSubscriptionRequestBody {
  endpoint: string;
  expirationTime?: number | null;
  keys: PushSubscriptionKeys;
  // Include other properties if your client sends them
  [key: string]: unknown; // Allow for additional properties
}

interface MutationSuccessResponse {
  success: boolean;
  message?: string;
}

interface ErrorResponse {
  error: string;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<MutationSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed`});
  }

  const subscription = req.body as PushSubscriptionRequestBody;

  // Basic validation for the subscription object
  if (!subscription || !subscription.endpoint || !subscription.keys?.p256dh || !subscription.keys?.auth) {
    console.error('Invalid push subscription object received:', subscription);
    return res.status(400).json({ error: 'Invalid push subscription object.' });
  }

  // TODO: Save the subscription to your database, associated with a user
  // Example:
  // const userId = getUserIdFromSession(req); // You'd need a way to get the user ID
  // if (!userId) {
  //   return res.status(401).json({ error: 'User not authenticated.' });
  // }
  // await saveSubscriptionToDb(userId, subscription);

  console.log('Push subscription received and validated:', subscription);
  
  // Respond with success
  res.status(200).json({ success: true, message: 'Subscription received.' });
}
