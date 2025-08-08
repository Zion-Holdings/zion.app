### File Preservation Policy

- Avoid deleting files as much as possible.
- Prefer to fix broken or unused files. If immediate fix is not possible, temporarily deactivate by:
  - Renaming to `<name>.disabled` or moving into a `disabled/` folder; and
  - Creating a follow-up task to revisit and fix.
- Only delete when absolutely necessary and no viable workaround exists.
- If you must delete files, list them (or patterns) in `.allow-delete` before committing.
- If duplicates exist, merge or consolidate them instead of deleting one copy without reconciliation.

#### Workflow
- Before committing, a pre-commit hook blocks staged deletions unless explicitly allowed in `.allow-delete`.
- To restore a deleted file: `git restore --staged <file> && git checkout -- <file>`.
- After deactivating files, include rationale and a plan to fix in the PR description.