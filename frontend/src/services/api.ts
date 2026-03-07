const API_BASE_URL = 'http://localhost:3001/api';

export interface AnalysisResult {
  type: 'error' | 'warning' | 'info';
  line: number;
  message: string;
  suggestion?: string;
}

export interface CodeSuggestion {
  id: string;
  title: string;
  description: string;
  code?: string;
}

export interface AnalyzeResponse {
  results: AnalysisResult[];
  suggestions: CodeSuggestion[];
}

export interface ExplainResponse {
  explanation: string;
}

export interface TeachResponse {
  content: string;
  examples?: string[];
}

// 分析代码
export const analyzeCode = async (
  code: string,
  language: string
): Promise<AnalyzeResponse> => {
  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, language }),
  });

  if (!response.ok) {
    throw new Error('分析失败');
  }

  return response.json();
};

// 解释代码
export const explainCode = async (
  code: string,
  language: string
): Promise<ExplainResponse> => {
  const response = await fetch(`${API_BASE_URL}/explain`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, language }),
  });

  if (!response.ok) {
    throw new Error('解释失败');
  }

  return response.json();
};

// AI 教学
export const teachMe = async (
  topic: string,
  language: string,
  level: 'beginner' | 'intermediate' | 'advanced' = 'beginner'
): Promise<TeachResponse> => {
  const response = await fetch(`${API_BASE_URL}/teach`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic, language, level }),
  });

  if (!response.ok) {
    throw new Error('教学失败');
  }

  return response.json();
};

// 健康检查
export const checkHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
};
