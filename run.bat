@echo off
chcp 65001 >nul
cls

echo.
echo ========================================
echo   CodeMind AI - 代码智能助手
echo ========================================
echo.
echo [提示] 正在停止所有 Node 进程...
echo.

:: 停止所有 Node 进程
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

:: 获取当前目录
set PROJECT_DIR=%~dp0
set BACKEND_DIR=%PROJECT_DIR%backend
set FRONTEND_DIR=%PROJECT_DIR%frontend

echo [1/4] 启动后端服务器...
cd /d "%BACKEND_DIR%"
start "" cmd /k "title CodeMind Backend && echo 后端服务器启动中... && npm run dev"

echo [2/4] 等待后端启动...
timeout /t 5 /nobreak >nul

echo [3/4] 启动前端服务器...
cd /d "%FRONTEND_DIR%"
start "" cmd /k "title CodeMind Frontend && echo 前端服务器启动中... && npm run dev"

echo [4/4] 等待服务启动...
timeout /t 8 /nobreak >nul

echo.
echo ========================================
echo   启动完成!
echo ========================================
echo.
echo 后端：http://localhost:5000
echo 前端：http://localhost:3001
echo.
echo 正在打开浏览器...
echo.
start http://localhost:3001

echo [提示] 请保持这两个窗口打开
echo        关闭窗口将停止服务
echo ========================================
echo.
