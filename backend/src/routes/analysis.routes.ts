import { Router } from 'express';
import { analyzeCode, explainCode, teachProgramming } from '../controllers/analysis.controller';

const router = Router();

// 代码分析路由
router.post('/analyze', analyzeCode);

// 代码解释路由
router.post('/explain', explainCode);

// AI 教学路由
router.post('/teach', teachProgramming);

// 代码补全路由（预留）
router.post('/complete', (req, res) => {
  res.json({
    success: true,
    message: '代码补全功能开发中',
    suggestions: []
  });
});

// 生成注释路由（预留）
router.post('/comment', (req, res) => {
  res.json({
    success: true,
    message: '注释生成功能开发中',
    comments: []
  });
});

export default router;
