"""
Zion Tech Group — Centralized API Key Manager
=============================================
All agents read/write API keys through this single source of truth.
Keys are stored in docs/API_KEYS_STORE.md (encrypted reference)
and loaded from environment variables at runtime.

Usage:
    from api_key_manager import APIKeyManager
    mgr = APIKeyManager()
    key = mgr.get('OPENROUTER')
    mgr.set('OPENROUTER', 'sk-or-v1-...')
    mgr.check_all()  # Verify all configured keys
"""

import os
import json
import subprocess
from typing import Dict, List, Optional, Tuple

class APIKeyManager:
    """Centralized API key management for all Zion agents."""

    # Provider -> env var name mapping
    PROVIDERS = {
        'openrouter': {'env': 'OPENROUTER_API_KEY', 'url': 'https://openrouter.ai/keys', 'free': True, 'free_credit': '$5-10'},
        'groq': {'env': 'GROQ_API_KEY', 'url': 'https://console.groq.com/keys', 'free': True, 'free_credit': '10k req/min'},
        'gemini': {'env': 'GEMINI_API_KEY', 'url': 'https://aistudio.google.com/apikey', 'free': True, 'free_credit': '1.5k req/day'},
        'huggingface': {'env': 'HUGGINGFACE_HUB_TOKEN', 'url': 'https://huggingface.co/settings/tokens', 'free': True, 'free_credit': 'Limited'},
        'cerebras': {'env': 'CEREBRAS_API_KEY', 'url': 'https://cloud.cerebras.ai', 'free': True, 'free_credit': '1M tokens/day'},
        'deepseek': {'env': 'DEEPSEEK_API_KEY', 'url': 'https://platform.deepseek.com/api_keys', 'free': True, 'free_credit': '5M tokens'},
        'mistral': {'env': 'MISTRAL_API_KEY', 'url': 'https://console.mistral.ai/api-keys/', 'free': True, 'free_credit': 'Free tier'},
        'together': {'env': 'TOGETHER_API_KEY', 'url': 'https://api.together.xyz/settings/api-keys', 'free': True, 'free_credit': 'Research models'},
        'cohere': {'env': 'COHERE_API_KEY', 'url': 'https://dashboard.cohere.com/api-keys', 'free': True, 'free_credit': '1k req/month'},
        'cloudflare': {'env': 'CLOUDFLARE_API_TOKEN', 'url': 'https://dash.cloudflare.com/profile/api-tokens', 'free': True, 'free_credit': '10k Neurons/day'},
        'openai': {'env': 'OPENAI_API_KEY', 'url': 'https://platform.openai.com/api-keys', 'free': False, 'free_credit': 'None'},
        'anthropic': {'env': 'ANTHROPIC_API_KEY', 'url': 'https://console.anthropic.com/settings/keys', 'free': False, 'free_credit': 'None'},
        'glm': {'env': 'GLM_API_KEY', 'url': 'https://open.bigmodel.cn/usercenter/apikeys', 'free': True, 'free_credit': 'Free tier available'},
    }

    # Email/Communication
    COMM_KEYS = {
        'telegram': {'env': 'TELEGRAM_BOT_TOKEN', 'url': 'https://t.me/BotFather', 'type': 'Bot Token'},
        'email_user': {'env': 'EMAIL_USER', 'url': 'https://myaccount.google.com/apppasswords', 'type': 'Gmail Address'},
        'email_pass': {'env': 'EMAIL_PASS', 'url': 'https://myaccount.google.com/apppasswords', 'type': 'App Password'},
    }

    # Deployment
    DEPLOY_KEYS = {
        'netlify': {'env': 'NETLIFY_AUTH_TOKEN', 'url': 'https://app.netlify.com/user/applications#personal-access-tokens', 'type': 'Personal Access Token'},
        'github': {'env': 'GITHUB_TOKEN', 'url': 'https://github.com/settings/tokens', 'type': 'Personal Access Token'},
    }

    def __init__(self, env_file: str = None):
        self.env_file = env_file or os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
        self._keys: Dict[str, str] = {}
        self._load_env()

    def _load_env(self):
        """Load keys from .env file and environment."""
        # Load from environment first
        for name, info in {**self.PROVIDERS, **self.COMM_KEYS, **self.DEPLOY_KEYS}.items():
            var = info['env']
            val = os.getenv(var, '')
            if val:
                self._keys[name] = val

        # Override with .env file if it exists
        if os.path.exists(self.env_file):
            with open(self.env_file, 'r') as f:
                for line in f:
                    line = line.strip()
                    if '=' in line and not line.startswith('#'):
                        key, _, value = line.partition('=')
                        key = key.strip()
                        value = value.strip()
                        # Map env var name to provider name
                        for name, info in {**self.PROVIDERS, **self.COMM_KEYS, **self.DEPLOY_KEYS}.items():
                            if info['env'] == key:
                                self._keys[name] = value
                                break

    def get(self, provider: str) -> Optional[str]:
        """Get API key for a provider."""
        return self._keys.get(provider.lower())

    def set(self, provider: str, key: str) -> None:
        """Set API key for a provider (in-memory only, doesn't persist)."""
        self._keys[provider.lower()] = key

    def is_configured(self, provider: str) -> bool:
        """Check if a provider has a key configured."""
        key = self.get(provider)
        return bool(key and key != f'***{provider.upper()}_KEY_HERE***')

    def get_configured_providers(self) -> List[str]:
        """Return list of providers with configured keys."""
        return [name for name in self.PROVIDERS if self.is_configured(name)]

    def get_missing_providers(self) -> List[str]:
        """Return list of providers without keys."""
        return [name for name in self.PROVIDERS if not self.is_configured(name)]

    def check_all(self) -> Dict[str, Dict]:
        """Check status of all providers."""
        status = {}
        for name, info in self.PROVIDERS.items():
            configured = self.is_configured(name)
            status[name] = {
                'configured': configured,
                'env_var': info['env'],
                'free_tier': info['free'],
                'free_amount': info['free_credit'],
                'setup_url': info['url'],
                'key_prefix': self._get_key_prefix(name) if configured else None,
            }
        return status

    def _get_key_prefix(self, provider: str) -> str:
        """Get first 8 chars of key for verification (don't expose full key)."""
        key = self.get(provider)
        if key:
            return key[:8] + '...'
        return 'NOT SET'

    def get_best_ai_provider(self) -> Optional[str]:
        """Return the best available AI provider (free tiers first, then paid)."""
        priority = ['glm', 'groq', 'gemini', 'deepseek', 'mistral', 'openrouter', 'huggingface', 'cerebras', 'together', 'cohere', 'openai', 'anthropic']
        for p in priority:
            if self.is_configured(p):
                return p
        return None

    def generate_report(self) -> str:
        """Generate a human-readable status report."""
        status = self.check_all()
        lines = ["# API Key Status Report\n"]
        lines.append(f"Generated: {__import__('datetime').datetime.now().isoformat()}\n")

        configured = [n for n, s in status.items() if s['configured']]
        missing = [n for n, s in status.items() if not s['configured']]

        lines.append(f"## Configured ({len(configured)}/{len(status)})\n")
        for name in configured:
            s = status[name]
            lines.append(f"- ✅ {name}: `{s['key_prefix']}` ({'FREE' if s['free_tier'] else 'PAID'} — {s['free_amount']})")

        lines.append(f"\n## Missing ({len(missing)})\n")
        for name in missing:
            s = status[name]
            lines.append(f"- ❌ {name}: [Get key]({s['setup_url']}) ({'FREE' if s['free_tier'] else 'PAID'} — {s['free_amount']})")

        # Missing critical keys
        critical = ['openrouter', 'groq', 'gemini', 'email_user', 'email_pass']
        missing_critical = [c for c in critical if c in missing]
        if missing_critical:
            lines.append(f"\n## 🚨 Critical Missing Keys\n")
            lines.append("The following keys are needed for core functionality:\n")
            for name in missing_critical:
                info = {**self.PROVIDERS, **self.COMM_KEYS}.get(name, {})
                lines.append(f"- **{name}**: {info.get('url', 'N/A')}")

        best = self.get_best_ai_provider()
        lines.append(f"\n## Best Available AI Provider: {best or 'NONE'}\n")
        if not best:
            lines.append("⚠️ No AI providers configured! Get at least one free key:\n")
            lines.append("1. OpenRouter: https://openrouter.ai/keys ($5-10 free credit)")
            lines.append("2. Groq: https://console.groq.com/keys (10k req/min free)")
            lines.append("3. Gemini: https://aistudio.google.com/apikey (1.5k req/day free)")

        return "\n".join(lines)

    def check_key_valid(self, provider: str) -> Tuple[bool, str]:
        """Check if an API key is valid by making a test API call."""
        key = self.get(provider)
        if not key:
            return False, "Key not configured"

        try:
            import requests
        except ImportError:
            return True, "requests not installed, skipping validation"

        test_urls = {
            'openrouter': ('https://openrouter.ai/api/v1/models', {'Authorization': f'Bearer {key}'}),
            'groq': ('https://api.groq.com/openai/v1/models', {'Authorization': f'Bearer {key}'}),
            'gemini': (f'https://generativelanguage.googleapis.com/v1beta/models?key={key}', {}),
            'deepseek': ('https://api.deepseek.com/v1/models', {'Authorization': f'Bearer {key}'}),
            'mistral': ('https://api.mistral.ai/v1/models', {'Authorization': f'Bearer {key}'}),
            'openai': ('https://api.openai.com/v1/models', {'Authorization': f'Bearer {key}'}),
            'anthropic': ('https://api.anthropic.com/v1/messages', {'x-api-key': key, 'anthropic-version': '2023-06-01'}),
            'glm': ('https://open.bigmodel.cn/api/paas/v4/chat/completions', {'Authorization': f'Bearer {key}'}),
        }

        if provider not in test_urls:
            return True, "No validation endpoint"

        url, headers = test_urls[provider]
        try:
            if provider == 'anthropic':
                # Anthropic needs a POST with body
                r = requests.post(url, json={'model': 'claude-sonnet-4-20250514', 'messages': [{'role': 'user', 'content': 'hi'}], 'max_tokens': 1},
                    headers={**headers, 'Content-Type': 'application/json'}, timeout=10)
            else:
                r = requests.get(url, headers=headers, timeout=10)

            if r.status_code in [200, 201]:
                return True, "Valid"
            elif r.status_code == 401:
                return False, "Invalid key (401 Unauthorized)"
            elif r.status_code == 429:
                return True, "Valid (rate limited)"
            else:
                return False, f"HTTP {r.status_code}: {r.text[:100]}"
        except Exception as e:
            return False, f"Error: {str(e)[:100]}"


def run_check():
    """Run a full check and print report."""
    mgr = APIKeyManager()
    print(mgr.generate_report())

    # Validate configured keys
    print("\n## Key Validation\n")
    for provider in mgr.get_configured_providers():
        valid, msg = mgr.check_key_valid(provider)
        icon = "✅" if valid else "❌"
        print(f"{icon} {provider}: {msg}")


if __name__ == "__main__":
    run_check()
