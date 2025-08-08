import time
from ..config import get_settings


class RateLimiter:
    def __init__(self) -> None:
        self._settings = get_settings()
        self._rpm = self._settings.admin_rate_limit_rpm
        self._buckets: dict[str, list[float]] = {}

    def set_limit(self, rpm: int) -> None:
        self._rpm = max(1, rpm)

    def allow(self, api_key: str) -> bool:
        now = time.time()
        window = 60.0
        bucket = self._buckets.setdefault(api_key, [])
        # Remove old
        while bucket and now - bucket[0] > window:
            bucket.pop(0)
        if len(bucket) >= self._rpm:
            return False
        bucket.append(now)
        return True