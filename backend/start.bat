@echo off
echo 启动 CodeMind AI 后端服务器...
echo.

cd /d %~dp0

echo 检查端口 3002...
netstat -ano | findstr :3002 > nul
if %errorlevel% equ 0 (
  echo 错误：端口 3002 已被占用！
  echo 请停止占用 3002 端口的程序。
  pause
  exit /b 1
)

echo 安装依赖...
if not exist "node_modules" (
  npm install
)

echo 启动开发服务器...
npm run dev

pause
