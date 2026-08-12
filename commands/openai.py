#!/usr/bin/env python3
"""
OpenAI drop-in shim for Zion agents.

Intercepts `import openai` and redirects all ChatCompletion.create / OpenAI() calls
to the unified llm_client free-fallback chain (Groq/Gemini/... → Ollama).

Place this file (openai.py) in the same directory as agent scripts
(e.g., zion.app/commands/) so `import openai` resolves here.
"""

import sys, os

# Shim old-style openai API for Zion agents
# This file lives in commands/, lib/ is at repo root (parent of commands/)
LIB_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'lib'))
if LIB_DIR not in sys.path:
    sys.path.insert(0, LIB_DIR)

from llm_client import chat as _llm_chat

class _Resp:
    def __init__(self, data):
            self.choices = [_Choice(c) for c in data.get("choices", [])]
            self.model = data.get("model")
            self.provider = data.get("provider")
            self.usage = data.get("usage", {})

class _Choice:
    def __init__(self, data):
            self.message = _Message(data.get("message", {}))
            self.index = data.get("index", 0)
            self.finish_reason = data.get("finish_reason", "stop")

class _Message:
    def __init__(self, data):
            self.role = data.get("role")
            self.content = data.get("content")

class OpenAI:
    def __init__(self, api_key=None):
        pass

    class ChatCompletion:
        @staticmethod
        def create(model=None, messages=None, temperature=0.7, max_tokens=None, n=1, stream=False, **kwargs):
            if stream:
                raise NotImplementedError("Streaming not supported by shim")
            result = _llm_chat(messages, provider="auto", temperature=temperature)
            return _Resp({
                "choices": [
                    {
                        "message": {
                            "role": "assistant",
                            "content": result.get("content", ""),
                        },
                        "index": 0,
                        "finish_reason": "stop",
                    }
                ],
                "model": result.get("model"),
                "provider": result.get("provider"),
                "usage": {
                    "prompt_tokens": 0,
                    "completion_tokens": 0,
                    "total_tokens": 0,
                },
            })

    class chat:
        class completions:
            @staticmethod
            def create(model=None, messages=None, temperature=0.7, max_tokens=None, n=1, stream=False, **kwargs):
                return OpenAI.ChatCompletion.create(model=model, messages=messages, temperature=temperature, max_tokens=max_tokens, n=n, stream=stream, **kwargs)

ChatCompletion = OpenAI.ChatCompletion

# Expose shim
_sys = sys
_sys.modules['openai'] = _sys.modules.get(__name__)
