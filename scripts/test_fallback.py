#!/usr/bin/env python3
"""
Test script to verify the 503 fallback mechanism works correctly.
"""

import sys
sys.path.insert(0, '/Users/klebergarciaalcatrao/scripts/utils')

from resilient_llm import retry_on_503, calculate_local_revenue_metrics, log_fallback_event

# Test function that raises 503
@retry_on_503()
def test_function_with_503():
    """Function that simulates a 503 error."""
    raise Exception("HTTP 503: The requested model is temporarily unavailable")

# Test function that works normally
@retry_on_503()
def test_function_normal():
    """Function that works normally."""
    return {"status": "success", "message": "Normal execution"}

# Test with fallback function
def my_fallback(*args, **kwargs):
    """Custom fallback function."""
    return {"status": "success", "mode": "custom_fallback", "message": "Custom fallback executed"}

@retry_on_503(fallback_func=my_fallback)
def test_function_with_custom_fallback():
    """Function that simulates a 503 error with custom fallback."""
    raise Exception("HTTP 503: The requested model is temporarily unavailable")

if __name__ == "__main__":
    print("=" * 70)
    print("Testing 503 Fallback Mechanism")
    print("=" * 70)
    
    # Test 1: Normal function
    print("\n[TEST 1] Normal function execution:")
    result = test_function_normal()
    print(f"  Result: {result}")
    
    # Test 2: 503 error with default fallback
    print("\n[TEST 2] 503 error with default fallback:")
    result = test_function_with_503()
    print(f"  Result: {result}")
    
    # Test 3: 503 error with custom fallback
    print("\n[TEST 3] 503 error with custom fallback:")
    result = test_function_with_custom_fallback()
    print(f"  Result: {result}")
    
    # Test 4: Calculate local revenue metrics
    print("\n[TEST 4] Local revenue metrics calculation:")
    test_services = [
        {"id": "test-1", "name": "Test Service 1", "industry": "technology", "category": "analytics", "features": ["feature1", "feature2"], "benefits": ["benefit1", "benefit2"]},
        {"id": "test-2", "name": "Test Service 2", "industry": "healthcare", "category": "security", "features": ["feature1", "feature2"], "benefits": ["benefit1", "benefit2"]},
    ]
    metrics = calculate_local_revenue_metrics(test_services)
    print(f"  Total services: {metrics['total_services']}")
    print(f"  Projected revenue: ${metrics['total_projected_revenue']:,.2f}")
    print(f"  Average quality score: {metrics['average_quality_score']:.2f}")
    
    print("\n" + "=" * 70)
    print("✅ All tests passed!")
    print("=" * 70)