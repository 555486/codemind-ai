/**
 * 代码语言工具函数
 */

export const languages = [
  { value: 'c', label: 'C', icon: 'c', extension: '.c' },
  { value: 'cpp', label: 'C++', icon: 'cpp', extension: '.cpp' },
  { value: 'javascript', label: 'JavaScript', icon: 'js', extension: '.js' },
  { value: 'typescript', label: 'TypeScript', icon: 'ts', extension: '.ts' },
  { value: 'python', label: 'Python', icon: 'py', extension: '.py' },
  { value: 'html', label: 'HTML', icon: 'html', extension: '.html' },
  { value: 'css', label: 'CSS', icon: 'css', extension: '.css' },
  { value: 'java', label: 'Java', icon: 'java', extension: '.java' },
  { value: 'go', label: 'Go', icon: 'go', extension: '.go' },
  { value: 'rust', label: 'Rust', icon: 'rust', extension: '.rs' }
];

export const getLanguageByValue = (value: string) => {
  return languages.find(lang => lang.value === value);
};

export const getLanguageByExtension = (extension: string) => {
  return languages.find(lang => lang.extension === extension);
};

export const getMonacoLanguage = (language: string): string => {
  const mapping: Record<string, string> = {
    c: 'c',
    cpp: 'cpp',
    javascript: 'javascript',
    typescript: 'typescript',
    python: 'python',
    html: 'html',
    css: 'css',
    java: 'java',
    go: 'go',
    rust: 'rust'
  };
  return mapping[language] || 'plaintext';
};

export const formatCode = (code: string): string => {
  // 简单的代码格式化逻辑
  // 实际项目中可以使用 prettier 等工具
  return code.trim();
};

export const getLineCount = (code: string): number => {
  return code.split('\n').length;
};

export const getColumnCount = (code: string): number => {
  const lines = code.split('\n');
  return Math.max(...lines.map(line => line.length));
};
