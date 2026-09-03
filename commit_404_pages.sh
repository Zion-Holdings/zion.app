# commit_public_pages.sh - Adicionar páginas 404 e push
cd /data/data/com.termux/files/home/zion-support.github.io

echo "===== COMMIT + PUSH Páginas 404 ====="
echo ""
echo "1. Verificar páginas 404 em public/:"
for d in industry "solutions/government" trust "zion-composio-automation-stack" "whatsapp-business-automation"; do
  p="public/$d/index.html"
  if [ -f "$p" ]; then echo "   ✅ $p: $(wc -c < "$p") bytes"; 
  else echo "   ❌ $p: MISSING"; fi; 
done
echo ""
echo "2. HEAD atual:"
echo "   Local: $(git rev-parse HEAD)"
echo "   Remote: $(git rev-parse origin/gh-pages 2>/dev/null || echo 'N/A')"
echo ""
echo "3. Páginas 404 não estão em HEAD (verificar):"
for d in industry "solutions/government" trust "zion-composio-automation-stack" "whatsapp-business-automation"; do
  p="public/$d/index.html"
  if git ls-tree -r --name-only HEAD 2>/dev/null | grep -q "$p"; then 
    echo "   $p: JÁ em HEAD"
  else 
    echo "   $p: NOVO em HEAD"
  fi; 
done
echo ""
echo "4. Adicionar páginas 404 ao staging:"
git add public/industry/index.html 2>/dev/null
git add "public/solutions/government/index.html" 2>/dev/null
git add public/trust/index.html 2>/dev/null
git add "public/zion-composio-automation-stack/index.html" 2>/dev/null
git add public/whatsapp-business-automation/index.html 2>/dev/null
echo "   Staged: $(git diff --cached --name-only 2>/dev/null | wc -l) ficheiros"
echo ""
echo "5. Commit:"
git commit -m "fix(404): adicionar pages industry, government, trust, composio-stack, whatsapp-automation" 2>&1 | tail -3
echo ""
echo "6. Push para gh-pages:"
git push origin HEAD:refs/heads/gh-pages 2>&1 | tail -5
echo ""
echo "7. Verificação pós-push:"
echo "   Local: $(git rev-parse HEAD)"
echo "   Remote: $(git rev-parse origin/gh-pages 2>/dev/null || echo 'N/A')"
