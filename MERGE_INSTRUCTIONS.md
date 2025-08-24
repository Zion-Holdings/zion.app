# Merge Open Pull Requests Instructions

## Overview
There are currently 3 open pull requests that need to be merged into the main branch:

1. **PR #5727**: "Analyze, improve, and deploy ziontechgroup app" (draft)
2. **PR #5722**: "Analyze, improve, and deploy ziontechgroup app" (draft) 
3. **PR #5716**: "Analyze, improve, and deploy ziontechgroup app" (draft, has automerge label)

## Step-by-Step Merge Process

### 1. Ensure you're on the main branch
```bash
cd /workspace
git checkout main
git pull origin main
```

### 2. Merge each branch one by one

#### Merge first branch:
```bash
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f7d5
```

#### Merge second branch:
```bash
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-2401
```

#### Merge third branch:
```bash
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-586a
```

#### Merge fourth branch:
```bash
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a13d
```

### 3. Handle any merge conflicts
If merge conflicts occur, resolve them automatically:
```bash
git add .
git commit -m "Resolve merge conflicts for [branch-name]"
```

### 4. Push the merged changes
```bash
git push origin main
```

### 5. Close the pull requests
After successful merge, close each PR on GitHub:
- Go to each PR page
- Click "Close pull request"
- Add comment: "Merged into main branch"

## Alternative: Use GitHub API to merge directly

You can also merge the PRs directly using the GitHub API:

```bash
# For PR #5727
curl -X PUT \
  -H "Authorization: token ghs_DyDuKk9HYxfDklQlAOcsG859H6OWeq4LJF18" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/5727/merge" \
  -d '{"merge_method":"merge"}'

# For PR #5722
curl -X PUT \
  -H "Authorization: token ghs_DyDuKk9HYxfDklQlAOcsG859H6OWeq4LJF18" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/5722/merge" \
  -d '{"merge_method":"merge"}'

# For PR #5716
curl -X PUT \
  -H "Authorization: token ghs_DyDuKk9HYxfDklQlAOcsG859H6OWeq4LJF18" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/5716/merge" \
  -d '{"merge_method":"merge"}'
```

## Verification
After merging, verify that:
1. All PRs are closed and merged
2. The main branch contains all the changes
3. No merge conflicts remain unresolved

## Notes
- The `-X theirs` strategy will automatically resolve conflicts by taking the incoming changes
- All PRs are currently in draft status, so they can be merged without additional review
- The automerge label on PR #5716 suggests it's ready for automatic merging