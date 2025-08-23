
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
      @echo off
setlocal enabledelayedexpansion

REM Automated Chat Reconnection System Startup Script
REM For Windows systems

REM Configuration
set "SCRIPT_DIR=%~dp0"
set "PROJECT_DIR=%SCRIPT_DIR%.."
set "LOG_FILE=%PROJECT_DIR%\logs\chat-reconnection.log"
set "PID_FILE=%PROJECT_DIR%\logs\chat-reconnection.pid"
set "NODE_SCRIPT=%SCRIPT_DIR%automated-chat-reconnection.cjs"

echo 🤖 Automated Chat Reconnection System for Cursor
echo ==================================================

REM Function to log messages
:log
echo [%date% %time%] %~1
goto :eof

REM Function to log errors
:log_error
echo [%date% %time%] ERROR: %~1
goto :eof

REM Function to log warnings
:log_warn
echo [%date% %time%] WARNING: %~1
goto :eof

REM Check if Node.js is installed
:check_node
node --version >nul 2>&1
if errorlevel 1 (
    call :log_error "Node.js is not installed. Please install Node.js first."
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
call :log "✅ Node.js found: !NODE_VERSION!"
goto :eof

REM Check if npm is installed
:check_npm
npm --version >nul 2>&1
if errorlevel 1 (
    call :log_error "npm is not installed. Please install npm first."
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
call :log "✅ npm found: !NPM_VERSION!"
goto :eof

REM Check if the project directory exists
:check_project
if not exist "%PROJECT_DIR%" (
    call :log_error "Project directory not found: %PROJECT_DIR%"
    exit /b 1
)
call :log "✅ Project directory: %PROJECT_DIR%"
goto :eof

REM Check if the script exists
:check_script
if not exist "%NODE_SCRIPT%" (
    call :log_error "Chat reconnection script not found: %NODE_SCRIPT%"
    exit /b 1
)
call :log "✅ Script found: %NODE_SCRIPT%"
goto :eof

REM Create necessary directories
:create_directories
if not exist "%PROJECT_DIR%\logs" mkdir "%PROJECT_DIR%\logs"
if not exist "%PROJECT_DIR%\temp" mkdir "%PROJECT_DIR%\temp"
if not exist "%PROJECT_DIR%\config" mkdir "%PROJECT_DIR%\config"
call :log "✅ Directories created"
goto :eof

REM Check if system is already running
:check_running
if exist "%PID_FILE%" (
    set /p PID=<"%PID_FILE%"
    tasklist /FI "PID eq !PID!" 2>nul | find /I "!PID!" >nul
    if not errorlevel 1 (
        call :log_warn "System is already running with PID: !PID!"
        set /p response="Do you want to stop the existing process and restart? (y/N): "
        if /i "!response!"=="y" (
            call :stop_system
        ) else (
            call :log "Exiting..."
            exit /b 0
        )
    ) else (
        call :log_warn "Stale PID file found, removing..."
        del "%PID_FILE%" 2>nul
    )
)
goto :eof

REM Stop the system
:stop_system
if exist "%PID_FILE%" (
    set /p PID=<"%PID_FILE%"
    tasklist /FI "PID eq !PID!" 2>nul | find /I "!PID!" >nul
    if not errorlevel 1 (
        call :log "Stopping system with PID: !PID!"
        taskkill /PID !PID! /F >nul 2>&1
        
        REM Wait for process to stop
        for /l %%i in (1,1,10) do (
            tasklist /FI "PID eq !PID!" 2>nul | find /I "!PID!" >nul
            if errorlevel 1 goto :stop_complete
            timeout /t 1 /nobreak >nul
        )
        
        REM Force kill if still running
        tasklist /FI "PID eq !PID!" 2>nul | find /I "!PID!" >nul
        if not errorlevel 1 (
            call :log_warn "Force killing process..."
            taskkill /PID !PID! /F >nul 2>&1
        )
    )
    del "%PID_FILE%" 2>nul
    call :log "✅ System stopped"
)
:stop_complete
goto :eof

REM Install dependencies if needed
:install_dependencies
if not exist "%PROJECT_DIR%\node_modules" (
    call :log "📦 Installing dependencies..."
    cd /d "%PROJECT_DIR%"
    npm install
    call :log "✅ Dependencies installed"
) else (
    call :log "✅ Dependencies already installed"
)
goto :eof

REM Start the system
:start_system
call :log "🚀 Starting Automated Chat Reconnection System..."

REM Change to project directory
cd /d "%PROJECT_DIR%"

REM Start the system in background
start /B node "%NODE_SCRIPT%" start > "%LOG_FILE%" 2>&1

REM Get the PID of the started process
for /f "tokens=2" %%i in ('tasklist /FI "IMAGENAME eq node.exe" /FO CSV ^| find /I "node.exe"') do (
    set PID=%%i
    set PID=!PID:"=!
    goto :pid_found
)

:pid_found
REM Save PID
echo !PID! > "%PID_FILE%"

call :log "✅ System started with PID: !PID!"
call :log "📊 Log file: %LOG_FILE%"
call :log "🔍 Status: http://localhost:3009/status"
call :log "💬 Chat: http://localhost:3009"

REM Wait a moment and check if it's still running
timeout /t 2 /nobreak >nul
tasklist /FI "PID eq !PID!" 2>nul | find /I "!PID!" >nul
if not errorlevel 1 (
    call :log "✅ System is running successfully"
) else (
    call :log_error "System failed to start. Check logs: %LOG_FILE%"
    del "%PID_FILE%" 2>nul
    exit /b 1
)
goto :eof

REM Show status
:show_status
if exist "%PID_FILE%" (
    set /p PID=<"%PID_FILE%"
    tasklist /FI "PID eq !PID!" 2>nul | find /I "!PID!" >nul
    if not errorlevel 1 (
        call :log "✅ System is running with PID: !PID!"
        
        REM Try to get status from API
        call :log "📊 Fetching system status..."
        powershell -Command "try { Invoke-RestMethod -Uri 'http://localhost:3009/status' | ConvertTo-Json -Depth 10 } catch { Write-Host 'Failed to fetch status' }" 2>nul
    ) else (
        call :log_warn "System is not running (stale PID file)"
        del "%PID_FILE%" 2>nul
    )
) else (
    call :log_warn "System is not running"
)
goto :eof

REM Show logs
:show_logs
if exist "%LOG_FILE%" (
    call :log "📋 Recent logs:"
    powershell -Command "Get-Content '%LOG_FILE%' | Select-Object -Last 20" 2>nul
) else (
    call :log_warn "No log file found"
)
goto :eof

REM Install as service
:install_service
call :log "🔧 Installing as Windows service..."

REM Create service script
set "SERVICE_SCRIPT=%SCRIPT_DIR%start-chat-service.bat"
(
echo @echo off
echo cd /d "%PROJECT_DIR%"
echo node "%NODE_SCRIPT%" start
) > "%SERVICE_SCRIPT%"

REM Create Windows service using sc command
sc create "CursorChatReconnection" binPath= "\"%SERVICE_SCRIPT%\"" start= auto DisplayName= "Cursor Chat Reconnection Service" >nul 2>&1
if not errorlevel 1 (
    call :log "✅ Windows service created: CursorChatReconnection"
    call :log "Run: sc start CursorChatReconnection"
    call :log "Run: sc stop CursorChatReconnection"
) else (
    call :log_warn "Failed to create Windows service. Manual installation required."
    call :log "Service script created: %SERVICE_SCRIPT%"
)
goto :eof

REM Main script logic
if "%1"=="" goto :start
if "%1"=="start" goto :start
if "%1"=="stop" goto :stop
if "%1"=="restart" goto :restart
if "%1"=="status" goto :status
if "%1"=="logs" goto :logs
if "%1"=="install" goto :install
goto :usage

:start
call :check_node
call :check_npm
call :check_project
call :check_script
call :create_directories
call :check_running
call :install_dependencies
call :start_system
goto :end

:stop
call :stop_system
goto :end

:restart
call :stop_system
timeout /t 2 /nobreak >nul
call :check_node
call :check_npm
call :check_project
call :check_script
call :create_directories
call :install_dependencies
call :start_system
goto :end

:status
call :show_status
goto :end

:logs
call :show_logs
goto :end

:install
call :check_node
call :check_npm
call :check_project
call :check_script
call :create_directories
call :install_dependencies
call :install_service
goto :end

:usage
echo Usage: %0 {start^|stop^|restart^|status^|logs^|install}
echo.
echo Commands:
echo   start   - Start the chat reconnection system
echo   stop    - Stop the system
echo   restart - Restart the system
echo   status  - Show system status
echo   logs    - Show recent logs
echo   install - Install as Windows service
echo.
echo Examples:
echo   %0 start
echo   %0 status
echo   %0 install
exit /b 1

:end
endlocal
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
