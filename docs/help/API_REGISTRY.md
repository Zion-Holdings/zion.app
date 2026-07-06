# 🔑 Zion Tech Group — Complete API Registry & Setup Guide

> **Last updated:** 2026-06-06
> **Contact:** kleber@ziontechgroup.com | +1 302 464 0950

---

## 📋 Quick Status

| Provider | Free Tier | Status | Priority |
|----------|-----------|--------|----------|
| **OpenRouter** | $5-10 credit free | ⚠️ NEEDS KEY | 🔴 Critical |
| **Groq** | 10k req/min free | ⚠️ NEEDS KEY | 🔴 Critical |
| **Google Gemini** | 1.5k req/day free | ⚠️ NEEDS KEY | 🔴 Critical |
| **HuggingFace** | Limited free | ⚠️ NEEDS KEY | 🟡 High |
| **Cerebras** | 1M tokens/day free | ⚠️ NEEDS KEY | 🟡 High |
| **DeepSeek** | 5M tokens free | ⚠️ NEEDS KEY | 🟡 High |
| **Mistral** | Free tier | ⚠️ NEEDS KEY | 🟢 Medium |
| **Together AI** | Free research models | ⚠️ NEEDS KEY | 🟢 Medium |
| **Cohere** | 1k req/month trial | ⚠️ NEEDS KEY | 🟢 Medium |
| **Cloudflare AI** | 10k Neurons/day | ⚠️ NEEDS KEY | 🟢 Medium |
| **OpenAI** | Paid only | ⚠️ NEEDS KEY | 🔵 Optional |
| **Anthropic** | Paid only | ⚠️ NEEDS KEY | 🔵 Optional |

---

## 🚀 How to Get Each API Key (Step by Step)

### 1. OpenRouter (CRITICAL — Fallback Aggregator)
**URL:** https://openrouter.ai/keys
**Free Credit:** $5-10 on signup
**Steps:**
1. Go to https://openrouter.ai and sign up
2. Click "Keys" in the left sidebar
3. Click "Create Key" → Name it "Zion Tech Group"
4. Copy the key (starts with `sk-or-v1-`)
5. **Set in:** `.env` as `OPENROUTER_API_KEY=sk-or-v1-...`
6. **Also set in:** Netlify → Site Settings → Environment Variables → `NEXT_PUBLIC_OPENROUTER_API_KEY`

---

### 2. Groq (CRITICAL — Ultra-Fast Inference)
**URL:** https://console.groq.com/keys
**Free Tier:** 10,000 requests/minute
**Steps:**
1. Go to https://console.groq.com and sign up
2. Click "API Keys" in the left menu
3. Click "Create API Key" → Name it "Zion Production"
4. Copy the key (starts with `gsk_`)
5. **Set in:** `.env` as `GROQ_API_KEY=gsk_...`

---

### 3. Google Gemini (CRITICAL — Quality + Google Workspace)
**URL:** https://aistudio.google.com/apikey
**Free Tier:** 1,500 requests/day
**Steps:**
1. Go to https://aistudio.google.com/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. If no project exists, create a new Google Cloud project first
5. Copy the key (starts with `AIza`)
6. **Set in:** `.env` as `GEMINI_API_KEY=AIza...`

**For Google Workspace (Gmail/Calendar/Drive) access — go to:**
**URL:** https://console.cloud.google.com/apis/credentials
**Steps:**
1. Go to https://console.cloud.google.com
2. Create a new project (or select existing)
3. Enable APIs: Gmail API, Calendar API, Drive API
4. Go to "Credentials" → "Create Credentials" → "OAuth Client ID"
5. Choose "Desktop Application"
6. Download the JSON — this is your OAuth credentials
7. For Gmail SMTP sending: Use https://myaccount.google.com/apppasswords to create an App Password

---

### 4. HuggingFace (Model Hub + Inference)
**URL:** https://huggingface.co/settings/tokens
**Free Tier:** Limited free inference
**Steps:**
1. Go to https://huggingface.co and sign up
2. Click your profile → "Settings" → "Access Tokens"
3. Click "New Token" → Name: "Zion Inference" → Role: "read"
4. Copy the key (starts with `hf_`)
5. **Set in:** `.env` as `HUGGINGFACE_HUB_TOKEN=hf_...`

---

### 5. Cerebras (Fast Inference)
**URL:** https://cloud.cerebras.ai
**Free Tier:** 1M tokens/day
**Steps:**
1. Go to https://cloud.cerebras.ai and sign up
2. Navigate to "API Keys" in the dashboard
3. Generate a new key
4. **Set in:** `.env` as `CEREBRAS_API_KEY=...`

---

### 6. DeepSeek (Chinese + English Quality)
**URL:** https://platform.deepseek.com/api_keys
**Free Tier:** 5M tokens free
**Steps:**
1. Go to https://platform.deepseek.com and sign up
2. Go to "API Keys" in the left menu
3. Click "Create" → Copy the key
4. **Set in:** `.env` as `DEEPSEEK_API_KEY=...`

