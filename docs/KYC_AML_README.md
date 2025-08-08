# Zion KYC/AML Implementation

This project includes a minimal but complete KYC/AML workflow with:

- /verify user flow (clients, talents, enterprise)
- /dashboard/settings/identity status page
- Admin KYC queue at /admin/kyc
- AML mock provider with easy replacement
- DeFi cashout guard via /api/defi/cashout-check

Storage: File-based JSON under data/kyc/profiles.json for demo. Replace with DB or Supabase.

## API Endpoints

- POST /api/kyc/start { userId, role, fullLegalName, businessName, businessRegistrationNumber }
- POST /api/kyc/upload { userId, kind, filename } (metadata-only demo)
- POST /api/kyc/submit { userId } → runs AML check
- GET /api/kyc/status?userId=...
- GET/POST /api/admin/kyc-queue (POST body: { userId, action: approve|reject|needs_more_info, reason? })
- POST /api/defi/cashout-check { userId, amount, currency? }

## UI

- /verify: Guided flow, progress tracker, required/optional documents per role
- /admin/kyc: Review queue with approve/reject/needs more info and notes
- /dashboard/settings/identity: Shows current status and badges

## Badges

- Verified Identity shown when KYC status=approved and AML != match
- Business Verified additionally for enterprise role

## AML Provider

- utils/aml.ts exposes setAmlProvider/getAmlProvider
- Replace MockAmlProvider with integration (Onfido/Veriff for docs, ComplyAdvantage/Trulioo for watchlists)

## Compliance Considerations

- GDPR/CCPA: Do not store sensitive documents unencrypted in production. Replace file storage with secure, encrypted storage. Implement data retention and right-to-erasure flows.
- Audit trail: Stored in profile.auditTrail; extend to use immutable logs (e.g., append-only DB or audit service).
- PII Minimization: Only collect required attributes per role.
- Access Control: Protect admin routes with authentication and RBAC before production.

## Env Vars

- ZION_CASHOUT_KYC_THRESHOLD (default 1000)
- NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY (optional for future storage)

## Next Steps for Production

- Replace file storage with DB (e.g., Postgres/Prisma) and object storage for documents.
- Integrate real KYC providers (Onfido/Veriff) for ID and selfie, and AML providers (ComplyAdvantage/Trulioo).
- Add webhooks to update status automatically based on provider decisions.
- Add notifications and secure admin authentication.