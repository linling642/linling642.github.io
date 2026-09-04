@echo off
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js not found. Install LTS from https://nodejs.org first.
  pause
  exit /b
)
echo Local preview at http://localhost:4321  (Press Ctrl+C to stop)
call npm run dev
