"""
Circuit Breaker for SMTP/IMAP connections
Prevents hanging on connection failures by implementing timeout and fallback to draft mode
"""
import socket
import json
import time
from pathlib import Path
from typing import Optional, Callable, Any

# Circuit breaker configuration
CIRCUIT_BREAKER_THRESHOLD = 3
CIRCUIT_BREAKER_TIMEOUT = 300  # 5 minutes
SOCKET_TIMEOUT = 12  # 12 seconds as per directive

# State tracking
_connection_failures = {}
_circuit_open_until = {}

def get_socket_timeout() -> int:
    """Return the configured socket timeout"""
    return SOCKET_TIMEOUT

def set_socket_timeout(timeout: int = 12):
    """Set global socket timeout"""
    global SOCKET_TIMEOUT
    SOCKET_TIMEOUT = timeout
    socket.setdefaulttimeout(timeout)

def check_circuit_breaker(service_key: str) -> bool:
    """
    Check if circuit breaker is OPEN for this service
    Returns True if we should skip the connection (circuit open)
    """
    if service_key in _circuit_open_until:
        if time.time() < _circuit_open_until[service_key]:
            return True  # Circuit is open
        else:
            # Circuit has cooled down
            del _circuit_open_until[service_key]
            _connection_failures[service_key] = 0
    return False

def record_connection_failure(service_key: str, exc: Exception) -> bool:
    """
    Record a connection failure
    Returns True if circuit breaker should OPEN
    """
    _connection_failures[service_key] = _connection_failures.get(service_key, 0) + 1
    
    if _connection_failures[service_key] >= CIRCUIT_BREAKER_THRESHOLD:
        _circuit_open_until[service_key] = time.time() + CIRCUIT_BREAKER_TIMEOUT
        return True  # Circuit should open
    return False

def reset_circuit_breaker(service_key: str):
    """Reset circuit breaker after successful connection"""
    _connection_failures[service_key] = 0
    if service_key in _circuit_open_until:
        del _circuit_open_until[service_key]

def with_circuit_breaker(
    service_key: str,
    fallback_action: Callable[[], Any],
    primary_action: Callable[[], Any]
) -> Any:
    """
    Execute primary action with circuit breaker protection
    Falls back to fallback_action if circuit is open or connection fails
    """
    # Check if circuit is open
    if check_circuit_breaker(service_key):
        # Circuit is open - use fallback
        return fallback_action()
    
    try:
        # Set socket timeout before connection
        original_timeout = socket.getdefaulttimeout()
        socket.setdefaulttimeout(SOCKET_TIMEOUT)
        
        result = primary_action()
        
        # Reset circuit breaker on success
        reset_circuit_breaker(service_key)
        socket.setdefaulttimeout(original_timeout)
        
        return result
        
    except socket.timeout:
        should_open = record_connection_failure(service_key, TimeoutError("Connection timeout"))
        socket.setdefaulttimeout(original_timeout)
        
        if should_open:
            # Circuit now open - use fallback
            return fallback_action()
        raise
        
    except Exception as e:
        should_open = record_connection_failure(service_key, e)
        socket.setdefaulttimeout(original_timeout)
        
        if should_open:
            return fallback_action()
        raise

def write_to_draft_file(content: dict, draft_path: Path) -> bool:
    """
    Write email content to draft file for later processing
    Used when circuit breaker opens
    """
    try:
        draft_path.parent.mkdir(parents=True, exist_ok=True)
        with draft_path.open('a', encoding='utf-8') as f:
            f.write(json.dumps(content, ensure_ascii=False) + '\n')
        return True
    except Exception:
        return False

# Initialize socket timeout
set_socket_timeout()