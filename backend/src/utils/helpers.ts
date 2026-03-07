/**
 * 通用工具函数
 */

/**
 * 格式化时间戳
 */
export const formatTimestamp = (timestamp: Date): string => {
  return timestamp.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

/**
 * 生成唯一 ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * 延迟执行
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 验证代码是否为空
 */
export const isValidCode = (code: string): boolean => {
  return typeof code === 'string' && code.trim().length > 0;
};

/**
 * 验证语言是否支持
 */
export const isSupportedLanguage = (language: string): boolean => {
  const supportedLanguages = [
    'c',
    'cpp',
    'javascript',
    'typescript',
    'python',
    'html',
    'css',
    'java',
    'go',
    'rust'
  ];
  return supportedLanguages.includes(language);
};

/**
 * 获取语言名称
 */
export const getLanguageName = (language: string): string => {
  const names: Record<string, string> = {
    c: 'C',
    cpp: 'C++',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    html: 'HTML',
    css: 'CSS',
    java: 'Java',
    go: 'Go',
    rust: 'Rust'
  };
  return names[language] || language;
};

/**
 * 计算代码行数
 */
export const countLines = (code: string): number => {
  return code.split('\n').length;
};

/**
 * 计算代码字符数
 */
export const countCharacters = (code: string): number => {
  return code.length;
};

/**
 * 简单的代码清理
 */
export const sanitizeCode = (code: string): string => {
  return code.trim();
};

/**
 * 日志格式化
 */
export const formatLog = (level: string, message: string, data?: any): string => {
  const timestamp = formatTimestamp(new Date());
  const dataStr = data ? ` | ${JSON.stringify(data)}` : '';
  return `[${timestamp}] [${level}] ${message}${dataStr}`;
};

/**
 * 错误处理
 */
export class AppError extends Error {
  status: number;
  
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'AppError';
    this.status = status;
  }
}
