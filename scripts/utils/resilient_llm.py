"""Resilience utilities for remote LLM calls."""
from __future__ import annotations

import functools
import time
from typing import Callable, TypeVar, Dict, List, Optional
import logging

F = TypeVar('F', bound=Callable[..., object])

class ModelUnavailable(Exception):
    """Raised when the requested model is temporarily unavailable (HTTP 503)."""

def retry_on_503(func: F = None, fallback_func: Optional[Callable] = None) -> F:
    """Retry a remote-call wrapped function up to 3 times on HTTP 503.
    
    If fallback_func is provided, call it instead after max retries.
    """
    def decorator(fn: F) -> F:
        @functools.wraps(fn)
        def wrapper(*args, **kwargs):
            max_attempts = 3
            for attempt in range(1, max_attempts + 1):
                try:
                    return fn(*args, **kwargs)
                except ModelUnavailable as exc:
                    if attempt == max_attempts:
                        # Try fallback if provided
                        if fallback_func is not None:
                            return fallback_func(*args, **kwargs)
                        raise
                    time.sleep(min(2 ** attempt, 10))
            raise RuntimeError('unreachable')
        return wrapper  # type: ignore[return-value]
    
    # Support both @retry_on_503 and @retry_on_503(fallback_func=x)
    if func is not None:
        return decorator(func)
    return decorator  # type: ignore[return-value]


def calculate_local_revenue_metrics(services: List[Dict]) -> Dict:
    """Calculate revenue metrics locally without LLM calls."""
    total_services = len(services)
    
    # Base metrics
    total_projected_revenue = sum(
        service.get('projected_revenue', 0) for service in services
    )
    
    # Industry-based scoring
    industry_revenue_multipliers = {
        'financial': 1.8,
        'healthcare': 1.6,
        'manufacturing': 1.4,
        'retail': 1.3,
        'logistics': 1.5,
        'hospitality': 1.2,
        'sports': 1.4,
        'real_estate': 1.7,
        'fintech': 1.9,
        'telecom': 1.6,
        'gaming': 1.5,
        'technology': 1.4
    }
    
    industry_revenue = 0
    for service in services:
        industry = service.get('industry', 'technology')
        multiplier = industry_revenue_multipliers.get(industry, 1.4)
        base_value = service.get('projected_revenue', 1000)
        industry_revenue += base_value * multiplier
    
    return {
        'total_services': total_services,
        'total_projected_revenue': industry_revenue,
        'avg_revenue_per_service': industry_revenue / total_services if total_services > 0 else 0,
        'industry_breakdown': industry_revenue_multipliers
    }


QUALITY_METRICS = {
    'financial': {'quality_score': 92, 'conversion_boost': 1.45},
    'healthcare': {'quality_score': 88, 'conversion_boost': 1.38},
    'manufacturing': {'quality_score': 85, 'conversion_boost': 1.32},
    'retail': {'quality_score': 82, 'conversion_boost': 1.28},
    'logistics': {'quality_score': 87, 'conversion_boost': 1.41},
    'hospitality': {'quality_score': 78, 'conversion_boost': 1.22},
    'sports': {'quality_score': 80, 'conversion_boost': 1.25},
    'real_estate': {'quality_score': 90, 'conversion_boost': 1.52},
    'fintech': {'quality_score': 94, 'conversion_boost': 1.62},
    'telecom': {'quality_score': 86, 'conversion_boost': 1.36},
    'gaming': {'quality_score': 83, 'conversion_boost': 1.30},
    'technology': {'quality_score': 85, 'conversion_boost': 1.33}
}


def log_fallback_event(event_type: str, details: Dict) -> None:
    """Log fallback events for monitoring."""
    logger = logging.getLogger('revenue-maximization-engine')
    logger.warning(f"[FALLBACK] {event_type}: {details}")


def calculate_local_quality_scores(services: List[Dict]) -> Dict:
    """Calculate quality scores locally without LLM calls."""
    scores = {}
    for service in services:
        service_id = service.get('id', 'unknown')
        # Base score from features and benefits count
        features_count = len(service.get('features', []))
        benefits_count = len(service.get('benefits', []))
        description_len = len(service.get('description', ''))
        
        # Quality calculation
        score = 50  # Base score
        score += min(features_count * 5, 20)  # Up to 20 for features
        score += min(benefits_count * 5, 20)   # Up to 20 for benefits
        score += min(description_len // 10, 10)  # Up to 10 for description length
        
        scores[service_id] = {
            'quality_score': min(100, score),
            'features_count': features_count,
            'benefits_count': benefits_count,
            'description_length': description_len
        }
    return scores


__all__ = ['ModelUnavailable', 'retry_on_503', 'calculate_local_revenue_metrics', 'QUALITY_METRICS', 'log_fallback_event', 'calculate_local_quality_scores']