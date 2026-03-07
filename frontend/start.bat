@echo off
echo 启动 CodeMind AI 前端开发服务器...
echo.

cd /d %~dp0

echo 1. 检查依赖...
if not exist "node_modules" (
  echo 安装依赖包...
  npm install
) else (
  echo 依赖已安装，跳过...
)

echo.
echo 2. 启动开发服务器...
npx vite --host --port 3000

echo.
echo 如果浏览器没有自动打开，请访问：http://localhost:3000
pause