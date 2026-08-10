@echo off

findstr /C:"style.css" index.html >nul

if errorlevel 1 (
    echo TEST FAILED: index.html does not correctly reference style.css
    exit /b 1
)

echo TEST PASSED: CSS reference is correct