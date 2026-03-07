# CodeMind AI 项目颜色配置参考

## 📋 颜色配置总览

本文档列出了项目中所有使用颜色的地方，方便统一管理和调整。

---

## 🎨 核心主题色 (global.css)

### 霓虹色系
- **Neon Blue (霓虹蓝)**: `#00d4ff` - 主色调
- **Neon Green (霓虹绿)**: `#00ff88` - 强调色
- **Neon Purple (霓虹紫)**: `#9d4edd` - 辅助色

### 文本色系
- **Text Primary (主文本)**: `#ffffff` - 白色
- **Text Secondary (次文本)**: `#e2e8f0` - 浅灰
- **Text Muted (弱文本)**: `#94a3b8` - 灰蓝色

### 状态色系
- **Error (错误)**: `#ff4757` - 红色
- **Warning (警告)**: `#ffa502` - 橙色
- **Info (信息)**: `#00d4ff` - 蓝色

### 背景色系
- **BG Gradient Start**: `#0f172a` - 深蓝灰
- **BG Gradient End**: `#1e293b` - 深蓝

### 玻璃态效果
- **Glass BG**: `rgba(30, 41, 59, 0.7)` - 半透明深蓝
- **Glass Border**: `rgba(255, 255, 255, 0.1)` - 半透明白边框

---

## 💻 Monaco 编辑器颜色 (CodeEditor.tsx)

### 编辑器主题色 'tech-dark'
```typescript
colors: {
  'editor.background': '#0f172a',                    // 编辑器背景
  'editor.lineHighlightBackground': 'rgba(0, 212, 255, 0.15)',  // 当前行高亮
  'editorCursor.foreground': '#00ff88',              // 光标颜色 (青绿色)
  'editor.selectionBackground': 'rgba(0, 212, 255, 0.3)',       // 选区背景
  'editorLineNumber.foreground': '#475569',          // 行号颜色
  'editorLineNumber.activeForeground': '#00d4ff',    // 活动行号
  'editorWhitespace.foreground': '#475569'           // 空白字符
}
```

### 语法高亮色
```typescript
rules: [
  { token: 'comment', foreground: '6a9955' },   // 注释 - 绿色
  { token: 'string', foreground: 'ce9178' },    // 字符串 - 棕色
  { token: 'number', foreground: 'b5cea8' },    // 数字 - 浅绿
  { token: 'keyword', foreground: '569cd6' },   // 关键字 - 蓝色
  { token: 'type', foreground: '4ec9b0' },      // 类型 - 青色
  { token: 'function', foreground: 'dcdcaa' },  // 函数 - 黄色
  { token: 'variable', foreground: '9cdcfe' },  // 变量 - 浅蓝
  { token: 'operator', foreground: 'd4d4d4' }   // 运算符 - 灰色
]
```

---

## 🔴 错误高亮颜色 (CodeEditor.css)

### 错误行样式
```css
.error-line {
  background: rgba(255, 71, 87, 0.25) !important;     // 红色背景 (透明度 25%)
  border-left: 3px solid rgba(255, 71, 87, 0.6);      // 红色左边框
}
```

### 警告行样式
```css
.warning-line {
  background: rgba(255, 165, 2, 0.2) !important;      // 橙色背景
  border-left: 3px solid rgba(255, 165, 2, 0.5);      // 橙色左边框
}
```

### 建议装饰器
```css
.suggestion-decoration {
  background: rgba(0, 255, 136, 0.1);                 // 绿色背景
  border-left: 3px solid #00FF88;                     // 绿色左边框
}
```

---

## 🎭 组件颜色 (MainPage.css)

### 头部
```css
.header h1 {
  color: #00d4ff;                                      // 标题蓝色
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);       // 蓝色光晕
}

.subtitle {
  color: #94a3b8;                                      // 副标题灰蓝色
}
```

### 面板背景
```css
.left-panel, .center-panel, .right-panel {
  background: rgba(30, 41, 59, 0.7);                  // 玻璃态深蓝
  border: 1px solid rgba(255, 255, 255, 0.1);        // 半透明白边框
}
```

### 滚动条
```css
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #00D4FF, #00FF88); // 蓝绿渐变
}
```

### 页脚
```css
.footer {
  color: #64748b;                                      // 页脚灰蓝色
  border-top: 1px solid rgba(255, 255, 255, 0.1);     // 半透明白边
}
```

---

## 🎨 主题文件 (dark-tech.css)

