@echo off
chcp 65001 >nul
title CodeMind AI - 代码智能助手

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║          CodeMind AI 代码智能助手 - 启动程序            ║
echo ║     AI 驱动的代码分析、解释和教学工具                     ║
echo ╚════════════════════════════════════════════════════════╝
echo.

:: 检查 Node.js 是否安装
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [错误] 未检测到 Node.js，请先安装 Node.js 18+
    echo 下载地址：https://nodejs.org/
    pause
    exit /b 1
)

echo [✓] Node.js 已安装
echo.

:: 获取当前目录
set PROJECT_DIR=%~dp0
set BACKEND_DIR=%PROJECT_DIR%backend
set FRONTEND_DIR=%PROJECT_DIR%frontend

:: 检查依赖是否安装
echo [检查] 正在检查依赖...

if not exist "%BACKEND_DIR%\node_modules" (
    echo [安装] 正在安装后端依赖...
    cd /d "%BACKEND_DIR%"
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [错误] 后端依赖安装失败
        pause
        exit /b 1
    )
) else (
    echo [✓] 后端依赖已安装
)

if not exist "%FRONTEND_DIR%\node_modules" (
    echo [安装] 正在安装前端依赖...
    cd /d "%FRONTEND_DIR%"
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo [错误] 前端依赖安装失败
        pause
        exit /b 1
    )
) else (
    echo [✓] 前端依赖已安装
)

echo.
echo ════════════════════════════════════════════════════════
echo [信息] 正在启动服务...
echo ════════════════════════════════════════════════════════
echo.

:: 启动后端
echo [启动] 启动后端服务器...
cd /d "%BACKEND_DIR%"
start "CodeMind AI - Backend" cmd /k "title CodeMind AI Backend && npm run dev"

:: 等待后端启动
timeout /t 3 /nobreak >nul

:: 启动前端
echo [启动] 启动前端服务器...
cd /d "%FRONTEND_DIR%"
start "CodeMind AI - Frontend" cmd /k "title CodeMind AI Frontend && npm run dev"

echo.
echo ════════════════════════════════════════════════════════
echo [成功] 所有服务已启动!
echo ════════════════════════════════════════════════════════
echo.
echo 后端服务器：http://localhost:5000
echo 前端服务器：http://localhost:3001 (或自动分配的端口)
echo.
echo 正在打开浏览器...
timeout /t 5 /nobreak >nul
start http://localhost:3001

echo.
echo ════════════════════════════════════════════════════════
echo [提示]
echo - 按 Ctrl+C 可停止当前脚本
echo - 请保持命令行窗口打开以维持服务运行
echo - 关闭窗口将停止所有服务
echo ════════════════════════════════════════════════════════
echo.
pause
