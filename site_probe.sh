set -eu
BASE='https://ziontechgroup.com'
SEEDS=('/' '/services/' '/tools/' '/contact/' '/sitemap.xml')
candidates=''
add_seed() {
  for p in "$@"; do candidates="${candidates}
$BASE$p"; done
}
add_links_from() {
  local url="$1"
  local html="$2"
  local links
  links=$(printf '%s' "$html" | grep -Eo 'href="[^"]*"|src="[^"]*"|data-url="[^"]*"' | sed -E 's/^[^=]*="//;s/"$//')
  local href
  while IFS=$'\n' read -r href; do
    [ -z "$href" ] && continue
    case "$href" in
      http://*|https:*) ;;
      *) continue ;;  # skip non-absolute outside site scope
    esac
    case "$href" in
      "$BASE"/*) ;;
      *) continue ;;
    esac
    candidates="${candidates}
${href%%#*}"
  done <<< "$links"
}
for seed in "${SEEDS[@]}"; do
  echo "FETCH $seed"
  out=$(curl -sS --max-time 20 -L -A 'Mozilla/5.0' -o /tmp/site_response.html -w '%{http_code}' "$BASE$seed" || true)
  echo "HTTP $out"
  [ -f /tmp/site_response.html ] && add_links_from "$BASE$seed" "$(cat /tmp/site_response.html)"
done
optional=$( (printf '%s\n' "$candidates" | grep -E "$BASE/(|services|tools|contact|about|pricing|solutions|blog)/" || true) )
manifest=$(printf '%s
%s' "$candidates" "$optional" | sed '/^$/d' | sort -u)
total=$(printf '%s\n' "$manifest" | wc -l | tr -d ' ')
printf 'Unique candidate URLs: %s\n' "$total"
results_file=$(mktemp)
printf '[' > "$results_file"
first=1
inspected=0
broken=0
while IFS= read -r u; do
  [ $inspected -ge 250 ] && break
  inspected=$((inspected+1))
  probe="/tmp/site_probe_$(printf '%s' "$u" | sed 's/[^A-Za-z0-9_-]/_/g')"
  line=$(curl -sS --max-time 20 -L -A 'Mozilla/5.0' -o "$probe" -w '%{http_code}|%{size_download}|%{redirect_url}' "$u" 2>/dev/null || printf '000|0|')
  code=${line%%|*}
  rest=${line#*|}
  size=${rest%%|*}
  rest=${rest#*|}
  redir=${rest:-}
  [ -z "$code" ] && code='000'
  [ -z "$size" ] && size='0'
  if [ "$code" -ge 400 ] 2>/dev/null; then broken=$((broken+1)); fi
  marker=''
  if [ -f "$probe" ]; then
    case "$u" in
      *sitemap.xml*) marker=$(head -c 200 "$probe" | grep -Eo '<urlset|<sitemapindex|xml version' | head -n1 || true);;
      *robots.txt*) marker=$(grep -m1 -iE 'user-agent|allow|disallow' "$probe" | head -n1 || true);;
      *)/(services|tools|contact|about|pricing|solutions|blog)*) marker=$(head -c 4000 "$probe" | grep -Eo '<title>[^<]{3,}</title>|<h1[^>]*>[^<]{3,}</h1>|og:title[^>]*>[^<]{3,}' | head -n1 || true);;
      *) marker='OK';;
    esac
  else
    marker='MISSING'
  fi
  [ -z "$marker" ] && marker='EMPTY'
  marker=$(printf '%s' "$marker" | tr -d '\n' | sed 's/"/\\"/g')
  u_esc=$(printf '%s' "$u" | sed 's/"/\\"/g')
  if ! $first; then printf ',\n' >> "$results_file"; fi
  first=0
  printf '{"url":"%s","status":"%s","size":%s,"marker":"%s","redirect":"%s"}' "$u_esc" "$code" "$size" "$marker" "$redir" >> "$results_file"
done <<< "$manifest"
printf ']\n' >> "$results_file"
printf 'Inspected: %s\nBrokenHTTP: %s\nResultsJson: %s\n' "$inspected" "$broken" "$results_file"
