# StaffSync HRMS - Push to GitHub PowerShell Helper
param(
    [string]$RepoUrl = ""
)

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "     StaffSync HRMS - Push to GitHub Helper       " -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Ensure you have created an empty repository on GitHub:" -ForegroundColor Yellow
Write-Host "https://github.com/new (Recommended Name: StaffSync-HRMS)`n" -ForegroundColor Yellow

if (-not $RepoUrl) {
    $RepoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/your-username/StaffSync-HRMS.git)"
}

if (-not $RepoUrl) {
    Write-Host "Error: Repository URL cannot be empty." -ForegroundColor Red
    Exit
}

Write-Host "`nSetting up remote origin and branch 'main'..." -ForegroundColor Gray
git remote remove origin 2>$null
git remote add origin $RepoUrl
git branch -M main

Write-Host "Pushing files to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[SUCCESS] StaffSync repository successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Now you can enable GitHub Pages or deploy to Vercel/Netlify for the live demo.`n" -ForegroundColor Green
} else {
    Write-Host "`n[NOTE] Push encountered an issue. Please verify your credentials or permissions." -ForegroundColor Yellow
}
