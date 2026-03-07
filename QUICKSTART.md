# CodeMind AI Assistant - 快速启动指南

## 🚀 快速开始 (5 分钟上手)

### 前置要求
- Node.js >= 18.0.0
- npm >= 9.0.0

### 步骤 1: 安装依赖

```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install
```

### 步骤 2: 配置环境变量

```bash
# 在 backend 目录复制环境变量文件
cd backend
cp .env.example .env

# 编辑 .env 文件，填入你的配置
# 重要：需要配置 OPENAI_API_KEY 或其他 AI 服务密钥
```

### 步骤 3: 启动服务

**终端 1 - 启动后端:**
```bash
cd backend
npm run dev
```

后端将在 `http://localhost:3001` 启动

**终端 2 - 启动前端:**
```bash
cd frontend
npm run dev
```

前端将在 `http://localhost:3000` 启动

### 步骤 4: 访问应用

打开浏览器访问：**http://localhost:3000**

---

## 📝 使用说明

### 1. 代码分析
1. 在左侧控制面板选择编程语言
2. 在中间编辑器输入或粘贴代码
3. 点击"分析代码"按钮
4. 查看右侧的错误、警告和建议

### 2. AI 代码解释
1. 输入或粘贴代码
2. 点击"解释代码"按钮
3. 切换到"AI 解释"标签页查看详细解释

### 3. AI 教学
1. 在控制面板输入想学习的主题
2. 选择学习级别（入门/进阶/高级）
3. 点击发送按钮开始学习
4. 切换到"教学"标签页查看教程

---

## ⚙️ 配置选项

### 后端配置 (.env)

```env
# AI API 配置 (必需)
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_API_URL=https://api.openai.com/v1

# 服务器配置
PORT=3001
NODE_ENV=development

# 速率限制
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS 配置
CORS_ORIGIN=http://localhost:3000
```

---

## 🛠️ 开发命令

### 前端命令
```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产构建
npm run lint     # 代码检查
```

### 后端命令
```bash
npm run dev      # 启动开发服务器 (热重载)
npm run build    # 编译 TypeScript
npm run start    # 启动生产服务器
npm run lint     # 代码检查
```

---

## 🐛 常见问题

### 问题 1: 前端无法连接后端
**解决方案:**
1. 确保后端正在运行 (端口 3001)
2. 检查 CORS 配置是否正确
3. 查看浏览器控制台的错误信息

### 问题 2: AI 功能不工作
**解决方案:**
1. 检查 .env 文件中的 API 密钥是否正确
2. 确保网络连接正常
3. 查看后端控制台的错误日志

### 问题 3: 端口被占用
**解决方案:**
```bash
# Windows - 查找占用端口的进程
netstat -ano | findstr :3000

# 终止进程 (替换 PID)
taskkill /PID <PID> /F
```

---

## 📚 更多文档

- [API 文档](./docs/API.md) - 详细的 API 接口说明
- [开发指南](./docs/DEVELOPMENT.md) - 开发和贡献指南
- [README](./README.md) - 项目总览

---

## 💡 提示

- 首次启动可能需要几分钟安装依赖
- 建议使用 Chrome 或 Edge 浏览器获得最佳体验
- 开发模式下，修改代码会自动重载
- 生产构建前请确保所有测试通过

---

## 🆘 获取帮助

如果遇到问题:
1. 查看控制台错误信息
2. 检查日志文件
3. 搜索 GitHub Issues
4. 提交新的 Issue

---

**祝你使用愉快！** 🎉
