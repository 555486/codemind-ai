@echo off
chcp 65001 > nul
cls
echo.
echo ╔════════════════════════════════════════════════════╗
echo ║                                                    ║
echo ║        CodeMind AI 项目 - 快速启动工具            ║
echo ║                                                    ║
echo ╚════════════════════════════════════════════════════╝
echo.
echo 当前目录：%~dp0
echo.

:: 检查是否在正确的目录
if not exist "frontend" (
    echo ❌ 错误：找不到 frontend 目录！
    echo.
    echo 请确保此脚本位于 code-mind-ai 目录中
    pause
    exit /b 1
)

if not exist "backend" (
    echo ❌ 错误：找不到 backend 目录！
    echo.
    echo 请确保此脚本位于 code-mind-ai 目录中
    pause
    exit /b 1
)

echo ✅ 目录检查通过
echo.
echo 请选择启动方式：
echo.
echo   1. 启动后端服务器（自动找端口）
echo   2. 启动后端服务器（使用配置文件端口）
echo   3. 启动前端开发服务器
echo   4. 同时启动前后端服务器
echo   5. 仅启动前端
echo   6. 仅启动后端
echo   0. 退出
echo.
set /p choice=请输入选项 (0-6): 

if "%choice%"=="1" goto start_backend_auto
if "%choice%"=="2" goto start_backend_dev
if "%choice%"=="3" goto start_both
if "%choice%"=="4" goto start_both
if "%choice%"=="5" goto start_frontend_only
if "%choice%"=="6" goto start_backend_only
if "%choice%"=="0" goto end

echo.
echo ❌ 无效选项！
pause
goto end

:start_backend_auto
echo.
echo ╔════════════════════════════════════════════════════╗
echo ║  启动后端服务器（自动找端口）                      ║
echo ╚════════════════════════════════════════════════════╝
echo.
cd /d "%~dp0backend"
if not exist "node_modules" (
    echo 安装依赖...
    call npm install
)
echo 启动开发服务器...
call npm run auto
goto end

:start_backend_dev
echo.
echo ╔════════════════════════════════════════════════════╗
echo ║  启动后端服务器（配置文件端口）                    ║
echo ╚════════════════════════════════════════════════════╝
echo.
cd /d "%~dp0backend"
if not exist "node_modules" (
    echo 安装依赖...
    call npm install
)
echo 启动开发服务器...
call npm run dev
goto end

:start_frontend_only
echo.
echo ╔════════════════════════════════════════════════════╗
echo ║  启动前端开发服务器                                ║
echo ╚════════════════════════════════════════════════════╝
echo.
cd /d "%~dp0frontend"
if not exist "node_modules" (
    echo 安装依赖...
    call npm install
)
echo 启动开发服务器...
call npm run dev
goto end

:start_backend_only
echo.
echo ╔════════════════════════════════════════════════════╗
echo ║  启动后端服务器                                  ║
echo ╚════════════════════════════════════════════════════╝
echo.
cd /d "%~dp0backend"
if not exist "node_modules" (
    echo 安装依赖...
    call npm install
)
echo 启动开发服务器...
call npm run dev
goto end

:start_both
echo.
echo ╔════════════════════════════════════════════════════╗
echo ║  同时启动前后端服务器                              ║
echo ╚════════════════════════════════════════════════════╝
echo.
echo 启动后端服务器...
start "CodeMind AI - 后端服务器" cmd /k "cd /d %~dp0backend && npm run auto"

echo 等待后端启动...
timeout /t 3 /nobreak > nul

echo 启动前端服务器...
start "CodeMind AI - 前端开发服务器" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ╔════════════════════════════════════════════════════╗
echo ║  服务器已启动！                                    ║
echo ╚════════════════════════════════════════════════════╝
echo.
echo 前端地址：http://localhost:3000
echo 后端地址：http://localhost:5000
echo.
echo 提示：关闭此窗口不会停止服务器
echo        在打开的命令行窗口中按 Ctrl+C 停止服务器
echo.
pause
goto end

:end
echo.
echo 按任意键退出...
pause > nul
exit /b 0
