#!/usr/bin/env python3
import sys
sys.path.insert(0, '/Users/klebergarciaalcatrao/scripts/api-key-auditor')
from audit-api-keys import APIKeyAuditor

if __name__ == "__main__":
    auditor = APIKeyAuditor()
    auditor.run_audit()
