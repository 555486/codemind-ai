# 🚀 CodeMind AI - 快速启动指南

## 📋 项目概述

CodeMind AI 是一个智能代码助手，提供：
- 📝 代码分析（错误检测、代码质量评估）
- 🧠 AI 解释（代码功能详细说明）
- 📚 AI 教学（编程概念讲解）
- 🎨 美观界面（毛玻璃科技风）

---

## ⚡ 快速启动

### 方式 1：一键启动（推荐）

**启动后端（自动找端口）：**
```bash
cd backend
npm run auto
```

**启动前端：**
```bash
cd frontend
npm run dev
```

### 方式 2：手动启动

**启动后端：**
```bash
cd backend
npm run dev
```

**启动前端：**
```bash
cd frontend
npm run dev
```

---

## 🌐 访问地址

启动后访问：
- **前端界面**: http://localhost:3000
- **后端 API**: http://localhost:5000/api
- **健康检查**: http://localhost:5000/health

---

## 🎯 使用流程

### 1. 选择编程语言
在左侧控制面板选择：
- JavaScript
- TypeScript
- Python
- C/C++
- HTML/CSS
- 等...

### 2. 输入代码
在中间编辑器输入代码，例如：
```javascript
function calculateSum(a, b) {
  let result = a + b;
  console.log("结果是：" + result);
  return result;
}

calculateSum(10, 20);
```

### 3. 点击功能按钮

**分析代码** 🔍
- 检测错误和警告
- 提供优化建议
- 显示代码指标

**解释代码** 📖
- AI 生成详细解释
- 说明代码功能
- 最佳实践建议

**AI 教学** 🎓
- 输入想学的概念
- 获取详细教程
- 包含示例代码

### 4. 查看结果
在右侧面板查看：
- 上方：错误分析结果
- 下方：AI 解释/教学内容

---

## 🔧 配置 AI 功能

### 获取 API 密钥

