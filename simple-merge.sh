#!/bin/bash
cd /workspace
git checkout main
git pull origin main
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f7d5
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-2401
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-586a
git merge --no-edit --strategy=recursive -X theirs origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-a13d
git push origin main
echo "All PRs merged successfully!"