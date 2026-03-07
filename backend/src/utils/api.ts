import axios from 'axios';

const DASHSCOPE_API_KEY = process.env.DASHSCOPE_API_KEY;
const DASHSCOPE_BASE_URL = process.env.DASHSCOPE_BASE_URL || 'https://dashscope.aliyuncs.com/api/v1';

export const callDashScopeAPI = async (prompt: string, model: string = 'qwen-plus') => {
  if (!DASHSCOPE_API_KEY) {
    throw new Error('DashScope API key not configured');
  }

  try {
    const response = await axios.post(
      `${DASHSCOPE_BASE_URL}/services/aigc/text-generation/generation`,
      {
        model,
        input: {
          messages: [
            {
              role: 'system',
              content: '你是一个专业的编程助手，擅长代码分析、解释和教学。请用清晰、简洁的中文回答。'
            },
            {
              role: 'user',
              content: prompt
            }
          ]
        },
        parameters: {
          result_format: 'message',
          temperature: 0.7,
          max_tokens: 2000
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${DASHSCOPE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.output?.choices?.[0]?.message?.content || '未生成响应';
  } catch (error: any) {
    console.error('DashScope API error:', error.response?.data || error.message);
    throw new Error(`DashScope API 调用失败：${error.message}`);
  }
};
