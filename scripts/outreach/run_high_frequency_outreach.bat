@echo off
REM High-frequency Windows scheduler for outreach worker.
REM Runs every 1 minute via Windows Task Scheduler.
REM Required environment: OUTREACH_DRY_RUN=1 for audit mode; live send requires ZION_LLM_API_ENDPOINT/KEY/MODEL.
set "SCRIPT_DIR=%~dp0..\\outreach\\outreach_worker_automation.py"
set "PYTHON=python"
if exist "%USERPROFILE%\\AppData\\Local\\Programs\\Python\\Python311\\python.exe" set "PYTHON=%USERPROFILE%\\AppData\\Local\\Programs\\Python\\Python311\\python.exe"
set "REPORT_DIR=%~dp0..\\outreach_monitor\\processed"
"%PYTHON%" "%SCRIPT_DIR%" > "%REPORT_DIR%\\last_run_high_freq.log" 2>&1
