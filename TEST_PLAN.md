**Manual Testing Plan for `monitor_config_changes.sh`**

**A. Verify Created Files & Initial State:**
1.  Confirm the presence and content of:
    *   `scripts/config_integrity_check.txt`
    *   `cron/hourly_config_integrity_check`
2.  Confirm `scripts/monitor_config_changes.sh` exists and is executable (`ls -l scripts/monitor_config_changes.sh`).
3.  The `logs/security/` directory, `logs/security/checksums.txt`, and `logs/security/config_integrity.log` should *not* exist before the first run.

**B. Testing Procedure:**

**0. Environment Setup (Optional - for notifications):**
   - If testing webhook notifications, set the environment variable:
     `export YOUR_WEBHOOK_URL_ENV_VAR="your_test_webhook_url"`
   - Ensure `curl` and `jq` are installed if a webhook URL is provided.
   - Ensure `git` and `sha256sum` are installed.

**1. Initial Run (Populate Checksums):**
   a. Navigate to the project root directory (e.g., `/app`).
   b. Execute the script: `./scripts/monitor_config_changes.sh`
   c. **Expected Outcome:**
      *   `logs/security/` directory is created.
      *   `logs/security/config_integrity.log` is created. It should contain:
          *   Log messages for the script starting.
          *   Messages indicating each file from `scripts/config_integrity_check.txt` (that exists) is being processed and "Tracking new file..." with its checksum.
          *   Log message for script finishing.
      *   `logs/security/checksums.txt` is created and populated with entries like `<checksum> <filepath>` for each valid (existing) file in `scripts/config_integrity_check.txt`.
      *   If `WEBHOOK_URL` was set, notifications should be sent for each file now being tracked (e.g., "New File Tracked").

**2. Test Case: File Modification (Git Tracked File)**
   a. Pre-requisite: Ensure at least one file listed in `scripts/config_integrity_check.txt` is tracked by Git and has no local modifications (e.g., `package.json`).
   b. Manually modify this file (e.g., `echo "# test comment" >> package.json`).
   c. Re-run the script: `./scripts/monitor_config_changes.sh`
   d. **Expected Outcome:**
      *   `config_integrity.log` shows:
          *   Detection of change for the modified file (e.g., `package.json`), listing old and new checksums.
          *   "Attempting to revert..." message.
          *   "File ... reverted. Checksum is now ..." message.
      *   The modified file (`package.json`) is reverted to its state from `HEAD` (verify content).
      *   `checksums.txt` contains the checksum of the reverted file (original checksum from `HEAD`).
      *   Notification sent: "File Modified & Reverted".

**3. Test Case: File Modification (File NOT Tracked by Git)**
   a. Pre-requisites:
      *   Create a dummy file, e.g., `touch .env` and add some content: `echo "TEST_VAR=initial" > .env`.
      *   Add `.env` to `scripts/config_integrity_check.txt`.
      *   Ensure `.env` is listed in `.gitignore` (if a `.gitignore` file exists and is active in the test environment) or is otherwise not tracked by Git.
      *   Run `./scripts/monitor_config_changes.sh` once to record its initial checksum. Log should show ".env" being tracked.
   b. Modify the untracked file (e.g., `echo "TEST_VAR=modified" > .env`).
   c. Re-run the script: `./scripts/monitor_config_changes.sh`
   d. **Expected Outcome:**
      *   `config_integrity.log` shows:
          *   Detection of change for `.env`, listing old and new checksums.
          *   "WARNING: '.env' is not tracked by Git. Cannot revert automatically."
      *   The content of `.env` remains the modified version.
      *   `checksums.txt` is updated with the *new* (modified) checksum for `.env`.
      *   Notification sent: "File Modified & Not Tracked by Git".

**4. Test Case: File Deletion (Git Tracked File)**
   a. Pre-requisite: Ensure a file listed in `scripts/config_integrity_check.txt` is tracked by Git (e.g., `babel.config.js`, assuming it exists and is tracked).
   b. Delete this file (e.g., `rm babel.config.js`).
   c. Re-run the script: `./scripts/monitor_config_changes.sh`
   d. **Expected Outcome:**
      *   `config_integrity.log` shows:
          *   "Warning: Target file 'babel.config.js' not found. Skipping."
          *   If `babel.config.js` was in the previous `checksums.txt`: "Monitored file 'babel.config.js' has been deleted."
      *   The script attempts to restore `babel.config.js` using `git checkout HEAD -- babel.config.js`.
      *   On success, `config_integrity.log` records the restoration and updates `checksums.txt` with the new checksum. A notification "File Deleted & Restored" is sent.
      *   On failure, `config_integrity.log` notes the error and the entry is removed from `checksums.txt`. A "File Deleted & Restore FAILED" notification is sent.

**5. Test Case: File Not Found (Initially)**
   a. Add a non-existent file path (e.g., `nonexistent_config.yml`) to `scripts/config_integrity_check.txt`.
   b. Re-run the script: `./scripts/monitor_config_changes.sh`
   c. **Expected Outcome:**
      *   `config_integrity.log` shows:
          *   "Warning: Target file 'nonexistent_config.yml' not found. Skipping."
      *   `checksums.txt` does not contain an entry for `nonexistent_config.yml`.
      *   No "error" notification specifically for this, as it's treated as a configuration issue (file path listed but not found).

**6. Test Case: No Changes**
   a. Ensure no monitored files are changed from their state as recorded in `checksums.txt`.
   b. Re-run the script: `./scripts/monitor_config_changes.sh`
   c. **Expected Outcome:**
      *   `config_integrity.log` shows script start and end, and processing messages for each file. There should be no "CHANGE DETECTED" or "Tracking new file" messages for existing, unchanged files. (The script logs "File ... is unchanged" only if verbose logging for that part is enabled, which it currently is not by default).
      *   `checksums.txt` remains unchanged.
      *   No "change" or "new file" notifications sent.

**7. Test Case: New File Added to `config_integrity_check.txt`**
   a. Pre-requisite: Create a new file that is not currently listed in `scripts/config_integrity_check.txt` (e.g., `touch another_config.js` and add some content).
   b. Add its path (`another_config.js`) to `scripts/config_integrity_check.txt`.
   c. Re-run the script: `./scripts/monitor_config_changes.sh`
   d. **Expected Outcome:**
      *   `config_integrity.log` shows "Tracking new file 'another_config.js' with checksum..."
      *   `checksums.txt` has an added line for `another_config.js` with its checksum.
      *   Notification sent: "New File Tracked" for `another_config.js`.

**8. Test Case: Handing of Commented or Empty Lines in `config_integrity_check.txt`**
    a. Add a line with a comment (e.g. `# This is a comment`) and an empty line to `scripts/config_integrity_check.txt`.
    b. Re-run the script: `./scripts/monitor_config_changes.sh`.
    c. **Expected Outcome:**
        * The script should process other files normally.
        * The log file should not show any errors or warnings related to the commented or empty lines.
        * `checksums.txt` should not have entries for comments or empty lines.

**C. Cleanup (Optional):**
   - `unset YOUR_WEBHOOK_URL_ENV_VAR`
   - `rm -rf logs/`
   - `git checkout -- .` (to revert any intentional modifications made during testing)
   - Remove any dummy files created for testing (e.g., `.env`, `another_config.js`) and revert changes to `scripts/config_integrity_check.txt`.

**Note on Test Case 4 (File Deletion):**
The script correctly attempts to restore Git-tracked files that are found to be deleted, using `git checkout HEAD -- <deleted_file_path>`. This behavior is covered by the expected outcomes in Test Case 4.
