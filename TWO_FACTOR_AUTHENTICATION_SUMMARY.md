# Optional Two-Factor Authentication

## ✅ Feature Overview

- Integrates **django-otp** within the `ipo_portal` app.
- Users can **enable or disable 2FA** from their profile.
- Utilizes **Time-based One Time Passwords (TOTP)** compatible with common authenticator apps.
- 2FA enforcement occurs during login only when the feature is enabled for the account.

## 🔐 Setup Process

1. Navigate to `admin/ipo-portal/setup-2fa/` after logging in.
2. Scan the displayed QR code with your authenticator application.
3. Enter the generated 6‑digit code to confirm and enable 2FA.
4. Future logins will prompt for this OTP in addition to the password.

To disable 2FA, remove the TOTP device from your profile in the portal. Login falls back to standard password authentication when 2FA is disabled.

## 📂 Key Files

- `backend/ipo_portal/views.py` – 2FA setup and verification views.
- `backend/ipo_portal/models.py` – `UserProfile` stores `is_2fa_enabled` and `otp_secret_key`.
- `backend/ipo_portal/templates/ipo_portal/` – HTML templates for QR code and OTP entry.

This implementation provides optional two-factor authentication for improved security without forcing it on all users.
