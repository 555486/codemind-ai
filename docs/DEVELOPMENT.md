# 开发指南

本文档提供 CodeMind AI Assistant 的开发指南，帮助你快速上手项目开发。

---

## 目录结构

```
code-mind-ai/
├── frontend/           # 前端项目
│   ├── src/
│   │   ├── components/ # React 组件
│   │   ├── pages/      # 页面组件
│   │   ├── services/   # API 服务
│   │   ├── styles/     # 样式文件
│   │   ├── utils/      # 工具函数
│   │   ├── App.tsx     # 应用根组件
│   │   └── main.tsx    # 应用入口
│   ├── public/         # 静态资源
│   ├── index.html      # HTML 模板
│   ├── package.json    # 前端依赖
│   ├── tsconfig.json   # TypeScript 配置
│   └── vite.config.ts  # Vite 配置
├── backend/            # 后端项目
│   ├── src/
│   │   ├── controllers/# 控制器
│   │   ├── routes/     # 路由
│   │   ├── services/   # 业务逻辑
│   │   ├── utils/      # 工具函数
│   │   └── app.ts      # 应用入口
│   ├── .env            # 环境变量
│   ├── package.json    # 后端依赖
│   └── tsconfig.json   # TypeScript 配置
└── docs/               # 文档
```

---

## 开发环境设置

### 1. 安装依赖

**前端:**
```bash
cd frontend
npm install
```

**后端:**
```bash
cd backend
npm install
```

### 2. 配置环境变量

在 `backend/.env` 文件中配置:
```env
OPENAI_API_KEY=your_api_key
PORT=3001
NODE_ENV=development
```

### 3. 启动开发服务器

**后端 (终端 1):**
```bash
cd backend
npm run dev
```

**前端 (终端 2):**
```bash
cd frontend
npm run dev
```

### 4. 访问应用

浏览器打开: `http://localhost:3000`

---

## 代码规范

### TypeScript

- 使用 TypeScript 严格模式
- 所有公开 API 必须有类型定义
- 避免使用 `any`，使用明确的类型

### 命名规范

**文件/文件夹:**
- 组件：PascalCase (e.g., `MainPage.tsx`)
- 工具函数：camelCase (e.g., `helpers.ts`)
- 样式文件：与组件同名 (e.g., `MainPage.css`)

**变量/函数:**
- 变量：camelCase
- 常量：UPPER_SNAKE_CASE
- 函数：camelCase
- 组件：PascalCase
- 类型/接口：PascalCase

### 代码组织

**组件结构:**
```typescript
import { useState } from 'react';
import './Component.css';

interface Props {
  // 属性定义
}

function Component({ prop }: Props) {
  // 1. Hooks
  const [state, setState] = useState();
  
  // 2. 事件处理
  const handleClick = () => {};
  
  // 3. 渲染
  return <div>...</div>;
}

export default Component;
```

---

## 添加新功能

### 1. 添加新组件

**创建文件:** `src/components/NewComponent/NewComponent.tsx`

```typescript
import './NewComponent.css';

interface NewComponentProps {
  // 属性定义
}

function NewComponent(props: NewComponentProps) {
  return <div className="new-component">...</div>;
}

export default NewComponent;
```

**创建样式:** `src/components/NewComponent/NewComponent.css`

```css
.new-component {
  /* 样式 */
}
```

### 2. 添加新 API 端点

**创建路由:** `backend/src/routes/newFeature.ts`

```typescript
import { Router } from 'express';
import { newFeatureController } from '../controllers/newFeatureController.js';

export const newFeatureRoutes = Router();

newFeatureRoutes.post('/', newFeatureController);

export default newFeatureRoutes;
```

**创建控制器:** `backend/src/controllers/newFeatureController.ts`

```typescript
import { Request, Response } from 'express';

export const newFeatureController = async (req: Request, res: Response) => {
  try {
    // 业务逻辑
    res.json({ result: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'Failed' });
  }
};
```

**注册路由:** `backend/src/app.ts`

```typescript
import { newFeatureRoutes } from './routes/newFeature.js';

app.use('/api/new-feature', newFeatureRoutes);
```

---

## 测试

### 运行测试

```bash
# 前端测试
cd frontend
npm test

# 后端测试
cd backend
npm test
```

### 编写测试

**组件测试示例:**
```typescript
import { render, screen } from '@testing-library/react';
import Component from './Component';

test('renders component', () => {
  render(<Component />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

---

## 构建和部署

### 构建前端

```bash
cd frontend
npm run build
```

构建输出在 `frontend/dist/` 目录。

### 构建后端

```bash
cd backend
npm run build
```

构建输出在 `backend/dist/` 目录。

### 生产部署

1. 构建前端和后端
2. 配置生产环境变量
3. 使用 PM2 或其他进程管理器启动后端
4. 配置 Nginx 或 CDN 服务前端静态文件

---

## 常见问题

### Q: 如何调试？

**前端:**
- 使用浏览器开发者工具
- 使用 React Developer Tools 扩展
- 在 VS Code 中配置调试

**后端:**
```bash
# 使用调试模式
node --inspect dist/app.js
```

### Q: 如何添加新的编程语言支持？

1. 在前端 `utils/language.ts` 中添加语言配置
2. 在后端服务中添加对应语言的 AI 提示
3. 更新 Monaco Editor 的语言支持

### Q: 如何集成真实的 AI API？

在 `backend/src/services/` 中的服务文件里:

```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const analyzeCodeService = async (code: string, language: string) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: '你是一个代码分析专家'
      },
      {
        role: 'user',
        content: `分析这段${language}代码：${code}`
      }
    ]
  });
  
  return {
    results: parseResults(response.choices[0].message.content)
  };
};
```

---

## 性能优化

### 前端优化

1. **代码分割:** 使用动态导入
2. **图片优化:** 使用 WebP 格式
3. **缓存:** 使用 React.memo 和 useMemo
4. **懒加载:** 延迟加载非关键组件

### 后端优化

1. **缓存:** 使用 Redis 缓存频繁请求
2. **数据库:** 添加索引优化查询
3. **压缩:** 启用 Gzip 压缩
4. **CDN:** 使用 CDN 分发静态资源

---

## 安全建议

1. **环境变量:** 永远不要提交 .env 文件
2. **API 密钥:** 使用环境变量存储
3. **输入验证:** 验证所有用户输入
4. **速率限制:** 防止滥用 API
5. **CORS:** 正确配置跨域策略

---

## 资源链接

- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Express 文档](https://expressjs.com/)
- [Monaco Editor 文档](https://microsoft.github.io/monaco-editor/)
- [Vite 文档](https://vitejs.dev/)

---

## 贡献

欢迎贡献代码！请查看 [贡献指南](../CONTRIBUTING.md) 了解详细信息。
