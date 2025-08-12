# KYC & AML Workflows

Zion includes a basic identity verification flow and an admin dashboard for reviewing submissions.

## User Verification
- Navigate to `/verify` after signing in
- Submit full legal name and a government ID document
- Pending status is shown until an admin approves

## Admin Dashboard
- Visit `/admin/kyc` to see a queue of submissions
- Approve or reject each request manually

These stubs provide a foundation for integrating external services like Onfido or Veriff and connecting to AML watchlists.
