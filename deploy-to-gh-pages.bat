@echo off
setlocal

:: CONFIGURATION
set REPO_NAME=GameArchive2035
set BASE_HREF=/%REPO_NAME%/
set BUILD_DIR=build

:: Step 1: Checkout master branch
echo Switching to master branch...
git checkout master

:: Step 2: Publish Blazor app with proper base href
echo Publishing Blazor app...
dotnet publish -c Release -o %BUILD_DIR% /p:BaseHref="%BASE_HREF%"

:: Step 3: Create orphan gh-pages branch
echo Creating gh-pages branch...
git checkout --orphan gh-pages

:: Step 4: Clean old files
echo Cleaning old files...
del /Q *.* >nul 2>&1
for /d %%i in (*) do rmdir /s /q "%%i"

:: Step 5: Copy build output to root
echo Copying published files...
xcopy %BUILD_DIR%\wwwroot\* . /E /H /Y >nul

:: Step 6: Add .nojekyll file
echo > .nojekyll

:: Step 7: Commit and push to GitHub
echo Committing and pushing...
git add .
git commit -m "Deploy Blazor WebAssembly to GitHub Pages"
git push origin gh-pages --force

:: Step 8: Done
echo -------------------------------------------------------
echo ✅ Deployment complete!
echo 🌍 Visit: https://callmecreadev.github.io/%REPO_NAME%/
echo -------------------------------------------------------

pause
