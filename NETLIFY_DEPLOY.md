# Netlify 部署指南

## 方法一：通过 GitHub 仓库部署（推荐）

### 步骤 1：登录 Netlify
1. 访问 [https://app.netlify.com](https://app.netlify.com)
2. 使用 GitHub 账号登录

### 步骤 2：添加新站点
1. 点击 **"Add new site"** → **"Import an existing project"**
2. 选择 **"GitHub"**

### 步骤 3：选择仓库
1. 搜索并选择你的仓库：`codemind-ai`
2. 点击 **"Deploy site"**

### 步骤 4：配置构建设置
填写以下配置：

```
Base directory: frontend
Build command: npm run build
Publish directory: frontend/dist
```

### 步骤 5：等待部署
- Netlify 会自动开始构建
- 部署成功后会生成一个 URL（例如：`https://your-site-name.netlify.app`）

---

## 方法二：手动上传构建文件

### 步骤 1：本地构建
```bash
cd frontend
npm run build
```

### 步骤 2：登录 Netlify
1. 访问 [https://app.netlify.com](https://app.netlify.com)
2. 登录账号

### 步骤 3：创建新站点
1. 点击 **"Add new site"** → **"Deploy manually"**
2. 不需要选择模板

### 步骤 4：拖拽上传
1. 将 `frontend/dist` 文件夹拖拽到 Netlify 的上传区域
2. 等待上传完成

---

## 修改站点名称（可选）

1. 进入站点设置
2. 点击 **"Site settings"** → **"Change site name"**
3. 输入你想要的名称（例如：`codemind-ai-demo`）
4. 你的站点 URL 将是：`https://codemind-ai-demo.netlify.app`

---

## 环境变量（如果需要）

如果后端需要 API 密钥，在 Netlify 中设置：

1. **Site settings** → **Environment variables**
2. 添加变量：
   - `VITE_API_URL`: 后端 API 地址

---

## 自定义域名（可选）

1. **Site settings** → **Domain management**
2. 点击 **"Add custom domain"**
3. 按照指引配置 DNS

---

## 部署后的 URL

部署成功后，你会获得：
- **生产环境**: `https://your-site-name.netlify.app`
- **预览部署**: 每次推送都会生成预览 URL

---

## 故障排查

### 构建失败
1. 检查 `netlify.toml` 配置
2. 查看 Netlify 的部署日志
3. 确保本地 `npm run build` 成功

### 页面空白
1. 检查浏览器控制台错误
2. 确认 `base` 路径配置
3. 查看 `_redirects` 配置

### API 连接问题
1. 后端服务需要运行并可访问
2. 或者使用 Mock 数据演示

---

## 学校机房演示建议

1. **录制演示视频**作为备份
2. **准备离线版本**：下载 dist 文件夹
3. **测试网络**：确保机房可以访问 Netlify
4. **准备介绍稿**：说明项目功能和技术栈
