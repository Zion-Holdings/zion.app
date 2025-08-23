# Merge All Open PRs - Comprehensive Guide

This guide explains how to resolve merge conflicts and merge all open pull requests into the main branch for the Zion.app repository.

## 🚨 Important Notes

- **Backup First**: Always create a backup branch before starting
- **Test First**: Run the test script before the full merge process
- **Monitor Progress**: Keep an eye on the merge process and resolve any critical issues
- **Review Changes**: Thoroughly test the application after merging

## 📋 Prerequisites

- Git access to the repository
- Bash shell environment
- Sufficient disk space for all branches
- Network access to GitHub

## 🛠️ Available Scripts

### 1. `test-merge-small-batch.sh` - Test Script
**Purpose**: Test the merge process with a small batch (3 branches)
**Use Case**: Run this first to verify everything works correctly

```bash
./test-merge-small-batch.sh
```

**Features**:
- Processes only 3 branches for testing
- Creates backup branch automatically
- Provides detailed feedback
- Safe for initial testing

### 2. `incremental-merge-prs.sh` - Incremental Merge Script
**Purpose**: Process branches in configurable batches
**Use Case**: Main script for processing all branches safely

```bash
./incremental-merge-prs.sh
```

**Features**:
- Configurable batch size (default: 10 branches per batch)
- User confirmation between batches
- Automatic conflict resolution
- Progress tracking and reporting
- Failure limits per batch

### 3. `comprehensive-merge-all-prs.sh` - Full Merge Script
**Purpose**: Process all branches in one go
**Use Case**: When you're confident the process works and want to process everything

```bash
./comprehensive-merge-all-prs.sh
```

**Features**:
- Processes all branches at once
- Automatic conflict resolution
- Periodic progress saves
- Comprehensive reporting

## 🔄 Merge Process Overview

### Phase 1: Preparation
1. **Create Backup**: Automatically creates a backup branch
2. **Switch to Main**: Ensures we're on the main branch
3. **Fetch Updates**: Gets latest remote changes

### Phase 2: Branch Processing
1. **Branch Validation**: Checks if branch exists and can be merged
2. **Merge Attempt**: Tries to merge without conflicts
3. **Conflict Resolution**: Automatically resolves conflicts if they occur
4. **Commit Changes**: Commits successful merges

### Phase 3: Conflict Resolution Strategy
The scripts use intelligent conflict resolution:

- **Critical Files** (package.json, next.config.js): Keep main branch version
- **Regular Files**: Attempt to merge both versions
- **Automatic Backup**: Creates backups of conflicted files
- **Smart Merging**: Removes conflict markers intelligently

## 🚀 Getting Started

### Step 1: Test the Process
```bash
# Make sure you're on the main branch
git checkout main

# Run the test script
./test-merge-small-batch.sh
```

### Step 2: Review Results
- Check the merge results
- Test the application
- Review any resolved conflicts

### Step 3: Run Full Process
```bash
# If test was successful, run incremental merge
./incremental-merge-prs.sh

# Or run comprehensive merge if confident
./comprehensive-merge-all-prs.sh
```

## 📊 Monitoring Progress

The scripts provide real-time progress updates:

- **Branch Count**: Shows total branches to process
- **Success/Failure Counts**: Tracks successful and failed merges
- **Conflict Resolution**: Counts resolved conflicts
- **Batch Progress**: Shows progress within each batch

## ⚠️ Troubleshooting

### Common Issues

1. **Merge Conflicts**: Scripts automatically resolve most conflicts
2. **Failed Merges**: Check the error logs and resolve manually if needed
3. **Network Issues**: Scripts will fail gracefully and can be restarted
4. **Disk Space**: Ensure sufficient space for all branches

### Recovery Steps

1. **Check Backup**: The backup branch contains the original state
2. **Reset Main**: `git reset --hard origin/main` to reset to remote state
3. **Manual Resolution**: Resolve conflicts manually if automatic resolution fails
4. **Restart Process**: Run the script again from where it left off

## 🔧 Configuration Options

### Batch Size
Edit the scripts to change batch sizes:
```bash
BATCH_SIZE=10  # Change this number
```

### Failure Limits
```bash
MAX_FAILURES=5  # Maximum failures per batch
```

### Conflict Resolution Strategy
Modify the `resolve_conflicts()` function to change how conflicts are handled.

## 📈 Performance Tips

1. **Use Incremental Script**: Better for large numbers of branches
2. **Monitor Resources**: Watch disk space and memory usage
3. **Network Optimization**: Ensure stable internet connection
4. **Regular Pushes**: Scripts push progress every 10 successful merges

## 🧹 Cleanup

After successful merging:

1. **Delete Backup Branch**: `git push origin --delete backup-branch-name`
2. **Clean Old Branches**: Consider removing old feature branches
3. **Update Documentation**: Update any relevant documentation
4. **Team Communication**: Inform team of completed merges

## 📞 Support

If you encounter issues:

1. Check the script output for error messages
2. Review the backup branch for the original state
3. Check Git logs for merge history
4. Consult the troubleshooting section above

## 🔒 Security Considerations

- Scripts create backup branches automatically
- All changes are committed with descriptive messages
- Progress is saved regularly to avoid data loss
- Original state is preserved in backup branches

---

**Remember**: Always test with a small batch first, and ensure you have a backup before proceeding with large-scale merges.