---

### 7. Mistral AI (European, GDPR-compliant)
**URL:** https://console.mistral.ai/api-keys/
**Free Tier:** Available with registration
**Steps:**
1. Go to https://console.mistral.ai and sign up
2. Go to "API Keys" → "Create new key"
3. **Set in:** `.env` as `MISTRAL_API_KEY=...`

---

### 8. Together AI (Open Source Models)
**URL:** https://api.together.xyz/settings/api-keys
**Free Tier:** Free research model access
**Steps:**
1. Go to https://api.together.xyz and sign up
2. Go to "Settings" → "API Keys"
3. Generate a new key
4. **Set in:** `.env` as `TOGETHER_API_KEY=...`

---

### 9. Cohere (Enterprise NLP)
**URL:** https://dashboard.cohere.com/api-keys
**Free Tier:** 1,000 requests/month trial
**Steps:**
1. Go to https://dashboard.cohere.com and sign up
2. Go to "API Keys" → "New Trial Key"
3. **Set in:** `.env` as `COHERE_API_KEY=...`

---

### 10. Cloudflare Workers AI
**URL:** https://dash.cloudflare.com/profile/api-tokens
**Free Tier:** 10,000 Neurons/day
**Steps:**
1. Go to https://dash.cloudflare.com and sign up/in
2. Go to "My Profile" → "API Tokens"
3. Click "Create Token" → Use "Workers AI" template
4. You'll need your Account ID (found in the Cloudflare dashboard)
5. **Set in:** `.env` as:
   ```
   CLOUDFLARE_ACCOUNT_ID=your_account_id
   CLOUDFLARE_API_TOKEN=your_api_token
   ```

---

### 11. OpenAI (Optional — Paid)
**URL:** https://platform.openai.com/api-keys
**Steps:**
1. Go to https://platform.openai.com and sign up
2. Go to "API Keys" → "Create new secret key"
3. Add payment method
4. **Set in:** `.env` as `OPENAI_API_KEY=sk-...`

---

### 12. Anthropic Claude (Optional — Paid)
**URL:** https://console.anthropic.com/settings/keys
**Steps:**
1. Go to https://console.anthropic.com and sign up
2. Go to "API Keys" → "Create Key"
3. Add payment method ($5 credit available)
4. **Set in:** `.env` as `ANTHROPIC_API_KEY=sk-ant-...`

---

## 📧 Email Configuration (Gmail)

### Option A: Gmail SMTP (Simplest for Sending)
1. Go to https://myaccount.google.com/apppasswords
2. Enable 2-Factor Authentication if not already on
3. Generate App Name: "Zion Email Agent"
4. Copy the 16-character app password
5. **Set in:** `.env` as:
   ```
   EMAIL_USER=kleber@ziontechgroup.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   EMAIL_SERVICE=gmail
   ```

### Option B: Gmail API (Full Read/Write Access)
1. Go to https://console.cloud.google.com
2. Create project → Enable Gmail API
3. Create OAuth 2.0 Credentials (Desktop App)
4. Download JSON credentials
5. Run the OAuth flow once to get refresh token
6. **Set in:** `.env`:
   ```
   GMAIL_CLIENT_ID=...
   GMAIL_CLIENT_SECRET=...
   GMAIL_REFRESH_TOKEN=...
   GMAIL_REDIRECT_URI=urn:ietf:wg:oauth:2.0:oob
   ```

---

## 🔧 Telegram Bot
**Status:** ✅ Already configured
**Bot token format:** `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

---

## 🔧 Netlify Deployment Variables
**Go to:** https://app.netlify.com/sites/ziontechgroup/settings/env
**Required variables:**
```
NEXT_PUBLIC_OPENROUTER_API_KEY=sk-or-v1-...
NODE_ENV=production
```

---

## 🔧 GitHub Actions Secrets
**Go to:** https://github.com/Zion-support/zion-support.github.io/settings/secrets/actions
**Required secrets:**
```
OPENROUTER_API_KEY=sk-or-v1-...
GROQ_API_KEY=gsk_...
```

---

## ⚡ Quick Start Checklist

1. [ ] Get OpenRouter key → https://openrouter.ai/keys
2. [ ] Get Groq key → https://console.groq.com/keys
3. [ ] Get Gemini key → https://aistudio.google.com/apikey
4. [ ] Get Gmail App Password → https://myaccount.google.com/apppasswords
5. [ ] Update `.env` file with all keys
6. [ ] Add `NEXT_PUBLIC_OPENROUTER_API_KEY` to Netlify
7. [ ] Add `OPENROUTER_API_KEY` and `GROQ_API_KEY` to GitHub Secrets
8. [ ] Test: `cd commands && python3 email_responder_v78.py`

---

## 📞 Need Help?
- **Contact:** kleber@ziontechgroup.com
- **Phone:** +1 302 464 0950
- **Address:** 364 E Main St STE 1008, Middletown DE 19709
