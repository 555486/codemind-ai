import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export interface AnalysisResult {
  type: 'error' | 'warning' | 'info';
  line: number;
  message: string;
  suggestion?: string;
}

export interface AIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class AIService {
  private apiKey: string;
  private baseURL: string;

  constructor() {
    this.apiKey = process.env.DASHSCOPE_API_KEY || '';
    this.baseURL = process.env.DASHSCOPE_BASE_URL || 'https://dashscope.aliyuncs.com/api/v1';
    
    if (!this.apiKey) {
      console.warn('⚠️ DASHSCOPE_API_KEY not found in environment variables');
    } else {
      const keyType = this.apiKey.startsWith('sk-') ? 'DashScope API Key' : 'AccessKey 格式';
      console.log(`✅ DashScope API 密钥已配置 (${keyType})`);
    }
  }

  async analyzeCode(code: string, language: string): Promise<AIResponse> {
    try {
      // 检查 API 密钥是否正确配置
      if (!this.apiKey) {
        console.log('⚠️ 使用模拟分析（API 密钥未配置）');
        return this.mockAnalysis(code, language);
      }
      
      console.log('🔍 使用真实 AI 分析...');
      const prompt = this.buildAnalysisPrompt(code, language);
      const response = await this.callQwenCoder(prompt);
      
      // 解析 AI 响应
      const analysisData = this.parseAIResponse(response);
      
      return {
        success: true,
        data: analysisData
      };
    } catch (error: any) {
      console.error('AI 分析失败:', error.message);
      console.log('🔄 降级到模拟模式');
      return this.mockAnalysis(code, language);
    }
  }

  async explainCode(code: string, language: string): Promise<AIResponse> {
    try {
      if (!this.apiKey) {
        console.log('⚠️ 使用模拟解释（API 密钥未配置）');
        return this.mockExplanation(code, language);
      }
      
      console.log('🔍 使用真实 AI 解释...');
      const prompt = this.buildExplanationPrompt(code, language);
      const response = await this.callQwenCoder(prompt);
      
      return {
        success: true,
        data: { explanation: response }
      };
    } catch (error: any) {
      console.error('AI 解释失败:', error.message);
      console.log('🔄 降级到模拟模式');
      return this.mockExplanation(code, language);
    }
  }

  async teachProgramming(topic: string, level: string = 'beginner'): Promise<AIResponse> {
    try {
      if (!this.apiKey) {
        console.log('⚠️ 使用模拟教学（API 密钥未配置）');
        return this.mockTeaching(topic, level);
      }
      
      console.log('🎓 使用真实 AI 教学...');
      const prompt = this.buildTeachingPrompt(topic, level);
      const response = await this.callQwenCoder(prompt);
      
      return {
        success: true,
        data: { lesson: response }
      };
    } catch (error: any) {
      console.error('AI 教学失败:', error.message);
      console.log('🔄 降级到模拟模式');
      return this.mockTeaching(topic, level);
    }
  }

  // 解析 AI 响应为分析结果
  private parseAIResponse(content: string): any {
    try {
      // 尝试提取 JSON
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // 如果没有 JSON，返回文本格式
      return {
        issues: [
          {
            type: 'info',
            line: 1,
            message: content
          }
        ],
        suggestions: [],
        metrics: {
          lines: 1,
          characters: content.length,
          complexity: 'medium'
        }
      };
    } catch (e) {
      console.log('无法解析 AI 响应为 JSON');
      return {
        issues: [
          {
            type: 'info',
            line: 1,
            message: content
          }
        ],
        suggestions: [],
        metrics: {
          lines: 1,
          characters: content.length,
          complexity: 'medium'
        }
      };
    }
  }

  // 模拟分析响应
  private mockAnalysis(code: string, language: string): AIResponse {
    const results: AnalysisResult[] = [
      {
        type: 'info',
        line: 1,
        message: `代码分析完成（模拟模式）`,
        suggestion: '配置阿里云 API 密钥后启用真实 AI 分析'
      },
      {
        type: 'info',
        line: 1,
        message: `语言：${language}, 字符数：${code.length}`
      }
    ];

    // 根据语言添加特定建议
    if (language === 'javascript' || language === 'typescript') {
      results.push({
        type: 'warning',
        line: 1,
        message: '建议使用 const/let 代替 var',
        suggestion: '使用 const 声明不变的值，let 声明可变的值'
      });
    }

    if (language === 'python') {
      results.push({
        type: 'info',
        line: 1,
        message: 'Python 代码格式良好',
        suggestion: '考虑添加类型注解'
      });
    }

    if (language === 'cpp' || language === 'c') {
      results.push({
        type: 'warning',
        line: 1,
        message: '检查内存管理和指针使用',
        suggestion: '使用智能指针（C++）或确保释放内存'
      });
    }

    return {
      success: true,
      data: {
        issues: results,
        suggestions: [],
        metrics: {
          lines: code.split('\n').length,
          characters: code.length,
          complexity: 'low'
        }
      }
    };
  }

