@echo off
chcp 65001 >nul
cls

echo.
echo ========================================
echo   CodeMind AI - API 测试
echo ========================================
echo.

echo [测试 1] 检查后端健康状态...
curl -s http://localhost:5000/health
echo.
echo.

echo [测试 2] 测试代码分析 API...
curl -X POST http://localhost:5000/api/analyze ^
  -H "Content-Type: application/json" ^
  -d "{\"code\":\"function test() { return 1; }\",\"language\":\"javascript\"}"
echo.
echo.

echo ========================================
echo   测试完成
echo ========================================
pause
