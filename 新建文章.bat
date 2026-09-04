@echo off
cd /d "%~dp0"
echo [New Post] A window will ask for the article title...
powershell -NoProfile -ExecutionPolicy Bypass -File "tools\newpost.ps1"
pause
