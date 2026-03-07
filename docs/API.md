# CodeMind AI API 文档

## 概述

CodeMind AI 提供了一套完整的 RESTful API，用于代码分析、解释和教学功能。

**基础 URL:** `http://localhost:3001/api`

---

## 认证

当前版本不需要认证，但建议在生产环境中添加 API 密钥认证。

---

## 端点

### 1. 健康检查

检查 API 服务是否正常运行。

**端点:** `GET /health`

**响应示例:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "service": "CodeMind AI Backend"
}
```

---

### 2. 代码分析

分析代码中的错误、警告和改进建议。

**端点:** `POST /analyze`

**请求体:**
```json
{
  "code": "function hello() { console.log('Hello'); }",
  "language": "javascript"
}
```

**参数说明:**
- `code` (string, 必需): 要分析的代码
- `language` (string, 必需): 编程语言 (javascript, typescript, python, java, cpp, c, go, rust, html, css)

**成功响应 (200):**
```json
{
  "results": [
    {
      "type": "info",
      "line": 1,
      "message": "发现 console.log 语句",
      "suggestion": "生产环境应该移除或使用正式的日志库"
    }
  ],
  "suggestions": [
    {
      "id": "1",
      "title": "代码优化建议",
      "description": "考虑将长函数拆分为更小的函数",
      "code": "function helper() { ... }"
    }
  ]
}
```

**错误响应:**
```json
{
  "error": "无效请求",
  "message": "请提供有效的代码"
}
```

---

### 3. 代码解释

使用 AI 详细解释代码的功能和工作原理。

**端点:** `POST /explain`

**请求体:**
```json
{
  "code": "function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }",
  "language": "javascript"
}
```

**参数说明:**
- `code` (string, 必需): 要解释的代码
- `language` (string, 必需): 编程语言

**成功响应 (200):**
```json
{
  "explanation": "## 代码解释\n\n这是一个递归函数，用于计算阶乘...\n\n### 工作原理\n1. 基础情况：当 n <= 1 时返回 1\n2. 递归情况：返回 n * factorial(n-1)\n\n### 示例\nfactorial(5) = 5 * 4 * 3 * 2 * 1 = 120"
}
```

---

### 4. AI 教学

根据主题提供个性化的学习内容和示例。

**端点:** `POST /teach`

**请求体:**
```json
{
  "topic": "闭包",
  "language": "javascript",
  "level": "beginner"
}
```

**参数说明:**
- `topic` (string, 必需): 学习主题
- `language` (string, 可选): 编程语言
- `level` (string, 可选): 学习级别 (beginner, intermediate, advanced)，默认为 beginner

**成功响应 (200):**
```json
{
  "content": "# 闭包 - 入门教程\n\n## 什么是闭包？\n\n闭包是指函数能够访问其外部作用域中的变量...\n\n## 示例\n```javascript\nfunction outer() {\n  const count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\n```\n",
  "examples": [
    "// 示例 1: 基础闭包\nfunction counter() { ... }",
    "// 示例 2: 实际应用\nfunction createAdder(x) { ... }"
  ]
}
```

---

## 错误处理

### HTTP 状态码

- `200 OK` - 请求成功
- `400 Bad Request` - 请求参数错误
- `429 Too Many Requests` - 请求过于频繁
- `500 Internal Server Error` - 服务器内部错误

### 错误响应格式

```json
{
  "error": "错误类型",
  "message": "详细的错误信息"
}
```

---

## 速率限制

- 每 15 分钟最多 100 个请求
- 超过限制将返回 429 错误

**响应头:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1704067200
```

---

## 最佳实践

### 1. 错误处理
```javascript
try {
  const response = await fetch('http://localhost:3001/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, language })
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('分析失败:', error);
}
```

### 2. 重试机制
```javascript
async function analyzeWithRetry(code, language, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await analyzeCode(code, language);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

---

## 示例代码

### JavaScript/Node.js
```javascript
const analyzeCode = async (code, language) => {
  const response = await fetch('http://localhost:3001/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, language })
  });
  return response.json();
};

// 使用示例
analyzeCode('console.log("Hello")', 'javascript')
  .then(result => console.log(result));
```

### Python
```python
import requests

def analyze_code(code, language):
    url = 'http://localhost:3001/api/analyze'
    data = {'code': code, 'language': language}
    response = requests.post(url, json=data)
    return response.json()

# 使用示例
result = analyze_code('print("Hello")', 'python')
print(result)
```

### cURL
```bash
curl -X POST http://localhost:3001/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"code":"console.log(\"Hello\")","language":"javascript"}'
```

---

## 更新日志

### v0.0.1 (2024-01-01)
- 初始版本发布
- 支持代码分析、解释和教学功能
- 支持 10 种编程语言

---

## 支持与反馈

如有问题或建议，请通过以下方式联系:
- GitHub Issues: https://github.com/yourusername/code-mind-ai/issues
- Email: support@codemind.ai
