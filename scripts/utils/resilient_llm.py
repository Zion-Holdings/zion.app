"""Resilience utilities for remote LLM calls."""
from __future__ import annotations

import functools
import time
from typing import Callable, TypeVar

F = TypeVar('F', bound=Callable[..., object])

class ModelUnavailable(Exception):
    """Raised when the requested model is temporarily unavailable (HTTP 503)."""

def retry_on_503(func: F) -> F:
    """Retry a remote-call wrapped function up to 3 times on HTTP 503."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        max_attempts = 3
        for attempt in range(1, max_attempts + 1):
            try:
                return func(*args, **kwargs)
            except ModelUnavailable as exc:
                if attempt == max_attempts:
                    raise
                time.sleep(min(2 ** attempt, 10))
        raise RuntimeError('unreachable')
    return wrapper  # type: ignore[return-value]

__all__ = ['ModelUnavailable', 'retry_on_503']
