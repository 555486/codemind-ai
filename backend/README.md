# CodeMind AI Backend

CodeMind AI 代码助手的后端服务，提供代码分析、解释和教学功能。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 到 `.env` 并配置 API 密钥：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# 阿里云 DashScope API 配置
DASHSCOPE_API_KEY=your_api_key_here
DASHSCOPE_BASE_URL=https://dashscope.aliyuncs.com/api/v1

# 服务器配置
PORT=3001
NODE_ENV=development

# 安全配置
CORS_ORIGIN=http://localhost:3000
```

### 3. 启动服务器

开发模式：

```bash
npm run dev
```

生产模式：

```bash
npm run build
npm start
```

## 📡 API 端点

### 健康检查
```
GET /health
```

响应：
```json
{
  "status": "healthy",
  "service": "CodeMind AI Backend",
  "timestamp": "2026-03-07T06:07:04.600Z"
}
```

### 代码分析
```
POST /api/analyze
```

请求体：
```json
{
  "code": "console.log('Hello World');",
  "language": "javascript"
}
```

### 代码解释
```
POST /api/explain
```

请求体：
```json
{
  "code": "function add(a, b) { return a + b; }",
  "language": "javascript"
}
```

### AI 教学
```
POST /api/teach
```

请求体：
```json
{
  "topic": "闭包",
  "level": "beginner"
}
```

## 🛠️ 技术栈

- **Node.js** - 运行时环境
- **Express** - Web 框架
- **TypeScript** - 类型安全
- **Axios** - HTTP 客户端
- **阿里云 DashScope** - AI 服务

## 📁 项目结构

```
backend/
├── src/
│   ├── app.ts                 # Express 主应用
│   ├── routes/
│   │   └── analysis.routes.ts # API 路由
│   ├── controllers/
│   │   └── analysis.controller.ts # 控制器
│   ├── services/
│   │   └── ai.service.ts      # AI 服务
│   └── utils/
│       ├── api.ts             # API 工具
│       └── logger.ts          # 日志工具
├── .env                       # 环境变量
├── .env.example              # 环境变量模板
├── package.json              # 项目配置
└── tsconfig.json            # TypeScript 配置
```

## 🔑 获取 API 密钥

1. 访问 [阿里云 DashScope](https://dashscope.aliyun.com/)
2. 注册/登录账号
3. 创建 API 密钥
4. 将密钥添加到 `.env` 文件

## 🧪 测试 API

使用测试页面：

```bash
# 在浏览器中打开
backend/test.html
```

或使用 curl：

```bash
# 健康检查
curl http://localhost:3001/health

# 代码分析
curl -X POST http://localhost:3001/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"code":"console.log(\"Hello\")","language":"javascript"}'
```

## 📝 注意事项

1. **API 密钥**：未配置 API 密钥时，服务会返回模拟数据
2. **CORS**：默认允许来自 `http://localhost:3000` 的请求
3. **端口**：默认使用 3001 端口，可在 `.env` 中修改
4. **开发模式**：使用 `tsx watch` 实现热重载

## 🤝 与前端集成

前端配置示例（`frontend/src/services/api.ts`）：

```typescript
const API_BASE = 'http://localhost:3001/api';

export const analyzeCode = async (code: string, language: string) => {
  const response = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, language })
  });
  return response.json();
};
```

## 📄 License

MIT
