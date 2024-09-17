@echo off
setlocal

REM Get the name of this script
set scriptName=%~nx0

REM Loop through all files in the current directory
for %%f in (*) do (
    if not "%%f"=="README.md" if not "%%f"==".gitignore" if not "%%f"=="CNAME" if not "%%f"=="%scriptName%" (
        echo Deleting file: %%f
        del /q "%%f"
    )
)

REM Loop through all folders in the current directory
for /D %%d in (*) do (
    if not "%%d"=="dev" (
        echo Deleting folder: %%d
        rmdir /s /q "%%d"
    )
)

echo Cleanup complete!
endlocal