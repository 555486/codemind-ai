import { Request, Response } from 'express';
import { AIService } from '../services/ai.service';

const aiService = new AIService();

export const analyzeCode = async (req: Request, res: Response) => {
  try {
    const { code, language } = req.body;
    
    if (!code || !language) {
      return res.status(400).json({
        error: '缺少必要参数',
        details: '需要提供 code 和 language 参数'
      });
    }

    console.log(`分析代码请求：${language}, 长度${code.length}字符`);
    
    const result = await aiService.analyzeCode(code, language);
    
    if (!result.success) {
      return res.status(500).json({
        error: 'AI 分析失败',
        message: result.error
      });
    }

    res.json({
      success: true,
      results: result.data,
      timestamp: new Date().toISOString(),
      language: language
    });
    
  } catch (error: any) {
    console.error('控制器错误:', error);
    res.status(500).json({
      error: '服务器内部错误',
      message: error.message
    });
  }
};

export const explainCode = async (req: Request, res: Response) => {
  try {
    const { code, language } = req.body;
    
    if (!code || !language) {
      return res.status(400).json({
        error: '缺少必要参数',
        details: '需要提供 code 和 language 参数'
      });
    }

    console.log(`解释代码请求：${language}, 长度${code.length}字符`);
    
    const result = await aiService.explainCode(code, language);
    
    if (!result.success) {
      return res.status(500).json({
        error: 'AI 解释失败',
        message: result.error
      });
    }

    res.json({
      success: true,
      explanation: result.data?.explanation || '无法生成解释',
      timestamp: new Date().toISOString(),
      language: language
    });
    
  } catch (error: any) {
    console.error('控制器错误:', error);
    res.status(500).json({
      error: '服务器内部错误',
      message: error.message
    });
  }
};

export const teachProgramming = async (req: Request, res: Response) => {
  try {
    const { topic, level = 'beginner' } = req.body;
    
    if (!topic) {
      return res.status(400).json({
        error: '缺少必要参数',
        details: '需要提供 topic 参数'
      });
    }

    console.log(`AI 教学请求：${topic}, 级别${level}`);
    
    const result = await aiService.teachProgramming(topic, level);
    
    if (!result.success) {
      return res.status(500).json({
        error: 'AI 教学失败',
        message: result.error
      });
    }

    res.json({
      success: true,
      lesson: result.data?.lesson || '无法生成教学内容',
      timestamp: new Date().toISOString(),
      topic: topic,
      level: level
    });
    
  } catch (error: any) {
    console.error('控制器错误:', error);
    res.status(500).json({
      error: '服务器内部错误',
      message: error.message
    });
  }
};
