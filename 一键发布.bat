@echo off
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js not found. Install LTS from https://nodejs.org then re-run this.
  pause
  exit /b
)
if not exist node_modules (
  echo First run: installing dependencies (needs internet)...
  call npm install
)
echo Building static site...
call npm run build
echo Done. The site is in the dist\ folder. Deploy dist\ to go live.
pause
