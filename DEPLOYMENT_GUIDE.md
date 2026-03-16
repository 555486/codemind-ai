# 🚀 CodeMind AI - 部署到 Vercel 指南

## 前提条件
- GitHub 账号
- Vercel 账号 (可以用 GitHub 登录)

---

## 步骤 1: 准备项目

### 1.1 创建 Vercel 配置文件

在项目根目录创建 `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

### 1.2 修改前端配置

编辑 `frontend/vite.config.ts`,添加:

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
})
```

---

## 步骤 2: 推送到 GitHub (已完成✅)

您的项目已经推送到:
```
https://github.com/555486/codemind-ai
```

---

## 步骤 3: 在 Vercel 部署

### 3.1 访问 Vercel
1. 打开: https://vercel.com
2. 点击 "Sign Up" 或 "Login"
3. 选择 "Continue with GitHub"

### 3.2 导入项目
1. 点击 "Add New Project"
2. 选择 "Import Git Repository"
3. 找到 `codemind-ai` 项目
4. 点击 "Import"

### 3.3 配置项目
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 3.4 部署
1. 点击 "Deploy"
2. 等待 2-3 分钟
3. 部署成功后会获得一个 URL:
   ```
   https://codemind-ai-xxx.vercel.app
   ```

---

## 步骤 4: 在机房访问

### 4.1 访问部署的网址
在机房电脑浏览器打开:
```
https://codemind-ai-xxx.vercel.app
```

### 4.2 注意事项
⚠️ **重要**: 由于 AI 功能需要后端支持，您需要:

**选项 A - 同时部署后端:**
- 使用 Railway/Render 部署后端
- 修改前端 API 地址

**选项 B - 演示模式:**
- 只展示前端界面
- 使用录屏展示 AI 功能

---

## 🎯 简化方案：只部署前端 (推荐)

### 使用 Netlify (更简单)

1. **访问:** https://netlify.com
2. **登录:** 使用 GitHub 账号
3. **点击:** "Add new site" → "Import an existing project"
4. **选择:** GitHub 仓库 `codemind-ai`
5. **配置:**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **点击:** "Deploy site"

### 获得网址
部署成功后获得:
```
https://yoursite.netlify.app
```

---

## ⚡ 最快方案：使用 Vercel CLI

### 在您的电脑上执行:

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录 Vercel
vercel login

# 3. 进入前端目录
cd frontend

# 4. 部署
vercel

# 5. 生产部署
vercel --prod
```

### 获得网址
```
https://codemind-ai.vercel.app
```

---

## 📊 部署对比

| 平台 | 难度 | 速度 | 推荐度 |
|------|------|------|--------|
| Vercel | ⭐⭐ | 快 | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐⭐ | 快 | ⭐⭐⭐⭐⭐ |
| Railway | ⭐⭐⭐ | 中 | ⭐⭐⭐⭐ |
| GitHub Pages | ⭐⭐⭐ | 慢 | ⭐⭐⭐ |

---

## 🎬 最佳展示方案

### 组合方案 (推荐):

1. **部署前端到 Vercel** - 展示界面
2. **录制 AI 功能视频** - 展示核心功能
3. **准备 PPT** - 讲解技术栈和亮点

### 演示流程:

1. **开场** (1 分钟)
   - 介绍项目名称和功能
   - 展示技术栈

2. **界面展示** (2 分钟)
   - 打开部署的网址
   - 展示 UI 设计
   - 介绍各个面板

3. **功能演示** (3 分钟)
   - 播放录制的 AI 功能视频
   - 或现场演示 (如果网络允许)

4. **技术讲解** (2 分钟)
   - 架构图
   - 技术亮点
   - 创新点

5. **总结** (1 分钟)
   - 项目收获
   - 未来规划

---

## 📝 需要准备的文件

### 1. 部署链接
- Vercel/Netlify 网址

### 2. 演示视频
- 录制核心功能 (3-5 分钟)

### 3. PPT 大纲
```
1. 项目介绍
2. 功能展示
3. 技术架构
4. 实现过程
5. 遇到的问题
6. 解决方案
7. 总结与展望
```

### 4. 备用方案
- 本地录屏视频
- 截图 PPT
- 项目文档

---

## ✅ 快速检查清单

部署前:
- [ ] 代码已推送到 GitHub
- [ ] README.md 完善
- [ ] .env 文件已忽略
- [ ] 前端可以正常 build

部署后:
- [ ] 网站可以访问
- [ ] 页面显示正常
- [ ] 响应式布局正常
- [ ] 加载速度快

演示前:
- [ ] 测试机房网络
- [ ] 准备备用视频
- [ ] 准备 PPT
- [ ] 准备演讲稿

---

## 🎓 作业展示建议

### 加分项:
1. ✨ 部署到云端 (可访问的 URL)
2. ✨ 演示视频 (展示 AI 功能)
3. ✨ 技术文档 (README.md)
4. ✨ 源代码 (GitHub 仓库)
5. ✨ PPT 演示文稿

### 展示要点:
1. 💡 项目创新点
2. 💡 技术难点
3. 💡 解决方案
4. 💡 学习收获

---

**祝您作业展示成功！**

如有问题，随时询问！
