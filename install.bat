@echo off
chcp 65001 >nul
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                                                           ║
echo ║   🚀 CodeMind AI Assistant - 安装脚本                     ║
echo ║                                                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

echo [1/4] 检查 Node.js 安装...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误：未找到 Node.js，请先安装 Node.js (>= 18.0.0)
    echo 下载地址：https://nodejs.org/
    pause
    exit /b 1
)
echo ✅ Node.js 已安装

echo.
echo [2/4] 安装前端依赖...
cd frontend
if exist node_modules (
    echo ℹ️  前端依赖已存在，跳过安装
) else (
    echo ⏳ 正在安装前端依赖，请稍候...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ 前端依赖安装失败
        cd ..
        pause
        exit /b 1
    )
)
cd ..

echo.
echo [3/4] 安装后端依赖...
cd backend
if exist node_modules (
    echo ℹ️  后端依赖已存在，跳过安装
) else (
    echo ⏳ 正在安装后端依赖，请稍候...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ 后端依赖安装失败
        cd ..
        pause
        exit /b 1
    )
)
cd ..

echo.
echo [4/4] 配置环境变量...
cd backend
if exist .env (
    echo ℹ️  .env 文件已存在
    echo ⚠️  请确保已配置 OPENAI_API_KEY
) else (
    echo ⏳ 正在创建 .env 文件...
    copy .env.example .env >nul
    echo ✅ .env 文件已创建
    echo ⚠️  请编辑 backend\.env 文件，配置你的 API 密钥
)
cd ..

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                                                           ║
echo ║   ✅ 安装完成！                                           ║
echo ║                                                           ║
echo ║   下一步:                                                 ║
echo ║   1. 配置 backend\.env 文件中的 API 密钥                   ║
echo ║   2. 运行 start.bat 启动应用                              ║
echo ║                                                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
pause
