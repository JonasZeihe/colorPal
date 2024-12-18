@echo off
:: Get the current date and time in ISO 8601 format (YYYY-MM-DD_HH-MM)
for /f "tokens=1-5 delims=:-. " %%a in ("%date% %time%") do (
    set year=%%c
    set month=%%a
    set day=%%b
    set hour=%%d
    set minute=%%e
)
set LOGFILE=02_clean_install_log_%year%-%month%-%day%T%hour%-%minute%.txt

:: Log start of script execution
echo Starting full reset... > %LOGFILE%
echo ======================== >> %LOGFILE%
echo %year%-%month%-%day%T%hour%:%minute% >> %LOGFILE%
echo ======================== >> %LOGFILE%

:: Delete node_modules folder
if exist node_modules (
    echo Deleting node_modules folder... >> %LOGFILE%
    rd /s /q node_modules >> %LOGFILE% 2>&1
    if %errorlevel% neq 0 (
        echo Failed to delete node_modules. Check permissions. >> %LOGFILE%
        echo Failed to delete node_modules. Check the log file: %LOGFILE%
        pause
        exit /b 1
    )
    echo node_modules deleted successfully. >> %LOGFILE%
) else (
    echo node_modules folder does not exist. Skipping deletion. >> %LOGFILE%
)

:: Delete package-lock.json
if exist package-lock.json (
    echo Deleting package-lock.json... >> %LOGFILE%
    del /f /q package-lock.json >> %LOGFILE% 2>&1
    if %errorlevel% neq 0 (
        echo Failed to delete package-lock.json. Check permissions. >> %LOGFILE%
        echo Failed to delete package-lock.json. Check the log file: %LOGFILE%
        pause
        exit /b 1
    )
    echo package-lock.json deleted successfully. >> %LOGFILE%
) else (
    echo package-lock.json does not exist. Skipping deletion. >> %LOGFILE%
)

:: Delete build folder
if exist build (
    echo Deleting build folder... >> %LOGFILE%
    rd /s /q build >> %LOGFILE% 2>&1
    if %errorlevel% neq 0 (
        echo Failed to delete build folder. Check permissions. >> %LOGFILE%
        echo Failed to delete build folder. Check the log file: %LOGFILE%
        pause
        exit /b 1
    )
    echo build folder deleted successfully. >> %LOGFILE%
) else (
    echo build folder does not exist. Skipping deletion. >> %LOGFILE%
)

:: Run npm install
echo Running npm install... >> %LOGFILE%
npm install >> %LOGFILE% 2>&1
if %errorlevel% neq 0 (
    echo npm install failed. Check the log file: %LOGFILE% >> %LOGFILE%
    echo npm install failed. Check the log file: %LOGFILE%
    pause
    exit /b 1
)
echo npm install completed successfully. >> %LOGFILE%

:: Log end of reset process
echo Full reset process completed successfully! Check the log file: %LOGFILE% >> %LOGFILE%
echo Full reset process completed successfully! Check the log file: %LOGFILE%
pause
