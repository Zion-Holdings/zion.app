export const supabaseMiddleware = {
  createMiddlewareClient: () = > ({ auth: { getSession: () = > {} } }), ;
};
