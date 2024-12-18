@echo off
:: Get the current date and time in ISO 8601 format (YYYY-MM-DD_HH-MM)
for /f "tokens=1-5 delims=:-. " %%a in ("%date% %time%") do (
    set year=%%c
    set month=%%a
    set day=%%b
    set hour=%%d
    set minute=%%e
)
set LOGFILE=01_start_log_%year%-%month%-%day%T%hour%-%minute%.txt

echo Starting App... > %LOGFILE%
echo ======================== >> %LOGFILE%
echo %year%-%month%-%day%T%hour%:%minute% >> %LOGFILE%
echo ======================== >> %LOGFILE%

:: Start the npm process and redirect both stdout and stderr to the log file
npm run start >> %LOGFILE% 2>&1

:: Check if npm command was successful
if %errorlevel% neq 0 (
    echo Error occurred while starting the app. Check the log file: %LOGFILE%
) else (
    echo App started successfully!
)

pause
