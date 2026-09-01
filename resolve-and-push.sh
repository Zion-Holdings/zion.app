#!/bin/bash
set -e
cd /data/data/com.termux/files/home/zion-support.github.io

echo "=== Resolver conflitos de merge ==="

# 1. docs/AI-AGENT-ONBOARDING-PROMPTS.md — manter nossa versão
git add docs/AI-AGENT-ONBOARDING-PROMPTS.md
echo "✓ staged docs/"

# 2. root_site/_redirects — usar nossa versão (mais completa)
git checkout --ours root_site/_redirects
git add root_site/_redirects
echo "✓ resolved root_site/_redirects"

echo "=== Finalizar rebase (usar GIT_EDITOR=true para pular editor) ==="
GIT_EDITOR=true git rebase --continue 2>&1

echo "=== Push para gh-pages ==="
git push origin gh-pages 2>&1

echo "=== Estado final ==="
echo "Commit: $(git log --oneline -1)"
echo "Status: $(git status --short | head -5)"
