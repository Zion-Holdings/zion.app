
// Enhanced Security Headers for Production
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control','    value: 'on'  },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  {
    key: 'Strict-Transport-Security','    value: 'max-age=63072000; includeSubDomains; preload'  },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  {
    key: 'X-XSS-Protection','    value: '1; mode=block'  },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  {
    key: 'X-Frame-Options','    value: 'DENY'  },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  {
    key: 'X-Content-Type-Options','    value: 'nosniff'  },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  {
    key: 'Referrer-Policy','    value: 'origin-when-cross-origin'  },'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  {
    key: 'Content-Security-Policy','    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.sentry.io *.google.com *.googleapis.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: blob: *.cloudinary.com; connect-src 'self' *.supabase.co *.sentry.io *.stripe.com;""  }"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
]
module.exports = { securityHeaders };
