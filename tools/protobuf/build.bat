@echo off
echo let's start!

set workpath=%~dp0
echo %workpath%

python main.py

echo build success!
pause