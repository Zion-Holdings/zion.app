from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable, List, Dict

from yarl import URL


@dataclass
class FixSuggestion:
    original: str
    suggestion: str
    reason: str


COMMON_PREFIXES = ["www."]


def suggest_simple_fixes(broken_items: Iterable[dict]) -> List[FixSuggestion]:
    suggestions: List[FixSuggestion] = []
    for item in broken_items:
        target = item.get("target_url")
        status = item.get("status")
        if not target:
            continue
        try:
            u = URL(target)
        except Exception:
            continue
        # Try https if http
        if u.scheme == "http":
            suggestions.append(
                FixSuggestion(
                    original=target,
                    suggestion=str(u.with_scheme("https")),
                    reason="prefer HTTPS; many sites redirect or only serve on https",
                )
            )
        # Try adding or removing trailing slash
        path = u.path or "/"
        if not path.endswith("/") and "." not in path.split("/")[-1]:
            suggestions.append(
                FixSuggestion(
                    original=target,
                    suggestion=str(u.with_path(path + "/")),
                    reason="sometimes directories require trailing slash",
                )
            )
        if path.endswith("/"):
            suggestions.append(
                FixSuggestion(
                    original=target,
                    suggestion=str(u.with_path(path.rstrip("/"))),
                    reason="sometimes resources are without trailing slash",
                )
            )
        # Try toggling www subdomain
        host = u.host or ""
        if host.startswith("www."):
            suggestions.append(
                FixSuggestion(
                    original=target,
                    suggestion=str(u.with_host(host[len("www.") :])),
                    reason="remove www subdomain",
                )
            )
        else:
            suggestions.append(
                FixSuggestion(
                    original=target,
                    suggestion=str(u.with_host("www." + host)) if host else target,
                    reason="add www subdomain",
                )
            )
    return suggestions