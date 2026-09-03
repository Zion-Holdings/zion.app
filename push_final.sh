# RESOLUÇÃO: Push final
cd /data/data/com.termux/files/home/zion-support.github.io

echo "===== RESOLUÇÃO FINAL ====="
echo ""
echo "1. Adicionar páginas 404 em falta ao staging:"
git add public/industry/index.html 2>/dev/null && echo "   ✅ industry"
git add "public/solutions/government/index.html" 2>/dev/null && echo "   ✅ solutions/government"
git add public/trust/index.html 2>/dev/null && echo "   ✅ trust"
git add "public/zion-composio-automation-stack/index.html" 2>/dev/null && echo "   ✅ composio-stack"
echo "   Staged: $(git diff --cached --name-only 2>/dev/null | wc -l) ficheiros"
echo ""
echo "2. Commit:"
git commit -m "fix(404): adicionar páginas industry, government, trust, composio-stack" 2>&1 | tail -3
echo ""
echo "3. Stash do out/ (ficheiros ignorados que bloqueiam pull):"
git stash push --include-untracked -m "temp-out" 2>&1 | tail -2
echo ""
echo "4. Pull + rebase:"
git pull origin gh-pages --rebase 2>&1 | tail -8
echo ""
echo "5. Stash pop:"
git stash pop 2>&1 | tail -2
echo ""
echo "6. Push:"
git push origin HEAD:refs/heads/gh-pages 2>&1 | tail -3
echo ""
echo "7. Estado final:"
echo "   HEAD: $(git rev-parse HEAD)"
echo "   Remote: $(git rev-parse origin/gh-pages 2>/dev/null || echo 'N/A')"
