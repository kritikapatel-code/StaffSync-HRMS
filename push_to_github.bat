@echo off
echo ===================================================
echo     StaffSync HRMS - Push to GitHub Helper
echo ===================================================
echo.
echo Make sure you have created an empty repository on GitHub:
echo https://github.com/new (Name: StaffSync-HRMS)
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g., https://github.com/your-username/StaffSync-HRMS.git): "

if "%REPO_URL%"=="" (
    echo Error: Repository URL cannot be empty!
    pause
    exit /b 1
)

echo.
echo Connecting to GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo Pushing code to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================================
    echo [SUCCESS] Your repository has been pushed to GitHub!
    echo ===================================================
) else (
    echo.
    echo [NOTE] If you were prompted for credentials, make sure
    echo you use your GitHub Personal Access Token (PAT) or log in via browser.
)

pause