  // 模拟解释响应
  private mockExplanation(code: string, language: string): AIResponse {
    const explanation = `这是对代码的解释（模拟模式）。

代码语言：${language}
代码长度：${code.length}字符

功能说明：
这是一段代码，等待配置阿里云 API 密钥后，将使用 Qwen3-Coder 模型进行真实分析。

配置步骤：
1. 获取阿里云 DashScope API 密钥
2. 在 backend/.env 文件中设置 DASHSCOPE_API_KEY
3. 重启后端服务器
4. 取消 ai.service.ts 中的模拟代码注释

当前为模拟模式，仅显示示例解释。`;

    return {
      success: true,
      data: { explanation }
    };
  }

  // 模拟教学响应
  private mockTeaching(topic: string, level: string): AIResponse {
    const lesson = `教学主题：${topic}（模拟模式）

这是关于${topic}的教学内容。

配置阿里云 API 密钥后，将使用 Qwen3-Coder 模型生成真实的教学内容。

学习级别：${level}
建议学习路径：
1. 基础概念
2. 语法示例
3. 实践练习
4. 常见问题

当前为模拟模式，配置 API 密钥后启用真实 AI 教学。`;

    return {
      success: true,
      data: { lesson }
    };
  }

  // 真实 API 调用方法
  private async callQwenCoder(prompt: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error('API 密钥未配置');
    }

    try {
      console.log('📡 调用 DashScope API, model: qwen-plus (快速响应模式)');
      
      const response = await axios.post(
        `${this.baseURL}/services/aigc/text-generation/generation`,
        {
          model: 'qwen-plus',
          input: {
            messages: [
              {
                role: 'system',
                content: '你是一个专业的编程助手。请用简洁、清晰的中文回答，控制回答长度，快速响应。'
              },
              {
                role: 'user',
                content: prompt
              }
            ]
          },
          parameters: {
            result_format: 'message',
            temperature: 0.5,
            max_tokens: 1000,
            top_p: 0.8,
            enable_search: false
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('✅ DashScope API 调用成功');
      return response.data.output?.choices?.[0]?.message?.content || '未生成响应';
    } catch (error: any) {
      console.error('DashScope API 错误:', error.response?.data || error.message);
      if (error.response?.data?.code === 'InvalidApiKey') {
        console.error('❌ API Key 无效，请检查 API Key 是否正确');
      }
      throw new Error(`DashScope API 调用失败：${error.message}`);
    }
  }

  // 提示词构建方法
  private buildAnalysisPrompt(code: string, language: string): string {
    return `请分析以下${language}代码，找出错误、警告和改进建议：

\`\`\`${language}
${code}
\`\`\`

请以 JSON 格式返回结果，包含以下结构：
{
  "issues": [
    {"type": "error|warning|info", "line": 行数，"message": "描述", "suggestion": "建议"}
  ],
  "suggestions": ["优化建议 1", "优化建议 2"],
  "metrics": {
    "lines": 行数，
    "characters": 字符数，
    "complexity": "low|medium|high"
  }
}`;
  }

  private buildExplanationPrompt(code: string, language: string): string {
    return `请详细解释以下${language}代码的功能和工作原理：

\`\`\`${language}
${code}
\`\`\`

请包含：
1. 代码的主要功能
2. 关键部分的作用
3. 使用的技术或模式
4. 可能的优化建议

请用中文详细解释。`;
  }

  private buildTeachingPrompt(topic: string, level: string): string {
    return `请为${level}级别的学习者讲解编程概念"${topic}"。

请包含：
1. 概念定义（简单易懂）
2. 实际应用场景
3. 代码示例（带详细注释）
4. 最佳实践和常见错误
5. 小测验或练习题（可选）

请用清晰、生动的中文讲解，避免过于专业的术语。`;
  }
}
