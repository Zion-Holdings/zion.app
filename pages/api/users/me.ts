import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { withErrorLogging } from '@/utils/withErrorLogging';

// Generic request/response types so this file works in Node or Next.js
interface Req {
  method?: string;
  body?: any;
  headers?: {
    authorization?: string;
  };
}

interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_ANON_KEY is missing for /api/users/me. Service cannot start.';
  console.error(errorMessage);
  // Throwing an error during module initialization can be problematic in Next.js.
  // A common pattern is to handle this within the request handler or log and allow Supabase client to fail if used.
  // For now, we'll log it prominently. The actual client creation will fail if these are missing.
}

// Initialize Supabase client. It's safe to call createClient even if vars are undefined;
// subsequent calls using the client will fail, which will be caught by error handling.
const supabase: SupabaseClient = createClient(supabaseUrl!, supabaseAnonKey!);

async function handler(req: Req, res: JsonRes) {
  if (req.method === 'GET') {
    const authHeader = req.headers?.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized: Missing or malformed token' });
      return;
    }
    const jwt = authHeader.split(' ')[1];

    const { data: { user }, error } = await supabase.auth.getUser(jwt);

    if (error) {
      console.error('Supabase getUser error:', error);
      res.status(401).json({ error: `Unauthorized: ${error.message}` });
      return;
    }

    if (!user) {
      res.status(401).json({ error: 'Unauthorized: User not found' });
      return;
    }

    // Return relevant user information
    // Adjust fields as necessary based on your user table structure and what `user_metadata` contains
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name, // Example: if name is in user_metadata
      avatarUrl: user.user_metadata?.avatarUrl, // Example: if avatarUrl is in user_metadata
      // Include other fields from user or user.user_metadata as needed
    });
    return;
  }

  if (req.method === 'PUT') {
    const authHeader = req.headers?.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized: Missing or malformed token' });
      return;
    }
    const jwt = authHeader.split(' ')[1];

    const { data: { user: authenticatedUser }, error: authError } = await supabase.auth.getUser(jwt);

    if (authError) {
      console.error('Supabase getUser error (PUT):', authError);
      res.status(401).json({ error: `Unauthorized: ${authError.message}` });
      return;
    }

    if (!authenticatedUser) {
      res.status(401).json({ error: 'Unauthorized: User not found' });
      return;
    }

    // Validate request body
    const { name, avatarUrl } = req.body as { name?: string; avatarUrl?: string };

    if (!req.body || (name === undefined && avatarUrl === undefined)) {
      res.status(400).json({ error: 'Bad Request: No update data provided.' });
      return;
    }

    const updatePayload: { name?: string; avatar_url?: string } = {};
    const validationErrors: string[] = [];

    if (name !== undefined) {
      if (typeof name !== 'string' || name.trim() === '') {
        validationErrors.push('Invalid "name": must be a non-empty string.');
      } else {
        updatePayload.name = name.trim();
      }
    }

    if (avatarUrl !== undefined) {
      if (typeof avatarUrl !== 'string') {
        validationErrors.push('Invalid "avatarUrl": must be a string.');
      } else {
        try {
          // Basic URL validation
          new URL(avatarUrl);
          updatePayload.avatar_url = avatarUrl;
        } catch (_) {
          validationErrors.push('Invalid "avatarUrl": must be a valid URL.');
        }
      }
    }

    if (validationErrors.length > 0) {
      res.status(400).json({ error: 'Validation failed', details: validationErrors });
      return;
    }

    if (Object.keys(updatePayload).length === 0 && validationErrors.length === 0) {
        // This case might happen if avatarUrl was an empty string and name was not provided,
        // and we decide empty string for avatarUrl is not an update.
        // Or if the only provided fields were invalid and caught by validationErrors.
        // If updatePayload is empty but there were no specific validation errors for provided fields,
        // it implies the fields were validly "empty" or not updatable (e.g. empty string for avatarUrl if we disallowed it).
        // For now, if updatePayload is empty, it means nothing valid was passed to update.
        res.status(400).json({ error: 'Bad Request: No valid update data provided.' });
        return;
    }

    // It's important to update only the user_metadata fields.
    // Supabase's updateUser with `data` typically targets user_metadata.
    const { data: updatedUserData, error: updateError } = await supabase.auth.updateUser({
      data: updatePayload, // Fields here are merged into user_metadata
    });

    if (updateError) {
      console.error('Supabase updateUser error:', updateError);
      res.status(updateError.status || 500).json({ error: `Failed to update user: ${updateError.message}` });
      return;
    }

    if (!updatedUserData?.user) {
      // Should not happen if there's no error, but good to check
      res.status(500).json({ error: 'Failed to update user: No user data returned.' });
      return;
    }

    // Return the updated user information, similar to GET
    res.status(200).json({
      id: updatedUserData.user.id,
      email: updatedUserData.user.email,
      name: updatedUserData.user.user_metadata?.name,
      avatarUrl: updatedUserData.user.user_metadata?.avatar_url || updatedUserData.user.user_metadata?.avatarUrl, // Supabase might use avatar_url
      // Include other fields from user or user.user_metadata as needed
    });
    return;
  }

  if (req.method === 'DELETE') {
    const authHeader = req.headers?.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized: Missing or malformed token' });
      return;
    }
    const jwt = authHeader.split(' ')[1];

    // 1. Authenticate user and get their ID using the standard client
    const { data: { user: authenticatedUser }, error: authError } = await supabase.auth.getUser(jwt);

    if (authError) {
      console.error('Supabase getUser error (DELETE):', authError);
      res.status(401).json({ error: `Unauthorized: ${authError.message}` });
      return;
    }

    if (!authenticatedUser) {
      res.status(401).json({ error: 'Unauthorized: User not found' });
      return;
    }

    const userIdToDelete = authenticatedUser.id;

    // 2. Use Admin client for deletion
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseServiceRoleKey) {
      console.error('CRITICAL: SUPABASE_SERVICE_ROLE_KEY is missing. Cannot perform user deletion.');
      res.status(500).json({ error: 'Internal server error: Service configuration issue.' });
      return;
    }

    if (!supabaseUrl) { // supabaseUrl is defined at the module level
        console.error('CRITICAL: SUPABASE_URL is missing. Cannot perform user deletion.');
        res.status(500).json({ error: 'Internal server error: Service configuration issue.' });
        return;
    }

    const supabaseAdminClient = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { data: deletionData, error: deleteError } = await supabaseAdminClient.auth.admin.deleteUser(userIdToDelete);

    if (deleteError) {
      console.error('Supabase admin.deleteUser error:', deleteError);
      // Provide a generic error message to the client for security
      res.status(deleteError.status || 500).json({ error: `Failed to delete user account: ${deleteError.message}` });
      return;
    }

    // According to Supabase docs, successful deletion returns { data: null, error: null } for deleteUser
    // or { data: { user: User }, error: null } if the user object was returned (seems less common for delete)
    // We'll consider no error as success.
    res.status(200).json({ message: 'User account deleted successfully.' }); // 204 No Content is also an option if no message body is preferred
    return;
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

export default withErrorLogging(handler);