### CSS 变量定义
```css
--primary-gradient: linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%);
--success-gradient: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
--error-gradient: linear-gradient(135deg, #ff4757 0%, #ff6b81 100%);
--warning-gradient: linear-gradient(135deg, #ffa502 0%, #ff7f50 100%);

--bg-primary: #0f172a;
--bg-secondary: #1e293b;
--bg-tertiary: #334155;

--glass-bg-light: rgba(30, 41, 59, 0.5);
--glass-bg-medium: rgba(30, 41, 59, 0.7);
--glass-bg-heavy: rgba(30, 41, 59, 0.9);

--glow-border: 0 0 20px rgba(0, 212, 255, 0.3);
--glow-border-strong: 0 0 30px rgba(0, 212, 255, 0.5);
```

### 光晕效果
```css
background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
```

### 网格背景
```css
background: 
  linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
```

---

## 📝 编辑器容器 (CodeEditor.css)

### 编辑器背景
```css
.code-editor-container {
  background: #0F172A;                                 // 深蓝黑
}

.editor-header {
  background: rgba(15, 23, 42, 0.9);                  // 半透明深蓝黑
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);  // 白边框
}
```

### 语言标签
```css
.language-name {
  background: linear-gradient(90deg, #00D4FF, #00FF88); // 蓝绿渐变
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;                                   // 渐变文字
  border: 1px solid rgba(0, 212, 255, 0.3);           // 蓝色边框
}
```

### 代码统计
```css
.code-stats {
  color: #94A3B8;                                      // 灰蓝色
  background: rgba(30, 41, 59, 0.5);                  // 半透明深蓝
}
```

### 按钮
```css
.action-btn {
  background: rgba(30, 41, 59, 0.8);                  // 深蓝
  color: #F1F5F9;                                      // 浅灰白
  border: 1px solid rgba(255, 255, 255, 0.1);        // 白边框
}

.action-btn:hover {
  background: rgba(30, 41, 59, 1);                    // 纯深蓝
  border-color: #00D4FF;                              // 蓝色高亮
}
```

### 滚动条
```css
::-webkit-scrollbar-thumb {
  background: rgba(0, 212, 255, 0.3);                 // 半透明蓝
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 212, 255, 0.5);                 // 更不透明蓝
}
```

---

## 🔧 快速修改指南

### 修改错误行颜色
位置：`frontend/src/components/CodeEditor/CodeEditor.css`
```css
.error-line {
  background: rgba(255, 71, 87, 0.25) !important;  /* 改这里 */
  border-left: 3px solid rgba(255, 71, 87, 0.6);  /* 改这里 */
}
```

### 修改光标颜色
位置：`frontend/src/components/CodeEditor/CodeEditor.tsx`
```typescript
'editorCursor.foreground': '#00ff88',  /* 改这里 */
```

### 修改当前行高亮
位置：`frontend/src/components/CodeEditor/CodeEditor.tsx`
```typescript
'editor.lineHighlightBackground': 'rgba(0, 212, 255, 0.15)',  /* 改这里 */
```

### 修改主题色
位置：`frontend/src/styles/global.css`
```css
--neon-blue: #00d4ff;      /* 改这里 - 主色调 */
--neon-green: #00ff88;     /* 改这里 - 强调色 */
--neon-purple: #9d4edd;    /* 改这里 - 辅助色 */
```

---

## 📊 颜色使用统计

| 颜色 | 使用次数 | 用途 |
|------|---------|------|
| `#00d4ff` (Neon Blue) | 50+ | 主色调，标题，按钮，边框 |
| `#00ff88` (Neon Green) | 30+ | 强调色，光标，成功状态 |
| `#0f172a` (深蓝黑) | 40+ | 背景色 |
| `#1e293b` (深蓝) | 25+ | 次要背景 |
| `#94a3b8` (灰蓝) | 20+ | 次要文本 |
| `#ff4757` (红) | 10+ | 错误提示 |
| `#ffa502` (橙) | 8+ | 警告提示 |
| `#9d4edd` (紫) | 15+ | 渐变辅助色 |

---

## 💡 推荐配色方案

### 当前配置 (科技蓝主题)
- 主色：`#00d4ff` (霓虹蓝)
- 强调色：`#00ff88` (霓虹绿)
- 辅助色：`#9d4edd` (霓虹紫)
- 错误色：`#ff4757` (红色)

### 备选方案 1 (紫色主题)
- 主色：`#9d4edd` (霓虹紫)
- 强调色：`#00d4ff` (霓虹蓝)
- 辅助色：`#ff00ff` (霓虹粉)

### 备选方案 2 (绿色主题)
- 主色：`#00ff88` (霓虹绿)
- 强调色：`#00d4ff` (霓虹蓝)
- 辅助色：`#7fff00` (霓虹黄绿)

---

**最后更新**: 2026-03-07
**项目**: CodeMind AI 代码智能助手
