# 🤖 CodeMind AI - 代码智能助手

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg?logo=vite)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-4.18-000000.svg?logo=express)](https://expressjs.com/)

**AI 驱动的代码分析、解释和教学工具** - 基于阿里云通义千问 (Qwen) 大模型

---

## ✨ 功能特性

### 🎯 核心功能
- **📊 代码分析**: 智能检测代码错误、警告和潜在问题
- **💡 代码解释**: AI 生成详细的代码功能说明和实现逻辑
- **📚 智能教学**: 根据用户需求提供编程知识讲解
- **🎨 实时高亮**: 错误代码行红色标记，清晰可见
- **⚡ 快速响应**: 优化后的 AI 响应速度，4-5 秒快速返回结果

### 🌟 技术亮点
- **🔌 多语言支持**: JavaScript, TypeScript, Python, C, C++, Java, Go, Rust, HTML, CSS
- **🎭 科技主题 UI**: 毛玻璃效果 + 霓虹配色，现代化视觉体验
- **📝 Monaco Editor**: 与 VS Code 同款编辑器，专业代码编辑体验
- **🚀 快速部署**: 前后端分离架构，支持独立部署和联合部署
- **🔒 安全可靠**: CORS 配置，API 密钥加密存储

---

## 🚀 快速开始

### 前置要求
- Node.js >= 18.0.0
- npm >= 9.0.0
- 阿里云 DashScope API Key ([获取地址](https://dashscope.console.aliyun.com/apiKey))

### 安装步骤

#### 1. 克隆项目
```bash
git clone https://github.com/YOUR_USERNAME/codemind-ai.git
cd codemind-ai
```

#### 2. 配置 API Key
编辑 `backend/.env` 文件:
```bash
# 阿里云 DashScope API 配置
DASHSCOPE_API_KEY=sk-your-api-key-here
DASHSCOPE_BASE_URL=https://dashscope.aliyuncs.com/api/v1

# 服务器配置
PORT=5000
NODE_ENV=development

# 安全配置
CORS_ORIGIN=http://localhost:3001
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### 3. 安装依赖
```bash
# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install
```

#### 4. 启动服务
```bash
# 启动后端 (终端 1)
cd backend
npm run dev
# 后端运行在 http://localhost:5000

# 启动前端 (终端 2)
cd frontend
npm run dev
# 前端运行在 http://localhost:3001
```

#### 5. 访问应用
打开浏览器访问：**http://localhost:3001**

---

## 📁 项目结构

```
codemind-ai/
├── backend/                    # 后端服务
│   ├── src/
│   │   ├── app.ts             # Express 主应用
│   │   ├── routes/            # API 路由
│   │   ├── controllers/       # 控制器
│   │   └── services/          # 业务服务 (AI 集成)
│   ├── .env                   # 环境变量配置
│   ├── package.json
│   └── tsconfig.json
├── frontend/                   # 前端应用
│   ├── src/
│   │   ├── components/        # React 组件
│   │   │   ├── CodeEditor/    # 代码编辑器
│   │   │   ├── ControlPanel/  # 控制面板
│   │   │   ├── ErrorPanel/    # 错误面板
│   │   │   └── ExplanationPanel/ # 解释面板
│   │   ├── pages/             # 页面组件
│   │   ├── styles/            # 全局样式
│   │   └── App.tsx            # 应用入口
│   ├── package.json
│   └── vite.config.ts
├── README.md                   # 项目文档
└── start-project.bat          # 一键启动脚本 (Windows)
```

---

## 🛠️ 技术栈

### 前端
- **React 18.2** - UI 框架
- **TypeScript 5.0** - 类型系统
- **Vite 5.4** - 构建工具
- **Monaco Editor** - 代码编辑器
- **CSS Modules** - 样式管理

### 后端
- **Node.js 18+** - 运行环境
- **Express 4.18** - Web 框架
- **TypeScript** - 开发语言
- **Axios** - HTTP 客户端
- **dotenv** - 环境变量

### AI 服务
- **阿里云 DashScope API** - 大模型服务
- **Qwen-Plus** - 通义千问模型

---

## 📖 API 文档

### 后端 API 端点

#### 1. 代码分析
```http
POST /api/analyze
Content-Type: application/json

{
  "code": "function add(a, b) { return a + b; }",
  "language": "javascript"
}

Response:
{
  "success": true,
  "results": [
    {
      "type": "info",
      "line": 1,
      "message": "函数定义正确"
    }
  ]
}
```

#### 2. 代码解释
```http
POST /api/explain
Content-Type: application/json

{
  "code": "function add(a, b) { return a + b; }",
  "language": "javascript"
}

Response:
{
  "success": true,
  "explanation": "这是一个 JavaScript 函数，用于计算两个数的和..."
}
```

#### 3. 编程教学
```http
POST /api/teach
Content-Type: application/json

{
  "topic": "闭包",
  "level": "beginner"
}

Response:
{
  "success": true,
  "lesson": "闭包是 JavaScript 中的重要概念..."
}
```

#### 4. 健康检查
```http
GET /health

Response:
{
  "status": "healthy",
  "service": "CodeMind AI Backend",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

## 🎨 自定义配置

### 修改主题颜色
编辑 `frontend/src/styles/global.css`:
```css
:root {
  --neon-blue: #00d4ff;      /* 主色调 */
  --neon-green: #00ff88;     /* 强调色 */
  --neon-purple: #9d4edd;    /* 辅助色 */
}
```

### 修改 AI 模型参数
编辑 `backend/src/services/ai.service.ts`:
```typescript
parameters: {
  result_format: 'message',
  temperature: 0.5,    // 创造性 (0.0-1.0)
  max_tokens: 1000,    // 最大输出长度
  top_p: 0.8,          // 采样阈值
  enable_search: false // 禁用搜索
}
```

---

## 🚀 部署指南

### 本地开发
```bash
# 使用启动脚本 (Windows)
.\start-project.bat

# 或手动启动
cd backend && npm run dev  # 终端 1
cd frontend && npm run dev # 终端 2
```

### 生产环境部署

#### 1. 构建前端
```bash
cd frontend
npm run build
# 输出到 dist/ 目录
```

#### 2. 配置生产环境变量
```bash
# backend/.env.production
DASHSCOPE_API_KEY=your-production-api-key
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-domain.com
```

#### 3. 使用 PM2 部署后端
```bash
npm install -g pm2
cd backend
pm2 start ecosystem.config.js
```

#### 4. 使用 Nginx 部署前端
```nginx
server {
  listen 80;
  server_name your-domain.com;
  
  location / {
    root /path/to/frontend/dist;
    try_files $uri $uri/ /index.html;
  }
  
  location /api {
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

---

## 🔧 常见问题

### 1. 无法连接到后端
**问题**: 前端显示"无法连接到后端服务器"  
**解决**: 
- 检查后端是否运行在 5000 端口
- 确认 `.env` 中的 `CORS_ORIGIN` 与前端端口一致
- 清除浏览器缓存并刷新

### 2. API Key 无效
**问题**: 后端日志显示"InvalidApiKey"  
**解决**:
- 确认 API Key 格式正确 (sk-开头)
- 检查 `.env` 文件是否保存
- 重启后端服务器

### 3. AI 响应速度慢
**优化**:
- 减少 `max_tokens` 参数 (默认 1000)
- 降低 `temperature` 参数 (默认 0.5)
- 检查网络连接质量

### 4. 端口被占用
**解决**:
```bash
# Windows - 查找占用端口的进程
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# 修改端口号
# 编辑 backend/.env 中的 PORT 配置
```

---

## 📊 性能指标

| 指标 | 数值 | 说明 |
|------|------|------|
| AI 响应时间 | 4-6 秒 | 快速响应模式 |
| 前端加载时间 | <1 秒 | Vite 构建优化 |
| 支持语言数 | 10+ | 主流编程语言 |
| 并发请求数 | 100/15min | 限流保护 |
| 代码行数统计 | 实时 | Monaco Editor |

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request!

### 开发流程
1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 代码规范
- 使用 TypeScript 严格模式
- 遵循 ESLint 配置
- 编写清晰的注释
- 添加必要的单元测试

---

## 📝 更新日志

### v1.0.0 (2024-01-01)
- ✨ 初始版本发布
- 🎨 科技主题 UI 设计
- 🤖 集成阿里云 Qwen 模型
- 📊 代码分析功能
- 💡 代码解释功能
- 📚 智能教学功能
- ⚡ 快速响应优化
- 🔒 CORS 安全配置

---

## 👨‍💻 作者

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

---

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)

```
MIT License

Copyright (c) 2024 CodeMind AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 致谢

- [阿里云 DashScope](https://www.aliyun.com/product/dashscope) - 提供大模型 API
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - 强大的代码编辑器
- [React](https://reactjs.org/) - 优秀的 UI 框架
- [Vite](https://vitejs.dev/) - 快速的构建工具
- [Express](https://expressjs.com/) - 简洁的 Web 框架

---

## 📞 联系方式

如有问题或建议，请通过以下方式联系:
- 提交 [GitHub Issue](https://github.com/YOUR_USERNAME/codemind-ai/issues)
- 发送邮件至 your.email@example.com
- 加入讨论群 (待添加)

---

**🌟 如果这个项目对你有帮助，请给一个 Star! 🌟**

[![Star History Chart](https://api.star-history.com/svg?repos=YOUR_USERNAME/codemind-ai&type=Date)](https://star-history.com/#YOUR_USERNAME/codemind-ai&Date)

---

<div align="center">

**Made with ❤️ by CodeMind AI Team**

[🔝 返回顶部](#codemind-ai---代码智能助手)

</div>
