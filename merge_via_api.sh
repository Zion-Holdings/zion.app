#!/bin/bash

echo "Merging open pull requests via GitHub API..."

# Merge PR #5727
echo "Merging PR #5727..."
curl -X PUT \
  -H "Authorization: token ghs_DyDuKk9HYxfDklQlAOcsG859H6OWeq4LJF18" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/5727/merge" \
  -d '{"merge_method":"merge"}'

echo "PR #5727 merged"

# Merge PR #5722
echo "Merging PR #5722..."
curl -X PUT \
  -H "Authorization: token ghs_DyDuKk9HYxfDklQlAOcsG859H6OWeq4LJF18" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/5722/merge" \
  -d '{"merge_method":"merge"}'

echo "PR #5722 merged"

# Merge PR #5716
echo "Merging PR #5716..."
curl -X PUT \
  -H "Authorization: token ghs_DyDuKk9HYxfDklQlAOcsG859H6OWeq4LJF18" \
  -H "Accept: application/vnd.github.v3+json" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/5716/merge" \
  -d '{"merge_method":"merge"}'

echo "PR #5716 merged"

echo "All pull requests have been merged successfully!"