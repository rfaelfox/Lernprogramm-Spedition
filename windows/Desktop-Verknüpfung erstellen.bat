@echo off
rem Legt eine Verknuepfung "Lernprogramm" auf dem Desktop an.
powershell -NoProfile -ExecutionPolicy Bypass -Command "$d=[Environment]::GetFolderPath('Desktop'); $s=(New-Object -ComObject WScript.Shell).CreateShortcut($d+'\Lernprogramm.lnk'); $e=(Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe' -ErrorAction SilentlyContinue).'(default)'; if(-not $e){$e='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'}; $s.TargetPath=$e; $s.Arguments='--app=https://rfaelfox.github.io/Lernprogramm-Spedition/'; $s.IconLocation=$e+',0'; $s.Description='Lernprogramm Spedition und Logistik'; $s.Save(); Write-Host 'Verknuepfung auf dem Desktop erstellt.'"
pause
