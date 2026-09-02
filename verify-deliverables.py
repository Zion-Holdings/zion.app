#!/usr/bin/env python3
"""
Script de auto-diagnóstico do estado do Zion.
Executa em background: não requer usuário.
"""

import os
import sys
from datetime import datetime

def log(msg):
    print(f"[{datetime.now().strftime('%H:%M:%S')}] {msg}")

def check_path(path, label):
    exists = os.path.exists(path)
    size = os.path.getsize(path) if exists else 0
    status = "✅" if exists else "❌"
    log(f"{status} {label}: {path} ({size:,} bytes)")
    return exists, size

def main():
    base = "/Users/miami2/zion-support.github.io"
    
    log("=== Verificação de Entregáveis Composio ===")
    
    checks = [
        (f"{base}/composio-maximum-potential.md", "Relatório máximo potencial"),
        (f"{base}/composio/index.html", "Página /composio/"),
        (f"{base}/monetization/index.html", "Página /monetization/"),
        (f"{base}/composio-state-scanner.py", "State scanner"),
    ]
    
    results = []
    for path, label in checks:
        exists, size = check_path(path, label)
        results.append((label, exists, size))
    
    log("")
    log("=== Sumário ===")
    ok = sum(1 for _, e, _ in results if e)
    total = len(results)
    log(f"{ok}/{total} entregáveis presentes em disco")
    
    if ok == total:
        log("✅ Todos os entregáveis verificados em disco.")
    else:
        log("⚠️  Alguns entregáveis faltando — verificar acima.")

if __name__ == "__main__":
    main()
