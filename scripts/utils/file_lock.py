#!/usr/bin/env python3
"""Cross-platform file lock helper for single-instance scripts."""
import os
import sys
import time
import random
from pathlib import Path


class FileLock:
    def __init__(self, lock_path: str | Path, timeout_seconds: int = 0):
        self.lock_path = Path(lock_path)
        self.lock_path.parent.mkdir(parents=True, exist_ok=True)
        self.timeout_seconds = timeout_seconds
        self._fd = None

    def acquire(self) -> bool:
        try:
            fd = os.open(str(self.lock_path), os.O_CREAT | os.O_RDWR)
            self._fd = fd
            try:
                fcntl = None
                try:
                    import fcntl as _fcntl
                    fcntl = _fcntl
                except Exception:
                    pass
                if fcntl is not None:
                    try:
                        fcntl.flock(fd, fcntl.LOCK_EX | fcntl.LOCK_NB)
                        return True
                    except (IOError, OSError):
                        return False
                else:
                    import msvcrt
                    try:
                        msvcrt.locking(fd, msvcrt.LK_NBLCK, 1)
                        return True
                    except (IOError, OSError):
                        return False
            except Exception:
                return False
        except Exception:
            return False

    def release(self):
        if self._fd is None:
            return
        try:
            try:
                import fcntl as _fcntl
                try:
                    _fcntl.flock(self._fd, _fcntl.LOCK_UN)
                except Exception:
                    pass
            except Exception:
                pass
        except Exception:
            pass
        try:
            os.close(self._fd)
        except Exception:
            pass
        self._fd = None

    def cleanup(self):
        try:
            self.lock_path.unlink(missing_ok=True)
        except Exception:
            pass


def single_instance(lock_file: str | Path, jitter: tuple[int, int] = (2, 25), timeout_seconds: int = 0):
    # Distributed jitter to reduce API spike collisions / 503s.
    try:
        time.sleep(random.randint(*jitter))
    except Exception:
        pass

    lock = FileLock(lock_file, timeout_seconds=timeout_seconds)
    if not lock.acquire():
        print(f"[LOCK] Processo já em execução por outra instância. Ignorando chamada duplicada.", flush=True)
        sys.exit(0)
    return lock
