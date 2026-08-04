p='.github/workflows/gh-pages.yml'
s=open(p).read()
old='''npm run build > build.log 2>npm run build > build.log 2>&1 || true1 || echo "Build failed or skipped, continuing with static files"'''
new='''npm run build > build.log 2>&1 || echo "Build failed or skipped, continuing with static files"'''
if old in s:
    s=s.replace(old,new)
    open(p,'w').write(s)
    print('fixed_build_line')
else:
    print('pattern_not_found')
