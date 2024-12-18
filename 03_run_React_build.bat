@echo off
:: Get the current date and time in ISO 8601 format (YYYY-MM-DD_HH-MM)
for /f "tokens=1-5 delims=:-. " %%a in ("%date% %time%") do (
    set year=%%c
    set month=%%a
    set day=%%b
    set hour=%%d
    set minute=%%e
)
set LOGFILE=03_build_log_%year%-%month%-%day%T%hour%-%minute%.txt

:: Log the start of the build process
echo Starting Build Process... > %LOGFILE%
echo ======================== >> %LOGFILE%
echo %year%-%month%-%day%T%hour%:%minute% >> %LOGFILE%
echo ======================== >> %LOGFILE%

:: Run npm build and redirect both stdout and stderr to the log file
echo Running npm run build... >> %LOGFILE%
npm run build >> %LOGFILE% 2>&1

:: Check if the build command was successful
if %errorlevel% neq 0 (
    echo Build failed. Check the log file for details: %LOGFILE% >> %LOGFILE%
    echo Build failed. Check the log file: %LOGFILE%
    pause
    exit /b 1
)

echo Build completed successfully! >> %LOGFILE%
echo Build completed successfully!
pause
