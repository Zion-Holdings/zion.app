@echo off

REM Cursor Multi-Computer Communication Startup Script

echo 🚀 Starting Cursor Multi-Computer Communication...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

REM Navigate to project directory
cd /d "%~dp0.."

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Start the communication system
echo 🔌 Starting Cursor communication system...
npm run cursor:start

echo ✅ Cursor Multi-Computer Communication started successfully!
echo 📊 Status: http://localhost:3002/status
echo 💬 Chat: npm run cursor:chat ^<category^> ^<prompt^>
echo 🔧 Fix: npm run cursor:fix ^<type^>
pause
