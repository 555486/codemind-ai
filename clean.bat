@echo off
chcp 65001 >nul
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                                                           ║
echo ║   🧹 CodeMind AI Assistant - 清理脚本                     ║
echo ║                                                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

echo 此脚本将清理所有安装的依赖和构建文件
echo.
set /p confirm="确定要继续吗？(Y/N): "
if /i not "%confirm%"=="Y" (
    echo 操作已取消
    pause
    exit /b 0
)

echo.
echo [1/4] 清理前端依赖...
if exist frontend\node_modules (
    echo ⏳ 正在删除 frontend\node_modules...
    rmdir /s /q frontend\node_modules
    echo ✅ 前端依赖已删除
) else (
    echo ℹ️  前端依赖不存在，跳过
)

if exist frontend\package-lock.json (
    del frontend\package-lock.json
    echo ✅ package-lock.json 已删除
)

if exist frontend\dist (
    rmdir /s /q frontend\dist
    echo ✅ 构建输出已删除
)

echo.
echo [2/4] 清理后端依赖...
if exist backend\node_modules (
    echo ⏳ 正在删除 backend\node_modules...
    rmdir /s /q backend\node_modules
    echo ✅ 后端依赖已删除
) else (
    echo ℹ️  后端依赖不存在，跳过
)

if exist backend\package-lock.json (
    del backend\package-lock.json
    echo ✅ package-lock.json 已删除
)

if exist backend\dist (
    rmdir /s /q backend\dist
    echo ✅ 构建输出已删除
)

echo.
echo [3/4] 清理临时文件...
if exist frontend\.vite (
    rmdir /s /q frontend\.vite
)
if exist frontend\node_modules (
    rmdir /s /q frontend\node_modules
)

echo.
echo [4/4] 清理缓存...
if exist frontend\node_modules\.cache (
    rmdir /s /q frontend\node_modules\.cache
)

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                                                           ║
echo ║   ✅ 清理完成！                                           ║
echo ║                                                           ║
echo ║   所有依赖和构建文件已删除                                ║
echo ║   运行 install.bat 重新安装                               ║
echo ║                                                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
pause
