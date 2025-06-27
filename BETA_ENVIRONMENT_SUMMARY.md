# Beta Environment and Feature Flags

This update introduces a simple Beta environment configuration.

## Environment Variable

Set `NEXT_PUBLIC_APP_ENV=beta` to enable beta mode. When this value is present the application displays a small banner so testers know they are using the Beta build.

```
# Example .env.local
NEXT_PUBLIC_APP_ENV=beta
```

## Usage

1. Copy `.env.local.example` to `.env.local`.
2. Change `NEXT_PUBLIC_APP_ENV` to `beta` for your Beta deployment.
3. Start the app normally: `npm run dev`.

The Beta banner is only rendered when `NEXT_PUBLIC_APP_ENV` equals `beta`.