1. 访问 [阿里云 DashScope](https://dashscope.aliyun.com/)
2. 注册/登录账号
3. 创建 API 密钥（AccessKey）
4. 复制密钥（格式：`AccessKeyID:AccessKeySecret`）

### 配置密钥

编辑 `backend/.env` 文件：
```env
# 替换为你的 API 密钥
DASHSCOPE_API_KEY=your_access_key_id:your_access_key_secret
DASHSCOPE_BASE_URL=https://dashscope.aliyuncs.com/api/v1
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### 重启后端
```bash
cd backend
npm run dev
```

看到以下日志表示配置成功：
```
✅ DashScope API 密钥已配置
```

---

## 📱 功能演示

### 代码分析
```
输入：
function test() {
  console.log("Hello");
  var x = 10;  // 使用 var
}

输出：
⚠️ 第 3 行：建议使用 const/let 代替 var
✅ 代码分析完成
📊 代码指标：3 行，45 字符，低复杂度
```

### 代码解释
```
输入：
const add = (a, b) => a + b;

输出：
这是一个箭头函数...
功能：计算两个数的和
使用了 ES6 箭头函数语法...
```

### AI 教学
```
输入主题：闭包

输出：
闭包是 JavaScript 的重要概念...
1. 概念定义
2. 使用场景
3. 代码示例
4. 最佳实践
```

---

## 🛠️ 常见问题

### Q1: 端口被占用怎么办？
**A**: 使用自动找端口功能：
```bash
cd backend
npm run auto
```

### Q2: 前端无法连接后端？
**A**: 
1. 检查后端是否运行
2. 确认端口一致（默认 5000）
3. 查看浏览器控制台错误

### Q3: AI 功能不工作？
**A**:
1. 检查 `.env` 文件中的 API 密钥
2. 确认密钥格式正确（包含 `:`）
3. 查看后端控制台日志
4. 系统会自动降级到模拟模式

### Q4: 如何查看日志？
**A**:
- **后端日志**: 查看启动后端的终端窗口
- **前端日志**: 浏览器按 F12 -> Console

### Q5: 如何停止服务器？
**A**:
- 在终端按 `Ctrl+C`
- 或输入 `q` 命令（使用 `npm run auto` 时）

---

## 📁 项目结构

```
code-mind-ai/
├── frontend/              # 前端项目
│   ├── src/
│   │   ├── components/   # React 组件
│   │   ├── pages/        # 页面组件
│   │   └── styles/       # 样式文件
│   └── package.json
├── backend/              # 后端项目
│   ├── src/
│   │   ├── app.ts       # 主应用
│   │   ├── routes/      # API 路由
│   │   ├── controllers/ # 控制器
│   │   └── services/    # 服务层
│   ├── .env            # 环境配置
│   └── start.js        # 启动脚本
└── README.md           # 项目说明
```

---

## 🎨 界面说明

### 左侧面板 - 控制面板
- 语言选择（2 列网格）
- 功能按钮（分析、解释、教学）
- AI 教学输入框
- 快速主题标签

### 中间面板 - 代码编辑器
- Monaco Editor（VS Code 同款）
- 语言信息显示
- 代码行数统计
- 格式化/复制按钮

### 右侧面板 - 结果展示
- 上半部分：错误分析
- 下半部分：AI 解释
- 可调节高度比例

---

## 📊 API 端点

### POST /api/analyze
分析代码
```json
{
  "code": "代码内容",
  "language": "javascript"
}
```

### POST /api/explain
解释代码
```json
{
  "code": "代码内容",
  "language": "javascript"
}
```

### POST /api/teach
AI 教学
```json
{
  "topic": "闭包",
  "level": "beginner"
}
```

### GET /health
健康检查
```json
{
  "status": "healthy",
  "service": "CodeMind AI Backend",
  "timestamp": "2026-03-07T07:00:00.000Z"
}
```

---

## 🔐 环境变量说明

```env
# 阿里云 API 配置
DASHSCOPE_API_KEY=你的 API 密钥
DASHSCOPE_BASE_URL=https://dashscope.aliyuncs.com/api/v1

# 服务器配置
PORT=5000              # 后端端口
NODE_ENV=development   # 运行环境

# 安全配置
CORS_ORIGIN=http://localhost:3000  # 允许的前端域名
RATE_LIMIT_WINDOW_MS=900000        # 限流时间窗口
RATE_LIMIT_MAX_REQUESTS=100        # 最大请求数
```

---

## 🎯 下一步

### 开始使用
1. ✅ 启动后端和前端
2. ✅ 访问 http://localhost:3000
3. ✅ 选择语言，输入代码
4. ✅ 点击功能按钮体验

### 启用真实 AI
1. ⚠️ 获取阿里云 API 密钥
2. ⚠️ 配置到 `.env` 文件
3. ⚠️ 重启后端服务器
4. ✅ 享受真实 AI 功能

### 参与开发
1. 查看项目文档
2. 提交 Issue 和 PR
3. 完善功能和测试

---

## 📞 获取帮助

### 查看文档
- `README.md` - 项目总览
- `TEST_REPORT.md` - 测试报告
- `STARTUP_GUIDE.md` - 启动指南

### 查看日志
- 后端控制台 - API 请求和错误
- 浏览器 Console - 前端日志

### 测试工具
- `backend/test.html` - API 测试页面
- Postman - API 调试工具

---

## ✨ 特性亮点

- 🎨 **美观界面**: 毛玻璃效果 + 科技风主题
- 🚀 **快速启动**: 一键启动，自动配置
- 🤖 **AI 驱动**: 集成阿里云 Qwen 大模型
- 📝 **专业编辑**: Monaco Editor 支持
- 🔄 **智能降级**: AI 故障自动降级到模拟
- 🌐 **跨平台**: Windows/Linux/macOS 全支持

---

**开始编码吧！** 🎉
