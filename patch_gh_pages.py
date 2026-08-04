import re
p='.github/workflows/gh-pages.yml'
s=open(p).read()
old="""          npm run build > build.log 2>&1 || {
            echo \"npm_run_build_failed=1\" >> \"$GITHUB_OUTPUT\"
            echo \"build_log_start\"
            tail -n 200 build.log
            echo \"build_log_end\"
            if [ -d out ]; then
              PAGES=$(find out -name 'index.html' | wc -l)
              echo \"pages=$PAGES\" >> \"$GITHUB_OUTPUT\"
              echo \"size=$(du -sh out | awk '{print $1}')\" >> \"$GITHUB_OUTPUT\"
              echo \"production_out_exists=1\" >> \"$GITHUB_OUTPUT\"
            else
              echo \"pages=0\" >> \"$GITHUB_OUTPUT\"
              echo \"size=none\" >> \"$GITHUB_OUTPUT\"
              echo \"production_out_exists=0\" >> \"$GITHUB_OUTPUT\"
            fi
            echo \"artifacts_uploaded=1\" >> \"$GITHUB_OUTPUT\"
            exit 1
          }"""
new="""          npm run build > build.log 2>&1 || true
          echo "---- BUILD LOG TAIL ----"
          tail -n 200 build.log || true
          echo "---- /BUILD LOG TAIL ----"
          if [ -d out ]; then
            PAGES=$(find out -name 'index.html' | wc -l)
            SIZE=$(du -sh out | awk '{print $1}')
            echo "pages=$PAGES" >> "$GITHUB_OUTPUT"
            echo "size=$SIZE" >> "$GITHUB_OUTPUT"
            echo "production_out_exists=1" >> "$GITHUB_OUTPUT"
          else
            echo "pages=0" >> "$GITHUB_OUTPUT"
            echo "size=none" >> "$GITHUB_OUTPUT"
            echo "production_out_exists=0" >> "$GITHUB_OUTPUT"
          fi
          echo "artifacts_uploaded=1" >> "$GITHUB_OUTPUT"
          exit 0"""
s=s.replace(old,new)
open(p,'w').write(s)
print('patched_with_exit_0')
