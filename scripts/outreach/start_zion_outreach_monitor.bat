@echo off
setlocal
cd /d C:\Users\Zion\tmp\zion-clone-test2
set OUTREACH_DRY_RUN=1
set HIGH_FREQ_INTERVAL_SECONDS=60
set PYTHONIOENCODING=utf-8
start "ZionOutreachMonitor" /B cmd /C "python scripts\outreach\run_high_frequency_forever.py"
endlocal
